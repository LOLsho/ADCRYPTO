import './../styles/main.scss'
import { MyMap } from './google-map';
window['myMap'] = null;

window['initMap'] = function(){
  window['myMap'] = new MyMap();
  console.log(myMap);
};

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){
  let registrationBtn = document.querySelector('#registrationBtn');
  let popup = document.querySelector('.registration');
  let closeBtn = document.querySelector('#exitBtn');
  let registrationBtnBig = document.querySelector('#registrationBtnBig');

  function openRegistrPopup () {
    popup.style.display = 'flex';
    setTimeout(function () {
      popup.style.opacity = '1'
    }, 10)
  }

  function closeRegistrPopup () {
    popup.style.opacity = '';
    setTimeout(function () {
      popup.style.display = 'none'
    }, 250)
  }

  registrationBtn.onclick = function () {
    openRegistrPopup()
  };

  registrationBtnBig.onclick = function () {
    openRegistrPopup()
  };

  closeBtn.onclick = function () {
    closeRegistrPopup()
  }

}
// -------------- The registration window --------------

// -------------------------------------------------

// ---------- Scrolling to a certain section ----------
// function scrollTo(element, to, duration) {
//   if (duration <= 0) return
//   var difference = to - element.scrollTop
//   var perTick = difference / duration * 10
//
//   setTimeout(function() {
//     element.scrollTop = element.scrollTop + perTick
//     if (element.scrollTop === to) return
//     scrollTo(element, to, duration - 10)
//   }, 10)
// }
