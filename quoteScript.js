const nextBtn = document.getElementById('nextQuote');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

const quotes = [
    {
        quote: 'As a writer, you should not judge, you should understand.',
        author: 'Ernest Hemingway'
    },
    {
        quote: 'To produce a mighty book, you must choose a mighty theme.',
        author: 'Herman Melville'
    },
    {
        quote: 'Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.',
        author: 'John Steinbeck'
    },
    {
        quote: 'The Six Golden Rules of Writing: Read, read, read, and write, write, write.',
        author: 'Ernest Gaines'
    },
    {
        quote: 'The purpose of a writer is to keep civilization from destroying itself.' ,
        author: 'Albert Camus'
    },
    {
        quote: 'A writer never has a vacation. For a writer life consists of either writing or thinking about writing.',
        author: 'Eugene Ionesco'
    },
    {
        quote: 'A good writer possesses not only his own spirit but also the spirit of his friends.',
        author: 'Friedrich Nietzsche'
    }
];

let quoteLength = quotes.length;
quote.innerHTML = quotes[0].quote;
author.innerHTML = quotes[0].author;

nextBtn.addEventListener('click', function () {
    let randomQuote = Math.round(Math.random() * quoteLength);
    if (randomQuote == 7) {
        randomQuote = 1;
    }
    
    let todayQuote = quotes[randomQuote].quote;
    let quoteAuthor = quotes[randomQuote].author;

    let quoteHTML = todayQuote;
    quote.innerHTML = quoteHTML;
    author.innerHTML = quoteAuthor;
});