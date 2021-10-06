$(function(){
  // ここからスクリプトを書いていく
  // ...

  // ハンバーガーメニュー
  $('.burger__icon, .burger__item').on('click',function(){
    $('.burger__icon').toggleClass('close');
    $('.burger__wrapper').fadeToggle(500);
  });

  // AOS.js
  AOS.init({
    duration: 3000
  });
});
