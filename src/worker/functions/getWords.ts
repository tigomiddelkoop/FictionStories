const WordRegExp: RegExp = /(Words: \d+(,\d+)*)/i
const NumberRegExp: RegExp = /\d+(,\d+)*/;

export default function getWords(rawHTML: any): number {

    const words: any = rawHTML.match(WordRegExp); // Find the word counter in the string

    const wordCount: any = words[0].match(NumberRegExp); // Filter the number from that

    return wordCount[0]; // Return the value converted to an integer

}
