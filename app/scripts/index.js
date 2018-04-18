import './../styles/main.scss'
import './google-map'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}

// -------------- The registration window --------------
let registrationBtn = document.querySelector('#registrationBtn')
let popup = document.querySelector('.registration')
let closeBtn = document.querySelector('#exitBtn')
let registrationBtnBig = document.querySelector('#registrationBtnBig')
let registrationBtnBig2 = document.querySelector('#registrationBtnBig2')

function openRegistrPopup () {
  popup.style.display = 'flex'
  setTimeout(function () {
    popup.style.opacity = '1'
  }, 10)
}

function closeRegistrPopup () {
  popup.style.opacity = ''
  setTimeout(function () {
    popup.style.display = 'none'
  }, 250)
}

registrationBtn.onclick = function () {
  openRegistrPopup()
}

registrationBtnBig.onclick = function () {
  openRegistrPopup()
}

registrationBtnBig2.onclick = function () {
  openRegistrPopup()
}

closeBtn.onclick = function () {
  closeRegistrPopup()
}
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




// ------------> Form <-----------
let submitBtn = document.querySelector('#registration__btn');
let form = document.querySelector('registration__form');

// submitBtn.addEventListener('click', function (event) {
//   event.preventDefault();
//   let name = document.querySelector('#name');
//   let tel = document.querySelector('#tel');
//   let email = document.querySelector('#email');

  // console.log(name.value, tel.value, email.value)
// });

$(form).on('submit', submitForm);

function submitForm (ev) {
  ev.preventDefault()

  let form = $(ev.target)
  let data = form.serialize()
  let url = form.attr('action')
  let type = form.attr('method')

  var request = $.ajax({
    type: type,
    url: url,
    data: data
  })

  request.done(function(msg) {
    alert(msg)
  })
}

// var request = $.ajax({
//   url: "server.php",
//   method:
// })

// $(document).ready(function () {
//   $(#)
// })
