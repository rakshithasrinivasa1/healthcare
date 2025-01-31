const EmergencyRequest = require('../models/EmergencyRequest');

// Create Emergency Request
exports.createEmergencyRequest = async (req, res) => {
  const { description, location } = req.body;
  try {
    const emergencyRequest = await EmergencyRequest.create({ patient: req.user.id, description, location });
    res.status(201).json({ emergencyRequest });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Emergency Requests
exports.getEmergencyRequests = async (req, res) => {
  try {
    const emergencyRequests = await EmergencyRequest.find().populate('patient').populate('responder');
    res.json({ emergencyRequests });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
