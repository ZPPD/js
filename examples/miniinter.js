let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//splitting the string into individual words
let storyWords = story.split(' ');
console.log(storyWords.length);

//filtering the unnecessaryWords from storyWords
let betterWords = storyWords.filter(word =>{return !unnecessaryWords.includes(word)});
 
console.log(betterWords.join(' ')) ;  

/*let countOverusedWords = betterWords.filter(count => { if(count === overusedWords[0] || count === overusedWords[1] || count === overusedWords[2])
                                                     return count;})
console.log(countOverusedWords.length); */
//finding and counting the overusedWords in betterWords
let countWords0 = betterWords.filter(count0 => {if(count0 === overusedWords[0]) return count0});
console.log(`${overusedWords[0].toUpperCase()} was used ${countWords0.length} times`);

let countWords1 = betterWords.filter(count1 => {if(count1 === overusedWords[1]) return count1});
console.log(`${overusedWords[1].toUpperCase()} was used ${countWords1.length} times`);

let countWords2 = betterWords.filter(count2 => {if(count2 === overusedWords[2]) return count2});
console.log(`${overusedWords[2].toUpperCase()} was used ${countWords2.length} times`);
let count = countWords0.length + countWords1.length +countWords2.length;
console.log('overusedwords are used ' +count+ ' times');


//counting the sentences(they end with . or !)
let sentences = 0;
betterWords.forEach(word => {
if(word[word.length-1] === '.' || word[word.length-1] ==='!'){
  sentences+=1;
}
});
console.log(`There are ${sentences} sentences`);

//let greatWord = betterWords.find(great => {if})


                                    
