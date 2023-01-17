const mongoose = require("mongoose");
const controller = require("")

const studentShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Debes poner el nombre del estudiante"],
    },

    surname: {
      type: String,
      required: [true, "Debes poner los apellidos estudiante"],
    },

    dateOfBirth: {
      date: Date,
      required: true,
    },

    contactEmail: {
      type: String,
      required: true,
      unique: true,
    },

    placeWhereLive: {
      type: String,
    },

    studies: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("students", studentSchema);
module.exports = Student;
