//contiene el modelo de datos que se va a utilizar en la DB
const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema ({
    title:{type: String, required: true},
    description: { type: String, require: true}
});

module.exports = mongoose.model('Task',TaskSchema);