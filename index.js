const handRotation = ()=>{

    let hourHand = document.querySelector(".hour");
    let minuteHand = document.querySelector(".minute");
    let secondHand = document.querySelector(".second");

    let Time = new Date();
    let hour = Time.getHours();
    let minute = Time.getMinutes();
    let seconds = Time.getSeconds();

    let hourHandRoatation = (hour*30) + (minute*0.5) + (seconds/120);
    let minuteHandRoatation = (minute*6) + (seconds/10);
    let secondHandRoatation = seconds*6;

    hourHand.style.transform = `rotate(${hourHandRoatation}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandRoatation}deg)`;
    secondHand.style.transform = `rotate(${secondHandRoatation}deg)`;

}

setInterval(handRotation, 1000);