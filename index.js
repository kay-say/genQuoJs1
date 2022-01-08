const btn=document.querySelector(".btn")
const quote=document.querySelector(".quote")
const author=document.querySelector(".author")
const container=document.querySelector(".container")
const app=document.querySelector(".app")

btn.addEventListener("click",()=>{
    //fetch quote and random color
    fetchQuote()
    fetchColor()
})

//fetch quote and random color on loading
fetchQuote()
fetchColor()



///////functions////////
//give random color to background and quote
function fetchColor(){
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    container.style.background=`rgb(${r},${g},${b})`
    btn.style.background=`rgb(${r},${g},${b})`
    app.style.color=`rgb(${r},${g},${b})`
}
//fetch quote from API
function fetchQuote(){
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "65748579a8msh0f80d7db17667f8p165c7djsn7967c9cd96d6"
	}
})
.then(res=>res.json())
.then(response => {
	quote.textContent=response.content
    author.textContent=response.originator.name
})
.catch(err => {
	console.error(err);
});
}
// function fetchQuote(){
//     fetch("https://motivational-quotes1.p.rapidapi.com/motivation", {
//         "method": "POST",
//         "headers": {
//             "content-type": "application/json",
//             "x-rapidapi-host": "motivational-quotes1.p.rapidapi.com",
//             "x-rapidapi-key":"65748579a8msh0f80d7db17667f8p165c7djsn7967c9cd96d6"
//         },
//         "body": {
//             "key1": "value",
//             "key2": "value"
//         }
//     })
//     .then(res=>JSON.parse(res))
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }

// function fetchQuote(){
//     const options = {
//         method: 'POST',
//         url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
//         headers: {
//           'content-type': 'application/json',
//           'x-rapidapi-host': 'motivational-quotes1.p.rapidapi.com',
//           'x-rapidapi-key': '65748579a8msh0f80d7db17667f8p165c7djsn7967c9cd96d6'
//         },
//         data: {
//             key1: 'value', key2: 'value'
//         }
//     };
    
//     axios.request(options).then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     });
// }