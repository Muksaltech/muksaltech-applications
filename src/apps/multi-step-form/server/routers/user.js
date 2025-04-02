const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();

// POST /register
router.post('/register', async (req, res) => {
    try {
        const { user_email, user_password } = req.body;

        if (!user_email || !user_password) {
            return res.status(400).json({ error: 'Email and password are required.' });
        }

        const existingUser = await User.findOne({ user_email });
        if (existingUser) {
            return res.status(409).json({ error: 'Email is already registered.' });
        }

        const hashedPassword = await bcrypt.hash(user_password, 8);
        const user = new User({
            ...req.body,
            user_password: hashedPassword,
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

module.exports = router;
