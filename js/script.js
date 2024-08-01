jQuery(function ($) {
  // $はjQueryを表す
  jQuery(function ($) {
    // ハンバーガーメニュー
    $(function () {
      $(".js-hamburger").click(function () {
        $(this).toggleClass("is-open");
        $(".js-drawer").toggleClass("is-open");
      });

      // ドロワーナビのaタグをクリックで閉じる
      $(".js-drawer a[href]").on("click", function () {
        $(".js-hamburger").removeClass("is-open");
        $(".js-drawer").removeClass("is-open");
      });

      // resizeイベント
      $(window).on("resize", function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
          $(".js-hamburger").removeClass("is-open");
          $(".js-drawer").removeClass("is-open");
        }
      });
    });
  });
});
/*==============================================================
# smooth scroll
==============================================================*/

$('a[href^="#"]').on("click", function () {
  const speed = 300;
  const headerHeight = $("header").outerHeight(); // ヘッダーの高さを動的に取得
  const id = $(this).attr("href");
  const target = $("#" == id ? "html" : id);
  const position = $(target).offset().top - headerHeight;
  $("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
  return false;
});

/*==============================================================
# submit disabled
==============================================================*/

$(document).ready(function () {
  function checkInput() {
    const textInput = $("#js-inputText").val();
    const textEmail = $("#js-inputEmail").val();
    const textArea = $("#js-textarea").val();
    const radioSelected = $('.js-radio:checked').length > 0;
    const checkboxChecked = $('#js-checkbox').is(':checked');

    if (textInput && textEmail && textArea && radioSelected && checkboxChecked) {
      $("#submit").prop("disabled", false).removeClass("disabled");
    } else {
      $("#submit").prop("disabled", true).addClass("disabled");
    }
  }

  // フォームの各フィールドの入力イベントを監視
  $('#js-inputText, #js-inputEmail, #js-textarea, .js-radio, #js-checkbox').on(
    "input change",
    checkInput
  );

  // ページ読み込み時にもチェックを行う
  checkInput();
});

// $('').on('submit', function (e) {
//     e.preventDefault();

//     return false;
// });
