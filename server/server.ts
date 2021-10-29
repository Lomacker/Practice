import express from "express";
import next from "next";
import { Sequelize } from "sequelize";

import bodyParser from "body-parser";

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const sequelize = new Sequelize('librarydb', 'root', 'qwerty',
  {
    host: 'localhost',
    dialect: 'mysql'
  });

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
};

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json())

  
  server.post('/api/users', function (req, res) {
    return res.json({
      name: 'Hello World 1' 
    });
  });

  
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
});





export default {};
