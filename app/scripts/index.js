import './../styles/main.scss'
import { MyMap } from './google-map';
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

    const request = $.ajax({
      type: type,
      url: url,
      data: JSON.stringify(data),
      dataType : 'JSON'
    });


    if(true) {
      closeRegistrPopup();
      openRegistrSuccess();
    } else {

    }

  }



  // ---------- Scrolling to a certain section ----------
  // let nav = document.querySelectorAll('.header__link');
  // let section1 = document.querySelector('#rare');
  //
  // nav[0].addEventListener('click', function (event) {
  //   let start = window.pageYOffset;
  //   let to = section1.scrollTop;
  //   event.preventDefault();
  //   // scrollTo();
  //   console.log(start);
  //   console.log(to);
  //
  //   window.scrollTo(0, 3000);
  //
  //   // window.pageYOffset = 1500;
  // });
  //
  //
  // function scrollTo(section) {
  //
  //
  //
  //   console.log(window.scrollX);
  //   // start = window.
  // }

}



