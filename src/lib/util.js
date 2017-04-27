/* @flow */

export function parseCorpId(url:string, param:string) : string {
    const searchIndex:number = url.indexOf('?');
    const searchParams:Array<string> = url.slice(searchIndex + 1).split('&');
    let i:number = 0;
    let l:number = searchParams.length;
    let result:string = '';
    for (; i < l; i++) {
        const items = searchParams[i].split('=');
        if (items[0].trim() == param) {
            result = items[1].trim();
            break;
        }
    }
    return result;
}
