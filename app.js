const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configure EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Import the router
const router = require('./router');

app.use((req, res, next) => {
  res.locals.isActive = function (url) {
    return url === req.originalUrl ? 'menu-active' : '';
  };
  next();
});
// Use the router for all routes
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
