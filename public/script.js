const quoteText =document.querySelector('.quote'),
authorName = document.querySelector('.author .name'),
quotBtn = document.querySelector('button'),
soundBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'),
twitterBtn = document.querySelector('.twitter')



function randomQuote() {
    quotBtn.classList.add('loading');
    quotBtn.innerText = "Loading Quotes....";
    // this fetches random quotes/data from the API and parsing it into javaScript object
fetch('https://api.quotable.io/random').then(res => res.json()).then( result => {
console.log(result)
quoteText.innerText = result.content;
authorName.innerText = result.author;
quotBtn.innerText = "New Quote";
quotBtn.classList.remove('loading');

});
}
soundBtn.addEventListener("click", () => {
    // new web speech API that represent speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    // speak method of speechSynthesis
    speechSynthesis.speak(utterance);
});
copyBtn.addEventListener('click', () => {
    // enables users to copy the quote on click
    navigator.clipboard.writeText(quoteText.innerText)
});

twitterBtn.addEventListener('click', () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, '-blank');
})

quotBtn.addEventListener('click', randomQuote);
 