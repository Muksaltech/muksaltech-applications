const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/form-user', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('✅ MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('❌ MongoDB connection error:', error);
    });