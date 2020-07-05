const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${minsDegrees}deg)`;

    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    document.querySelector(".date").innerHTML = month + "/" + day + "/" + year;
    
}

setInterval(setDate, 1000);

