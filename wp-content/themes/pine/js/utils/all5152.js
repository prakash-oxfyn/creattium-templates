(function($){
    "use strict"; // Start of use strict    
    
    /* ---------------------------------------------
     Scripts initialization
     --------------------------------------------- */
    
    $(window).on("load", function(){        
        $(window).trigger("scroll");
        $(window).trigger("resize");
        init_parallax_scroll();  
    });    
    
    $(document).ready(function(){  
        $(window).trigger("resize");
        init_parallax();
        init_text_outline();
        init_btn_animation();          
        init_classic_menu();
        init_scroll_navigate();        
   
        init_shortcodes();
        init_tooltips();        
        init_text_rotator();
    
        init_wow();
        init_parallax_mousemove();
    });    
    
    $(window).resize(function(){        
        init_classic_menu_resize();
        init_split_section();
    });
    
    
    /* --------------------------------------------
     Platform detect
     --------------------------------------------- */
    
    var mobileTest;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        mobileTest = true;
        $("html").addClass("mobile");
    }
    else {
        mobileTest = false;
        $("html").addClass("no-mobile");
    }    
    var mozillaTest;
    if (/mozilla/.test(navigator.userAgent)) {
        mozillaTest = true;
    }
    else {
        mozillaTest = false;
    }
    var safariTest;
    if (/safari/.test(navigator.userAgent)) {
        safariTest = true;
    }
    else {
        safariTest = false;
    }
    
    // Detect touch devices    
    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    } else {
        document.documentElement.className += " touch";
    }
    
    
    /* ---------------------------------------------
     Sections helpers
     --------------------------------------------- */
    
    // Progress bars
    var progressBar = $(".progress-bar");
    progressBar.each(function(indx){
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
    });
    
    
    /* ---------------------------------------------
     Nav panel classic
     --------------------------------------------- */
    
    var mobile_nav = $(".mobile-nav");
    var desktop_nav = $(".desktop-nav");
    
    mobile_nav.attr("aria-expanded", "false");
    
    function init_classic_menu_resize(){
        
        // Mobile menu max height
        $(".mobile-on .desktop-nav > ul").css("max-height", $(window).height() - $(".main-nav").height() - 20 + "px");
        
        // Mobile menu style toggle
        if ($(window).width() <= 1024) {
            $(".main-nav").addClass("mobile-on");
            if (!($(".mobile-nav").hasClass("active"))) {
                desktop_nav.css("display", "none");
            }
        }
        else 
            if ($(window).width() > 1024) {
                $(".main-nav").removeClass("mobile-on");
                desktop_nav.css("display", "block");
            }
    }
    
    function init_classic_menu(){    
        
        // Transpaner menu
                
        if ($(".main-nav").hasClass("transparent")){
           $(".main-nav").addClass("js-transparent"); 
        } else if (!($(".main-nav").hasClass("dark"))){
           $(".main-nav").addClass("js-no-transparent-white");
        }
        
        $(window).scroll(function(){        
            
            if ($(window).scrollTop() > 0) {
                $(".js-transparent").removeClass("transparent");
                $(".main-nav, .nav-logo-wrap .logo").addClass("small-height");
                $(".light-after-scroll").removeClass("dark");
                $(".main-nav").addClass("body-scrolled");
            }
            else if ($(window).scrollTop() === 0){
                $(".js-transparent").addClass("transparent");
                $(".main-nav, .nav-logo-wrap .logo").removeClass("small-height");
                $(".light-after-scroll").addClass("dark");
                $(".main-nav").removeClass("body-scrolled");
            }
            
            
        });
        
        // Mobile menu toggle
        
        mobile_nav.click(function(){
                  
            if (desktop_nav.hasClass("js-opened")) {
                desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
                $(this).removeClass("active");
                $(this).attr("aria-expanded", "false");
            }
            else {
                desktop_nav.slideDown("slow", "easeOutQuart").addClass("js-opened");
                $(this).addClass("active");
                $(this).attr("aria-expanded", "true");
                // Fix for responsive menu
                if ($(".main-nav").hasClass("not-top")){
                    $(window).scrollTo(".main-nav", "slow"); 
                }                
            }   
                     
        });
        
        $(document).on("click", function(event){            
            if ($(window).width() <= 1024) {
                var $trigger = $(".main-nav");
                if ($trigger !== event.target && !$trigger.has(event.target).length) {
                    desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
                    mobile_nav.removeClass("active");
                    mobile_nav.attr("aria-expanded", "false");
                }
            }
        });
        
        mobile_nav.keydown(function(e){
            if (e.keyCode == 13 || e.keyCode == 32) {
                if (desktop_nav.hasClass("js-opened")) {
                    desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
                    $(this).removeClass("active");
                    $(this).attr("aria-expanded", "false");
                }
                else {
                    desktop_nav.slideDown("slow", "easeOutQuart").addClass("js-opened");
                    $(this).addClass("active");
                    $(this).attr("aria-expanded", "true");
                    // Fix for responsive menu
                    if ($(".main-nav").hasClass("not-top")) {
                        $(window).scrollTo(".main-nav", "slow");
                    }
                }
            }        
        });
        
        desktop_nav.find("a:not(.mn-has-sub)").click(function(){
            if (mobile_nav.hasClass("active")) {
                desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
                mobile_nav.removeClass("active");
                mobile_nav.attr("aria-expanded", "false");
            }
        });
        
        
        // Sub menu
        
        var mnHasSub = $(".mn-has-sub");
        var mnThisLi;
        
        mnHasSub.attr({
            "role": "button",
            "aria-expanded": "false",
            "aria-haspopup": "true"
        });
        
        mnHasSub.click(function(){
        
            if ($(".main-nav").hasClass("mobile-on")) {
                mnThisLi = $(this).parent("li:first");
                if (mnThisLi.hasClass("js-opened")) {
                    $(this).attr("aria-expanded", "false");
                    mnThisLi.find(".mn-sub:first").slideUp(function(){
                        mnThisLi.removeClass("js-opened");
                    });
                }
                else {
                    $(this).attr("aria-expanded", "true");
                    mnThisLi.addClass("js-opened");
                    mnThisLi.find(".mn-sub:first").slideDown();
                }
                
                return false;
            }
            
        });
        
        mnThisLi = mnHasSub.parent("li");
        mnThisLi.hover(function(){
        
            if (!($(".main-nav").hasClass("mobile-on"))) {
                $(this).find(".mn-has-sub:first")
                    .attr("aria-expanded", "true")
                    .addClass("js-opened");
                $(this).find(".mn-sub:first").stop(true, true).fadeIn("fast");
            }
            
        }, function(){
        
            if (!($(".main-nav").hasClass("mobile-on"))) {
                $(this).find(".mn-has-sub:first")
                    .attr("aria-expanded", "false")
                    .removeClass("js-opened");
                $(this).find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast");
            }
            
        });
        
        /* Keyboard navigation for main menu */
       
        mnHasSub.keydown(function(e){            
        
            if ($(".main-nav").hasClass("mobile-on")) {                
                if (e.keyCode == 13 || e.keyCode == 32) {                
                    mnThisLi = $(this).parent("li:first");
                    if (mnThisLi.hasClass("js-opened")) {
                        $(this).attr("aria-expanded", "false");
                        mnThisLi.find(".mn-sub:first").slideUp(function(){                            
                            mnThisLi.removeClass("js-opened");
                        });
                    }
                    else {
                        $(this).attr("aria-expanded", "true");
                        mnThisLi.addClass("js-opened");
                        mnThisLi.find(".mn-sub:first").slideDown();
                    }
                    
                    return false;
                }
            }
            
        });
        
        $(".inner-nav a").focus(function(){
            if (!($(".main-nav").hasClass("mobile-on")) && ($("html").hasClass("no-touch")) && (!($(this).parent("li").find(".mn-sub:first").is(":visible")))) {
                $(this).parent("li").parent().children().find(".mn-has-sub:first")
                    .attr("aria-expanded", "false")
                    .removeClass("js-opened");
                $(this).parent("li").parent().children().find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast");
            }
        });
     
        $(".inner-nav a").first().keydown(function(e){
            if (!($(".main-nav").hasClass("mobile-on"))) {
                if (e.shiftKey && e.keyCode == 9) {
                    $(this).parent("li").find(".mn-has-sub:first")
                        .attr("aria-expanded", "false")
                        .removeClass("js-opened");
                    $(this).parent("li").find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast");
                }
            }
        });
        
        $(".mn-sub li:last a").keydown(function(e){
            if (!($(".main-nav").hasClass("mobile-on"))) {
                if (!e.shiftKey && e.keyCode == 9) {
                    $(this).parent("li").parent().parent().find(".mn-has-sub:first")
                        .attr("aria-expanded", "false")
                        .removeClass("js-opened");
                    $(this).parent("li").parent().stop(true, true).delay(100).fadeOut("fast");
                }
            }
        }); 

        $(document).keydown(function(e){
            if (!($(".main-nav").hasClass("mobile-on"))) {
                if (e.keyCode == 27) {
                    if (mnHasSub.parent("li").find(".mn-sub:first li .mn-sub").is(":visible")){
                        mnHasSub.parent("li").find(".mn-sub:first li .mn-has-sub")
                            .attr("aria-expanded", "false")
                            .removeClass("js-opened");
                        mnHasSub.parent("li").find(".mn-sub:first li .mn-sub").stop(true, true).delay(100).fadeOut("fast");
                    } else{
                        mnHasSub.parent("li").find(".mn-has-sub:first")
                            .attr("aria-expanded", "false")
                            .removeClass("js-opened");
                        mnHasSub.parent("li").find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast");
                    }
                    
                }
            }
        });
         
        mnHasSub.on("click", function () { 
            if (!($(".main-nav").hasClass("mobile-on"))) {                
                if (!($(this).hasClass("js-opened"))){
                    $(this).addClass("js-opened");
                    $(this).attr("aria-expanded", "true");
                    $(this).parent("li").find(".mn-sub:first").fadeIn("fast");
                    return false;
                }
                else{
                    $(this).removeClass("js-opened");
                    $(this).attr("aria-expanded", "false");
                    $(this).parent("li").find(".mn-sub:first").fadeOut("fast");
                    return false;
                }                
            }            
        });
        
    }
    
    
    /* ---------------------------------------------
     Scroll navigation
     --------------------------------------------- */
    
    function init_scroll_navigate(){
        
        const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)") === true || window.matchMedia("(prefers-reduced-motion: reduce)").matches === true;
        
        if (!(!!isReduced)) {
            $(".local-scroll").localScroll({
                target: "body",
                duration: 1500,
                offset: 0,
                easing: "easeInOutQuart",
                onAfter: function(anchor, settings){
                    anchor.focus();
                    if (anchor.is(":focus")) {
                        return !1;
                    }
                    else {
                        anchor.attr("tabindex", "-1");
                        anchor.focus()
                    }        
                }
            });
        } 
        
        var sections = $(".home-section:not(.scroll-nav-invisible), .page-section:not(.scroll-nav-invisible)");
        var menu_links = $(".scroll-nav li a");
        
        $(window).scroll(function(){
        
            sections.filter(":in-viewport:first").each(function(){
                var active_section = $(this);
                var active_link = $('.scroll-nav li a[href="#' + active_section.attr("id") + '"]');
                menu_links.removeClass("active");
                active_link.addClass("active");
            });
            
        });
        
    }
    
    
    /* ---------------------------------------------
     Lazyload
     --------------------------------------------- */
    
    function init_lazyload(){
    
        $(".img-lazy").lazyload({
            effect: "fadeIn",
            effectspeed: 1000,
            skip_invisible : false,
            threshold : 200
        });        
        $(".img-lazy-work").lazyload({
            effect: "fadeIn",
            effectspeed: 1000,
            skip_invisible : false,
            threshold : 200
        });
        
    }
    
    
    
    
    
    /* -------------------------------------------
     Background Parallax
     --------------------------------------------- */
    
    function init_parallax(){
        
        setTimeout(() => {
            if ((mobileTest == false) && $("html").hasClass("no-touch")) {
                $(".parallax-1").each(function(){$(this).parallax("50%", 0.1);});
                $(".parallax-2").each(function(){$(this).parallax("50%", 0.2);});
                $(".parallax-3").each(function(){$(this).parallax("50%", 0.3);});
                $(".parallax-4").each(function(){$(this).parallax("50%", 0.4);});
                $(".parallax-5").each(function(){$(this).parallax("50%", 0.5);});
                $(".parallax-6").each(function(){$(this).parallax("50%", 0.6);});
                $(".parallax-7").each(function(){$(this).parallax("50%", 0.7);});
                $(".parallax-8").each(function(){$(this).parallax("50%", 0.8);});
                $(".parallax-9").each(function(){$(this).parallax("50%", 0.9);});
                $(".parallax-10").each(function(){$(this).parallax("50%", 0.1);});
            }
        }, "350");
        
        if ($(window).width() < 1024) {
            setTimeout(() => {
                $(".parallax-1").each(function(){$(this).parallax("50%", 0);});
                $(".parallax-2").each(function(){$(this).parallax("50%", 0);});
                $(".parallax-3").each(function(){$(this).parallax("50%", 0);});
                $(".parallax-4").each(function(){$(this).parallax("50%", 0);});
                $(".parallax-5").each(function(){$(this).parallax("50%", 0);});
                $(".parallax-6").each(function(){$(this).parallax("50%", 0);});
                $(".parallax-7").each(function(){$(this).parallax("50%", 0);});
                $(".parallax-8").each(function(){$(this).parallax("50%", 0);});
                $(".parallax-9").each(function(){$(this).parallax("50%", 0);});
                $(".parallax-10").each(function(){$(this).parallax("50%", 0);});
            }, "350");
        }

    }    
    
    
    /* -------------------------------------------
     Parallax on Mousemove
     --------------------------------------------- */
    
    function init_parallax_mousemove(){
        
        const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)") === true || window.matchMedia("(prefers-reduced-motion: reduce)").matches === true;

        if (!(!!isReduced)) {
            if ($("html").hasClass("no-mobile")) {
            
                $(".parallax-mousemove-scene").on("mousemove", function(e){
                    var w = $(window).width();
                    var h = $(window).height();
                    var offsetX = 0.5 - (e.pageX - $(this).offset().left) / w;
                    var offsetY = 0.5 - (e.pageY - $(this).offset().top) / h;
                    $(this).find(".parallax-mousemove").each(function(i, el){
                        var offset = parseInt($(el).data('offset'));
                        var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";
                        $(el).css({
                            "transform": translate
                        });
                    });
                });
                $(".parallax-mousemove-scene").on("mousemove", function(e){
                    var offsetX = e.pageX - $(this).offset().left;
                    var offsetY = e.pageY - $(this).offset().top;
                    $(this).find(".parallax-mousemove-follow").each(function(i, el){
                        $(el).css({
                            "left": offsetX,
                            "top": offsetY
                        });                    
                    });
                    $(".parallax-mousemove-follow").each(function(i, el){
                        $(el).css({
                            "left": offsetX
                        });
                    });
                });
                $(".parallax-mousemove-scene").on("mouseenter", function(e){
                    $(this).find(".parallax-mousemove-follow").each(function(i, el){
                        setTimeout(() => {
                            $(el).css({
                                "transition": "all .27s var(--ease-out-short)",
                                "will-change": "transform"
                            });
                        }, "27");
                    });
                });
                $(".parallax-mousemove-scene").on("mouseout", function(e){
                    $(this).find(".parallax-mousemove-follow").each(function(i, el){
                        $(el).css({
                            "transition": "none"
                        });
                    });
                });
            
            }
        }
    }
    
    /* -------------------------------------------
     Parallax on Scroll
     --------------------------------------------- */
    
    function init_parallax_scroll(){
        
        const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)") === true || window.matchMedia("(prefers-reduced-motion: reduce)").matches === true;
        
        if (!(!!isReduced)) {        
        
            if ($("[data-rellax-y]").length) {            
                if (($(window).width() >= 1280) && (mobileTest == false)) {
                
                    var rellax_y = new Rellax("[data-rellax-y]", {
                        vertical: true,
                        horizontal: false
                    });
                    
                    $(window).scroll(function(){
                        $("[data-rellax-y]").filter(":in-viewport").each(function(){
                            if (!($(this).hasClass("js-in-viewport"))) {
                                $(this).addClass("js-in-viewport");
                                rellax_y.refresh();
                            }
                        });
                        $("[data-rellax-y]").not(":in-viewport").each(function(){
                            if ($(this).hasClass("js-in-viewport")) {
                                $(this).removeClass("js-in-viewport");
                            }
                        });
                    });
                    
                }                
            }
            
            if ($("[data-rellax-x]").length) {            
                if (($(window).width() >= 1280) && (mobileTest == false)) {
                
                    var rellax_x = new Rellax("[data-rellax-x]", {
                        horizontal: true
                    });
                    
                    $(window).scroll(function(){
                        $("[data-rellax-x]").filter(":in-viewport").each(function(){
                            if (!($(this).hasClass("js-in-viewport"))) {
                                $(this).addClass("js-in-viewport");
                                rellax_x.refresh();
                            }
                        });
                        $("[data-rellax-x]").not(":in-viewport").each(function(){
                            if ($(this).hasClass("js-in-viewport")) {
                                $(this).removeClass("js-in-viewport");
                            }
                        });
                    });
                    
                }                
            }
            
        }
    }

    
    /* -------------------------------------------
     Text Rotator
     --------------------------------------------- */
    
    function init_text_rotator(){
        
        $(".text-rotate").each(function(){            
            var text_rotator = $(this);
            var text_rotator_cont = text_rotator.html();
            text_rotator.attr("aria-hidden", "true");
            text_rotator.before("<span class='visually-hidden'>" + text_rotator_cont + "</span>");
            text_rotator.Morphext({
                animation: "fadeIn",
                separator: ",",
                speed: 4000
            });            
        });
        
    }
    
        
    
    /* ---------------------------------------------
     Tooltips (Bbootstrap plugin activation)
     --------------------------------------------- */
    
    function init_tooltips(){
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl){
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    }
    
    
    /* ---------------------------------------------
     Team
     --------------------------------------------- */   
     
    function init_team(){
    
        $(".team-carousel").each(function(){
            $(this).css("--team-item-descr-height", $(this).find(".team-item-descr").height() + "px");
        });
        
        // Hover        
        $(".team-item").click(function(){
            if ($("html").hasClass("mobile")) {
                $(this).toggleClass("js-active");
            }
        });
        
        // Keayboar navigation for team section        
        $(".team-social-links > a").on("focus blur", function(){
             if (!($("html").hasClass("mobile"))) {
                 $(this).parent().parent().parent().parent().toggleClass("js-active");
             }       
        });        
   
    }
    
    
    /* ---------------------------------------------
     Services 2
     --------------------------------------------- */   
     
    function init_services_2(){
        $(".services-2-button").attr("aria-expanded", "false");
        $(".services-2-descr").attr("aria-hidden", "true");    
        $(".services-2-button").click(function(){
            if ($(this).hasClass("active")){              
                $(this).removeClass("active");
                $(this).attr("aria-expanded", "false");
                $(this).next(".services-2-descr").removeClass("js-visible");
                $(this).next(".services-2-descr").attr("aria-hidden", "true");
            } else{
                $(".services-2-button").removeClass("active");
                $(".services-2-button").attr("aria-expanded", "false");
                $(".services-2-button").next(".services-2-descr").removeClass("js-visible");
                $(".services-2-button").next(".services-2-descr").attr("aria-hidden", "true");
                $(this).addClass("active");
                $(this).attr("aria-expanded", "true");
                $(this).next(".services-2-descr").addClass("js-visible");
                $(this).next(".services-2-descr").removeAttr("aria-hidden");                
            }
        });
        $(".services-2-button").keydown(function(e){                       
            if (e.keyCode == 13 || e.keyCode == 32) {                
                if ($(this).hasClass("active")){              
                    $(this).removeClass("active");
                    $(this).attr("aria-expanded", "false");
                    $(this).next(".services-2-descr").removeClass("js-visible");
                    $(this).next(".services-2-descr").attr("aria-hidden", "true");
                } else{
                    $(".services-2-button").removeClass("active");
                    $(".services-2-button").attr("aria-expanded", "false");
                    $(".services-2-button").next(".services-2-descr").removeClass("js-visible");
                    $(".services-2-button").next(".services-2-descr").attr("aria-hidden", "true");
                    $(this).addClass("active");
                    $(this).attr("aria-expanded", "true");
                    $(this).next(".services-2-descr").addClass("js-visible");
                    $(this).next(".services-2-descr").removeAttr("aria-hidden");                
                }                
                return false;
            }          
        });
    }
    
    
    /* ---------------------------------------------
     Split Section
     --------------------------------------------- */   
     
    function init_split_section(){
        var split_column_padding = ( $(window).width() - $(".container").first().width()) / 2;
        $(".split-column-left").css("padding-left", split_column_padding + "px");
        $(".split-column-right").css("padding-right", split_column_padding + "px");
    }
    
    
    /* ---------------------------------------------
     Shortcodes
     --------------------------------------------- */
    
    function init_shortcodes(){
        
        // Accordion        
        $(".accordion").each(function(){
            var allPanels = $(this).children("dd").hide();
            var allTabs = $(this).children("dt").children("a");
            allTabs.attr("role", "button");
            $(this).children("dd").first().show();
            $(this).children("dt").children("a").first().addClass("active");
            $(this).children("dt").children("a").attr("aria-expanded", "false");
            $(this).children("dt").children("a").first().attr("aria-expanded", "true");
                        
            $(this).children("dt").children("a").click(function(){        
                var current = $(this).parent().next("dd");
                allTabs.removeClass("active");
                $(this).addClass("active");
                allTabs.attr("aria-expanded", "false");
                $(this).attr("aria-expanded", "true");
                allPanels.not(current).slideUp("easeInExpo");
                $(this).parent().next().slideDown("easeOutExpo");                
                return false;                
            });
            
         });      
         
         // Accordion style 1       
        $(".accordion-1").each(function(){
            var allPanels = $(this).children("dd").hide();
            var allTabs = $(this).children("dt").children("a");
            allTabs.attr("role", "button");
                        
            $(this).children("dt").children("a").click(function(){
                
                if ($(this).hasClass("active")) {
                    var current = $(this).parent().next("dd");
                    allTabs.removeClass("active");
                    allTabs.attr("aria-expanded", "false");
                    allPanels.slideUp("easeInExpo");
                    allPanels.removeClass("active");                
                    return false;
                } else{
                    var current = $(this).parent().next("dd");
                    allTabs.removeClass("active");
                    $(this).addClass("active");
                    allTabs.attr("aria-expanded", "false");
                    $(this).attr("aria-expanded", "true");
                    allPanels.not(current).slideUp("easeInExpo");
                    $(this).parent().next().slideDown("easeOutExpo");
                    allPanels.removeClass("active");
                    current.addClass("active");                
                    return false;
                }        
                            
            });
            
         });   
        
               
    }    
    
})(jQuery); // End of use strict


