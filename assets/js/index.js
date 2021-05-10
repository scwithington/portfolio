(function slide() {
    var i = 0;
    var classes = ['bgd-1', 'bgd-2', 'bgd-3'];
    var el = document.getElementById('pageLead');
    function toggle() {
        el.className = classes[i];
        i = (i + 1) % classes.length;
    }
    setInterval(toggle, 5000);
})();