const app = require('./app');
require('dotenv').config()
require('./configs/db');

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});