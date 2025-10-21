let time = Date.now();

function updateTime() {
  time = Date.now();
  timeElement.innerHTML = time;

  console.log("hi");
}

setInterval(updateTime, 1000);

let timeElement = document.getElementById("time");
