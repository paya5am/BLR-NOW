const router = require('express').Router();
const { createEvent, getEventsNear } = require('../controllers/event.controller');
const auth = require('../middleware/auth.middleware');

// POST /api/events - Create a new event
// We add 'auth' middleware here to protect the route
router.post('/', auth, createEvent);

// GET /api/events - Get events (publicly viewable)
router.get('/', getEventsNear);

module.exports = router;