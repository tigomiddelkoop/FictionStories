export default function getStoryContent(html: any, chapterNumber?: number | undefined | null): Chapter {
    if (chapterNumber == null) chapterNumber = null;

    let chapter: Chapter = {
        chapter: chapterNumber,
        chapterName: "",
        content: ""

    }

    chapter.content = html.querySelector("#storytext").innerHTML;

    return chapter;


}