const express = require('express');
const os = require('os');
const app = express();
//require('dotenv').config();

const port = 9002;
const VERSION=process.env.VERSION || 'nothing';
app.get('/', (req, res) => {
  const ipAddress = req.ip.replace('::ffff:','');
  const data = new Date();
  let day = data.getDay();
  let month = data.getMonth();
  let year = data.getFullYear();
  res.send(`Emilia Drabik <br>
            Adres IP serwera: ${ipAddress}<br>
            Nazwa serwera: ${os.hostname()}<br>
            Data" ${day}-${month}-${year}<br>
          `);
});

app.listen(port, () => {
  console.log(`Aplikacja jest dostępna pod adresem http://localhost:${port}`);
});
