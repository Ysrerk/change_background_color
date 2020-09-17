var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
var btn = document.getElementById('button');
color = document.getElementById("color");

btn.addEventListener('click', hexfunc);

function hexfunc() {

    var hexcolor = "#";
    for (var i = 0; i < 6; i++) {
        rnd = Math.floor(Math.random() * hex.length);
        hexcolor += hex[rnd]
        document.body.style.backgroundColor = hexcolor;
        color.innerText = hexcolor;


    }
}