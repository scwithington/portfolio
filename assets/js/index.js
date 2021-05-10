// let images = ['./assets/img/resume.jpg', './assets/img/portfolio.jpg'];
// let i = 0;

// setInterval(function() {
//     $('#pageLead').animate({ opacity: 0 }, 500, function() {
//         $('#pageLead').css('background-image', 'url(' + images[i] + ')');
//         i++;
//         $('#pageLead').animate({ opacity: 1 }, 500, function() {
//             if (i == images.length) {
//                 i = 0;
//             }
//         });
//     });
// }, 5000);

(function slide() {
    var i = 1;
    var classes = ['bgd-1', 'bgd-2'];
    var el = document.getElementById('pageLead');
    function toggle() {
        el.className = classes[i];
        i = (i + 1) % classes.length;
    }
    setInterval(toggle, 5000);
})();