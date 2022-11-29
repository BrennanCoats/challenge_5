var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
var time = dayjs().format('HH');
var NUMBER_OF_HOURS = 24;

function colorCode(index){
  var hour = document.getElementById("hour-"+index);
  
  if(time>index){
    hour.setAttribute("class",'row time-block past');
  }
  else if(time==index){
    hour.setAttribute("class",'row time-block present');
  }
  else if(time<index){
    hour.setAttribute("class",'row time-block future');
  }
}

function displayEvents(index) {
  var calInput = JSON.parse(localStorage.getItem("calInput-"+ index));
  var calEvent = document.querySelector("#calEvent-"+ index);
  calEvent.textContent = calInput;
}

function btnSave(index) {
  var calEvent = document.querySelector("#calEvent-"+ index);
  var calInput = calEvent.value;
  localStorage.setItem("calInput-"+ index, JSON.stringify(calInput)); 
}

function init() {
  for (var i = 1; i < NUMBER_OF_HOURS; i++) {
    displayEvents(i);
    colorCode(i);
  }
}
init();