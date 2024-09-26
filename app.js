let btn = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
const apiUrl = "https://dummyjson.com/quotes/random";


const generateRandomQuote = () => {
    fetch(apiUrl).then((response) => {
        return response.json();
    }).then((data) => {
        quote.innerHTML = data.quote;
        author.innerHTML = data.author;
    }).catch((err) => {
        console.log(err);
    })
    
}

btn.addEventListener("click", () => {
    generateRandomQuote()
})

