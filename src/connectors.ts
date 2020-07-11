const Queue = require("bull");

export const pullStory = new Queue("pullStory", 'redis://192.168.178.54:6379');