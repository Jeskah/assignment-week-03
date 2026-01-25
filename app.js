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
    
        console.log(`getting reponse, making promosises`, response)

    const data = await response.json();
    console.log(data);

};

fetchCookieApi()


const upgrades = [
    // {
    //     "id": 1,
    //     "name": "Auto-Clicker",
    //     "cost": 1,
    //     "increase": 1
    // },
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


    function resetGame() {
        cookieCount = 0;
        cps = 0;
        clicksThisSecond = 0;
        resetGame = 0;

        cookieCountDisplay.innerText = cookieCount;
        cpsDisplay.innerHTML = cps;
        bankDisplay.innerHTML = resetGame;

        console.log("Game Reset");
    }


// reset button
    const resetBtn = document.createElement("button");
    resetBtn.className = "reset-btn"
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener('click', resetGame);
    document.body.append(resetBtn);




let bankCookies = 0;


// display
const bankGroup = document.createElement("div");
bankGroup.className = "bank-group";

const bankContainer = document.createElement("span");
bankContainer.textContent = "Bank: ";

const bankDisplay = document.createElement("span");
bankDisplay.innerText = bankCookies;

// logic
function bankNewCookies() {
    if (cookieCount === 0) return;

    bankCookies += cookieCount;
    cookieCount = 0;

    cookieCountDisplay.innerText = cookieCount;
    bankDisplay.innerText = bankCookies;
}


// bank button 
const bankButton = document.createElement("button");
bankButton.textContent = "BANK COOKIES";
bankButton.className = "bank-btn"

bankButton.addEventListener("click", bankNewCookies);
bankBtn.appendChild(bankGroup)



bankContainer.appendChild(bankDisplay);
bankGroup.appendChild(bankContainer);


bankGroup.appendChild(bankButton);

// options container bottom
const options = document.getElementById("optionsContainer");
optionsContainer.appendChild(resetBtn);