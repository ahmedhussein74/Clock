let ids = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven","twelve" ];
let pointer = ["hour", "minutes", "second"];

let clock = document.querySelector('#clock')

for(let i=0;i<ids.length;i++){
  clock.innerHTML+= `
  <span id=${ids[i]} class="d-flex justify-content-center align-items-center position-absolute text-white">
    ${i+1}
  </span>
  `
}
for(let i=0;i<pointer.length;i++){
  clock.innerHTML+= `
  <div class=${pointer[i]}></div>
  `
}

let time = new Date();
let mints = time.getUTCMinutes();
mints *= 6;
document.querySelector(".minutes").style.transform = `rotate(${mints}deg)`;

let sec = time.getUTCSeconds();
sec *= 6;
document.querySelector(".second").style.transform = `rotate(${sec}deg)`;

let hours = time.getUTCHours();
hours++;
hours > 12 ? (hours -= 11) : ++hours;
hours *= 30;
console.log(hours)
hours += mints / 12;
document.querySelector(".hour").style.transform = `rotate(${hours}deg)`;