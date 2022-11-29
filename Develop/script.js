// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//var saveBtn = document.querySelector("saveBtn");
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

var time = dayjs().format('HH');

var calendar = document.getElementById("calendar");
var hour1 = document.getElementById("hour-1");
var hour2 = document.getElementById("hour-2");
var hour3 = document.getElementById("hour-3");
var hour4 = document.getElementById("hour-4");
var hour5 = document.getElementById("hour-5");
var hour6 = document.getElementById("hour-6");
var hour7 = document.getElementById("hour-7");
var hour8 = document.getElementById("hour-8");
var hour9 = document.getElementById("hour-9");
var hour10 = document.getElementById("hour-10");
var hour11 = document.getElementById("hour-11");
var hour12 = document.getElementById("hour-12");
var hour13 = document.getElementById("hour-13");
var hour14 = document.getElementById("hour-14");
var hour15 = document.getElementById("hour-15");
var hour16 = document.getElementById("hour-16");
var hour17 = document.getElementById("hour-17");
var hour18 = document.getElementById("hour-18");
var hour19 = document.getElementById("hour-19");
var hour20 = document.getElementById("hour-20");
var hour21 = document.getElementById("hour-21");
var hour22 = document.getElementById("hour-22");
var hour23 = document.getElementById("hour-23");
var hour24 = document.getElementById("hour-24");
var btnCal = document.getElementById("btnCal");

calendar.style.visibility='hidden';

function showCalendar(){
  calendar.style.visibility='visible';
  btnCal.style.visibility='hidden';
  colorCode1();
  colorCode2();
  colorCode3();
  colorCode4();
  colorCode5();
  colorCode6();
  colorCode7();
  colorCode8();
  colorCode9();
  colorCode10();
  colorCode11();
  colorCode12();
  colorCode13();
  colorCode14();
  colorCode15();
  colorCode16();
  colorCode17();
  colorCode18();
  colorCode19();
  colorCode20();
  colorCode21();
  colorCode22();
  colorCode23();
  colorCode24();
}


function colorCode1(){
  
  if(time>01){
    hour1.setAttribute("class",'row time-block past');
  }
  else if(time==01){
    hour1.setAttribute("class",'row time-block present');
  }
  else if(time<01){
    hour1.setAttribute("class",'row time-block future');
  }
};

function colorCode2(){
  
  if(time>02){
    hour2.setAttribute("class",'row time-block past');
  }
  else if(time==02){
    hour2.setAttribute("class",'row time-block present');
  }
  else if(time<02){
    hour2.setAttribute("class",'row time-block future');
  }
};

function colorCode3(){
  
  if(time>03){
    hour3.setAttribute("class",'row time-block past');
  }
  else if(time==03){
    hour3.setAttribute("class",'row time-block present');
  }
  else if(time<03){
    hour3.setAttribute("class",'row time-block future');
  }
};

function colorCode4(){
  
  if(time>04){
    hour4.setAttribute("class",'row time-block past');
  }
  else if(time==04){
    hour4.setAttribute("class",'row time-block present');
  }
  else if(time<04){
    hour4.setAttribute("class",'row time-block future');
  }
};

function colorCode5(){
  
  if(time>05){
    hour5.setAttribute("class",'row time-block past');
  }
  else if(time==05){
    hour5.setAttribute("class",'row time-block present');
  }
  else if(time<05){
    hour5.setAttribute("class",'row time-block future');
  }
};

function colorCode6(){
  
  if(time>06){
    hour6.setAttribute("class",'row time-block past');
  }
  else if(time==06){
    hour6.setAttribute("class",'row time-block present');
  }
  else if(time<06){
    hour6.setAttribute("class",'row time-block future');
  }
};

function colorCode7(){
  
  if(time>07){
    hour7.setAttribute("class",'row time-block past');
  }
  else if(time==07){
    hour7.setAttribute("class",'row time-block present');
  }
  else if(time<07){
    hour7.setAttribute("class",'row time-block future');
  }
};

function colorCode8(){
  
  if(time>08){
    hour8.setAttribute("class",'row time-block past');
  }
  else if(time==08){
    hour8.setAttribute("class",'row time-block present');
  }
  else if(time<08){
    hour8.setAttribute("class",'row time-block future');
  }
};

function colorCode9(){
  
  if(time>09){
    hour9.setAttribute("class",'row time-block past');
  }
  else if(time==09){
    hour9.setAttribute("class",'row time-block present');
  }
  else if(time<09){
    hour9.setAttribute("class",'row time-block future');
  }
};

function colorCode10(){
  
  if(time>10){
    hour10.setAttribute("class",'row time-block past');
  }
  else if(time==10) {
    hour10.setAttribute("class",'row time-block present');
  }
  else if(time<10){
    hour10.setAttribute("class",'row time-block future');
  }
};

