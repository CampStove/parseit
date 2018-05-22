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

// slider
var galleryArray = [
  "ambleside_park_20170528_044612_CJI__71U3569",
  "wreck_beach_20170527_213210_CJI__71U3539",
  "lynn_canyon_20170531_205334_CJI__71U3787",
  "ambleside_park_20170528_053453_CJI__71U3662",
  "ubc_20170528_205127_CJI__71U3700",
  "ambleside_park_20170528_053818_CJI__71U3665",
  "lynn_canyon_20170531_205146_CJI__71U3781",
  "ubc_20170528_210444_CJI__71U3736",
  "wreck_beach_20170527_210656_CJI__71U3524",
  "ubc_20170601_213403_CJI__71U3824"
];
const slider = document.getElementById('slider');
let index = 0;
function sliderFunc(controlBtn){
  console.log(controlBtn);
  galleryArray.sort()
  if(controlBtn === "next"){
    if(index === (galleryArray.length - 1)){
      index = 0;
    }
    else{
      index += 1;
    }
  }
  else if(controlBtn === "prev"){
    if(index === 0){
      index = (galleryArray.length - 1);
    }
    else {
      index -= 1;
    }
  }
  slider.src = "img/" + galleryArray[index] + ".jpg";
}