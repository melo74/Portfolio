/* eslint-env browser, jquery */
/* eslint-disable no-console */



$(document).ready(() => {

    function typeEffect(element, speed) {
        var text = element.innerHTML;
        element.innerHTML = "";

        var i = 0;
        var timer = setInterval(function () {
            if (i < text.length) {
                element.append(text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }


    // application
    var speed = 100;
    var h1 = document.querySelector('h1');
    var delay = h1.innerHTML.length * speed + speed;

    // type affect to header
    typeEffect(h1, speed);

    setTimeout(miseenattente, 1500); //On attend 5 secondes avant d'exécuter la fonction

    function miseenattente() {

        anime.timeline({})
            .add({
                targets: '.ml5 .line',
                opacity: [0.5, 1],
                scaleX: [0, 1],
                easing: "easeInOutExpo",
                duration: 700
            }).add({
                targets: '.ml5 .line',
                duration: 600,
                easing: "easeOutExpo",
                translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
            }).add({
                targets: '.ml5 .ampersand',
                opacity: [0, 1],
                scaleY: [0.5, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=600'
            }).add({
                targets: '.ml5 .letters-left',
                opacity: [0, 1],
                translateX: ["0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=300'
            }).add({
                targets: '.ml5 .letters-right',
                opacity: [0, 1],
                translateX: ["-0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=600'
            }).add({
                targets: '.ml5',
                opacity: 1,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });
    }




});
