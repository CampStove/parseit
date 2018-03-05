const detail = function(x) {
  document.getElementById(x).style.visibility = "visible";
};
const out = function(o) {
  document.getElementById(o).style.visibility = "hidden";
}
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd;
}
if(mm<10){
  mm='0'+mm;
}
var today = dd+'/'+mm+'/'+yyyy;
document.getElementById("date").value = today;
/* global document, fetch */
async function yahooWeather() {
  const url = '/api/yahoo';

  const success = async (r) => {
    document.querySelector('#temp').innerHTML = r.temp + '&deg;F';
    const text = document.getElementById('text');
    text.innerText = r.text;
    text.title = r.text;
  }

  try {
    const rawRes = await fetch(url);
    const res = await rawRes.json();
    success(res);
  } catch (error) {
    console.log(error);
    document.getElementById('statusBar').innerHTML = '<li>n/a</li>';
  }

}
yahooWeather();

if (typeof console  != "undefined")
  if (typeof console.log != 'undefined')
    console.olog = console.log;
  else
    console.olog = function() {};

console.log = function(message) {
  console.olog(message);
  document.getElementById('debug').innerHTML = '<li>' + message + '</li>';
};
console.error = console.debug = console.info =  console.log