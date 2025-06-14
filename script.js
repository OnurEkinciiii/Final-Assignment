document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("animateBox");
    let pos = 0;
    let direction = 1;

    setInterval(function () {
        if (pos > 90 || pos < -90) direction *= -1;
        pos += direction * 4;
        box.style.transform = `translateX(${pos}px)`;
    }, 33);
});
