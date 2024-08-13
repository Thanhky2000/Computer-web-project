// const express = require('express');
import express from "express";
// const cookieParser = require('cookie-parser');
import cookieParser from "cookie-parser";
// const cors = require('cors');
import cors from "cors"
// const morgan = require('morgan');
import morgan from "morgan";
// const path = require('path');
import path from "path";
// const swaggerUi = require('swagger-ui-express');
import swaggerUiExpress from "swagger-ui-express";
// const swaggerDocument = require('./swagger.json');
import pg from "pg";




const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/src/build")));

const dev = app.get("env") !== "production";


app.use('/apis/admin', adminApi);