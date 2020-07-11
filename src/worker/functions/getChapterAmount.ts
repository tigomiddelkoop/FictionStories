// Used to find the chapter amount on the page. There are no pointers for us to use these. Instead we'll need to use regexs
const ChapterRegExp: RegExp = /(Chapters: \d+(\.\d)*)/i

// Used to extract numbers from a string.
const NumberRegExp: RegExp = /\d+(\.\d)*/;

export default function getChapterAmount(data: any): number  {

    const chapters: any = data.match(ChapterRegExp); // Get the chapter string from the whole story

    if (chapters == null) return 0; // If the chapters match above comes back as null, we'll assume it has none

    const chapterCount: any = chapters[0].match(NumberRegExp); // Retrieve number from the string.

    return parseInt(chapterCount[0]); // Return the count of the stories converted to an integer type

}