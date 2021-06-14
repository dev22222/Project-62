var n = 0;
var n2 = 0;
var images = [
    "blue.jpg",
    "Orange.png",
    "Pink tulip.jpg",
    "purple.jpg",
    "Red rose.jpg",
    "violet.jpg",
    "White.jpg",
    "yellow.jpg"
];

function leftslide() {
    if (n == 0) {
        document.getElementById("img_slide").src = "yellow.jpg ";
        n = 7
    }
    if (n == 1) {
        document.getElementById("img_slide").src = images[0];
        n = 0
    }
    if (n == 2) {
        document.getElementById("img_slide").src = images[1];
        n = 1
    }
    if (n == 3) {
        document.getElementById("img_slide").src = images[2];
        n = 2
    }
    if (n == 4) {
        document.getElementById("img_slide").src = images[3];
        n = 3
    }
    if (n == 5) {
        document.getElementById("img_slide").src = images[4];
        n = 4
    }
    if (n == 6) {
        document.getElementById("img_slide").src = images[5];
        n = 5
    }
    if (n == 7) {
        document.getElementById("img_slide").src = images[6];
        n = 6
    }

}

function rigthslide() {
    if (n == 0) {
        document.getElementById("img_slide").src = "Orange.png";
        n = 1
    }
    if (n == 1) {
        document.getElementById("img_slide").src = "Pink tulip.jpg";
        n = 2
    }
    if (n == 2) {
        document.getElementById("img_slide").src = "purple.jpg";
        n = 3
    }
    if (n == 3) {
        document.getElementById("img_slide").src = "Red rose.jpg";
        n = 4
    }
    if (n == 4) {
        document.getElementById("img_slide").src = "violet.jpg";
        n = 5
    }
    if (n == 5) {
        document.getElementById("img_slide").src = "White.jpg";
        n = 6
    }
    if (n == 6) {
        document.getElementById("img_slide").src = "yellow.jpg";
        n = 7
    }
    if (n == 7) {
        document.getElementById("img_slide").src = "blue.jpg";
        n = 0
    }
}
