const clockContainer = document.querySelector(".clock");
const clockTitle = document.querySelector("h1");

function getTime() {
  const date = new Date();
  let hour = String(date.getHours());
  let min = String(date.getMinutes());
  let sec = String(date.getSeconds());

  hour = hour.padStart(2, "0");
  min = min.padStart(2, "0");
  sec = sec.padStart(2, "0");

  clockTitle.innerText = `${hour}:${min}:${sec}`;
}

getTime();
setInterval(getTime, 1000);
