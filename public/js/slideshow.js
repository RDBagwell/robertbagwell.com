$(document).ready(function () {
    var mnainImage = $('#mainImage');
    var imagesURLs = new Array();
    var imagesCaptions = new Array();
    var interrvalID;
    var playBTN = $('#playBTN');
    var stopBTN = $('#stopBTN');
    var fullScreen = $('#fs span');
    var closeBTN = $('#cs span');
    var next = $('#next');
    var prev = $('#prev');
    var timmer = true;
    var palyIntarval = 3000;

    $(".thumbnail img").each(function () {
        if ($(this).parent().parent().data('groups') == 'small') {
            imagesURLs.push($(this).attr('src'));
            imagesCaptions.push($(this).data('shot'));
        }
    });
    console.log(imagesCaptions);

    // function closeSlideshow(){
    //     stop();
    //     $("#grid, .portfolio-sorting").css('display', 'block');
    //     $("#slide_show, #fs, #cs").css('display', 'none');
    // }

    function play() {
        interrvalID = setInterval(nextImg, palyIntarval);
        $("#grid, .portfolio-sorting").css('display', 'none');
        $("#slide_show, #fs, #cs").css('display', 'block');
        playBTN.css('display', 'none');
        stopBTN.css('display', 'block');
    }

    function stop() {
        clearInterval(interrvalID);
        playBTN.css('display', 'block');
        stopBTN.css('display', 'none');
    }

    function nextImg() {
        var currentImageURL = mnainImage.attr('src');
        var currentImageIndex = $.inArray(currentImageURL, imagesURLs);
        if (currentImageIndex == (imagesURLs.length - 1)) {
            currentImageIndex = -1;
        }
        $('#slide_show_caption').html(imagesCaptions[currentImageIndex + 1]);
        mnainImage.attr('src', imagesURLs[currentImageIndex + 1]);
    }

    function prevImg() {
        var currentImageURL = mnainImage.attr('src');
        var currentImageIndex = $.inArray(currentImageURL, imagesURLs);
        if ((currentImageIndex - 1) < 0) {
            currentImageIndex = imagesURLs.length;
        }
        $('#slide_show_caption').html(imagesCaptions[currentImageIndex - 1]);
        mnainImage.attr('src', imagesURLs[currentImageIndex - 1]);
    }

    $('.img_div').click(function () {
        play();
    });

    $(".thumbnail img").click(function () {
        var newSRC = $(this).attr('src');
        mnainImage.attr('src', newSRC);
    });

    mnainImage.mouseover(function () {
        $('#controls').css('display', 'block');
        clearInterval(interrvalID);
        timmer = false;
    });

    $('#controls').mouseout(function () {
        $('#controls').css('display', 'none');
        if (!timmer) {
            timmer = true;
            interrvalID = setInterval(nextImg, palyIntarval);
        }
    });

    playBTN.click(function () {
        play();
    });

    stopBTN.click(function () {
        stop();
    }).css('display', 'none');

    next.click(function () {
        clearInterval(interrvalID);
        timmer = false;
        nextImg();
    });


    prev.click(function () {
        clearInterval(interrvalID);
        timmer = false;
        prevImg();
    });

    fullScreen.click(function () {
        fullScreen.toggleClass('fa-arrows-alt fa-expand-arrows-alt');
        document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen();
    });

    closeBTN.click(function () {
        location.reload();
    });

    $(".med, .lg, .sm").click(function () {
        $(".med, .lg, .sm").removeClass("gActive");
    });

});