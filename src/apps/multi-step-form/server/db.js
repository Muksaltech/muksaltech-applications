

const mongoose = require('mongoose');
const uri = 'mongodb://cmovieconf:6PPIHgN9D9OldZnw@cluster0-shard-00-00.abcde.mongodb.net:27017,...'; // non-srv URI


mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log('MongoDB connected!');
}).catch(err => {
    console.error('Connection error', err);
});