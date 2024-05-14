(function(){"use strict"
$((function(){$(".animate-box").waypoint((function(t){"down"!==t||$(this.element).hasClass("animated")||($(this.element).addClass("item-animate"),setTimeout((function(){$("body .animate-box.item-animate").each((function(t){var e=$(this)
setTimeout((function(){e.addClass("fadeInUp animated"),e.removeClass("item-animate")}),200*t,"easeInOutExpo")}))}),100))}),{offset:"85%"})}))})()
