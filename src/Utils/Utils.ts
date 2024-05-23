export function capitalizeFirstLetter(word:string):string{
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function extractText(text:string,index:string):string{
    const taskIndex = text.indexOf(index+":");
    const extractText = text.substring(taskIndex+index.length+2).trim();
    return extractText;
}