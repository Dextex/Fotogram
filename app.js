const IMAGES = [
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

const IMAGES_ALT_TEXT = [
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

function openImageDialog(path) {
    const IMAGE_DIALOG_REF = document.getElementById("imageDialog");
    const IMAGE_REF = document.getElementById("dialogBigImage");

    IMAGE_REF.src = path;
    IMAGE_DIALOG_REF.showModal();
}

function getImageHtml(index) {
    let path = "./assets/img/" + IMAGES[index];
    return `<img onclick='openImageDialog("${path}")' class='thumbmail' src=${path} alt=${IMAGES_ALT_TEXT[index]}/>`;
}

function render() {
    let galleryRef = document.getElementById("gallery");
    for (let i = 0; i < IMAGES.length; i++) {
        galleryRef.innerHTML += getImageHtml(i);
    }
}
