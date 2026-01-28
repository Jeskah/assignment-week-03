console.log("Cookie Counter Assignment Week 03")

let cookieCount = Number(localStorage.getItem("cookie count")) || 0;

let bankCookies = Number(localStorage.getItem("banked cookies")) || 0;

// let cps = 0;


const cpsBest = document.getElementById("cpsBest");
let cpsRecord = (localStorage.getItem("Highest CPS"));


const image = document.querySelector("img");

const cookieCountDisplay = document.getElementById("cookieCount");

cookieCountDisplay.innerText = cookieCount;

const cpsDisplay = document.getElementById("cps");

const bankBtn = document.getElementById("bankBtn");

let clicksThisSecond = 0;


image.addEventListener("click", function() {
        cookieCount++;
        cookieCountDisplay.innerText = cookieCount;
        console.log(cookieCount);
        clicksThisSecond++; // want to calulate the highest cps over a lifetime and store it.

        localStorage.setItem("cookie count", cookieCount);
});


// clicks per second // needed to be called instantly, not 1s
function cpsLoad() {
    cps = clicksThisSecond;
    cpsDisplay.innerText = cps;
    
    if (cps > cpsRecord) {
        cpsRecord = cps;
        localStorage.setItem("CPS BEST", cpsRecord);
    }
    clicksThisSecond = 0;
} 
cpsLoad()
setInterval(cpsLoad,1000);

// optionsContainer.appendChild(cps);

async function fetchCookieApi() {

    const response = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`);
    
        console.log(`getting reponse, making promosises`, response)

    const data = await response.json();
    console.log(data);

};

fetchCookieApi()


const upgrades = [
    {
        "id": 1,
        "name": "Auto-Clicker",
        "cost": 3,
        "increase": 6
    },
    {
        "id": 2,
        "name": "Enhanced Oven",
        "cost": 5,
        "increase": 10
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


const shop = document.getElementById('shopWindow');

for (const item of upgrades) {
    const div = document.createElement('div');

    const button = document.createElement('button');
    button.textContent = item.name;

    const cost = document.createElement('p');
    cost.textContent = `Cost: -${item.cost}`;

    const increase = document.createElement('p');
    increase.textContent = `Increase: +${item.increase} CPS`;

    div.append(button, cost, increase);
    shop.appendChild(div);


    button.addEventListener("click", () => { 
if (cookieCount < item.cost) {
    console.log("Out Of Cookies!:(")
    return;
}
        cookieCount -= item.cost;
        cps += item.increase;

        cookieCountDisplay.innerText = cookieCount;
        cpsDisplay.innerText = cps;
        console.log(item.name);
});
}

// resetting all values in dom and local storage
    function resetGame() {
        cookieCount = 0;
        cps = 0;
        clicksThisSecond = 0;
        bankCookies = 0;

        cookieCountDisplay.innerText = 0;
        cpsDisplay.innerText = 0;
        bankDisplay.innerText = 0;

        localStorage.setItem("cookie count", 0);
        localStorage.setItem('banked cookies', 0);

        console.log("Game Reset");
    }



// reset button
    const resetBtn = document.createElement("button");
    resetBtn.className = "reset-btn"
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener('click', resetGame) 


// let bankCookies = 0;


// display
const bankGroup = document.createElement("div");
bankGroup.className = "bank-group";

const bankContainer = document.createElement("span");
bankContainer.textContent = "Cookie Jar : ";

const bankDisplay = document.createElement("span");

bankDisplay.innerText = bankCookies;

// bank cookies
function bankNewCookies() {
    if (cookieCount === 0) return;
        console.log("Banked!");

    bankCookies += cookieCount;
    cookieCount = 0;

    cookieCountDisplay.innerText = cookieCount;
    bankDisplay.innerText = bankCookies;

    localStorage.setItem("banked cookies", bankCookies);
    localStorage.setItem("cookie count", cookieCount);
}


// bank button 
const bankButton = document.createElement("button");
bankButton.textContent = "BANK COOKIES";
bankButton.className = "bank-btn"
bankBtn.appendChild(bankButton)


bankButton.addEventListener("click", bankNewCookies);

bankContainer.appendChild(bankDisplay);
bankGroup.appendChild(bankContainer);
optionsContainer.appendChild(bankGroup);

optionsContainer.appendChild(resetBtn);

//_____calm_____peeved_____hurt_____angry____seething____over baked____burnt