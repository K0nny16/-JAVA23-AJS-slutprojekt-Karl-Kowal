//Sätter fösta bokstaven till en stor ifall användaren inte skulle skriva sitt namn eller tasket med stor bokstav.
export function capitalizeFirstLetter(word:string):string{
    return word.charAt(0).toUpperCase() + word.slice(1);
}

//Hämtar stringen efter Task:, Work Area: och assigned to: så inte hela skickat till FB.
export function extractText(text:string,index:string):string{
    const taskIndex = text.indexOf(index+":");
    const extractText = text.substring(taskIndex+index.length+2).trim();
    return extractText;
}