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
let imageIndex = 0;
let IMAGE_DIALOG_REF = document.getElementById("imageDialog");
let IMAGE_REF = document.getElementById("dialogBigImage");
let DIALOG_H2_REF = document.getElementById("imageTitle");
let CURRENT_Max_REF = document.getElementById("currentMaxImage");

function openImageDialog(path) {
    IMAGE_DIALOG_REF = document.getElementById("imageDialog");
    IMAGE_REF = document.getElementById("dialogBigImage");
    DIALOG_H2_REF = document.getElementById("imageTitle");
    CURRENT_Max_REF = document.getElementById("currentMaxImage");

    imageIndex = IMAGES.indexOf(getFileNameFromPath(path));

    setImg(imageIndex);
    IMAGE_DIALOG_REF.showModal();
}

function setImg(index) {
    let path = "./assets/img/" + IMAGES[index];
    let title = getFileNameFromPath(path);
    CURRENT_Max_REF.innerHTML = imageIndex + 1 + "/" + IMAGES.length;
    DIALOG_H2_REF.innerHTML = title;
    IMAGE_REF.src = path;
}

function nextImg() {
    imageIndex++;
    if (imageIndex > IMAGES.length - 1) {
        imageIndex = 0;
    }
    setImg(imageIndex);
}

function closeDialog() {
    const IMAGE_DIALOG_REF = document.getElementById("imageDialog");
    IMAGE_DIALOG_REF.close();
}

function getFileNameFromPath(path) {
    let result = path.split("/");
    result = result[result.length - 1];
    return result;
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
