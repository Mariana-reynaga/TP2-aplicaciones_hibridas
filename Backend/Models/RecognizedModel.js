const mongoose = require('mongoose');
const schema = mongoose.Schema;

const recognizedSchema = new schema({
    name:{
        type: String,
        required: true
    },
    origin:{
        type: String,
        required: true
    },
    coat_length:{
        type: String,
        enum: ['short', 'long', 'bald'],
        default: 'short',
        required: true
    },
    possible_color:{
        type: String,
        enum: ['white', 'black', 'ginger', 'tabby', 'blue', 'brown', 'calico', 'rosette', 'none'],
        default: 'white',
        required: true
    },
    img_url:{
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
    },
    created_at:{
        type: Date,
        default: Date.now
    },
});

const Recognized = mongoose.model('Recognized', recognizedSchema);

module.exports = Recognized;