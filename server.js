const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

dotenv.config({ path: '.env.local' });

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});