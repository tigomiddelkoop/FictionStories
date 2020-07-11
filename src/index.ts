import * as cluster from "cluster";
import bootWorker from "./worker/bootWorker";

const Queue = require("bull");

let numWorkers = 2;
let pullStory = new Queue("pullStory", "redis://192.168.178.54:6379", {});

if (cluster.isMaster) {
    for (let i = 0; i < numWorkers; i++) cluster.fork();


    cluster.on('online', function (worker) {
        console.log(`Worker ${worker.id} is online and connected`);
    });

    cluster.on('disconnect', function (worker) {
        console.log(`Worker ${worker.id} disconnected`);
    })

    cluster.on('exit', function (worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' exited or died');
    });

    pullStory.clean(100);

    pullStory.add({id: "4112682"});
    pullStory.add({id: "9366635"});

} else bootWorker();


