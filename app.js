var colours = ["Red", "Green", "#ff33cc", "rgb(102, 102, 255)"]
const color = document.getElementById('color')
const btn = document.getElementById('button')

const rndnumber = 2;

btn.addEventListener('click', function() {
    console.log(getRandomnumber())
    console.log(getRandomrgb())


    document.body.style.backgroundColor = getRandomrgb();
    color.innerHTML = getRandomrgb();

})

function getRandomnumber() {
    const rnd = Math.floor(Math.random() * colours.length)
    return rnd
}

function getRandomrgb() {
    const x = Math.floor(Math.random() * 256)
    const y = Math.floor(Math.random() * 256)
    const z = Math.floor(Math.random() * 256)
    const rgb = "rgb" + "(" + x + "," + y + "," + z + ")"
    return rgb
}