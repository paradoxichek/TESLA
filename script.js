let wheels = document.querySelectorAll(".wheel");

let radius = document.querySelector(".radius");
let radiusUp = document.querySelector(".radius-btn-up");
let radiusDown = document.querySelector(".radius-btn-down");

let capacity = document.querySelector(".capacity");

let speed = document.querySelector(".speed");
let speedUp = document.querySelector(".speed-up");
let speedDown = document.querySelector(".speed-down");

let temp = document.querySelector(".temp");
let tempUp = document.querySelector(".temp-up");
let tempDown = document.querySelector(".temp-down");

let conditioner = document.querySelector(".conditioner");
let conditionerBtn = document.querySelector(".conditioner-btn");

let view = document.querySelector(".view");

let speedJs = +speed.innerText.split(" км/ч").at(0);
let capacityJs = +capacity.innerText.split("км").at(0);
let tempJs = +temp.innerText.split("°").at(0);

speedUp.onclick = () => {
  if (speedJs < 80) {
    speedJs = speedJs + 5;
    speed.innerText = speedJs + " км/ч";
    capacityJs = capacityJs - 20;
    capacity.innerText = capacityJs + "км";
  }
};

speedDown.onclick = () => {
  if (speedJs > 20) {
    speedJs = speedJs - 5;
    speed.innerText = speedJs + " км/ч";
    capacityJs = capacityJs + 20;
    capacity.innerText = capacityJs + "км";
  }
};

tempUp.onclick = () => {
  tempJs = tempJs + 2;
  temp.innerText = tempJs + "°";

  if (tempJs > 14) {
    conditioner.innerText = "Кондиционер";
  }
};

tempDown.onclick = () => {
  tempJs = tempJs - 2;
  temp.innerText = tempJs + "°";

  if (tempJs < 15) {
    conditioner.innerText = "печка";
  }
};

conditionerBtn.onclick = () => {
  conditionerBtn.classList.toggle("checked");

  if (conditionerBtn.classList.contains("checked")) {
    capacityJs = capacityJs - 20;
    capacity.innerText = capacityJs + "км";
  } else {
    capacityJs = capacityJs + 20;
    capacity.innerText = capacityJs + "км";
  }
};

radiusUp.onclick = () => {
  radius.innerText = "21";

  wheels.forEach((wheel) => {
    wheel.src = "./img/Wheel20.png";
  });
};

radiusDown.onclick = () => {
  radius.innerText = "19";

  wheels.forEach((wheel) => {
    wheel.src = "./img/Wheel19.png";
  });
};

document
  .getElementById("window")
  .addEventListener("click", () => window.open("./index2.html"));

let long = document.querySelector(".long");
let cost = document.querySelector(".cost");
let totalcost = 89990
long.onclick = () => {
  totalcost = cost.innerHTML = "$99, 990";

  console.log(cost);
};

long.onclick = () => {
    long.classList.toggle("checked");
  
    if (long.classList.contains("checked")) {
    
        totalcost1 = totalcost + 10000
        cost.innerHTML = "$" + totalcost1
        
    } else {
      }
  };