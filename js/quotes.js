const quotes = [
    {
     quote: "노페인 노게인",
     author: "오동구리",
    },{
     quote: "하나가 둘이된다",
     author: "때부기",
    },{
     quote: "원월드 원피플",
     author: "윈터솔져",
    },{
     quote: "행복하자",
     author: "자이언티",
    },{
     quote: "이게뭐야",
     author: "오동구리",
    },
]

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
