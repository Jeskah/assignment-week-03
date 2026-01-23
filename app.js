console.log("Cookie Counter Assignment Week 03")

let cookieCount = 0;
let cps = 0;

const image = document.querySelector("img");

const cookieCountDisplay = document.getElementById("cookieCount");

const cpsDisplay = document.getElementById("cps");



cookieCountDisplay.innerText = cookieCount

image.addEventListener("click", function() {
        cookieCount++;
        cookieCountDisplay.innerText = cookieCount
        console.log(cookieCount);
        clicksThisSecond++;
});

let clicksThisSecond = 0;


setInterval(function() {
    cps = clicksThisSecond;
    cpsDisplay.innerText = cps;
    clicksThisSecond = 0
}, 1000); 



const shopDisplay = document.getElementById("shopContainer");


async function fetchCookieApi() {

    const response = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`);
    
        console.log(`getting reponse, making promosises`, response) // returns as a string - "promise, it's "return" after request was made to an API using "fetch" which gets the data like status and headers, body of response.

    const data = await response.json();
    console.log(data);
        // the "response object", more info, structured formet.
    data.map((item) => {
        console.log(item);
    })
        
    };


fetchCookieApi()