/* ---------------------------------------------
 WOW animations
 --------------------------------------------- */

function init_wow(){
    (function($){
        
        setTimeout(() => {
            
           /* Wow init */
           
            if ($("body").hasClass("appear-animate")) {
                $(".wow").addClass("no-animate");
            }
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 100,
                mobile: false, 
                live: true,
                callback: function(box){                
                    setInterval(function(){ $(box).removeClass("no-animate"); }, 1500);
                }
            });
            
            if ($("body").hasClass("appear-animate")){
               wow.init();            
            } else{
                $(".wow").css("opacity", "1");
            }
            
            /* Wow for portfolio init */
           
            if ($("body").hasClass("appear-animate")) {
                $(".wow-p").addClass("no-animate");
            }
            var wow_p = new WOW({
                boxClass: 'wow-p',
                animateClass: 'animated',
                offset: 100,
                mobile: false, 
                live: true,
                callback: function(box){                
                    setInterval(function(){ $(box).removeClass("no-animate"); }, 1500);
                }
            });
            
            if ($("body").hasClass("appear-animate")){
               wow_p.init();            
            } else{
                $(".wow-p").css("opacity", "1");
            }
            
            /* Wow for menu bar init */
            
            if (($("body").hasClass("appear-animate")) && ($(window).width() >= 1024) && ($("html").hasClass("no-mobile"))){
               $(".wow-menubar").addClass("no-animate").addClass("fadeInDown").addClass("animated");  
               setInterval(function(){ $(".wow-menubar").removeClass("no-animate"); }, 1500);         
            } else{
                $(".wow-menubar").css("opacity", "1");
            }                        
        
        }, "100"); 
        
        /* Splitting JS accessibility fix */
           
        $("[data-splitting='chars']").each(function(){
            var splitting_chars = $(this);
            var splitting_chars_cont = splitting_chars.html();
            splitting_chars.attr("aria-hidden", "true");
            splitting_chars.before("<span class='visually-hidden user-select-none'>" + splitting_chars_cont + "</span>");
        });
        
    })(jQuery);
}


