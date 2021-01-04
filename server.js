const express = require('express');
const app = express();
app.use(express.static('./dist/treasure2020'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/treasure2020/'});
});
app.listen(process.env.PORT || 8080);
