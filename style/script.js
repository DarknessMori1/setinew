// script.js
$(document).ready(function(){
   // Анимация для заголовка при наведении мыши
   $('.me').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft - $(this).width()/2);
     var rYP = (e.pageY - this.offsetTop - $(this).height()/2);
     $('.me').css('text-shadow',
        +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+
        +rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+
        +rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
   });

   // Анимация появления элементов при скролле
   $(window).scroll(function() {
     $('.skill, .feature, .portfolio-item, .pricing-card, .service-item, .step').each(function() {
       var position = $(this).offset().top;
       var scrollPosition = $(window).scrollTop() + $(window).height();

       if (position < scrollPosition - 50) {
         $(this).addClass('visible');
       }
     });
   });

   // Обработка формы
   $('#contactForm').submit(function(e) {
     e.preventDefault();
     alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
     $(this).trigger('reset');
   });

   // Фильтрация портфолио
   $('.filter-btn').click(function() {
     $('.filter-btn').removeClass('active');
     $(this).addClass('active');

     var filter = $(this).data('filter');

     $('.portfolio-item').each(function() {
       if (filter === 'all' || $(this).data('category').includes(filter)) {
         $(this).show();
       } else {
         $(this).hide();
       }
     });
   });

   // FAQ аккордеон
   $('.faq-question').click(function() {
     $(this).parent().toggleClass('active');
     $(this).parent().siblings().removeClass('active');
   });

   // Анимация skill bars
   $('.skill-level').each(function() {
     $(this).css('width', '0%');
   });

   setTimeout(function() {
     $('.skill-level').each(function() {
       var width = $(this).text();
       $(this).animate({width: width}, 1000);
     });
   }, 500);

   // Анимация изображений при наведении
   $('.portfolio-item').hover(
     function() {
       $(this).find('img').css('transform', 'scale(1.05)');
     },
     function() {
       $(this).find('img').css('transform', 'scale(1)');
     }
   );

   // Добавляем класс visible для элементов при загрузке страницы
   setTimeout(function() {
     $('.skill, .feature, .portfolio-item, .pricing-card, .service-item, .step').each(function() {
       var position = $(this).offset().top;
       var scrollPosition = $(window).scrollTop() + $(window).height();

       if (position < scrollPosition - 50) {
         $(this).addClass('visible');
       }
     });
   }, 100);
});