/* ---------------------------------------------
 Text outline effect accessibility fix
 --------------------------------------------- */

function init_text_outline(){
    (function($){    
    
        $(".text-outline").each(function(){
            var text_outline = $(this);
            var text_outline_cont = text_outline.html();
            text_outline.before("<span class='text-outline-2' aria-hidden='true'>" + text_outline_cont + "</span>");
            text_outline.before("<span class='text-outline-1' aria-hidden='true'>" + text_outline_cont + "</span>");
        });
        
    })(jQuery);
}


/* ---------------------------------------------
 Buttons and links animation helper
 --------------------------------------------- */

function init_btn_animation(){
    (function($){    
    
        $("[data-btn-animate=y]").each(function(){
            var btn_animate_y = $(this);
            var btn_animate_y_cont = btn_animate_y.html();
            btn_animate_y.html('<span class="btn-animate-y"><span class="btn-animate-y-1">' + btn_animate_y_cont + '</span><span class="btn-animate-y-2" aria-hidden="true">' + btn_animate_y_cont + '</span></span>');
        });
        
        $("[data-btn-animate=ellipse]").each(function(){
            var btn_animate_ellipse = $(this);
            var btn_animate_ellipse_cont = btn_animate_ellipse.html();
            btn_animate_ellipse.html('<span class="btn-ellipse-inner"><span class="btn-ellipse-unhovered">' + btn_animate_ellipse_cont + '</span><span class="btn-ellipse-hovered" aria-hidden="true">' + btn_animate_ellipse_cont + '</span></span>');
        });
        
        $("[data-link-animate=y]").each(function(){
            var link_animate_y = $(this);
            var link_animate_y_cont = link_animate_y.html();
            link_animate_y.html('<span class="link-strong link-strong-unhovered">' + link_animate_y_cont + '</span><span class="link-strong link-strong-hovered" aria-hidden="true">' + link_animate_y_cont + '</span></span>');
        });
        
    })(jQuery);
}


