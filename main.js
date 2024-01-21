var arrayOfQuotes = [
  {
      "author" : "Oscar Wilde",
      "quote": "Be yourself; everyone else is already taken."
  },
  {
      "author": "Albert Einstein",
      "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
  },
  {
      "author": "Frank Sinatra",
      "quote": "The best revenge is massive success."
  },
  {
      "author":"Marcus Tullius Cicero",
      "quote": "A room without books is like a body without a soul."
  },
  {
      "author": "Nelson Mandela",
      "quote":"Resentment is like drinking poison and waiting for your enemies to die."
  },
  {
      "author":"Confucius",
      "quote":"Silence is a true friend who never betrays."
  },
  {
      "author":"Elbert Habbard",
      "quote": "Do not take life too seriously. You will not get out alive."
  },
  {
      "author":"Lyndon B.Johnson",
      "quote":"Yesterday is not ours to recover,but tommorrow is ours to win or lose."
  },
  {
      "author":"Henrik Ibsen",
      "quote":"A thousand words can not leave the same deep impression as a single deed."
  },
  {
      "author":"Katherine Pearson",
      "quote":"A dream without a plan is nothing more than a wish."
      }
]
function randomSelector(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}
function generateQuote(){
  var randomNumber = randomSelector(arrayOfQuotes.length);
  document.getElementById("quoteOutput").innerHTML = '“' + arrayOfQuotes[randomNumber].quote + '”';
  document.getElementById("authorOutput").innerHTML = "- " + arrayOfQuotes[randomNumber].author;
}
