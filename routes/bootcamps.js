const express = require('express');
const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcampsInRadius
} = require('../controllers/BootcampController');

// Include other resource routers
const courseRouter = require('./courses');


// Routes goes from
// /api/v1/bootcamps ->

const router = express.Router();

// Re-route into other resource routers
router.use('/:bootcampId/courses',courseRouter);

router
    .route('/radius/:zipcode/:distance')
    .get(getBootcampsInRadius);


router.route('/')
    .get(getBootcamps)
    .post(createBootcamp);

router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);

module.exports = router;