function colorCode11(){
  
  if(time>11){
    hour11.setAttribute("class",'row time-block past');
  }
  else if(time==11){
    hour11.setAttribute("class",'row time-block present');
  }
  else if(time<11){
    hour11.setAttribute("class",'row time-block future');
  }
};

function colorCode12(){
  
  if(time>12){
    hour12.setAttribute("class",'row time-block past');
  }
  else if(time==12){
    hour12.setAttribute("class",'row time-block present');
  }
  else if(time<12){
    hour12.setAttribute("class",'row time-block future');
  }
};

function colorCode13(){
  
  if(time>13){
    hour13.setAttribute("class",'row time-block past');
  }
  else if(time==13){
    hour13.setAttribute("class",'row time-block present');
  }
  else if(time<13){
    hour13.setAttribute("class",'row time-block future');
  }
};

function colorCode14(){
  
  if(time>14){
    hour14.setAttribute("class",'row time-block past');
  }
  else if(time==14){
    hour14.setAttribute("class",'row time-block present');
  }
  else if(time<14){
    hour14.setAttribute("class",'row time-block future');
  }
};

function colorCode15(){
  
  if(time>15){
    hour15.setAttribute("class",'row time-block past');
  }
  else if(time==15){
    hour15.setAttribute("class",'row time-block present');
  }
  else if(time<15){
    hour15.setAttribute("class",'row time-block future');
  }
};

function colorCode16(){
  
  if(time>16){
    hour16.setAttribute("class",'row time-block past');
  }
  else if(time==16){
    hour16.setAttribute("class",'row time-block present');
  }
  else if(time<16){
    hour16.setAttribute("class",'row time-block future');
  }
};

function colorCode17(){
  
  if(time>17){
    hour17.setAttribute("class",'row time-block past');
  }
  else if(time==17){
    hour17.setAttribute("class",'row time-block present');
  }
  else if(time<17){
    hour17.setAttribute("class",'row time-block future');
  }
};

function colorCode18(){
  
  if(time>18){
    hour18.setAttribute("class",'row time-block past');
  }
  else if(time==18){
    hour18.setAttribute("class",'row time-block present');
  }
  else if(time<18){
    hour18.setAttribute("class",'row time-block future');
  }
};

function colorCode19(){
  
  if(time>19){
    hour19.setAttribute("class",'row time-block past');
  }
  else if(time==19){
    hour19.setAttribute("class",'row time-block present');
  }
  else if(time<19){
    hour19.setAttribute("class",'row time-block future');
  }
};

function colorCode20(){
  
  if(time>20){
    hour20.setAttribute("class",'row time-block past');
  }
  else if(time==20){
    hour20.setAttribute("class",'row time-block present');
  }
  else if(time<20){
    hour20.setAttribute("class",'row time-block future');
  }
};

function colorCode21(){
  
  if(time>21){
    hour21.setAttribute("class",'row time-block past');
  }
  else if(time==21){
    hour21.setAttribute("class",'row time-block present');
  }
  else if(time<21){
    hour21.setAttribute("class",'row time-block future');
  }
};

function colorCode22(){
  
  if(time>22){
    hour22.setAttribute("class",'row time-block past');
  }
  else if(time==22){
    hour22.setAttribute("class",'row time-block present');
  }
  else if(time<22){
    hour22.setAttribute("class",'row time-block future');
  }
};

function colorCode23(){
  
  if(time>23){
    hour22.setAttribute("class",'row time-block past');
  }
  else if(time==23){
    hour23.setAttribute("class",'row time-block present');
  }
  else if(time<23){
    hour23.setAttribute("class",'row time-block future');
  }
};

function colorCode24(){
  
  if(time>24){
    hour24.setAttribute("class",'row time-block past');
  }
  else if(time==24){
    hour24.setAttribute("class",'row time-block present');
  }
  else if(time<24){
    hour24.setAttribute("class",'row time-block future');
  }
};

//var calendar = document.getElementById('calendar');




var calEvent = document.querySelector("#calEvent");
//var buttons = document.querySelector("#saveBtn");

//buttons.addEventListener("click", function(){
  //var calInput = calEvent.value;
  //localStorage.setItem("calInput", JSON.stringify(calInput)); 
  //console.log(calInput)
  //displayEvents();
//});

// function used to display saved events after they are saved and when the page loads.
function displayEvents() {
  
  var calInput = JSON.parse(localStorage.getItem("calInput"));

  calEvent.textContent = calInput;
  //calendar.children('div').eq[i].text(calInput);

}


//function saveEvent() {
//for (var i = 0; i < buttons.length; i++) {
//};

// function used to save calendar events.
function btnSave(event) {
  //event.preventDefault();
  var calInput = calEvent.value;
  localStorage.setItem("calInput", JSON.stringify(calInput)); 
  console.log(calInput)
  displayEvents();
};

function init() {
  displayEvents();
}
init();

//$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  //});
  