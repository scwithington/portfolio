let images = ['./assets/img/resume.jpg', './assets/img/portfolio.jpg'];
let i = 0;

setInterval(function() {
    $('#pageLead').animate({ opacity: 0 }, 500, function() {
        $('#pageLead').css('background-image', 'url(' + images[i] + ')');
        i++;
        $('#pageLead').animate({ opacity: 1 }, 500, function() {
            if (i == images.length) {
                i = 0;
            };
        });
    });
}, 5000);