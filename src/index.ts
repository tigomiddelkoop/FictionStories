import * as cluster from "cluster";
import bootWorker from "./worker/bootWorker";
import {boot} from "./master/index";
import * as config from "./master/config";

const Queue = require("bull");

let numWorkers = 2;
let pullStory = new Queue("pullStory", "redis://192.168.178.54:6379", {});

if (cluster.isMaster) {
    for (let i = 0; i < numWorkers; i++) cluster.fork();

    boot().then(() => {
        console.log(
            `---
    
    🚀 FictionStories has been booted and is ready for action.
    
    🚀 FictionStories is reachable on the following URIs:
        🌐 GraphQL Requests: http(s)://${config.http.host}:${config.http.port}/manage
        🌐 GraphQL Subscriptions: ws(s)://${config.http.host}:${config.http.port}/manage
    
        🌐 REST Requests: http(s)://${config.http.host}:${config.http.port}
    
---`);
    });


} else {
    bootWorker();
}


// pullStory.clean(100);
//
// pullStory.add({id: "4112682"});
// pullStory.add({id: "9366635"});
