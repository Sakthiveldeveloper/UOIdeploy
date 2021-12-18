const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT||9905;

app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res) => {
    res.send('build/index.html')
});

app.listen(port);

  if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}