const date = document.getElementById("time");

function getDate() {
  const dayy = new Date();

  const Year = dayy.getFullYear();
  const Month = dayy.getMonth() + 1;
  const Day = dayy.getDay() + 4;

  const Hours = dayy.getHours();
  const Minutes = String(dayy.getMinutes()).padStart(2, "0");
  const Second = String(dayy.getSeconds()).padStart(2, "0");

  date.innerText = `${Year}년 ${Month}월 ${Day}일 ${Hours}시 ${Minutes}분 ${Second}초`;
}

getDate();
setInterval(getDate, 1000);
