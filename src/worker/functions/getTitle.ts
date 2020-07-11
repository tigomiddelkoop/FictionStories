const TitleRegExp: RegExp = /(, a)/i

export default function getTitle(html: any): any {

    let title = html.querySelector("title").rawText;

    const titleMatch = title.match(TitleRegExp);
    return title.slice(0, titleMatch.index);
}
