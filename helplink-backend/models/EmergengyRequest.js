const mongoose = require('mongoose');

const EmergencyRequestSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'resolved'], default: 'pending' },
  responder: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('EmergencyRequest', EmergencyRequestSchema);
