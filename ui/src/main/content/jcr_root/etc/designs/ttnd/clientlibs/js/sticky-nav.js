$(document).ready(function () {
var mod_pagespeed_fAFgRwPrCM = "var scrollHeaderElementsIdArray=[];var lastElementDivId;$(document).ready(function(){$(\".plus-icon\").click(function(){$(this).next().next('.data').slideToggle();$(this).toggleClass('active');$(this).parent().siblings().children().removeClass('active');$(this).parent().siblings().children().next().slideUp();return false;});$(\".question p\").click(function(){$(this).next('.data').slideToggle();if($(this).prev(\".plus-icon\").hasClass(\"active\")){$(this).prev(\".plus-icon\").removeClass('active');}else{$(this).prev(\".plus-icon\").addClass('active');}\nreturn false;});$('.navigation ul li a').click(function(event){var divID=$(this).attr(\"href\");var scrollDistance=$(divID).offset().top-$(document).scrollTop();if((scrollDistance<2500&&scrollDistance>0)||(scrollDistance>-2500&&scrollDistance<0)){$('html, body').animate({scrollTop:$(divID).offset().top-70},500);}else{$('html, body').animate({scrollTop:$(divID).offset().top-70},1500);}});$(\".detail a\").on(\"click\",function(event){event.preventDefault();$('html, body').animate({scrollTop:$(\".case-study\").offset().top-100},500);});trimBlogText();(function(){$(\".navigation ul li a\").each(function(){scrollHeaderElementsIdArray.push($(this).attr(\"href\"))})}());});var $activeItem;$(window).scroll(function(){var scroll=$(window).scrollTop();if(scroll>=200){$(\".scrool-header\").slideDown(\"fast\").show();}\nif(scroll<=200){$(\".scrool-header\").slideUp(\"fast\").hide();}\nlastElementDivId=scrollHeaderElementsIdArray[scrollHeaderElementsIdArray.length-1];if(scroll>=460&&scroll<$(lastElementDivId).offset().top+$(lastElementDivId).outerHeight(true)-80){$(\".navigation ul li a\").each(function(){if($(this).attr(\"href\")==getIdOfActiveScrollDiv(scroll+80)){$activeItem=$(this);$(\".navigation ul li a\").css({\"color\":\"#fff\"});$(\".navigation ul li\").css({\"border-bottom\":\"4px solid #000\"});$($activeItem).parent().css({\"border-bottom\":\"4px solid #fe8422\"});$($activeItem).css({\"color\":\"#fe8422\"});}});}else{$(\".navigation ul li\").css({\"border-bottom\":\"4px solid #000\"});$(\".navigation ul li a\").css({\"color\":\"#fff\"});}});function getIdOfActiveScrollDiv(currentScrollPosition){for(count=scrollHeaderElementsIdArray.length-1;count>=0;count--){if(currentScrollPosition>=$(scrollHeaderElementsIdArray[count]).offset().top){return scrollHeaderElementsIdArray[count]}}};function trimBlogText(){jQuery('#blogs .heading a').each(function(){var blogCharLimit=90;var that=jQuery(this),title=that.text(),chars=title.length;if(chars>blogCharLimit){var newTitle=title.substring(0,blogCharLimit)+\" ...\";that.text(newTitle);}});}";
eval(mod_pagespeed_fAFgRwPrCM);
});