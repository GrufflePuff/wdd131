let woodList = document.querySelector('#woods');

const woods = [
    {
        picture: 'images/white-oak.jpg',
        grain: 'images/wood-grain.jpg',
        name: "White Oak",
        species: "Qeurcus alba",
        type: "Hardwood",
        hardness: 1360,
        tags: ["Water Resistant", "Rot Resistant"]
    },
    {
        picture: 'images/white-oak.jpg',
        grain: 'images/wood-grain.jpg',
        name: "Eastern White Pine",
        species: "Pinus strobus",
        type: "Softwood",
        hardness: 380,
        tags: ["Lightweight", "Easy to work with"]
    },
    {
        picture: 'images/white-oak.jpg',
        grain: 'images/wood-grain.jpg',
        name: "Teak",
        species: "Tectona grandis",
        type: "Hardwood",
        hardness: 1070,
        tags: ["Water Resistant", "Rot Resistant"]
    },
    {
        picture: 'images/white-oak.jpg',
        grain: 'images/wood-grain.jpg',
        name: "Hard Maple",
        species: "Acer saccharum",
        type: "Hardwood",
        hardness: 1450,
        tags: ["Water Resistant", "Wear Resistant"]
    }
];

let button = document.querySelector('button');

button.addEventListener('click', search);

function search() {
    console.log("Searched")

    const input = document.querySelector('#search');
    const query = input.value.toLowerCase();


    let filterWoods = woods.filter(function(wood){
        return (
            wood.name.toLowerCase().includes(query.toLowerCase()) ||
            wood.type.toLowerCase().includes(query.toLowerCase()) ||
            wood.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
    });

    filterWoods.sort((a, b) => a.hardness - b.hardness);

    woodList.innerHTML = ''

    filterWoods.forEach(function(wood){renderWoods(wood)})
}

function tagTemplate(tags) {
    return tags.map((tag)=> `<li>${tag}</li>`).join(' ');
}

function woodsTemplate(wood) {

        return `
        <div class="wood-box">
                <div class="images">
                    <img class="wood-img" src="${wood.picture}" alt="tree image">
                    <img class="wood-grain" src="${wood.grain}" alt="image of wood grain">
                </div>
                <ul class="info">
                    <li>Name: ${wood.name}</li>
                    <li>Species: ${wood.species}</li>
                    <li>Type: ${wood.type}</li>
                    <li>Janka Hardness: ${wood.hardness}</li>
                    ${tagTemplate(wood.tags)}
                </ul>
            </div>`;
}

function renderWoods(woodObject) {
    let html = woodsTemplate(woodObject);
    woodList.innerHTML += html
}

woods.forEach(wood => {
    renderWoods(wood)
})