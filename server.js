const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ msg: "Hello from Express API for demotext1!" });
});

app.listen(5000, () => console.log('Server running on port 5000'));

// Libraries required: express, cors
