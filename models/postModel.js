const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    post_title: {
        type: String,
        required: true
    },
    post_body: {
        type: String
    },
    post_createdAt: {
        type: Date,
        default: Date.now
    },
    post_category: {
        type: String,
        required: true
    },
    // post_uploadImages: {
    //     type: Array
    // }
    post_contentState: {
        
    },
    editorState:{
        
    }
});

module.exports = mongoose.model('Post', Post); 