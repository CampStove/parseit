const express = require('express');
const app = express();
app.use(express.static('resume.txt'));
app.listen(8081, () => console.log('listening on port 8081'));
