const express = require('express');  
const app = express();
const path = require('path');  
  
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../client')));



// Define routes for each page  
app.get('/', (req, res) => {
  res.sendFile('home.html', { root: path.join(__dirname, '../client') });
})
  
app.get('/resume', (req, res) => {
  res.sendFile('resume.html', { root: path.join('./client') });
})
  
app.get('/projects', (req, res) => {
  res.sendFile('projects.html', { root: path.join('./client') });
})
  
app.get('/contact', (req, res) => {
  res.sendFile('contact.html', { root: path.join('./client') });
})
  
// Start the server on port 9000  
const port = 9000;  
app.listen(port, () => {  
  console.log(`Server started on port ${port}`);  
});  
