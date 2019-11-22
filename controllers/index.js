exports.getHome = (req, res, next)=>{
    res.render('index', {
        pageTitle: 'Robert Bagwell',
        customCSS: './css/ProgressBar.css',
        customJS: './js/ProgressBar.js'
    });
}

exports.getEightBall = (req, res, next)=>{
    res.render('eight_ball', {
        pageTitle: 'Magic 8-Ball',
        customCSS: './css/eight_ball.css',
        customJS: ''
    });
}

exports.getRPS = (req, res, next)=>{
    res.render('rock_papper_scissors', {
        pageTitle: 'Rock Paper Scissors Game',
        customCSS: './css/rps.css',
        customJS: ''
    });
}

exports.getGallery = (req, res, next)=>{
    res.render('gallery', {
        pageTitle: 'Image Gallery',
        customCSS: './css/gallery.css',
        customJS: ''
    });
}

exports.getCollage = (req, res, next)=>{
    res.render('collage', {
        pageTitle: 'Collage Creator',
        customCSS: './css/collage.css',
        customJS: ''
    });
}