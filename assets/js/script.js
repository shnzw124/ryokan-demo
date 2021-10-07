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

  // AOS.js
  AOS.init({
    duration: 3000
  });
});
