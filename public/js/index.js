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
    const rText = r.text;
    const rTextLower = rText.toLowerCase();
    text.innerText = rTextLower;
    text.title = rTextLower;
  };

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
async function ipApi() {
  const url = '/api/ipapi';
}
ipApi();