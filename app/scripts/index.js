import './../styles/main.scss'
import { MyMap } from './google-map';
import * as $ from 'jquery';
import * as scrollto from 'jquery.scrollto';
window['myMap'] = null;

window['initMap'] = function(){
  window['myMap'] = new MyMap();
};

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){
  let html = document.documentElement;
  let body = document.body;
  let registrationBtn = document.querySelector('#registrationBtn');
  let registrationBtnBig = document.querySelector('#registrationBtnBig');
  let registrationBtnBig2 = document.querySelector('#registrationBtnBig2');
  let closeBtn = document.querySelector('#exitBtn');
  let closeBtn2 = document.querySelector('#exitBtn2');

  let popup = document.querySelector('.registration');
  let successPopup = document.querySelector('.registration-success');

  function openRegistrSuccess () {
    successPopup.style.display = 'flex';
    setTimeout(function () {
      successPopup.style.opacity = '1'
    }, 10)
  }

  function closeRegistrSuccess () {
    successPopup.style.opacity = '';
    setTimeout(function () {
      successPopup.style.display = 'none'
    }, 250)
  }

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

  registrationBtnBig2.onclick = function () {
    openRegistrPopup()
  };

  closeBtn.onclick = function () {
    closeRegistrPopup()
  }

  closeBtn2.onclick = function () {
    closeRegistrSuccess()
  }

  // ------> Form <-----

  let submitBtn = document.querySelector('#submitBtn');

  $(submitBtn).on('click', submitForm);

  function submitForm () {

    let name = document.querySelector('#name').value;
    let tel = document.querySelector('#tel').value;
    let email = document.querySelector('#email').value;

    let url = 'http://tugush.com/landing/sendmail/';
    let type = 'POST';
    let data = {
      name: name,
      tel: tel,
      email: email
    };

    const request = $.post(url,{
      data: JSON.stringify(data),
    }).done(()=>{
        closeRegistrPopup();
        openRegistrSuccess();
      })
      .fail(()=>{
        console.error(error)
      })
    ;



  }



  // ---------- Scrolling to a certain section ----------
  const nav = $('.header__link');

  nav.click(function (event) {
    let current_scroll = window.pageYOffset,
      button = $(event.target),
      target_href = button.attr('href'),
      target_section = $(target_href),
      target_scroll = target_section.offset();

    event.preventDefault();
    scrollto(target_scroll, 350);


  });

  function scrollTo(section) {



  }

}



