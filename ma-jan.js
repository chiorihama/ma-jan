const drawButton = document.getElementById("draw-button");
const mahjongTiles = document.getElementById("mahjong-tiles");

const tileSet = [
    "🀇", "🀈", "🀉", "🀊", "🀋", "🀌", "🀍", "🀎", "🀏", 
    "🀀", "🀁", "🀂", "🀃", "🀄", "🀅", "🀆", "🀐", "🀑", "🀒", "🀓", "🀔"
];

drawButton.addEventListener("click", function() {
    const randomTile = getRandomTile();
    displayTile(randomTile);
});

function getRandomTile() {
    const randomIndex = Math.floor(Math.random() * tileSet.length);
    return tileSet[randomIndex];
}

function displayTile(tile) {
    const tileElement = document.createElement("div");
    tileElement.classList.add("tile");
    tileElement.textContent = tile;
    mahjongTiles.appendChild(tileElement);
}
