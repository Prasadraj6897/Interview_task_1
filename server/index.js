import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from "mongoose"

import indexRouter from './Routers/IndexRouter/IndexRouter.js'




const app = express();

dotenv.config();

//for passing data from client to server we need bodyparser
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));

app.use(cors());
app.options('*', cors());
app.set('port', process.env.PORT || 5000);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use('/', indexRouter);


const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
    console.log("someone connected and socket id " + socket.id);

    socket.on("disconnect", () => {
      console.log(`${socket.id} disconnected`);
    });

});

httpServer.listen(process.env.PORT, () => {
  console.log(`Server connected to port ${process.env.PORT}` );
})
