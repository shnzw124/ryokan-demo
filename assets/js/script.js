$(function(){
  // ここからスクリプトを書いていく
  // ...

  // ハンバーガーメニュー
  $('.burger__icon, .burger__item').on('click',function(){
    $('.burger__icon').toggleClass('close');
    $('.burger__wrapper').fadeToggle(500);
  });

  // タブ
  $('.news__tabs-link').click(function(){
    if($(this).hasClass("active")){
      return false;
    } else {
      $('.news__content').hide();
      $($(this).attr("href")).show();
      $('.news__tabs-link').removeClass("active");
      $(this).addClass("active");
      return false;
    }
  });

  // ファーストビューアニメーション
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true, // ループの指定
    effect: "fade", //フェードの指定
    autoplay: {
        delay: 4000, //４秒後に次のスライドへ
        disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
    },
    speed: 2000, //２秒かけてフェードで切り替わる
    allowTouchMove: false,//マウスでのスワイプを禁止
  });

  // ヘッダー表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      // $('header').fadeIn();
      $('header').removeClass("hidden");
    } else {
      // $('header').fadeOut();
      $('header').addClass("hidden");
    }
  });

  // モーダル
  $('.header__btn').click(function(){
    $('.modal').fadeIn();
    $('.modal').removeClass("hidden");
    $('body').css({
      // 背景を固定
      'overflow': 'hidden',
      // 'position': 'fixed'
    })
  });
  $('.modal__close-btn , .modal__bg').click(function(){
    $('.modal').fadeOut();
    $('.modal').addClass("hidden");
    $('body').css({
      // 背景固定を解除
      'overflow': 'unset',
      // 'position': 'static'
    })
  });

  // flatpickrの初期化
  $('#date').flatpickr({
    altInput: true,
    minDate: "today",
    mode: "range",
    locale: "ja"
  });

  // AOS.js
  AOS.init({
    duration: 3000
  });
});
