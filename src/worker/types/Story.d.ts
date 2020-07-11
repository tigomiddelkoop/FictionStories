declare interface Story {
    title: string,
    wordCount: number,
    chapterCount: number,
    author: string,
    storyIdentifier: number,
    storyUrl: string,

    chapters: Array<Chapter>
}
