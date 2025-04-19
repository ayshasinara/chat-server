const express = require('express');
const cors = require('cors');
const { marked } = require('marked');

const app = express();
app.use(cors());
app.use(express.json());

// server.js or index.js
app.get('/ping', (req, res) => {
  
  res.send('pong');
});

app.post('/convert', (req, res) => {
  const { markdown } = req.body;
  console.log(markdown,"sdasdas")
  const html = marked(markdown || '');
  res.json({ html });
});

app.listen(3001, () => console.log('Markdown server running on port 3001'));
