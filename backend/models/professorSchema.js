const mongoose = require("mongoose");

const professorSchema = new mongoose.Schema({
  universityId: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  teacherId: { type: String, required: true },
  name: { type: String, required: true },
  signPhoto: { type: String, required: true },
  profilePhoto: { type: String, required: true },
  qualification: { type: String, required: true },
  expertise: [{ type: String, required: true }],
  experience: { type: String, required: true },
  portfolioURL: { type: String, required: true },
  students: [{ type: String }],
});

const Professor = mongoose.model("Professor", professorSchema);

module.exports = Professor;
