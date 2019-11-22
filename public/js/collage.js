let images = [
    "../img/galleryImages/img_06.jpg",
    "../img/galleryImages/img_01.jpg",
    "../img/galleryImages/img_02.jpg",
    "../img/galleryImages/img_04.jpg",
    "../img/galleryImages/img_05.jpg",
    "../img/galleryImages/img_03.jpg",
    "../img/galleryImages/img_07.jpg",
];
const imageOrigWidth = 500;
const imageOrigHeight = 261;
let imageCount = images.length;
let html = ``;
switch (imageCount) {
    case 1:
        html += `<img  class = "image" src = "${images[0]}" />`;
        break;
    case 2:
        html += `<div class="leftHalf"><img class = "image" src = "${images[0]}" /></div>`;
        html += `<div class="rightHalf"><img class = "image" src = "${images[1]}" /></div>`;
        break;

    case 3:
        html += `<div class="leftThird"><img class = "image" src = "${images[0]}" /></div>`;
        html += `<div class="rightThird"><img class = "image" src = "${images[1]}" /></div>`;
        html += `<div class="rightThird rightThirdBottom"><img class = "image" src = "${images[2]}" /></div>`;
        break;
    case 4:
        html += `<div class="leftFourth"><img class = "image" src = "${images[0]}" /></div>`;
        html += `<div class="rightFourth"><img class = "image" src = "${images[1]}" /></div>`;
        html += `<div class="rightFourth rightFourthMid"><img class = "image" src = "${images[2]}" /></div>`;
        html += `<div class="rightFourth rightFourthBottom"><img class = "image" src = "${images[3]}" /></div>`;
        break;
    default:
        html += `<div class="leftFourth"><img class = "image" src = "${images[0]}" /></div>`;
        html += `<div class="rightFourth"><img class = "image" src = "${images[1]}" /></div>`;
        html += `<div class="rightFourth rightFourthMid"><img class = "image" src = "${images[2]}" /></div>`;
        html += `<div class="rightFourth rightFourthBottom"><div class=overlay><p>+${imageCount - 4}</p></div><img class = "image" src = "${images[3]}" /></div>`;
        break;
}

// for (let i = 0; i < 4; i++) {
//     html += `<img class = "image" src = "${images[i]}" />`;
// }


$('.innerContainer').html(html);
$('.innerContainer').css('height', calculateImageHeight($('.innerContainer').width()));

function calculateImageHeight(width) { var sizePercent = imageOrigHeight / imageOrigWidth * 100; return Math.round((width * sizePercent) / 100); }