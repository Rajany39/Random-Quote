const btn = document.getElementById('btn')
const quote = document.getElementById('quote')
const author = document.getElementById('author')

const apiurl="https://api.quotable.io/random"

async function getquote() {
    const response= await fetch(apiurl)
    const data= await  response.json()
    const quotecontent= data.content
    const quotequote= data.author
    quote.innerText=quotecontent
    author.innerText="~   " + quotequote

    console.log(data)
}



btn.addEventListener('click',getquote)