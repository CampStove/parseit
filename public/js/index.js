const now = new Date();
const nowFormat = now.getMonth() +"/"+ now.getDay() +"/"+ now.getFullYear() +" "+ now.getHours() +":"+ now.getMinutes();
document.getElementById("date").innerText = nowFormat;

/* global document, fetch */
// async function yahooWeather() {
//   const url = '/api/yahoo';
//
//   const success = async (r) => {
//     document.querySelector('#temp').innerHTML = r.temp + '&deg;F';
//     const text = document.getElementById('text');
//     const rText = r.text;
//     const rTextLower = rText.toLowerCase();
//     text.innerText = rTextLower;
//     text.title = rTextLower;
//   };
//
//   try {
//     const rawRes = await fetch(url);
//     const res = await rawRes.json();
//     success(res);
//   } catch (error) {
//     console.log(error);
//     document.getElementById('statusBar').innerHTML = '<li>n/a</li>';
//   }
//
// }
// yahooWeather();
// async function ipApi() {
//   const url = '/api/ipapi';
// }
// ipApi();