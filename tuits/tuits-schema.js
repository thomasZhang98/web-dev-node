import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    comments: Number,
    retuits: Number,
    likes: Number,
    dislikes: Number,
    "avatar-image": String,
    postedBy: {
        username: String
    }
}, {collection: 'tuits'});

export default schema;