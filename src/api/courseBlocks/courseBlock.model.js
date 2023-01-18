const mongoose = require('mongoose');

const courseBlockSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: [true, 'Debes especificar un nombre para el bloque '],
        unique: true,
    },

    description:{
        type: String,
    },

    teacher:{
        type: mongoose.Types.ObjectId,
        ref:"teachers",
    },

    secondTeacher: {
        type: mongoose.Types.ObjectId,
        ref:"teachers",
    },
    // numero de horas que dura el modulo
    duration:{
        type: Number,
    },

    content: {
        type: String,

    },

},

{

    timestamps: true,

}
);


const CourseBlock = mongoose.model('course_blocks', courseBlockSchema);
module.exports = CourseBlock;