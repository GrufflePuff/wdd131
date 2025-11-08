const cardDiv = document.querySelector(".card")
const body = document.querySelector("body")

function createSnortleblat() {
    let snortleblat = {
        image: "images/snortleblat.webp",
        imgDesc: "A lizard man in a swamp",
        name: "Snortleblat",
        class: "Swamp Beast Diplomat",
        level: 1,
        maxHealth: 100,
        health: 100,
        status: true,
        attack: function() {
            if (this.status) this.health -= (Math.floor(Math.random() * 6) + 10);
            if (this.health <= 0) {
                this.health = 0,
                this.status = false
            };
        },
        levelup: function() {
            if (this.status) {
            this.level += 1;
            this.maxHealth += 15;
            if (this.level == 5) this.class = "Elite Swamp Beast Diplomat";
            else if (this.level == 15) this.class = "Master Swamp Beast Diplomat"
            else if (this.level == 100) this.class = "Godzilla";
            }
        },
        rest: function() {
            if (this.status) this.health = this.maxHealth;
        },
        dead: `<button id="reset">Reset</button>`
    } 


    let html = `
        <img class="image" src="${snortleblat.image}" alt="${snortleblat.imgDesc}">
        <div class="name">${snortleblat.name}</div>
        <div class="stats">
            <div class="class">
                <h3>Class: </h3>
                <p>${snortleblat.class}</p>
            </div>
            <div class="level">
                <h3>Level: </h3>
                <p>${snortleblat.level}</p>
            </div>
            <div class="health">
                <h3>Health: </h3>
                <p>${snortleblat.health}/${snortleblat.maxHealth}</p>
            </div>
        </div>
        <div class="buttons">
            <button class="attack">Attack</button>
            <button class="levelup">Level Up</button>
            <button class="rest">Rest</button>
        </div>`

    cardDiv.innerHTML = html
    return snortleblat
}

function updateStats(updateCard) {

    document.querySelector(".class p").textContent = `${updateCard.class}`
    document.querySelector(".level p").textContent = `${updateCard.level}`;
    document.querySelector(".health p").textContent = `${updateCard.health}/${updateCard.maxHealth}`

    if (updateCard.status == false) {
        document.querySelector(".name").textContent = `${updateCard.name} -- Dead`;
        document.querySelector("#resetContainer").innerHTML = updateCard.dead;

        let resetBtn = document.querySelector("#reset");

        resetBtn.addEventListener("click", () => {
        snortleblat = createSnortleblat();
        document.querySelector("#resetContainer").innerHTML = ''
        addEvents()
        })
    };
}

snortleblat = createSnortleblat();

addEvents()

function addEvents() {

    let attackBtn = document.querySelector(".attack");
    let levelupBtn = document.querySelector(".levelup");
    let restBtn = document.querySelector(".rest");
    let currentCard = snortleblat;

    attackBtn.addEventListener("click", () => {
        currentCard.attack();
        updateStats(currentCard);
    })

    levelupBtn.addEventListener("click", () => {
        currentCard.levelup();
        updateStats(currentCard);
    })

    restBtn.addEventListener("click", () => {
        currentCard.rest();
        updateStats(currentCard)
    })
};