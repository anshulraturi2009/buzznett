const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(`Received login: ${username}, ${password}`);
  res.send('Login received!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});