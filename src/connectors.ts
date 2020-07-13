import express from "express";
import * as Queue from "bull"
import * as http from "http";
import * as https from "https";
import * as ArangoJS from "arangojs";

// Create the Express app and tell it to use JSON and such
export const app = express();
app.use(express.json());

// Configure authentication routes

// Create the HTTP & HTTPS Servers
export const httpServer: http.Server = http.createServer(app);
export const httpsServer: https.Server = https.createServer(app);

// Create the Queue for the job processing
export const pullStory = new Queue("saveStory", 'redis://192.168.178.54:6379');