function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
  
    const hourRotation = 30 * hour + minute / 2; // 30 degrees per hour, 0.5 degrees per minute
    const minuteRotation = 6 * minute; // 6 degrees per minute
    const secondRotation = 6 * second; // 6 degrees per second
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  
  setInterval(updateClock, 1000);
  