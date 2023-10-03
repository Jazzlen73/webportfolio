const express = require('express');
const router = express.Router();

// Define routes for different pages

// Home Page
router.get('/', (req, res) => {
  res.render('index');
});

// About Me Page
router.get('/about', (req, res) => {
  res.render('about');
});

// Projects Page
router.get('/projects', (req, res) => {
  // Fetch project data and render 'projects' template
  res.render('projects');
});

// Services Page
router.get('/services', (req, res) => {
  // Fetch service data and render 'services' template
  res.render('services');
});

// Contact Page
router.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = router;
