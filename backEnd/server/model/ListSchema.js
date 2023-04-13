const mongoose = require('mongoose');
const schema = mongoose.Schema;

const listSchema = new schema({
    name:{ type: String, required: true },
    dateCreated:Date ,
    url:{ type: String, required: true },
    category:String,
    icon:String
})


const list = mongoose.model('list', listSchema);
module.exports = list;


