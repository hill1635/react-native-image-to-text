const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes/index.js');

dotenv.config({ path: '.env.local' });

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});