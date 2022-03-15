const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const { ObjectId } = require("mongodb");
require("dotenv").config();
const { MongoClient } = require("mongodb");
//const uri = DB user