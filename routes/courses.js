const express = require('express');

const {
    getCourses,
} = require('../controllers/CoursesController');
                            // Merge the params with the Bootcamp
const router = express.Router({mergeParams:true});

router
    .route('/')
    .get(getCourses)

module.exports = router;