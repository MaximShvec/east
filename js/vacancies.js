(function ($) {
  $(function () {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

  });
})(jQuery);


document.querySelectorAll('.expand-btn').forEach(item => {
  item.addEventListener('click', event => {
    const currentOrder = event.target.closest('.vacancies__people-box');
    const isActive = currentOrder.classList.contains('active');

    document.querySelectorAll('.vacancies__people-box').forEach(order => {
      order.classList.remove('active');
    });

    if (!isActive) {
      currentOrder.classList.add('active');
    }
  });
});

new AirDatepicker('#date-birthday', {
  language: 'en',
  maxDate: new Date,
});


$('#city-select').select2({
  minimumResultsForSearch: Infinity
});

$('#licence').select2({
  minimumResultsForSearch: Infinity
});

$('#vacancy-app').select2({
  minimumResultsForSearch: Infinity
});


$(function () {

  var input = document.querySelectorAll("input[name=personal__info-phone]");
  var iti_el = $('.iti.iti--allow-dropdown.iti--separate-dial-code');
  if (iti_el.length) {
    iti.destroy();
  }
  for (var i = 0; i < input.length; i++) {
    iti = intlTelInput(input[i], {
      autoHideDialCode: false,
      autoPlaceholder: "aggressive",
      initialCountry: "cy",
      separateDialCode: true,
      preferredCountries: ['cy'],
      customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
        return '' + selectedCountryPlaceholder.replace(/[0-9]/g, 'X');
      },
      geoIpLookup: function (callback) {
        $.get('https://ipinfo.io', function () {}, "jsonp").always(function (resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
        });
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.0/js/utils.js"
    });


    $('input[name="personal__info-phone"]').on("focus click countrychange", function (e, countryData) {

      var pl = $(this).attr('placeholder') + '';
      var res = pl.replace(/X/g, '9');
      if (res != 'undefined') {
        $(this).inputmask(res, {
          placeholder: "X",
          clearMaskOnLostFocus: true
        });
      }
    });

    $('input[name="personal__info-phone"]').on("focusout", function (e, countryData) {
      var intlNumber = iti.getNumber();
      console.log(intlNumber);
    });
  }
})


document.addEventListener('DOMContentLoaded', function () {
  var burgerButton = document.querySelector('.burger-menu');
  var menuMain = document.querySelector('.header-end');

  burgerButton.addEventListener('click', function (event) {
    event.stopPropagation();
    document.body.classList.toggle('active');
    burgerButton.classList.toggle('active');
    menuMain.classList.toggle('active');
  });

  document.addEventListener('click', function (event) {
    var isClickInsideCart = menuMain.contains(event.target);
    var isClickInsideButton = burgerButton.contains(event.target);

    if (!isClickInsideCart && !isClickInsideButton) {
      document.body.classList.remove('active');
      burgerButton.classList.remove('active');
      menuMain.classList.remove('active');
    }
  });
 
  menuMain.addEventListener('click', function (event) { 
    var isClickInsideMenu = menuMain.contains(event.target);
 
    if (isClickInsideMenu) {
      event.stopPropagation();
    }
  });
});