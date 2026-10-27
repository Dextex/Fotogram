const images = [
    "alaska.jpg",
    "anime.jpg",
    "atmosphere.png",
    "ente.jpg",
    "hurricane.jpg",
    "laka.jpg",
    "leopard.jpg",
    "sea.jpg",
    "snow-bunting.jpg",
    "travel.jpg",
    "vogel.jpg",
    "winter.jpg",
];

const imagesAltText = [
    "Ein Bild von einer Landschaft in Alaska",
    "Ein Bild von einem Anime",
    "Ein Bild von einer beeindruckenden Atmosphere",
    "Ein Bild von einer Ente im Wasser",
    "Bild von einen Hurrican aus dem Weltraum raus",
    "Ein Bild von einem See mit Berg",
    "Ein Bild von einen Schneeleopard",
    "Ein Bild mit einen See",
    "Ein Bild von einem Schnee Vogel",
    "Ein Bild von Bergen",
    "Ein Bild von einem Vogel",
    "Ein Bild von einem zugeschneiten Baum",
];

function getImageHtml(index) {
    let path = "./assets/img/" + images[index];
    return `<img class='thumbmail' src=${path} alt=${imagesAltText[index]}/>`;
}

function render() {
    let galleryRef = document.getElementById("gallery");
    for (let i = 0; i < images.length; i++) {
        galleryRef.innerHTML += getImageHtml(i);
    }
}
