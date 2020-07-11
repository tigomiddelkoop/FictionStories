import getChapterAmount from "../functions/getChapterAmount";
import {parse} from "node-html-parser";
import getTitle from "../functions/getTitle";
import getWords from "../functions/getWords";
import getStoryContent from "../functions/getStoryContent";
import fetch from "node-fetch";


export default async function getStory(job, jobDone) {
    const {id} = job.data;

    const storyUrl = `https://www.fanfiction.net/s/${encodeURIComponent(id)}`;

// Get first chapter and the rest of the information about the story
    console.time("chapter1");

    await fetch(storyUrl, {
        method: "GET"
    }).then(response => response.text().then(
        async data => {

            const chapterCount: number = getChapterAmount(data);
            const html: any = parse(data, {script: false});
            const title: string = getTitle(html);
            const words: string | number = getWords(data);


            let story: Story = {
                title: title,
                wordCount: words,
                chapterCount: chapterCount,
                author: "",
                storyIdentifier: parseInt(id),
                storyUrl,
                chapters: []

            };

            console.log(story)

            story.chapters.push(getStoryContent(html, 1));

            console.timeEnd("chapter1");

            const delay = 1000;
            const test = [];

            for (let i = 2; i <= chapterCount; i++) {
                test.push({chapter: i});
            }
            console.log(test)

            for (let index in test) {
                if (test.hasOwnProperty(index)) {
                    await setTimeout(async () => {

                        console.time("chapter" + test[index].chapter)

                        const response = await fetch(storyUrl + `/${test[index].chapter}`, {
                            method: "GET"
                        })

                        const data = await response.text();

                        const html: any = parse(data, {script: false});
                        story.chapters.push(getStoryContent(html, test[index].chapter))
                        
                        console.timeEnd("chapter" + test[index].chapter)
                    }, delay);
                }
            }

            jobDone();
        })
    );
}