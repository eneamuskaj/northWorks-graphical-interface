// main page  view manipulation
let renderView = document.getElementById("d3-render");
let jobQueueView = document.getElementById("job-queue");
let jobQueueBtn = document.getElementById("job-queuebtn");
let printSetupBtn = document.getElementById("print-setup");

jobQueueBtn.addEventListener("click", function () {
  if (renderView.style.display === "block") {
    renderView.style.display = "none";
    jobQueueView.style.display = "block";
  }
});

printSetupBtn.addEventListener("click", function () {
  if (renderView.style.display === "none") {
    renderView.style.display = "block";
    jobQueueView.style.display = "none";
  }
});

// sliders
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;

slider1.oninput = function () {
  output1.innerHTML = this.value;
};

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function () {
  output2.innerHTML = this.value;
};

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;

slider3.oninput = function () {
  output3.innerHTML = this.value;
};

//page setup popup manipulation

let printSetupView = document.getElementById("print-setup-second");
let printCriteriaView = document.getElementById("print-criteria");
let materialSelectionView = document.getElementById("material-selection");

let printSetupBtnn = document.getElementById("print-setup-btn");
let criteriaViewBtn = document.getElementById("print-criteria-btn");
let materialViewBtn = document.getElementById("material-selection-btn");

printSetupBtnn.addEventListener("click", function () {
  if (printSetupView.style.display === "none") {
    console.log("123");
    printSetupView.style.display = "block";
    printCriteriaView.style.display = "none";
    materialSelectionView.style.display = "none";
  }
});

materialViewBtn.addEventListener("click", function () {
  if (materialSelectionView.style.display === "none") {
    console.log("123");
    materialSelectionView.style.display = "block";
    printCriteriaView.style.display = "none";
    printSetupView.style.display = "none";
  }
});

criteriaViewBtn.addEventListener("click", function () {
  if (printCriteriaView.style.display === "none") {
    console.log("123");
    printCriteriaView.style.display = "block";
    printSetupView.style.display = "none";
    materialSelectionView.style.display = "none";
  }
});
