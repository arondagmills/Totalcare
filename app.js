const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/db");
const passport = require("passport");

const expressSession = require("express-session")({
	secret: "arondag",
	resave: false,
	saveUninitialized: false,
});