/* ---------------------------------------------
 Polyfill for :focus-visible     
 --------------------------------------------- */

/**
 * https://github.com/WICG/focus-visible
 */
function init() {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;

  var inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (
      el &&
      el !== document &&
      el.nodeName !== 'HTML' &&
      el.nodeName !== 'BODY' &&
      'classList' in el &&
      'contains' in el.classList
    ) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;

    if (tagName == 'INPUT' && inputTypesWhitelist[type] && !el.readOnly) {
      return true;
    }

    if (tagName == 'TEXTAREA' && !el.readOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * Treat `keydown` as a signal that the user is in keyboard modality.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {Event} e
   */
  function onKeyDown(e) {
    if (isValidFocusTarget(document.activeElement)) {
      addFocusVisibleClass(document.activeElement);
    }

    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (
      e.target.classList.contains('focus-visible') ||
      e.target.hasAttribute('data-focus-visible-added')
    ) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
        hadFocusVisibleRecently = false;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState == 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('focus', onFocus, true);
  document.addEventListener('blur', onBlur, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();

  document.body.classList.add('js-focus-visible');
}

/**
 * Subscription when the DOM is ready
 * @param {Function} callback
 */
function onDOMReady(callback) {
  var loaded;

  /**
   * Callback wrapper for check loaded state
   */
  function load() {
    if (!loaded) {
      loaded = true;

      callback();
    }
  }

  if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
    callback();
  } else {
    loaded = false;
    document.addEventListener('DOMContentLoaded', load, false);
    window.addEventListener('load', load, false);
  }
}

if (typeof document !== 'undefined') {
  onDOMReady(init);
}



