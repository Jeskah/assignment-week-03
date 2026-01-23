console.log("Cookie Counter Assignment Week 03")

let cookieCount = 0;
let cps = 0;

const image = document.querySelector("img");

const cookieCountDisplay = document.getElementById("cookieCount");

const cpsDisplay = document.getElementById("cps");


cookieCountDisplay.innerText = cookieCount
let clicksThisSecond = 0;

image.addEventListener("click", function() {
        cookieCount++;
        cookieCountDisplay.innerText = cookieCount
        console.log(cookieCount);
        clicksThisSecond++;
});


setInterval(function() {
    cps = clicksThisSecond;
    cpsDisplay.innerText = cps;
    clicksThisSecond = 0
}, 1000); 



async function fetchCookieApi() {

    const response = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`);
    
        console.log(`getting reponse, making promosises`, response) // returns as a string - "promise, it's "return" after request was made to an API using "fetch" which gets the data like status and headers, body of response.

    const data = await response.json();
    console.log(data);
        // the "response object", more info, structured format, turned into objects.


    // data.map((items) => {
    //     console.log(items);   this isnt the right way

    };

fetchCookieApi()




const upgrades = [
    {
        "id": 1,
        "name": "Auto-Clicker",
        "cost": 100,
        "increase": 1
    },
    {
        "id": 2,
        "name": "Enhanced Oven",
        "cost": 500,
        "increase": 5
    },
    {
        "id": 3,
        "name": "Cookie Farm",
        "cost": 1000,
        "increase": 10
    },
    {
        "id": 4,
        "name": "Robot Baker",
        "cost": 2000,
        "increase": 20
    },
    {
        "id": 5,
        "name": "Cookie Factory",
        "cost": 5000,
        "increase": 50
    },
    {
        "id": 6,
        "name": "Magic Flour",
        "cost": 10000,
        "increase": 100
    },
    {
        "id": 7,
        "name": "Time Machine",
        "cost": 20000,
        "increase": 200
    },
    {
        "id": 8,
        "name": "Quantum Oven",
        "cost": 50000,
        "increase": 500
    },
    {
        "id": 9,
        "name": "Alien Technology",
        "cost": 100000,
        "increase": 1000
    },
    {
        "id": 10,
        "name": "Interdimensional Baker",
        "cost": 200000,
        "increase": 2000
    }
]


const container = document.getElementById('shopWindow');

for (const item of upgrades) {
    const div = document.createElement('div');

    const button = document.createElement('button');
    button.textContent = item.name;

    const cost = document.createElement('p');
    cost.textContent = `Cost: +${item.cost}`;

    const increase = document.createElement('p');
    increase.textContent = `Increase: +${item.increase} CPS`;

    div.append(button, cost, increase);
    container.appendChild(div);

    // div.textContent = item.name;
    // container.appendChild(div);
}




