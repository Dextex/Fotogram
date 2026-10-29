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
    "Landschaft in Alaska",
    "Anime",
    "beeindruckende Atmosphere",
    "Eine Ente im Wasser",
    "Ein Hurrican",
    "Ein See mit Berg",
    "Ein Schneeleopard",
    "Ein See",
    "Ein Schnee Vogel",
    "Berge",
    "Ein Vogel",
    "Ein zugeschneiten Baum",
];
let imageIndex = 0;
let imageDialogRef = document.getElementById("imageDialog");
let imageRef = document.getElementById("dialogBigImage");
let dialogH2Ref = document.getElementById("imageTitle");
let currentMaxRef = document.getElementById("currentMaxImage");

function openImageDialog(path) {
    imageDialogRef = document.getElementById("imageDialog");
    imageRef = document.getElementById("dialogBigImage");
    dialogH2Ref = document.getElementById("imageTitle");
    currentMaxRef = document.getElementById("currentMaxImage");

    imageIndex = IMAGES.indexOf(getFileNameFromPath(path));

    setImg(imageIndex);
    imageDialogRef.showModal();
}

function setImg(index) {
    let path = "./assets/img/" + IMAGES[index];
    let title = getFileNameFromPath(path);
    currentMaxRef.innerHTML = imageIndex + 1 + "/" + IMAGES.length;
    dialogH2Ref.innerHTML = title;
    imageRef.src = path;
}

function nextImg() {
    imageIndex++;
    if (imageIndex > IMAGES.length - 1) {
        imageIndex = 0;
    }
    setImg(imageIndex);
}
function previousImg() {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = IMAGES.length - 1;
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
    return `<button aria-haspopup="dialog" aria-controls="imageDialog" tabindex="0" class="thumbmail_button" onclick='openImageDialog("${path}")'><img class='thumbmail' src=${path} alt=${IMAGES_ALT_TEXT[index]}/> </button>`;
}

function render() {
    let galleryRef = document.getElementById("gallery");
    for (let i = 0; i < IMAGES.length; i++) {
        galleryRef.innerHTML += getImageHtml(i);
    }
}
