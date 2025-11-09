const Event = require('../models/event.model');

exports.createEvent = async (req, res) => {
  try {
    const { title, description, category, date, latitude, longitude } = req.body;

    const newEvent = new Event({
      title,
      description,
      category,
      date,
      author: req.user, // Get the user ID from the 'auth' middleware
      location: {
        type: 'Point',
        coordinates: [longitude, latitude], // [lng, lat]
      },
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get events (no change here)
exports.getEventsNear = async (req, res) => {
  try {
    const { lng, lat } = req.query; 

    if (!lng || !lat) {
      const events = await Event.find().sort({ date: 1 });
      return res.status(200).json(events);
    }

    const maxDistance = 5000; 

    const events = await Event.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: maxDistance,
        },
      },
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};