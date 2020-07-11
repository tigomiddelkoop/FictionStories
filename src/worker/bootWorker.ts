import {DoneCallback, Job} from "bull";
import getStory from "./jobs/getStory";
import {pullStory} from "../connectors";

export default function bootWorker() {

    pullStory.process(async (job: Job, done: DoneCallback) => getStory(job, done));

}