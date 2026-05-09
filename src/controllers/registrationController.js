const Registration = require("../models/registrationModel");
const Event = require("../models/eventModel");

// REGISTER
const registerForEvent = async (req, res) => {
  try {
    const userId = req.user.id;
    const eventId = req.params.id;

    // check event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // prevent duplicate registration
    const existing = await Registration.findOne({
      user: userId,
      event: eventId,
    });

    if (existing) {
      return res.status(400).json({ message: "Already registered" });
    }

    const registration = await Registration.create({
      user: userId,
      event: eventId,
    });

    res.status(201).json({
      message: "Registered successfully",
      registration,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Cancel Registration
const cancelRegistration = async (req, res) => {
  try {
    const userId = req.user.id;
    const eventId = req.params.id;

    const registration = await Registration.findOne({
      user: userId,
      event: eventId,
    });

    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }

    registration.status = "cancelled";
    await registration.save();

    res.status(200).json({
      message: "Registration cancelled",
      registration,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get my registrations
const getMyRegistrations = async (req, res) => {
  try {
    const userId = req.user.id;

    const registrations = await Registration.find({ user: userId })
      .populate("event")
      .populate("user", "name email");

    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerForEvent,
  cancelRegistration,
  getMyRegistrations,
};