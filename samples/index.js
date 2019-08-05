const directline = require("../dist/bridge");
const express = require("express");

const app = express();
directline.initializeRoutes(app, 3000 , "http://localhost:3978/api/messages");

