const express = require("express")

const app = express();

const port = 3000

const router = require('./Router/index.js')

router(app,express);

app.listen(port, () => {
  console.log('Server running.');
})