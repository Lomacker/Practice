import express from "express";
import next from "next";
import { Sequelize } from "sequelize";

import bodyParser from "body-parser";

import User from "./models/Users";
import Order from "./models/Orders";
import Book from "./models/Books";

import UserRoute from "./routes/UserRoute";
import OrderRoute from "./routes/OrderRoute";
import BookRoute from "./routes/BookRoute";

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

  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  
  server.use('/api/users', UserRoute);
  server.use('/api/orders', OrderRoute);
  //server.use('/api/books', BookRoute);

  /*server.get('/api/users', function (req, res) {
    console.log("dfgdfgdfg");
    return User.findOne({
      where : { role : "READER" },
      include: [{
        model: Order,
        as: 'orders',
        include:[
          {model: Book,
            as: 'books',}
        ],
      }],
    }).then(data => {
      return res.json(data);
    }).catch(err => {
      res.status(401).json({error: 'Could not get user list'});
    });
  });*/

  
  server.all('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  });
});

export default {};
