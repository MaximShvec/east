var swiper_main = new Swiper(".main__swiper", {
  pagination: {
    el: ".main-pag",
    clickable: true,
  },
});

var swiper_pop = new Swiper(".most-pop-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".mp-next",
    prevEl: ".mp-prev",
  },
  breakpoints: {
    650: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    929: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    2225: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper_soup = new Swiper(".soup-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".soup-next",
    prevEl: ".soup-prev",
  },
  breakpoints: {
    650: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    929: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    2225: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper_mp_two = new Swiper(".most-pop-two-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".mp-two-next",
    prevEl: ".mp-two-prev",
  },
  breakpoints: {
    650: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    929: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    2225: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper_sashimi = new Swiper(".sashimi-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".sashimi-next",
    prevEl: ".sashimi-prev",
  },
  breakpoints: {
    650: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    929: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    2225: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper_sushi = new Swiper(".sushi-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".sushi-next",
    prevEl: ".sushi-prev",
  },
  breakpoints: {
    650: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    929: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    2225: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper_inst = new Swiper(".inst-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".inst-next",
    prevEl: ".inst-prev",
  },
  breakpoints: {
    650: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    929: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    2225: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper_ymal = new Swiper(".you-also-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".ymal-next",
    prevEl: ".ymal-prev",
  },
  pagination: {
    el: ".ymal-pag",
    type: "progressbar",
  },
  breakpoints: {
    650: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    929: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    2225: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper_about = new Swiper(".about__page-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 15,
  navigation: {
    nextEl: ".ab-next",
    prevEl: ".ab-prev",
  },
  breakpoints: {
    650: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    759: {
      slidesPerView: 1.8,
      spaceBetween: 35,
    },
    1000: {
      slidesPerView: 2.3,
      spaceBetween: 35,
    },
    1200: {
      slidesPerView: 2.1,
      spaceBetween: 55,
    },
    1600: {
      slidesPerView: 2.5,
      spaceBetween: 70,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var phoneItems = document.querySelectorAll(".phone-item");

  phoneItems.forEach(function (item, index) {
    item.addEventListener("mouseover", function () {
      phoneItems.forEach(function (phoneItem) {
        phoneItem.querySelector(".phone-description").style.display = "none";
      });

      item.querySelector(".phone-description").style.display = "block";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const quantityContainers = document.querySelectorAll(".input-score");

  quantityContainers.forEach((container) => {
    const quantityInput = container.querySelector(".quantity");
    const increaseButton = container.querySelector(".increase");
    const decreaseButton = container.querySelector(".decrease");

    increaseButton.addEventListener("click", () => increase(quantityInput));
    decreaseButton.addEventListener("click", () => decrease(quantityInput));
  });

  function increase(input) {
    const currentValue = parseInt(input.value, 10);
    input.value = currentValue + 1;
  }

  function decrease(input) {
    const currentValue = parseInt(input.value, 10);
    if (currentValue > 1) {
      input.value = currentValue - 1;
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var tabCaptions = document.querySelectorAll(
    ".cart__middle__tabs__caption li"
  );

  tabCaptions.forEach(function (tabCaption) {
    tabCaption.addEventListener("click", function () {
      if (!tabCaption.classList.contains("active")) {
        tabCaptions.forEach(function (otherTabCaption) {
          otherTabCaption.classList.remove("active");
        });
        tabCaption.classList.add("active");

        var tabsContainer = tabCaption.closest(".cart__middle-tabs");
        var tabContents = tabsContainer.querySelectorAll(
          ".cart__middle__tabs__content"
        );

        tabContents.forEach(function (tabContent) {
          tabContent.classList.remove("active");
        });

        var index = Array.from(tabCaptions).indexOf(tabCaption);
        tabContents[index].classList.add("active");
      }
    });
  });
});

new AirDatepicker("#date-order", {
  language: "en",
  minDate: new Date(),
});

$(function () {
  var input = document.querySelectorAll("input[name=personal__info-phone]");
  var iti_el = $(".iti.iti--allow-dropdown.iti--separate-dial-code");
  if (iti_el.length) {
    iti.destroy();
  }
  for (var i = 0; i < input.length; i++) {
    iti = intlTelInput(input[i], {
      autoHideDialCode: false,
      autoPlaceholder: "aggressive",
      initialCountry: "cy",
      separateDialCode: true,
      preferredCountries: ["cy"],
      customPlaceholder: function (
        selectedCountryPlaceholder,
        selectedCountryData
      ) {
        return "" + selectedCountryPlaceholder.replace(/[0-9]/g, "X");
      },
      geoIpLookup: function (callback) {
        $.get("https://ipinfo.io", function () {}, "jsonp").always(function (
          resp
        ) {
          var countryCode = resp && resp.country ? resp.country : "";
          callback(countryCode);
        });
      },
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.0/js/utils.js",
    });

    $('input[name="personal__info-phone"]').on(
      "focus click countrychange",
      function (e, countryData) {
        var pl = $(this).attr("placeholder") + "";
        var res = pl.replace(/X/g, "9");
        if (res != "undefined") {
          $(this).inputmask(res, {
            placeholder: "X",
            clearMaskOnLostFocus: true,
          });
        }
      }
    );

    $('input[name="personal__info-phone"]').on(
      "focusout",
      function (e, countryData) {
        var intlNumber = iti.getNumber();
        console.log(intlNumber);
      }
    );
  }
});

const radioButtons = document.querySelectorAll(
  ".cart__middle__payments__option-input"
);
const cashVariationBlock = document.querySelector(
  ".cart__middle__payments__option__сash-variation"
);

radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    if (radioButton.id === "cash-pay" && radioButton.checked) {
      cashVariationBlock.classList.add("active");
    } else {
      cashVariationBlock.classList.remove("active");
    }
  });
});

$(document).ready(function () {
  $(".lang-flag").click(function () {
    $(".language-dropdown").toggleClass("open");
  });
  $("ul.lang-list li").click(function () {
    $("ul.lang-list li").removeClass("selected");
    $(this).addClass("selected");
    if ($(this).hasClass("lang-en")) {
      $(".language-dropdown")
        .find(".lang-flag")
        .addClass("lang-en")
        .removeClass("lang-cy")
        .removeClass("lang-ru");
      $("#lang_selected").html("<p>EN</p>");
    } else if ($(this).hasClass("lang-ru")) {
      $(".language-dropdown")
        .find(".lang-flag")
        .addClass("lang-ru")
        .removeClass("lang-cy")
        .removeClass("lang-en");
      $("#lang_selected").html("<p>RU</p>");
    } else {
      $(".language-dropdown")
        .find(".lang-flag")
        .addClass("lang-cy")
        .removeClass("lang-en")
        .removeClass("lang-ru");
      $("#lang_selected").html("<p>CY</p>");
    }
    $(".language-dropdown").removeClass("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var cartButtons = document.querySelectorAll(".header__row__mob__cart-box");
  var cartMain = document.querySelector(".cart__main");

  cartButtons.forEach(function (cartButton) {
    cartButton.addEventListener("click", function (event) {
      event.stopPropagation();

      var isBodyActive = document.body.classList.contains("active");

      document.body.classList.toggle("active", !isBodyActive);
      cartButton.classList.toggle("active");
      cartMain.classList.toggle("active");
    });
  });

  document.addEventListener("click", function (event) {
    var isClickInsideCart = cartMain.contains(event.target);
    var isClickInsideButton = false;

    cartButtons.forEach(function (button) {
      if (button.contains(event.target)) {
        isClickInsideButton = true;
      }
    });

    // Добавляем условие для игнорирования кликов по iti--container
    var isClickInsideItiContainer =
      event.target.closest(".iti--container") !== null;

    if (
      !isClickInsideCart &&
      !isClickInsideButton &&
      !isClickInsideItiContainer
    ) {
      cartButtons.forEach(function (button) {
        button.classList.remove("active");
      });
      cartMain.classList.remove("active");
      document.body.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var burgerButton = document.querySelector(".burger-menu");
  var menuMain = document.querySelector(".mobile__menu-box");

  burgerButton.addEventListener("click", function (event) {
    event.stopPropagation();
    document.body.classList.toggle("active");
    burgerButton.classList.toggle("active");
    menuMain.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    var isClickInsideCart = menuMain.contains(event.target);
    var isClickInsideButton = burgerButton.contains(event.target);

    if (!isClickInsideCart && !isClickInsideButton) {
      document.body.classList.remove("active");
      burgerButton.classList.remove("active");
      menuMain.classList.remove("active");
    }
  });

  // Добавляем обработчик клика для ссылок внутри меню
  menuMain.addEventListener("click", function (event) {
    // Проверяем, является ли клик внутри меню
    var isClickInsideMenu = menuMain.contains(event.target);

    // Если клик внутри меню, предотвращаем сброс класса active с body
    if (isClickInsideMenu) {
      event.stopPropagation();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var menuOpenBtns = document.querySelectorAll(".menu__open-btn");
  var menuMobMain = document.querySelector(".mobile__navigation-menu");

  menuOpenBtns.forEach(function (cartButton) {
    cartButton.addEventListener("click", function (event) {
      event.stopPropagation();

      var isBodyActive = document.body.classList.contains("active");

      document.body.classList.toggle("active", !isBodyActive);
      cartButton.classList.toggle("active");
      menuMobMain.classList.toggle("active");
    });
  });

  document.addEventListener("click", function (event) {
    var isClickInsideCart = menuMobMain.contains(event.target);
    var isClickInsideButton = false;

    menuOpenBtns.forEach(function (button) {
      if (button.contains(event.target)) {
        isClickInsideButton = true;
      }
    });

    if (!isClickInsideCart && !isClickInsideButton) {
      menuOpenBtns.forEach(function (button) {
        button.classList.remove("active");
      });
      menuMobMain.classList.remove("active");
      document.body.classList.remove("active");
    }
  });
});

$(document).ready(function () {
  $(".mobile__menu__nav__list-drop").hide();

  $(".drop-items").click(function () {
    $(this).find(".mobile__menu__nav__list-drop").slideToggle("slow");
    $(this).toggleClass("active");
  });
});

Fancybox.bind("[data-fancybox]", {
  dragToClose: false,
  showClass: "fancybox-slide-in-up",
  hideClass: "fancybox-slide-out-down",
  // on: {
  //   reveal: (fancybox, slide) => {
  //     // Find the content element within the current slide and add the custom class
  //     const contentElement = slide.$content;
  //     if (contentElement) {
  //       contentElement.classList.add("fancybox__content--half-screen");
  //     }
  //   },
  // },
});

document.addEventListener("DOMContentLoaded", function () {
  var tabSets = document.querySelectorAll(".pop-up__content__tabs");

  tabSets.forEach(function (tabsContainer) {
    var tabCaptions = tabsContainer.querySelectorAll(
      ".pop-up__content__tabs__caption li"
    );

    tabCaptions.forEach(function (tabCaption) {
      tabCaption.addEventListener("click", function () {
        if (!tabCaption.classList.contains("active")) {
          tabCaptions.forEach(function (otherTabCaption) {
            otherTabCaption.classList.remove("active");
          });
          tabCaption.classList.add("active");

          var tabContents = tabsContainer.querySelectorAll(
            ".pop-up__content__tabs__content"
          );
          tabContents.forEach(function (tabContent) {
            tabContent.classList.remove("active");
          });

          var index = Array.from(tabCaptions).indexOf(tabCaption);
          tabContents[index].classList.add("active");
        }
      });
    });
  });
});

function addToOrder(button) {
  var orderInput = button.nextElementSibling;
  var currentValue = parseInt(orderInput.value);
  var newValue = currentValue + 1;

  button.textContent = "Add more +" + newValue;
  orderInput.value = newValue;

  button.classList.add("active");
}

function formatState(state) {
  if (!state.id) {
    return state.text;
  }
  var $state = $(
    '<span><img class="klc-select2-img" src="' +
      $(state.element).attr("data-src") +
      '" class="img-flag">' +
      state.text +
      "</span>"
  );
  return $state;
}

$("#klc-select").select2({
  placeholder: "Price descending",
  // allowClear: true,
  minimumResultsForSearch: Infinity,
  templateResult: formatState,
  templateSelection: formatState,
});

$(document).ready(function () {
  if ($(window).width() < 767) {
    $(".footer__row__titles").click(function () {
      var list = $(this).parent().find(".footer__row__list");
      list.slideToggle();
      $(this).toggleClass("active");
    });
  }
});

$(document).ready(function () {
  if ($(window).width() > 767) {
    var swiper_ymal = new Swiper(".contact-swiper", {
      slidesPerView: 1.5,
      spaceBetween: 35,
    });
  }
});

$(".subject-select").select2();
$("#deliv_timeSelect").select2();
$("#take_timeSelect").select2();
$(".city-select").select2();

function resizeGridItem(item) {
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );
  rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );
  rowSpan = Math.ceil(
    (item.querySelector(".content").getBoundingClientRect().height + rowGap) /
      (rowHeight + rowGap)
  );
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
  allItems = document.getElementsByClassName("item");
  for (x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance) {
  item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for (x = 0; x < allItems.length; x++) {
  imagesLoaded(allItems[x], resizeInstance);
}

document.addEventListener("DOMContentLoaded", function () {
  // Проверяем наличие необходимых элементов на странице
  var otherFiltersToggle = document.getElementById("otherFiltersToggle");
  var otherFiltersBlock = document.getElementById("otherFiltersBlock");
  var overlay = document.getElementById("overlay");

  // Если все элементы найдены, добавляем обработчики событий
  if (otherFiltersToggle && otherFiltersBlock && overlay) {
    otherFiltersToggle.addEventListener("click", function (event) {
      event.preventDefault();
      toggleOtherFiltersBlock();
    });

    overlay.addEventListener("click", function () {
      hideOtherFiltersBlock();
    });
  }

  // Функции для отображения и скрытия блока
  function toggleOtherFiltersBlock() {
    if (otherFiltersBlock.style.maxHeight) {
      hideOtherFiltersBlock();
      otherFiltersToggle.classList.remove("active");
    } else {
      showOtherFiltersBlock();
      otherFiltersToggle.classList.add("active");
    }
  }

  function showOtherFiltersBlock() {
    overlay.style.display = "block";
    otherFiltersBlock.style.maxHeight = otherFiltersBlock.scrollHeight + "px";
  }

  function hideOtherFiltersBlock() {
    overlay.style.display = "none";
    otherFiltersBlock.style.maxHeight = null;
    otherFiltersToggle.classList.remove("active");
  }
});

let isMoreSettings = false;
$(".more_settings").click(function () {
  $(".cookie-accordion").slideToggle();
  isMoreSettings = !isMoreSettings;
  if (isMoreSettings) {
    $(this).html("Less settings");
  } else {
    $(this).html("More settings");
  }
  return false;
});

$(document).ready(function () {
  $(".acc-head p").on("click touchend", function () {
    var $acc = $(this).closest(".acc");
    if ($acc.hasClass("active")) {
      $acc.find(".acc-content").slideUp();
      $acc.removeClass("active");
    } else {
      $(".acc-content").slideUp();
      $(".acc-head").removeClass("active");
      $(".acc").removeClass("active");
      $acc.find(".acc-content").slideToggle();
      $acc.addClass("active");
    }
    return false;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var allCheck = document.getElementById("all-check");
  var allCheckBoxes = document.querySelectorAll(".all__check-box");

  allCheck.addEventListener("click", function () {
    var isChecked = allCheck.checked;
    allCheckBoxes.forEach(function (checkbox) {
      checkbox.checked = isChecked;
    });
  });

  allCheckBoxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
      if (!this.checked) {
        allCheck.checked = false;
      } else {
        var allChecked = true;
        allCheckBoxes.forEach(function (checkbox) {
          if (!checkbox.checked) {
            allChecked = false;
          }
        });
        allCheck.checked = allChecked;
      }
    });
  });
});

//var pinContainer = document.getElementsByClassName("pin-code")[0];
var pinContainer = document.querySelector(".pin-code");
console.log("There is " + pinContainer.length + " Pin Container on the page.");

pinContainer.addEventListener(
  "keyup",
  function (event) {
    var target = event.srcElement;

    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;

    if (myLength >= maxLength) {
      var next = target;
      while ((next = next.nextElementSibling)) {
        if (next == null) break;
        if (next.tagName.toLowerCase() == "input") {
          next.focus();
          break;
        }
      }
    }

    if (myLength === 0) {
      var next = target;
      while ((next = next.previousElementSibling)) {
        if (next == null) break;
        if (next.tagName.toLowerCase() == "input") {
          next.focus();
          break;
        }
      }
    }
  },
  false
);

pinContainer.addEventListener(
  "keydown",
  function (event) {
    var target = event.srcElement;
    target.value = "";
  },
  false
);

document.addEventListener("DOMContentLoaded", function () {
  var newAddressAdd = document.querySelector(".new__address-add");

  if (newAddressAdd) {
    document.addEventListener("DOMContentLoaded", function () {
      var addressesBox = document.querySelector(
        ".cabinet__page__addresses-box.new-address"
      );

      newAddressAdd.addEventListener("click", function () {
        addressesBox.classList.remove("new-address");
      });
    });
  }
});

new AirDatepicker("#date-birthday", {
  language: "en",
  maxDate: new Date(),
});

document.querySelectorAll(".expand-btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    const currentOrder = event.target.closest(".order");
    const isActive = currentOrder.classList.contains("active");

    document.querySelectorAll(".order").forEach((order) => {
      order.classList.remove("active");
    });

    if (!isActive) {
      currentOrder.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var tabCaptions = document.querySelectorAll(".orders__main__tabs-caption li");

  tabCaptions.forEach(function (tabCaption) {
    tabCaption.addEventListener("click", function () {
      if (!tabCaption.classList.contains("active")) {
        tabCaptions.forEach(function (otherTabCaption) {
          otherTabCaption.classList.remove("active");
        });
        tabCaption.classList.add("active");

        var tabsContainer = tabCaption.closest(".orders-tabs");
        var tabContents = tabsContainer.querySelectorAll(
          ".orders__main__tabs-content"
        );

        tabContents.forEach(function (tabContent) {
          tabContent.classList.remove("active");
        });

        var index = Array.from(tabCaptions).indexOf(tabCaption);
        tabContents[index].classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".live__search-btn");
  const searchBox = document.querySelector(".header_search__box");
  const overlay = document.getElementById("overlay");

  searchButton.addEventListener("click", function () {
    searchBox.classList.add("active");
    overlay.style.display = "block";
  });

  overlay.addEventListener("click", function () {
    searchBox.classList.remove("active");
    overlay.style.display = "none";
  });

  searchBox.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      searchBox.classList.remove("active");
      overlay.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const activeMobile = document.querySelector(".active-mobile");
  const modalOrderLinks = document.querySelector(".modal__order-links");

  function addActiveClass() {
    modalOrderLinks.classList.add("active");
  }

  function removeActiveClass() {
    modalOrderLinks.classList.remove("active");
  }

  activeMobile.addEventListener("click", function () {
    const isActive = modalOrderLinks.classList.contains("active");

    if (isActive) {
      removeActiveClass();
    } else {
      addActiveClass();
    }
  });

  window.addEventListener("click", function (event) {
    if (
      !event.target.closest(".active-mobile") &&
      !event.target.closest(".modal__order-links")
    ) {
      removeActiveClass();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchMobileBtn = document.querySelector(".search-mobile");
  const searchBox = document.querySelector(".mobile__search-box");
  const searchCloseBtn = document.querySelector(".mobile__search-close");
  const body = document.querySelector("body");

  // Добавляем обработчик события на клик по кнопке открытия поиска
  searchMobileBtn.addEventListener("click", function () {
    searchBox.classList.add("active"); // Добавляем класс 'active' к блоку поиска
    body.classList.add("active"); // Добавляем класс 'active' к <body>
  });

  // Добавляем обработчик события на клик по кнопке закрытия поиска
  searchCloseBtn.addEventListener("click", function () {
    searchBox.classList.remove("active"); // Удаляем класс 'active' у блока поиска
    body.classList.remove("active"); // Удаляем класс 'active' у <body>
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navigationRow = document.querySelector(
    ".catalog__page__navigation-row"
  );
  const navigationList = document.querySelector(
    ".catalog__page__navigation-list"
  );

  let isDown = false;
  let startX;
  let scrollLeft;

  // Обработчик начала свайпа
  navigationRow.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - navigationRow.offsetLeft;
    scrollLeft = navigationRow.scrollLeft;
  });
  navigationRow.addEventListener("mouseleave", () => {
    isDown = false;
  });
  navigationRow.addEventListener("mouseup", () => {
    isDown = false;
  });
  navigationRow.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - navigationRow.offsetLeft;
    const walk = (x - startX) * 2; // Увеличьте множитель, если нужно увеличить скорость перемещения
    navigationRow.scrollLeft = scrollLeft - walk;
  });
});
