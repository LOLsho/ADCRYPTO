import './../styles/main.scss'
import { MyMap } from './google-map';
import * as $ from 'jquery';
import * as scrollto from 'jquery.scrollto';

window['initMap'] = function(){
  window['myMap'] = new MyMap();
};

const initMap = window['initMap'];

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){
  let html = document.documentElement;
  let body = document.body;
  let registrationBtn = document.querySelector('#registrationBtn');
  let registrationBtnBig = document.querySelector('#registrationBtnBig');
  let registrationBtnBig2 = document.querySelector('#registrationBtnBig2');
  let closeBtn = document.querySelector('#exitBtn');
  let closeBtn2 = document.querySelector('#exitBtn2');
  let emailError = $('#email_error');
  let popup = document.querySelector('.registration');
  let successPopup = document.querySelector('.registration-success');

  let nameInput = document.querySelector('#name');
  let telInput = document.querySelector('#tel');
  let emailInput = document.querySelector('#email');

  emailInput.addEventListener('input', emailInputEvent);

  function emailInputEvent() {
    if (emailInput.value == ''){
      displayEnterEmail();
    } else {
      hideEnterEmail();
    }

  }

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

  function displayEnterEmail() {
    emailError.addClass('registration__input-error_show');
  }

  function hideEnterEmail() {
    emailError.removeClass('registration__input-error_show');
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

    let name = nameInput.value;
    let tel = telInput.value;
    let email = emailInput.value;

    if (email == '') {
      displayEnterEmail();
      return;
    } else {
      hideEnterEmail();
    }

    let url = 'https://www.tugush.com/landing/sendmail/';
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



