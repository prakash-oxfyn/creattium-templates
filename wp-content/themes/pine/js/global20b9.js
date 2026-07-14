window.pineOptions = pineOptions;
window.BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version",this.OS=this.searchString(this.dataOS)||"an unknown OS",this.isEdge=window.navigator.userAgent.indexOf("Edge")>-1?true:false,this.isModernIE=window.navigator.userAgent.indexOf("Trident")>-1&&!this.isEdge?true:false},searchString:function(i){for(var n=0;n<i.length;n++){var r=i[n].string,t=i[n].prop;if(this.versionSearchString=i[n].versionSearch||i[n].identity,r){if(-1!=r.indexOf(i[n].subString))return i[n].identity}else if(t)return i[n].identity}},searchVersion:function(i){var n=i.indexOf(this.versionSearchString);if(-1!=n)return parseFloat(i.substring(n+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};BrowserDetect.init();
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	},
	allExceptIpad: function(){
		return (isMobile.Android() || isMobile.BlackBerry() || navigator.userAgent.match(/iPhone|iPod/i) || isMobile.Opera() || isMobile.Windows());
	}
};

if (window.location.hash) {
	window.treethemesOrigHash = window.location.hash;
	jQuery(document).scrollTop(0); 
}

$ = (jQuery);

(function($) {
	"use strict";
	jQuery.fn.getHiddenDimensions = function(includeMargin) {
		var $item = this,
			props = { position: 'absolute', visibility: 'hidden', display: 'block' },
			dim = { width:0, height:0, innerWidth: 0, innerHeight: 0,outerWidth: 0,outerHeight: 0 },
			$hiddenParents = $item.parents().andSelf().not(':visible'),
			includeMargin = (includeMargin == null)? false : includeMargin;
	
		var oldProps = [];
		$hiddenParents.each(function() {
			var old = {};
	
			for ( var name in props ) {
				old[ name ] = this.style[ name ];
				this.style[ name ] = props[ name ];
			}
	
			oldProps.push(old);
		});
	
		dim.width = $item.width();
		dim.outerWidth = $item.outerWidth(includeMargin);
		dim.innerWidth = $item.innerWidth();
		dim.height = $item.height();
		dim.innerHeight = $item.innerHeight();
		dim.outerHeight = $item.outerHeight(includeMargin);
	
		return dim;
	}
	
}(jQuery));

function correct_pine_mega_menu(){
	jQuery('header:not(.headerclone) .navbar-collapse li.pine_mega_menu > ul.menu-depth-1, .header_style8_left_container .navbar-collapse li.pine_mega_menu > ul.menu-depth-1, .header_style9_left_container .navbar-collapse li.pine_mega_menu > ul.menu-depth-1').each(function(){
		var four_plus_columns = false;
		if (jQuery('header.style8').length){
			var colsNum = jQuery(this).children('li').length;
			if (jQuery(this).width(jQuery('.header_style8_right').width()-1).children('li').length > 4){
				var columns_width = 100 / jQuery(this).children('li').length;
				four_plus_columns = true;
				jQuery(this).children('li').css({
					'min-width' : columns_width+"%",
					'max-width' : columns_width+"%",
					'width'		: columns_width+"%"
				}).find('ul').css('min-width','100%');
			}
		} else if (jQuery('body.style9').length){
			var colsNum = jQuery(this).children('li').length;
			if (jQuery(this).width(jQuery(window).width() - jQuery('.header_style9_left_container').width()-1).children('li').length > 4){
				var columns_width = 100 / jQuery(this).children('li').length;
				four_plus_columns = true;
				jQuery(this).children('li').css({
					'min-width' : columns_width+"%",
					'max-width' : columns_width+"%",
					'width'		: columns_width+"%"
				}).find('ul').css('min-width','100%');
			}
		} else {
			if (jQuery(this).children('li').length > 4){
				var columns_width = 100 / jQuery(this).children('li').length;
				four_plus_columns = true;
				jQuery(this).css({
					'max-width' : '100vw',
					'width'		: '100vw'
				}).children('li').css({
					'min-width' : columns_width+"%",
					'max-width' : columns_width+"%",
					'width'		: columns_width+"%"
				}).find('ul').css('min-width','100%');
			}
			
			if (jQuery(this).children('li').length == 4){
				jQuery(this).css({
					'max-width' : '840px',
					'width'		: '840px'
				}).children('li').css({
					'width'		: "203px"
				}).find('ul').css('min-width','100%');
			}
			if (jQuery(this).children('li').length == 3){
				jQuery(this).css({
					'max-width' : '620px',
					'width'		: '620px'
				}).children('li').css({
					'width'		: "198px"
				}).find('ul').css('min-width','100%');
			}
			
			if (jQuery(this).children('li').length == 2){

				jQuery(this).css({
					'max-width' : '470px',
					'width'		: '470px'
				}).children('li').css({
					'width'		: "225px"
				}).find('ul').css('min-width','100%');
			}
			
			if (jQuery('body').hasClass('rtl')){
				jQuery(this).css('right',0);
				
				var right_real_margin = (jQuery(window).width()-jQuery(this).width())/2,
					right_offset = jQuery(window).width()- (jQuery(this).width() + jQuery(this).offset().left),
					right_adjust_value = -right_offset+right_real_margin;
				
				jQuery(this).css('right',right_adjust_value);
				
			} else {
				if (!window.BrowserDetect.isModernIE){
	
					
				} else {
					//modern IE
					//11 specific
					if (window.BrowserDetect.browser == "Mozilla" && parseInt(window.BrowserDetect.version, 10) == 11){
						if (jQuery(window).width() < jQuery(this).parent().offset().left + jQuery(this).width()){
							jQuery(this).css({ left : (jQuery(window).width() - jQuery(this).width())/2 });
						}
					}
				}
			}
		}
	});
	
	if (jQuery('#dl-menu').is(':visible')){
		jQuery('.dl-menu, .dl-menu ul').css('max-height', window.screen.availHeight-jQuery('body header').first().height()-50 );
	}
}

	
	// Blog Isotope
	function blogMasonry() {
	
		var $blogcontainer = jQuery('.blog-default.wideblog .container');
	
		if ($blogcontainer.length > 0){
			$blogcontainer.imagesLoaded( function() {
				setTimeout(function(){
					$blogcontainer.animate({'opacity' : 1}, 200);
				}, 100);
			});
		}
	}
	
	blogMasonry();
	
	
	// Blog Isotope without Container
	function blogMasonrynoContainer() {
	
		var $blognocontainer = jQuery('.blog-default.wideblog .smooth_loading');
	
		if ($blognocontainer.length > 0){
			$blognocontainer.imagesLoaded( function() {
				setTimeout(function(){
					$blognocontainer.animate({'opacity' : 1}, 200);
				}, 100);
			});
		}
	}
	
	blogMasonrynoContainer();
	
	
	// Blog Isotope without Container
	function blogMasonrynoContainerGrid() {
	
		var $blognocontainerGrid = jQuery('.archive .blog-default-bg.masonry_grid');
	
		if ($blognocontainerGrid.length > 0){
			$blognocontainerGrid.imagesLoaded( function() {
				setTimeout(function(){
					$blognocontainerGrid.animate({'opacity' : 1}, 200);
				}, 100);
			});
		}
	}
	
	blogMasonrynoContainerGrid();


	jQuery(document).on('click', 'header:not(.headerclone) .sliderbar-menu-controller, .pine-push-sidebar .sliderbar-menu-controller', function (event) {
		if (!jQuery('.pine-push-sidebar').hasClass('opened')) {
			window.bypassDefer = 0;
			window.fromSlidingPanel = 1;
			if (!jQuery('body').hasClass('page-template-blog-masonry-template') && !jQuery('body').hasClass('page-template-blog-masonry-grid-template')) jQuery(window).resize();
		} else {
			window.fromSlidingPanel = 1;
			window.bypassDefer = 0;
		}
		if (typeof fixto == "object" && jQuery('.ult_stick_to_row').length > 0) {
			var stickies_correct = setInterval(function(){
				jQuery('.ult_stick_to_row').fixTo('refresh');
			}, 10);
		} 
		jQuery('.pine-push-sidebar').toggleClass('opened');
		jQuery('.sliderbar-menu-controller .hamburguer-trigger-menu-icon').toggleClass('sidebar-opened');
		jQuery('html,body').toggleClass('pine-push-sidebar-opened'); 
		setTimeout(function(){
			if (!jQuery('.pine-push-sidebar').hasClass('opened')) {
				window.fromSlidingPanel = 0;
				window.bypassDefer = 1;
				if (!jQuery('body').hasClass('page-template-blog-masonry-template') && !jQuery('body').hasClass('page-template-blog-masonry-grid-template')) jQuery(window).resize();
			} else {
				window.fromSlidingPanel = 0;
				window.bypassDefer = 0;
			}
			if (typeof fixto == "object" && jQuery('.ult_stick_to_row').length > 0){
				jQuery('.ult_stick_to_row').fixTo('refresh');
				clearInterval(stickies_correct);
			}
		},400);
	});

	jQuery(document).on('click', 'header.style7:not(.headerclone) .menu-trigger-button', function(){
		jQuery(this).find('.hamburguer-trigger-menu-icon').add(jQuery('header')).toggleClass('menu-opened');
	});

	
jQuery(function(){
	
	jQuery('.widget').each(function(){
		if (!jQuery(this).children('h2').eq(0).children('span.widget_title_span').length) jQuery(this).children('h2').eq(0).wrapInner('<span class="widget_title_span" />');
	});
	
	jQuery('.metas').each(function(){
		if (jQuery(this).find('.tags').html() == ""){
			jQuery(this).find('.tags').parent().remove();
		}
	});
	
	
	
	
	/* dl-menu [mobile] */
	jQuery('#dl-menu ul.dl-menu li').attr('id', 'mobile-'+jQuery('#dl-menu ul.dl-menu li').attr('id') );
	jQuery('#dl-menu ul.dl-menu > li li:not(.dl-back)').removeAttr('class');
	jQuery('#dl-menu ul.dl-menu ul').removeClass('sub-menu').addClass('dl-submenu-smart');
	jQuery( '#dl-menu' ).dlmenu({
		animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' }
	});
	jQuery('.dl-menu a').each(function(){ 
		if (jQuery(this).siblings('ul').length){
			jQuery(this).after('<span class="gosubmenu ion-chevron-right" />');
		}
		jQuery(this).on("click",function(e){
			if (jQuery(this).attr('href').indexOf('http') > -1){
				e.preventDefault(); e.stopPropagation(); window.location = jQuery(this).attr('href');
			} else {
				if ((jQuery(this).attr('href').indexOf('#section') > -1 && jQuery(this).attr('href') != '#section_page-0') || jQuery(this).attr('href')==="#home"){
					e.preventDefault(); e.stopPropagation();
					jQuery('html, body').animate({
						scrollTop : jQuery(jQuery(this).attr('href')).offset().top - jQuery('body header').first().height()
					},{
						duration: 1500,
						easing: 'easeInOutQuart',
						complete: function(){
							jQuery('.dl-trigger').trigger('click');
						}
					});
				}
			}
		});
	});
	
	/* MAIN MENU */
	jQuery('.navbar-nav li').add(jQuery('.navbar-nav ul')).mouseenter(function(){
		jQuery(this).closest('.main-menu-item').children('a').addClass('hover_selected');
	}).mouseleave(function(){
		if (!jQuery(this).closest('.main-menu-item > ul').is(':visible'))
			jQuery(this).closest('.main-menu-item').children('a').removeClass('hover_selected');
	});
	
	jQuery('.navbar-nav li').not('.menu-item-depth-1').removeClass('pine_mega_hide_title').removeClass('pine_mega_hide_link');
	jQuery('.navbar-nav li.pine_mega_hide_link > a').attr('href','#');
	jQuery('.navbar-nav:not(#main_menu_outside) a:not(.outsider)').add(jQuery('.navbar-nav:not(#main_menu_outside) a.mainhomepage')).each(function(){
		
		jQuery(this).on("click",function(e){
			
			if (typeof Waypoint == "function") Waypoint.refreshAll();
			
			//exclude header style 6
			if (jQuery(this).closest('.nav-style-6').length) return;
			
			var target = jQuery(this).attr('href'),
				wpadminheight = jQuery('#wpadmin').length ? jQuery('#wpadmin').height() : jQuery('#wpadminbar').length ? jQuery('#wpadminbar').height() : 0;
			
			if (jQuery(this).attr('href').indexOf('://') < 0 && jQuery(jQuery(this).attr('href')).length){
				e.preventDefault();
				var whereTo = jQuery(jQuery(this).attr('href')).offset().top - jQuery('header.headerclone').height() - wpadminheight;
				
				if (jQuery(window).scrollTop() < 301 && whereTo > 301) {
					jQuery('header.headerclone').addClass('header_after_scroll');
					whereTo = jQuery(target).offset().top - parseInt(jQuery('header.headerclone').outerHeight(true)) - wpadminheight;
				}
				if (jQuery(this).children('.sub-arrow').length){
					if (!jQuery(this).children('.sub-arrow').is(':hover')){
						jQuery('html, body').animate({
							scrollTop : whereTo+45
						},{
							duration: 1500,
							easing: 'easeInOutQuart',
							complete: function(){
										 if (window.pineOptions.pine_update_section_titles == 'on' && jQuery(target).data('sectionTitle')){
											 if (history && history.replaceState) history.replaceState({}, "", "#"+jQuery(target).data('sectionTitle')); 
											 else window.location.hash = jQuery(target).data('sectionTitle');
										 } 
										 if (jQuery('.navbar-toggle').is(':visible')) jQuery('.navbar-toggle').trigger('click');
									  }
						})
						e.preventDefault();
					}
				} else {
					jQuery('html, body').animate({
						scrollTop : whereTo+45
					},{
						duration: 1500,
						easing: 'easeInOutQuart',
						complete: function(){
									 if (window.pineOptions.pine_update_section_titles == 'on' && jQuery(target).data('sectionTitle')){
										 if (history && history.replaceState) history.replaceState({}, "", "#"+jQuery(target).data('sectionTitle')); 
										 else window.location.hash = jQuery(target).data('sectionTitle');
									 } 
									 if (jQuery('.navbar-toggle').is(':visible')) jQuery('.navbar-toggle').trigger('click');
								  }
					})
					e.preventDefault();
				}	
			}
		});
	});
	
	if (jQuery("body header").first().hasClass('hide-on-start')){
		if (jQuery(document).scrollTop() > 200) jQuery("body header").first().addClass('nothidden');
		else jQuery("body header").first().removeClass('nothidden');
	}
	
	
	
	/* header related stuff */
	if (jQuery('header').length && !jQuery('body.style9').length){
		var theheader = jQuery("body header").first();
		  if (theheader.hasClass('style4')){
			  theheader.children().not('.top-bar').wrapAll('<div style="position:relative;" />');
			var isstyle4 = true;
			var howmanyitems = theheader.find('.navbar-nav > li').length;
			if (howmanyitems > 1){
				var itemsleft = Math.ceil(howmanyitems / 2) - howmanyitems % 2;
				theheader.find('.new-menu-wrapper .new-menu-left .new-menu-bearer ul').append( theheader.find('.navbar-collapse .navbar-nav > li').eq(0).nextUntil(theheader.find('.navbar-collapse .navbar-nav > li').eq(itemsleft)).andSelf() );
				theheader.find('.new-menu-wrapper .new-menu-right .new-menu-bearer ul').append( theheader.find('.navbar-collapse .navbar-nav > li') );
				theheader.find('.new-menu-bearer').addClass('navbar-collapse');
				theheader.find('.navbar-brand').insertAfter( theheader.find('.new-menu-left') );
			}
		}
		
		/* new header style8 */
		if (theheader.hasClass('style8') || theheader.hasClass('style9')){
			window.pineOptions.pine_header_after_scroll = "no";
			window.pineOptions.pine_header_after_scroll_type2 = "no";
			window.pineOptions.pine_header_shrink = "no";
		}
		
		/* hideonstart stuff */
		if (theheader.hasClass('hide-on-start') || window.pineOptions.pine_header_after_scroll_type2 == 'yes') {
			window.pineOptions.pine_header_after_scroll = 'yes';
			window.pineOptions.pine_header_shrink = 'no';
		}

		var topbar = jQuery('header .top-bar');
		topbar_height = 0;
		//if (topbar.length) topbar_height = topbar.outerHeight(true) + 15;
		
		if (jQuery('header').hasClass('navbar-fixed-top')) {
			var theheaderclone = theheader.clone();
			jQuery(theheaderclone).addClass('headerclone').removeClass('header_after_scroll').find('.navbar-nav li, .dl-menu li').removeAttr('id');
			jQuery(theheaderclone).find('#searchsubmit').removeAttr('id');
			jQuery(theheaderclone).find('.top-bar').remove();

			jQuery(theheaderclone).insertAfter(theheader);
			if (!theheader.hasClass('header_not_fixed')) theheader.css('position','fixed');
		}
		
		var nav = jQuery(".nav-container");
		
		var downbutton = theheader.find('.down-button');
		var logocontainer = theheader.find('.navbar-header');

		jQuery('header.headerclone').addClass('header_after_scroll');
		var wpadminheight = jQuery('#wpadmin').length ? jQuery('#wpadmin').height() : jQuery('#wpadminbar').length ? jQuery('#wpadminbar').height() : 0,
			waypoint_offset = -parseInt(jQuery('header.headerclone').outerHeight(true),10) - wpadminheight;
		if (window.BrowserDetect.browser === "Firefox") waypoint_offset = -20;
		
		if (window.pineOptions.pine_header_after_scroll_type2 != 'no') jQuery('.headerclone').removeClass('header_after_scroll');
		
		var header_style_pre_scroll = header_style_after_scroll = "light";
		if (theheader.data('rel') != ""){
			header_style_pre_scroll = theheader.data('rel').split('|')[0];
			header_style_after_scroll = theheader.data('rel').split('|')[1];
		}
		
		var initialScroll = jQuery(document).scrollTop();
		
		if (window.pineOptions.pine_header_shrink == 'yes' || window.pineOptions.pine_header_after_scroll == 'yes'){
			
			var header_after_scroll_class = 'header_after_scroll';
			if (window.pineOptions.pine_header_after_scroll_type2 == 'yes'){
				
				header_after_scroll_class = 'header_after_scroll_type2';
				
				// check for transparency
				var isTransparent = false, values = "", changeFactor = .2;
				if ( theheader.css('background-color') == 'transparent' ) isTransparent = true; // this one is kinda complex, but im fairly sure this case doesnt happen as will always get a rgba value.
				if ( theheader.css('background-color').toString().indexOf('rgba') > -1 ){
					
					theheader.addClass('no_opacity_animation');
					theheader.removeClass('header_force_opacity');
					
					var values = theheader.css('background-color').toString().replace('rgba(', '').replace(')','').split(',');
					if ( parseInt( values.length > 3 && values[3], 10 ) == 0) isTransparent = true;
					
					theheader.addClass('header_force_opacity');
					theheader.removeClass('no_opacity_animation');

					var pagePos = window.pageYOffset || window.scrollTop;
					
					if ( pagePos > Math.floor(jQuery(window).height()*changeFactor) ) theheader.addClass('header_force_opacity');
					else theheader.removeClass('header_force_opacity');
					
				}
				
				jQuery('body:not(.page-template-template-side-nav) #main').each(function(i){ // substitui imagesload to each function
					var lastScrollTop = window.pageYOffset || window.scrollTop;
					var lastDir = 1;
					var isChrome = window.BrowserDetect.browser === "Chrome" ? true : false;
					var timeout = isChrome ? 50 : 1;
					window.addEventListener( "scroll", function(e){ 
						e.preventDefault(); e.stopPropagation();
						
						if (jQuery('body.opening-search').length ||
							jQuery('header.waiting-for-anim').length || 
							jQuery('header.header-init').length ||
							jQuery('.cbp-popup-singlePageInline:not(.cbp-popup-singlePageInline-ready)').length ||
							jQuery('.cbp-popup-singlePageInline-close').length) {
							return;
						} 
						var st = window.pageYOffset || document.documentElement.scrollTop;
						if (st > lastScrollTop){
							// DOWN HIDE
							if (lastDir == 1){
								lastDir = 0;
								theheader.addClass('waiting-for-anim');
								setTimeout(function(){
									if (jQuery('.dl-menu.dl-menuopen').is(':visible')) jQuery('.dl-trigger').trigger('click');
									theheader.removeClass(header_after_scroll_class);
									if (jQuery(window).width() > 767) topbar.css('margin-top','');
									theheader.removeClass('waiting-for-anim');
								}, timeout);
							}
						} else {
							// UP SHOW
							if (lastDir == 0){
								lastDir = 1;
								theheader.addClass('waiting-for-anim');
								setTimeout(function(){
									theheader.addClass(header_after_scroll_class);
									// comment this line to always show top bar 
									// if (jQuery(window).width() > 767) topbar.css('margin-top', -topbar.height());
									
									if (jQuery(window).width() < 768 && downbutton.hasClass('current')) downbutton.trigger('click');
									theheader.removeClass('waiting-for-anim');
								}, timeout);
							}
						}
						lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
						
						if (isTransparent){
							if (st > Math.floor(jQuery(window).height()*changeFactor)) theheader.addClass('header_force_opacity');
							else theheader.removeClass('header_force_opacity');
						}
						
					}, Modernizr.passiveeventlisteners ? {passive: true} : false);
				});
				
			} else {
				jQuery('body').waypoint({
					handler: function(event, direction) {
						
						if (event == 'up' && jQuery(document).scrollTop() < 301){
							if (jQuery('.dl-menu.dl-menuopen').is(':visible')) jQuery('.dl-trigger').trigger('click');
							var navheight = jQuery('header.headerclone').height();
							/* hideonstart stuff */
							if (theheader.hasClass('hide-on-start')) theheader.removeClass('nothidden');
							else theheader.removeClass(header_after_scroll_class);
							if (jQuery(window).width() > 767) topbar.css('margin-top','');
							
							theheader.removeClass(header_style_after_scroll).addClass(header_style_pre_scroll);
						} else {
							
							theheader.addClass(header_after_scroll_class);
							
							/* hideonstart stuff */
							if (theheader.hasClass('hide-on-start')) theheader.addClass('nothidden');
					  
							if (jQuery(window).width() > 767) topbar.css('margin-top', -topbar.height());
							if (jQuery(window).width() < 768 && downbutton.hasClass('current')) downbutton.trigger('click');
							
							theheader.removeClass(header_style_pre_scroll).addClass(header_style_after_scroll);
						}
						correct_pine_mega_menu();
					},
					offset: waypoint_offset+"px"
				});
			}
			
			if (window.pineOptions.pine_header_after_scroll_type2 == 'no') jQuery(document).scrollTop(0);
			var pagePos = window.pageYOffset || window.scrollTop;
			if ( pagePos > Math.floor(jQuery(window).height()/changeFactor) ) theheader.addClass('header_force_opacity');
			  theheader.addClass(header_after_scroll_class);
			  if (jQuery(window).width() > 767) topbar.css('margin-top','');
			  
			theheader.addClass(header_after_scroll_class);
			if (jQuery(window).width() > 767) topbar.css('margin-top', -topbar.height());
			if (jQuery(window).width() < 768 && downbutton.hasClass('current')) downbutton.trigger('click');

			jQuery('.hide-on-start').addClass('hidestartready');
			if (window.pineOptions.pine_header_after_scroll_type2 == 'no') jQuery(document).scrollTop(initialScroll);
			if (initialScroll < 301 && !theheader.hasClass('hide-on-start') && window.pineOptions.pine_header_after_scroll_type2 == 'no') jQuery('header').removeClass(header_after_scroll_class);
			if (initialScroll < 301 && theheader.hasClass('hide-on-start')) theheader.removeClass('nothidden');
			if (initialScroll < 301 && jQuery(window).width() > 767 ) topbar.css('margin-top','');
		} else {
			if (theheader.hasClass('style8') || theheader.hasClass('style9')) jQuery('header').removeClass('header_after_scroll');
		}
		correct_pine_mega_menu();
		if (isstyle4) jQuery('.navbar-brand').css('opacity',1);
		jQuery('.homepage_parallax .home-text-wrapper').removeClass('notready');
		jQuery('.nav > li').css('pointer-events','auto');
		
		jQuery('header').removeClass('header-init');
	}
	
	
	if (jQuery('section.page_content').length > 1){
		var sections = jQuery("body > #main > section");
		var navigation_links = jQuery("a.menu-link");
		var wpadminheight = jQuery('#wpadmin').length ? jQuery('#wpadmin').height() : jQuery('#wpadminbar').length ? jQuery('#wpadminbar').height() : 0;
	
		sections.waypoint({
			handler: function(event, direction) {
				//if (!window.scrollHappened) window.scrollHappened = true;
				var active_section;
				active_section = typeof jQuery(this)[0].element != "undefined" ? jQuery(jQuery(this)[0].element) : jQuery(this);

				if (event === "up" && active_section.prevAll('section').first().length != 0) active_section = active_section.prevAll('section').first();
				if (active_section.hasClass('content_from_homepage_template')) active_section = active_section.prevAll('section').first();
				
				var active_link = jQuery('a.menu-link[href="#' + active_section.attr("id") + '"]');
				var sectionTitle = active_section.data('sectionTitle') ? active_section.data('sectionTitle') : active_link.eq(0).text();
				
				navigation_links.removeClass("selected hover_selected").parent().removeClass('current-menu-item');
				active_link.addClass("selected hover_selected");
				if (window.pineOptions.pine_update_section_titles == 'on' && jQuery('body > #main > section').length > 2){
					if (history && history.replaceState) history.replaceState({}, "", "#"+sectionTitle); 
					else window.location.hash = sectionTitle;
				} 
			},
			offset: parseInt(jQuery('header.headerclone').height() + wpadminheight,10)+2+'px'
		});
	}
	
	//ajax search
	var form = jQuery('.pine_search_input.search_input');
	var search_ajaxing = null;
	jQuery('header:not(.headerclone) .search_trigger, header:not(.headerclone) .search_trigger_mobile').on("click",function(){
		jQuery('.pine_search_input.search_input').addClass('open');
		setTimeout(function(){ 
			jQuery('.pine_search_input .search_input_value').focus();
		}, 1500);
	});
	jQuery(document).on('click', '.pine_search_input .search_close', function(){
		form.find('.ajax_search_results ul').html("");
		jQuery('.pine_search_input.search_input').removeClass('open');
		jQuery('.pine_search_input.search_input input').blur().val('');
	});
	
		
	if (window.pineOptions.pine_enable_ajax_search == "on"){
		jQuery('body > .search_input input.search_input_value').keydown(function(e){
			switch (e.which){
				case 27:
					//esc key. close the results.
					if (form.find('.ajax_search_results ul').html() == "") form.find('.search_close').trigger('click');
					form.find('.ajax_search_results ul').html("");
					clearTimeout(jQuery.data(form, des_search_timer));
				break;
				case 38:
					//up key, navigate up on the results
					e.preventDefault(); e.stopPropagation();
					if (form.find('li.selected').prev().length){
						form.find('li.selected').removeClass('selected').prev().addClass('selected');
						// is out of the ul visual field? scroll the ul down
					}
					if (form.find('li.selected').position().top < 40){
						form.find('ul').stop().animate({
							"scrollTop": form.find('ul').scrollTop()-40
						}, 100);
					}
					clearTimeout(jQuery.data(form, des_search_timer));
				break;
				case 40:
					//down key, navigate up on the results	
					e.preventDefault(); e.stopPropagation();
					if (form.find('li.selected').next().length){
						form.find('li.selected').removeClass('selected').next().addClass('selected');
						// is out of the ul visual field? scroll the ul down
					}
					if (form.find('li.selected').position().top+80 > form.find('ul').height()){
						form.find('ul').stop().animate({
							"scrollTop": form.find('ul').scrollTop()+40
						}, 100);
					}
					clearTimeout(jQuery.data(form, des_search_timer));
				break;
				case 13:
					//enter key. if some result is selected shows the one.
					if (form.find('li.selected').length){
						e.preventDefault(); e.stopPropagation();
						window.location = form.find('li.selected a').attr('href');
					}
					clearTimeout(jQuery.data(form, des_search_timer));
				break;
				case 37: case 39: case 27: case 29: case 17: case 18: case 9: case 16: case 20: case 91: case 93: case 36: case 35: case 33: case 34: case 144: case 145: case 19: case 112: case 113: case 114: case 115: case 116: case 117: case 118: case 119: case 120: case 121: case 122: case 123:
					//ignore keys like left and right arrows, ctrl, alt, shift, F[1-12], home, insert, etc etc etc
					clearTimeout(jQuery.data(form, des_search_timer));
				break;
				default:
					clearTimeout(jQuery.data(form, des_search_timer));
					var des_search_timer = setTimeout(function(){
						if (form.find('.search_input_value').val().length > 0){
							if (search_ajaxing != null){
								search_ajaxing.abort();
								search_ajaxing = null;
							}
							form.find('.search_close div').attr('class','fa fa-spinner desrotating').on("mouseenter",function(){ jQuery(this).attr('class','icon dripicons-cross'); }).on("mouseleave", function(){ jQuery(this).attr('class','fa fa-spinner desrotating'); });
							
							search_ajaxing = jQuery.ajax({
								type: 'POST',
								dataType: 'JSON',
								url: ajaxurl,
								data: {
									action : 'call_treethemes_search_ajax',
									se: window.pineOptions.searcheverything,
									query: form.serialize().substr(2),
									wpml_lang: window.pineOptions.pine_wpml_current_lang,
									dataType: 'JSON',
									security: jQuery('#pine-theme-search').val()
								},
								success: function(data){
									form.find('.search_close div').attr('class','icon dripicons-cross').unbind('hover');
									form.find('.ajax_search_results ul').html(data.data);
									form.find('ul').stop().animate({
										"scrollTop": 0
									}, 100);
									if (form.find('li.selected').length){
										form.find('.ajax_search_results ul').css('overflow-y','scroll').children().each(function(){
											jQuery(this).mouseover(function(){
												jQuery(this).addClass('selected').siblings().removeClass('selected');
											});
										});
									}
								}
							});	
						} else {
							clearTimeout(jQuery.data(form, des_search_timer));
							form.find('.search_close div').attr('class','icon dripicons-cross').unbind('hover');
							if (search_ajaxing != null){
								search_ajaxing.abort();
								search_ajaxing = null;
							}
							form.find('.ajax_search_results ul').html("").css('overflow-y','visible');
						}
					}, 100);
				break;
			}
		});	
	} else {
		jQuery('body > .search_input input.search_input_value').keydown(function(e){
			if (e.which === 27){
				//esc key. close the results.
				form.find('.search_close').trigger('click');
			}
		});
	}
});

function randomXToY(minVal,maxVal,floatVal){
  var randVal = minVal+(Math.random()*(maxVal-minVal));
  return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);
}

jQuery(window).resize(function(event){
	if (jQuery('html,body').hasClass('pine-push-sidebar-opened') && !window.fromSlidingPanel){
		jQuery('.pine-push-sidebar').add(jQuery('header:not(.headerclone)')).add(jQuery('body > #main')).addClass('none-transition');
		jQuery('html,body').removeClass('pine-push-sidebar-opened');
		jQuery('.pine-push-sidebar').removeClass('opened');
		jQuery('.sliderbar-menu-controller .hamburguer-trigger-menu-icon').removeClass('sidebar-opened');
	} else {
		jQuery('.pine-push-sidebar').add(jQuery('header:not(.headerclone)')).add(jQuery('body > #main')).removeClass('none-transition');
	}
	
	correct_pine_mega_menu();
	if (!window.fromSlidingPanel){
		if (jQuery(window).width() > 767){
			if (jQuery(window).scrollTop() < 301) jQuery('header').eq(0).find('.top-bar').css('margin-top','');
			else jQuery('header').eq(0).find('.top-bar').css('margin-top', -jQuery('header').eq(0).find('.top-bar').height());
		} else {
			jQuery('header').eq(0).find('.top-bar').css('margin-top','');
		}
	}
	
	if (typeof Waypoint === "function") Waypoint.refreshAll();
	
});


jQuery(window).on("load", function(){
	
	window.isWLoaded = true;
	
	/* Revome titulos das setas */
	jQuery(".cbp-popup-next").removeAttr("title");
	
	/* grayscale effect on images. */
	if (window.pineOptions.pine_grayscale_effect == "on") {
		jQuery('img').each(function(){
			if (!jQuery(this).closest('.gm-style').length && !jQuery(this).parent().hasClass('navbar-brand') && !jQuery(this).closest('rev_slider').length && !jQuery(this).closest('#big_footer').length){
				jQuery(this).addClass('pine_grayscale');
			}
		});
		if (jQuery('a.cbp-l-loadMore-link:not(.cbp-l-loadMore-stop)').length){
			jQuery('a.cbp-l-loadMore-link').on("click",function(){
				if (!jQuery(this).hasClass('cbp-l-loadMore-stop')){
					var thisLoadMore = jQuery(this);
					var treethemesInitialCubeItems = jQuery(this).parent().parent().siblings('.cbp').find('img').length;
					var treethemesCheckForNewCubeItems = setInterval(function(){
						if (thisLoadMore.parent().parent().siblings('.cbp').find('img').length > treethemesInitialCubeItems){
							clearInterval(treethemesCheckForNewCubeItems);
							thisLoadMore.parent().parent().siblings('.cbp').find('img:not(.pine_grayscale)').addClass('pine_grayscale');
						}
					}, 200);	
				}
			});
		}
	}
	
	/* grayscales only on thumbnails*/
	if (window.pineOptions.pine__portfolio_grayscale_effect == "on") {
		jQuery('.cbp-wrapper img').each(function(){
			jQuery(this).addClass('pine_grayscale');
			
		});
	}
	
	/* grayscales only on thumbnails*/
	if (window.pineOptions.pine__instagram_grayscale_effect == "on") {
		jQuery('.cbp-wrapper img').each(function(){
			jQuery(this).addClass('pine_grayscale');
			
		});
	}
	
	
	
	jQuery(window).trigger('resize'); 
	// TREETHEMES: re-check char indices and VC animations after slider/images settle.
	pine_reindexSplittingAnimations();
	if ( typeof window.vc_waypoints === 'function' ) {
		window.vc_waypoints();
	}
	if ( typeof Waypoint === 'function' && Waypoint.refreshAll ) {
		Waypoint.refreshAll();
	}
	if (window.treethemesOrigHash && !window.scrollHappened && window.isWLoaded) {
		var sectionid = window.treethemesOrigHash;
		if (jQuery('section[data-section-title="'+sectionid.substr(1)+'"]').length) {
			sectionid = "#"+jQuery('section[data-section-title="'+sectionid.substr(1)+'"]').attr('id');
		}
		if (jQuery('header:not(.headerclone) .navbar-collapse a[href="'+sectionid+'"]').length && !window.treethemesWaitOnRev && !window.treethemesWaitOnTabs && window.isDLoaded){
			setTimeout(function(){
				jQuery(window).trigger('resize'); 
				if (typeof Waypoint == "function") Waypoint.refreshAll();
				window.scrollHappened = true;
				jQuery('header:not(.headerclone) .navbar-collapse a[href="'+sectionid+'"]').trigger('click');  
			}, 1000);
		}
		if (window.pineOptions.pine_update_section_titles === "off" && window.location.hash != "" && !jQuery('body').hasClass('page-template-template-side-nav')){
			if (history && history.replaceState) history.replaceState({}, "", "#"); 
			else window.location.hash = "";
		} 
	} else {
		if (window.pineOptions.pine_update_section_titles === "off" && window.location.hash != "" && !jQuery('body').hasClass('page-template-template-side-nav')){
			if (history && history.replaceState) history.replaceState({}, "", "#"); 
			else window.location.hash = "";
		}
	}
	
});

/**
 * TREETHEMES: row-level Splitting assigns global char indices across the whole row,
 * so later headings (e.g. hero "PINE FREE TRIAL") can get 10s+ animation delays.
 * Re-index per animated element so each heading animates from 0.
 */
function pine_reindexSplittingAnimations() {
	jQuery( '.wpb_animate_when_almost_visible[class*="charsAnimIn"]' ).each( function () {
		var charIndex = 0;
		jQuery( this ).find( '.char' ).each( function () {
			this.style.setProperty( '--char-index', charIndex );
			charIndex += 1;
		} );
	} );
	jQuery( '.wpb_animate_when_almost_visible[class*="linesAnimIn"]' ).each( function () {
		var wordIndex = 0;
		jQuery( this ).find( '.word' ).each( function () {
			this.style.setProperty( '--word-index', wordIndex );
			wordIndex += 1;
		} );
	} );
}

function pine_initSplittingAnimations() {
	if ( typeof Splitting === 'function' ) {
		Splitting();
	}
	pine_reindexSplittingAnimations();
	if ( typeof window.vc_waypoints === 'function' ) {
		window.vc_waypoints();
	}
}

jQuery(document).ready(function(){
	"use strict";
	
	// Page loader        
	jQuery(".page-loader div").fadeOut();
	jQuery(".page-loader").delay(250).fadeOut("slow");
	
	correct_pine_mega_menu();
	
	if (window.BrowserDetect.isModernIE) setTimeout(function(){ jQuery('header .search_trigger, header .menu-controls, header .pine_dynamic_shopping_bag, .header_social_icons.with-social-icons').css('display','table-cell'); }, 1000);
	
	jQuery('.cbp-caption-defaultWrap img').removeClass('lazy-loaded');
	jQuery('.cbp-caption-defaultWrap img').removeClass('lazy-hidden');
	
	jQuery('a.nav-to[href*="#"]').not('[href="#"]').add(jQuery('div.nav-to')).add(jQuery('button.nav-to')).add(jQuery('span.nav-to')).each(function() {
		var $this = jQuery(this).is('a') ? jQuery(this) : jQuery(this).find('a').first();
		var isMenu = ($this.parents('.navbar').length) ? true : false;
		if ($this.children('.sub-arrow').length){
			$this.on("click",function(e){
				e.preventDefault();
				var target = jQuery(this.hash),
				wpadminheight = jQuery('#wpadmin').length ? jQuery('#wpadmin').height() : jQuery('#wpadminbar').length ? jQuery('#wpadminbar').height() : 0;
				target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
				
				var whereTo = jQuery(jQuery(this).attr('href')).offset().top - jQuery('header.headerclone').height() - wpadminheight /* + top_bar_factor */;
				if (jQuery(window).scrollTop() < -1 && whereTo > 301) {
					jQuery('header.headerclone').addClass('header_after_scroll');
					whereTo = target.offset().top - parseInt(jQuery('header.headerclone').outerHeight(true)) - wpadminheight + jQuery('header.headerclone .top-bar').height() ;
				}
				if (target.length) {
					if (!$this.children('.sub-arrow').is(':hover')){
						jQuery('html,body').animate({
						  scrollTop: whereTo+45
						}, {
							duration: 1500,
							easing: "easeInOutQuart",
							complete: function(){
								if (window.pineOptions.pine_update_section_titles == 'on' && target.data('sectionTitle')){
									if (history && history.replaceState) history.replaceState({}, "", "#"+target.data('sectionTitle')); 
									else window.location.hash = target.data('sectionTitle');
								} 
								if (jQuery('.navbar-toggle').is(':visible') && isMenu){
									jQuery('.navbar-toggle').trigger('click');
								} 
							}
						});
					}
				}
			});
		} else {
			$this.on("click",function(e){
				e.preventDefault();
				var target = jQuery(this.hash),
					wpadminheight = jQuery('#wpadmin').length ? jQuery('#wpadmin').height() : jQuery('#wpadminbar').length ? jQuery('#wpadminbar').height() : 0;
				target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
				var whereTo = jQuery(jQuery(this).attr('href')).offset().top - jQuery('header.headerclone').height() - wpadminheight /* + top_bar_factor */;
				if (jQuery(window).scrollTop() < -1 && whereTo > 301) {
					jQuery('header.headerclone').addClass('header_after_scroll');
					whereTo = target.offset().top - parseInt(jQuery('header.headerclone').outerHeight(true)) - wpadminheight + jQuery('header.headerclone .top-bar').height() ;
				}
				if (target.length) {
					jQuery('html,body').animate({
					  scrollTop: whereTo+45
					}, {
						duration: 1500,
						easing: "easeInOutQuart",
						complete: function(){
							if (window.pineOptions.pine_update_section_titles == 'on' && target.data('sectionTitle')){
								if (history && history.replaceState) history.replaceState({}, "", "#"+target.data('sectionTitle')); 
								else window.location.hash = target.data('sectionTitle');
							} 
							if (jQuery('.navbar-toggle').is(':visible') && isMenu){
								 jQuery('.navbar-toggle').trigger('click');
							}
						}
					});			    
				}
			});
		}
	});
	
	pine_initSplittingAnimations();

	window.isDLoaded = true;
	
	jQuery(document).trigger('treethemesDLoad');
	
	jQuery('header:not(.headerclone) .menu_style5_bearer > .pine-header-button').appendTo(jQuery('header:not(.headerclone) .menu_style5_bearer > ul'));
		
	if (window.BrowserDetect.browser === "Explorer" && window.BrowserDetect.version == 9){
		/* disable address update */
		window.pineOptions.pine_update_section_titles = 'off';
		/* merge inline css and js from vc rows and what not. explora */
		if (jQuery('style').length){
			var inlineStyles = ""; 
			jQuery('style').each(function(){ 
				if (jQuery(this).html()){
					inlineStyles += jQuery(this).html()+"\n"; 
					jQuery(this).remove(); 	
				}
			});
			jQuery('body').append('<style class="css-merged-for-ie">'+inlineStyles+'</style>' );
		}
	}
	
	if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
		window.usesDocumentElement = false;
		var scrollControl = document.body.scrollTop;
		document.body.scrollTop = scrollControl != 1 ? 1 : 2;
		if (scrollControl == document.body.scrollTop) window.usesDocumentElement = true;
		else document.body.scrollTop = scrollControl;
		
		jQuery('html').css({ 'height' : '0px', 'overflow' : 'visible' });
		jQuery('body').on("scroll", function (event) {
			// remove default behavior
			event.preventDefault(); 
			//scroll without smoothing
			var wheelDelta = event.wheelDelta ? event.wheelDelta : event.originalEvent.wheelDelta;
			var currentScrollPosition = window.pageYOffset;
			treethemesScrollTo(currentScrollPosition - wheelDelta, 500);
		});
	}
	
	jQuery('select:not(.pine-push-sidebar-content select):not(.des-pages select)').selectWoo();
		
	jQuery('.simpleselect').parent('p').css({'position':'relative','z-index':9});
		
	//window.scrollHappened = false;
	if (jQuery('.navbar-brand img').length > 0) {
		window.logoIsImage = true
		window.logoReady = false;
	}
	
	/* wrap the contents minding the fullwiths [NEW STUFF - check problems after with components fullwidth like for instance the projects]  */
	jQuery('.page_content').each(function(){
		if (jQuery(this).find('.fullwidth-section').length){
		
			if (jQuery('.fullwidth-section > .video-container video').length){
				jQuery('.fullwidth-section > .video-container video').add(jQuery('.fullwidth-section > .video-container .wp-video-shortcode')).attr('height','').attr('width','').removeAttr('height').removeAttr('width').css('width','100vw');
			}
		} 
		jQuery(window).trigger('resize');
	});
	/* endof wrap the contents minding the fullwiths */

	/* icon services new effect from pine */
	jQuery('.aio-icon-tooltip .aio-icon, .aio-icon-tooltip .aio-icon-img').each(function(){
		jQuery(this).on("mouseenter",function(){
			jQuery(this).closest('.aio-icon-tooltip').siblings('.aio-icon-description').addClass('visible');
		}).on("mouseleave", function(){
			jQuery(this).closest('.aio-icon-tooltip').siblings('.aio-icon-description').stop().animate({
				opacity:1
			}, 100, function(){
				jQuery(this).removeClass('visible');
			});
		});
	});
	
	
	jQuery('.tooltip').css('visibility','hidden');
	jQuery('.socialiconsshortcode li a').trigger('mouseover').trigger('mouseout');
	setTimeout(function(){
		jQuery('.tooltip').css('visibility','visible');
	}, 500);

	
	if (jQuery('#lang_sel a.lang_sel_sel, #lang_sel_click a.lang_sel_sel').length){
		jQuery('#lang_sel a.lang_sel_sel, #lang_sel_click a.lang_sel_sel').prepend('<i class="fa fa-globe" style="left:0px;"></i>');
	}
	
	/* remove brs from the new non-visual shortcodes */
	jQuery('.main_cols.container > br').remove();

	/*InEx*/
	if (window.BrowserDetect.browser === "Explorer"){
		jQuery('.info_above_menu .telephone i, .info_above_menu .email i, .info_above_menu .address i').css('vertical-align', 'middle');	
	}

	if (jQuery('#mc-embedded-subscribe').length){
		jQuery('#mc-embedded-subscribe').on("click",function(e){
			if (!pine_validate_email(jQuery('#mce-EMAIL').val())){
				e.stopPropagation();
				e.preventDefault();
				jQuery('#mce-EMAIL').css({'border':'1px solid #D07F7F', 'color':'#D07F7F'}).val('Please insert a valid email');
				jQuery('#mce-EMAIL').focus(function(){
					jQuery(this).val('');
					jQuery(this).css({
						'border':'none',
						'color': 'rgb(192, 191, 191)'
					});
				});
				return false;
			}
		});
	}
		
	if (window.BrowserDetect.browser == "iPhone")
		jQuery('.acc-substitute .pane p, #accordion .pane p').css({ 'font-size': '11px' });
	
	if (jQuery(".container .vendor").length) jQuery(".container .vendor").fitVids();
				
	/* search widget top */
	if (jQuery('.search_toggler')){
		jQuery('.search_toggler').each(function(){
			jQuery(this)
				.unbind('click')
				.on('click', function(){
					if (jQuery(this).siblings('#s').hasClass('search_close')){
						jQuery(this).siblings('#s').toggleClass('search_close');
						jQuery(this).parents('#searchform').removeClass('ie_searcher_close').addClass('ie_searcher_open');
						jQuery(this).siblings('#s').trigger('focus');
					} else {
						if (jQuery(this).siblings('#s').val() == jQuery(this).siblings('.search_box_text').html()){
							jQuery(this).siblings('#s').toggleClass('search_close');
							jQuery(this).parents('#searchform').removeClass('ie_searcher_open').addClass('ie_searcher_close');
						} else {
							jQuery(this).siblings('#searchsubmit').trigger('click');
						}
					}
				});
		});	
	}
	
	/*special tabs stuff*/
	treethemes_special_tabs();
	
	if (jQuery(".player").length) { 
		jQuery(".player").each(function(){ 
			jQuery(this).mb_YTPlayer();  
			jQuery(this).on('YTPStart', function(){ 
				jQuery(this).YTPPlay();
				if (jQuery(this).parent().is('.homepage_parallax')) jQuery('#parallax-home').after(jQuery('#parallax-home .mb_YTPBar').css({'position':'relative','bottom':'3px'}));
			});
		}); 
	}
	
	if (!isMobile.any()){
		if ((window.BrowserDetect.browser == "Mozilla" && window.BrowserDetect.version == 11) || (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version < 11)){
			//do nothing for now.
		} else jQuery.stellar({responsive: true,  scrollProperty: 'scroll', positionProperty: 'transform', hideDistantElements: false, horizontalScrolling:false});
	}

	var browserprefix = "";
	switch (window.BrowserDetect.browser){
		case "Chrome" : case "Safari" : browserprefix = "-webkit-"; break;
		case "Firefox" : browserprefix = "-moz-"; break;
	}
	jQuery('.slick-list.draggable .slick-slide').css({
		'cursor': browserprefix+'grab'
	}).mousedown(function(){
		jQuery(this).css({
			'cursor': browserprefix+'grabbing'
		});
	}).mouseup(function(){
		jQuery(this).css({
			'cursor': browserprefix+'grab'
		});
	});
	
	/* SCROLL TOP BUTTON */
	jQuery("#back-top").hide();
	
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 1000) {
			jQuery('#back-top').fadeIn();
		} else {
			jQuery('#back-top').fadeOut();
		}
	});

	jQuery('#back-top a').on("click",function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 1200);
		return false;
	});
	
	/* cube filters helper */
	jQuery('.cbp-l-filters-list.des-align-center').children().wrapAll('<div class="filters_helper" style="float:left;" />');
	jQuery('.news-l input[type="email"]').attr('placeholder',window.pineOptions.pine_newsletter_input_text);
	jQuery('header:not(.headerclone) .nav-container, .header_style8_left .navbar-collapse, .header_style9_left .navbar-collapse').on('mouseenter', function(){ correct_pine_mega_menu(); });
		
	jQuery('header .navbar-nav > li:not(.pine_mega_menu) li, header .navbar-nav > li:not(.pine_mega_menu) li').each(function(){
		pine_check_menu_right_frontier(jQuery(this));
	});
	
	jQuery(window).resize(function(){
		jQuery('header .navbar-nav > li:not(.pine_mega_menu) li, header .navbar-nav > li:not(.pine_mega_menu) li').each(function(){
			pine_check_menu_right_frontier(jQuery(this));
		});
	});
	
	jQuery('.pine_dynamic_shopping_bag').siblings('.search_trigger').addClass('next-to-shopping-bag');
	jQuery('.pine_dynamic_shopping_bag').siblings('.menu-controls').addClass('menu-next-to-shopping-bag');
		
	if (jQuery('#big_footer').hasClass('reveal-footer')){ 
		jQuery('#big_footer').footerReveal();
	}
	
	// next / previous nav on singles [post & project]
	jQuery(document).on('click','.single #nav-below div.nav-previous, .single #nav-below div.nav-next', function(e){
		window.location = jQuery(this).find('a').prop('href');
	});
	
	/* top bar - previously on headers */
	if (jQuery('header .top-bar').length > 0){
		if (jQuery(window).width() > 768) {
			jQuery("a.down-button").removeClass("current");
			jQuery(".slidedown").removeAttr("style");
		}
		jQuery("a.down-button").on("click", function () {
		  if (jQuery(this).hasClass("current")) {
			  jQuery(this).removeClass("current");
			  jQuery(this).parent().parent().find(".slidedown").slideUp("slow", function(){ jQuery(this).closest(".top-bar").removeClass("opened"); });
			  return false;
		  } else {
			  jQuery(this).addClass("current").closest(".top-bar").addClass("opened");
			  jQuery(this).parent().parent().find(".slidedown").slideDown("slow");
			  return false;
		  }
		});
		jQuery(window).resize(function(){
			if (jQuery(window).width() > 768) {
				jQuery("a.down-button").removeClass("current");
				jQuery(".slidedown").removeAttr("style");
			}
		});
	}
	
	if (jQuery('body.page-template-template-under-construction').length && typeof vc_js == 'function'){
		vc_js();
	}
	
	if (jQuery('#secondary.widget-area.four.columns.alpha').length && !jQuery('#secondary.widget-area.four.columns.alpha').text().trim().length){
		jQuery('#secondary.widget-area.four.columns.alpha').closest('.col-md-3').siblings('.col-md-9').removeClass('col-md-9').addClass('col-md-12').siblings('.col-md-3').remove();
	}
	
	/* 2020 header style9 related */
	jQuery(document).on("click", ".pine_menu_trigger .menu_trigger", function(){
		if (jQuery(".pine_menu_trigger").is(".menu-opened")){
			jQuery(".header_style9_left_container .mobile-opened").removeClass("mobile-opened");
			jQuery(".pine_menu_trigger, .pine_menu_trigger .hamburguer-trigger-menu-icon").removeClass("menu-opened");
		} else {
			jQuery(".pine_menu_trigger, .pine_menu_trigger .hamburguer-trigger-menu-icon").addClass("menu-opened");
		}
	});
	
	jQuery(document).on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", ".header_style9_left_container", function(){
		if (jQuery(".pine_menu_trigger").is(".menu-opened")){
			//correct_pine_mega_menu();
			setTimeout(function(){
				jQuery(".header_style9_left_container").addClass("overflowVisibleHelper");
			}, 150);
		} else {
			setTimeout(function(){
				jQuery(".header_style9_left_container").removeClass("overflowVisibleHelper");
			}, 250);
		}
		jQuery(".slick-slider").each(function(){ jQuery(this).slick("getSlick").setPosition(jQuery(this).slick("getSlick").currentSlide); });
		
	});
	
	if (window.treethemesOrigHash) {
		var sectionid = window.treethemesOrigHash;
		if (jQuery('section[data-section-title="'+sectionid.substr(1)+'"]').length) {
			sectionid = "#"+jQuery('section[data-section-title="'+sectionid.substr(1)+'"]').attr('id');
		}
		if (jQuery('header:not(.headerclone) .navbar-collapse a[href="'+sectionid+'"]').length && jQuery('#home.revslider rs-module').length){
			var auxrevapi = jQuery('#'+ jQuery('#home.revslider rs-module').prop('id') );
			
			window.treethemesWaitOnRev = true;
			jQuery(document).scrollTop(0);
			auxrevapi.one("revolution.slide.onloaded", function(){
				window.treethemesWaitOnRev = false;
				if (window.isWLoaded && !window.scrollHappened && !window.treethemesWaitOnTabs){
					setTimeout(function(){ 
						jQuery(window).trigger('resize'); 
						if (typeof Waypoint == "function") Waypoint.refreshAll();
						jQuery('header:not(.headerclone) .navbar-collapse a[href="'+sectionid+'"]').trigger('click'); 
						window.scrollHappened = true;
						if (window.pineOptions.pine_update_section_titles === "off" && window.location.hash != "" && !jQuery('body').hasClass('page-template-template-side-nav')){
							if (history && history.replaceState) history.replaceState({}, "", "#"); 
							else window.location.hash = "";
						} 
					}, 100);
				}
			}); 
		}
	}
	
	
	/* 2021 header style9 on mobile related stuff */
	jQuery('.current-menu-item:not(.menu-item-depth-0), .current-menu-parent:not(.current-menu-item), .current-menu-ancestor:not(.current-menu-item)').addClass('mobile-opened');
	jQuery(document).on("click", ".header_style9_left_container li", function(e){
		e.stopPropagation();
		if (jQuery(window).width() < 767){
			if (!jQuery(this).hasClass('menu-item-has-children')) return;
			if (jQuery(this).hasClass('mobile-opened')) jQuery(this).add(jQuery(this).find('.mobile-opened')).removeClass('mobile-opened');
			else jQuery(this).addClass('mobile-opened').siblings('.mobile-opened').removeClass('mobile-opened');
		}
	});
	
});

jQuery(document).one('treethemes_st_ready', function(){
	if (window.isWLoaded && !window.scrollHappened && window.treethemesOrigHash){
		var sectionid = window.treethemesOrigHash;
		if (jQuery('section[data-section-title="'+sectionid.substr(1)+'"]').length) {
			sectionid = "#"+jQuery('section[data-section-title="'+sectionid.substr(1)+'"]').attr('id');
		}
		jQuery('header:not(.headerclone) .navbar-collapse a[href="'+sectionid+'"]').trigger('click'); 
		window.scrollHappened = true;
		if (window.pineOptions.pine_update_section_titles === "off" && window.location.hash != "" && !jQuery('body').hasClass('page-template-template-side-nav')){
			if (history && history.replaceState) history.replaceState({}, "", "#"); 
			else window.location.hash = "";
		} 
	}
});

function treethemesScrollTo( to, duration ) {
	
	var element = window.usesDocumentElement ? document.documentElement : document.body,
		start = element.scrollTop,
		change = to - start,
		currentTime = 0,
		increment = 20;

	var animateScroll = function(){
			currentTime += increment;
			var val = Math.easeInOutCubic(currentTime, start, change, duration);
			element.scrollTop = val;
			window.pageYOffset = val;
			if(currentTime < duration) {
				setTimeout(animateScroll, increment);
			}
		};

	animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutCubic = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};


function treethemes_special_tabs(fromcube){
	
	if (typeof fromcube == "undefined") fromcube = false;
	if (jQuery('.special_tabs:not(.special_tabs_ready)').length){
	
		jQuery('.special_tabs:not(.special_tabs_ready)').each(function(e){
		
			jQuery(this).addClass('st-'+e);
			var el = jQuery('.st-'+e);
			
			jQuery(el).children("p, br").remove();

			jQuery(el).find('.label').appendTo(jQuery(el).children('.tab-selector'));
			jQuery(el).find('.content').appendTo(jQuery(el).children('.tab-container'));
			
			jQuery(el).find('.tab-selector .label').eq(0).addClass('current');
			
			if (jQuery(el).hasClass('horizontal')){
				if (fromcube){
					jQuery(el).find('.tab-container > .content').eq(0).addClass('current').css({
						'opacity':1,
						'transform':'translateX(0%)',
						'position':'relative'
					});
				} else {
					jQuery(el).find('.tab-container > .content').eq(0).addClass('current').css({
						'opacity':1,
						'left':'0%',
						'position':'absolute'
					});
				}
			} else {
				if (fromcube){
					jQuery(el).find('.tab-container > .content').eq(0).addClass('current').css({
						'opacity':1,
						'transform':'translateY(0%)'
					});
				} else {
					jQuery(el).find('.tab-container > .content').eq(0).addClass('current').css({
						'opacity':1,
						'top':'0%'
					});
				}
			}
			
			if (jQuery(el).find('.tab-container > .content').find('img.aligncenter').length){
				jQuery(el).find('.tab-container > .content').find('img.aligncenter').parents('p').css('text-align','center');
			}
			
			// jumping at first interaction fix
			if (jQuery(el).find('.tab-container .current').height() > jQuery(el).find('.tab-selector').height())
				jQuery(el).find('.tab-container').stop().animate({'height': jQuery(el).find('.tab-container .current').height()+10}, 1000, 'easeInOutExpo');
			else 
				jQuery(el).find('.tab-container').stop().animate({'height': jQuery(el).find('.tab-selector').height()+10}, 1000, 'easeInOutExpo');

			if (jQuery(el).hasClass('horizontal')){
				for ( var i = 1; i < jQuery(el).find('.tab-container > .content').length; i++){
					if (fromcube){
						jQuery(el).find('.tab-container > .content').eq(i).css({
							'position':'relative',
							'transform':'translateX(100%)',
							opacity:0
						});
					} else {
						jQuery(el).find('.tab-container > .content').eq(i).css({
							'position':'absolute',
							'margin-left':'100%',
							opacity:0
						});
					}
				}
			} else {
				for ( var i = 1; i < jQuery(el).find('.tab-container > .content').length; i++){
					if (fromcube){
						jQuery(el).find('.tab-container > .content').eq(i).css({
							'position':'relative',
							'transform':'translateY(100%)',
							opacity:0
						});
					} else {
						jQuery(el).find('.tab-container > .content').eq(i).css({
							'position':'absolute',
							'margin-top':'100%',
							opacity:0
						});
					}
				}	
			}
			
			var elm = jQuery(this).attr('class').split("st-");
			var elm = "st-"+elm[1];
			
			if (jQuery(el).hasClass('horizontal') && !jQuery(el).find('.tab-selector .labels-container').length){
				jQuery(el).find('.tab-selector div.label').wrapAll('<div class="labels-container" />');
				jQuery(el).find('.tab-selector').css({'width':'100%','text-align':'center'}).find('.labels-container').css({'display':'inline-block','margin':'0 auto'});
			}
			
			jQuery('.'+elm).find('.tab-selector .label').each(function(){
			
				if (!jQuery(this).find('.pine_icon_special_tabs').length){
					jQuery(this).find('.tab_title').css('padding-left','10px');
				}
				
				jQuery(this).on("click",function(){ 
				
					if (!jQuery(this).hasClass('current')){
						var filterClass = jQuery(this).attr('class').toString();
						var randid = filterClass.replace("label ","");
						var nextEl = jQuery('.'+elm).find('.tab-container > .content.'+randid);
						if (jQuery(nextEl).height() > jQuery(this).parents('.tab-selector').height())
							jQuery(this).parents('.special_tabs').find('.tab-container').stop().animate({'height': jQuery(nextEl).height()+10}, 1000, 'easeInOutExpo');
						else 
							jQuery(this).parents('.special_tabs').find('.tab-container').stop().animate({'height': jQuery(this).parents('.tab-selector').height()+10}, 1000, 'easeInOutExpo');
							
						if (jQuery(el).hasClass('horizontal')){
							if (fromcube) jQuery(nextEl).css({'transform':'translateX(100%)','left':'0%', 'display':'block'});
							else jQuery(nextEl).css({'margin-left':'100%','left':'0%', 'display':'block'});
						} else {
							if (fromcube)jQuery(nextEl).css({'transform':'translateY(100%)','top':'0%', 'display':'block'});
							else jQuery(nextEl).css({'margin-top':'100%','top':'0%', 'display':'block'});
						}
						
						
						var current = jQuery('.'+elm).find('.tab-container > .current');
						var id = jQuery(current).attr('class').split(" ");
							id = id[1];
						jQuery('.'+elm).find('.tab-selector .label.'+id).css({'color':'#5c5c5c'});
						jQuery('.'+elm).find('.tab-selector .label.'+id+'.current').css({'color':'#5c5c5c'});
						
						if (jQuery(el).hasClass('horizontal')){
							if (fromcube){
								jQuery(current).stop().css({'transform':'translateX(100%)', opacity:0}).css('display','none');
							} else {
								jQuery(current).stop().animate({'margin-left':'100%', opacity:0}, 1000, 'easeInOutExpo', function(){
									jQuery(this).css('display','none');
								});
							}
						} else {
							if (fromcube){
								jQuery(current).stop().css({'transform':'translateY(100%)', opacity:0}).css('display','none');
							} else {
								jQuery(current).stop().animate({'margin-top':'100%', opacity:0}, 1000, 'easeInOutExpo', function(){
									jQuery(this).css('display','none');
								});
							}
						}
						
 
						jQuery('.'+elm).find('.tab-selector .label.'+id).removeClass('current');
						jQuery(current).removeClass('current');
						
						if (jQuery(el).hasClass('horizontal')){
							if (fromcube){
								jQuery(current).css({
									'transform': 'translateX(-100%)',
									opacity: 0
								});
								jQuery(this).css({'transform':'translateX(100%)'});
							} else {
								jQuery(current).animate({
									'margin-left': '-100%',
									opacity: 0
								}, 1000, 'easeInOutExpo', function(){
									jQuery(this).css({'margin-left':'100%'});
								});
							}
						} else {
							if (fromcube){
								jQuery(current).css({
									'transform': 'translateY(-100%)',
									opacity: 0
								});
								jQuery(this).css({'transform':'translateY(100%)'});
							} else {
								jQuery(current).animate({
									'margin-top': '-100%',
									opacity: 0
								}, 1000, 'easeInOutExpo', function(){
									jQuery(this).css({'margin-top':'100%'});
								});
							}
						}
						
						
						jQuery('.'+elm).find('.tab-selector .label.'+randid).css({'color': window.pineOptions.styleColor });
						jQuery('.'+elm).find('.tab-selector .label.'+randid).addClass('current');
						jQuery('.'+elm).find('.tab-selector .label.'+randid).css('color', window.pineOptions.styleColor);
						jQuery('.'+elm).find('.tab-container > .content.'+randid).css('display','block');
						
						if (jQuery(el).hasClass('horizontal')){
							if (fromcube){
								jQuery('.'+elm).find('.tab-container > .content.'+randid).addClass('current').stop().css({ 'transform': 'translateX(0%)', opacity:1 });
								jQuery('.'+elm).find('.tab-container > .content.'+randid).css('display','block');
								if (jQuery(this).find('.services-graph').length){
									var id = jQuery('.'+elm).find('.tab-container > .content.'+randid).find('.services-graph').attr('id');
									sliding_horizontal_graph(id,3000);
								}
								
								if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8){
									if (jQuery('.'+elm).find('.tab-container > .content.'+randid).find('.recent_testimonials').length){
										jQuery('.'+elm).find('.tab-container > .content.'+randid).css('width','100%');
									}
								}
								
								if (jQuery('.'+elm).find('.tab-container > .content.'+randid).find('.indproj2').length){
									jQuery('.'+elm).find('.tab-container > .content.'+randid).find('.indproj2').each(function(){
										var newHeight = jQuery(this).width() * window.ration;
										jQuery(this).find('.da-thumbs li a').css('height',newHeight);
									});
								}
							} else {
								jQuery('.'+elm).find('.tab-container > .content.'+randid).addClass('current').stop().animate({ 'margin-left': '0%', opacity:1 },1000, 'easeInOutExpo', function(){
									jQuery(this).css('display','block');
									if (jQuery(this).find('.services-graph').length){
										var id = jQuery(this).find('.services-graph').attr('id');
										sliding_horizontal_graph(id,3000);
									}
									
									if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8){
										if (jQuery(this).find('.recent_testimonials').length){
											jQuery(this).css('width','100%');
										}
									}
									
									if (jQuery(this).find('.indproj2').length){
										jQuery(this).find('.indproj2').each(function(){
											var newHeight = jQuery(this).width() * window.ration;
											jQuery(this).find('.da-thumbs li a').css('height',newHeight);
										});
									}
									
								});
							}
						} else {
							if (fromcube){
								jQuery('.'+elm).find('.tab-container > .content.'+randid).addClass('current').stop().css({ 'transform': 'translateY(0%)', opacity:1 });
								jQuery('.'+elm).find('.tab-container > .content.'+randid).css('display','block');
								if (jQuery('.'+elm).find('.tab-container > .content.'+randid).find('.services-graph').length){
									var id = jQuery('.'+elm).find('.tab-container > .content.'+randid).find('.services-graph').attr('id');
									sliding_horizontal_graph(id,3000);
								}
								
								if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8){
									if (jQuery('.'+elm).find('.tab-container > .content.'+randid).find('.recent_testimonials').length){
										jQuery('.'+elm).find('.tab-container > .content.'+randid).css('width','100%');
									}
								}
								
								if (jQuery('.'+elm).find('.tab-container > .content.'+randid).find('.indproj2').length){
									jQuery('.'+elm).find('.tab-container > .content.'+randid).find('.indproj2').each(function(){
										var newHeight = jQuery(this).width() * window.ration;
										jQuery(this).find('.da-thumbs li a').css('height',newHeight);
									});
								}
							} else {
								jQuery('.'+elm).find('.tab-container > .content.'+randid).addClass('current').stop().animate({ 'margin-top': '0%', opacity:1 },1000, 'easeInOutExpo', function(){
									jQuery(this).css('display','block');
									if (jQuery(this).find('.services-graph').length){
										var id = jQuery(this).find('.services-graph').attr('id');
										sliding_horizontal_graph(id,3000);
									}
									
									if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8){
										if (jQuery(this).find('.recent_testimonials').length){
											jQuery(this).css('width','100%');
										}
									}
									
									if (jQuery(this).find('.indproj2').length){
										jQuery(this).find('.indproj2').each(function(){
											var newHeight = jQuery(this).width() * window.ration;
											jQuery(this).find('.da-thumbs li a').css('height',newHeight);
										});
									}
									
								});
							}
						}
					}
				});
				
			});
			jQuery(this).find('.tab-container').addClass('animateMinHeight');
			window.treethemesWaitOnTabs = true;
			jQuery('.animateMinHeight').on('animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd', function(){
				if (typeof Waypoint === "function") Waypoint.refreshAll();
				jQuery(document).trigger('treethemes_st_ready');
				window.treethemesWaitOnTabs = false;
			});
			jQuery(this).addClass('special_tabs_ready');
		});
	}
}

function treethemes_init_cube_flexsliders(context) {
	if (typeof jQuery.fn.flexslider !== 'function') {
		return;
	}

	var scope = context ? jQuery(context) : jQuery('.cbp-popup-singlePageInline, .cbp-popup-wrap');
	var flexDefaults = (window.pineOptions && window.pineOptions.projs_flex) ? window.pineOptions.projs_flex : {};

	scope.find('[id^="p-slider-"].flex-not-ready').each(function() {
		var $slider = jQuery(this);
		var sliderId = $slider.attr('id');

		if (!sliderId || $slider.data('flexslider')) {
			return;
		}

		var sliderOpts = {
			animation: flexDefaults.animation || 'slide',
			slideDirection: 'horizontal',
			directionNav: flexDefaults.directionNav !== false,
			slideshowSpeed: parseInt(flexDefaults.slideshowSpeed, 10) || 5500,
			controlsContainer: '#' + sliderId + ' .flex-viewport',
			pauseOnAction: false,
			pauseOnHover: flexDefaults.pauseOnHover !== false,
			keyboardNav: false,
			controlNav: flexDefaults.controlNav !== false,
			slideshow: flexDefaults.slideshow !== false,
			animationSpeed: parseInt(flexDefaults.animationSpeed, 10) || 1500,
			start: function(slider) {
				jQuery(slider).removeClass('flex-not-ready').find('.flex-direction-nav').css({
					position: 'absolute',
					width: '100%',
					top: '50%'
				});
				jQuery(window).resize();
				$slider.css('opacity', 1);
				if (window.lastcube && typeof window.lastcube.resizeSinglePageInline === 'function') {
					window.lastcube.resizeSinglePageInline();
				}
			},
			after: function() {
				if (window.lastcube && typeof window.lastcube.resizeSinglePageInline === 'function') {
					window.lastcube.resizeSinglePageInline();
				}
			}
		};

		if ($slider.find('li').length > 1) {
			$slider.css('opacity', 0).flexslider(sliderOpts);
			if (flexDefaults.height) {
				var maxHeight = String(flexDefaults.height);
				if (maxHeight.indexOf('px') === -1) {
					maxHeight += 'px';
				}
				$slider.find('ul.slides').css({ maxHeight: maxHeight });
			}
		} else {
			$slider.find('ul li').css('display', 'block');
			$slider.find('li a img').css('opacity', 1);
			$slider.find('.magnifier').on('click', function() {
				$slider.find('li a').trigger('click');
			});
			$slider.removeClass('flex-not-ready').css('opacity', 1);
		}
	});
}

jQuery(document).on('updateSinglePageInlineComplete.cbp updateSinglePageComplete.cbp', function() {
	treethemes_init_cube_flexsliders();
});

jQuery(document).on('click', '.special_tabs_ready .content.current .vc_toggle', function(e){
	window.special_tabs_aux = jQuery(e.currentTarget);
	setTimeout(function(){
		if (!jQuery(window.special_tabs_aux).closest('.special_tabs').hasClass('horizontal')){
			var tabSelectorHeight = jQuery(window.special_tabs_aux).closest('.special_tabs').find('.tab-selector').height(),
				currentTabHeight = jQuery(window.special_tabs_aux).closest('.special_tabs').find('.tab-container .current').height()+10;
			jQuery(window.special_tabs_aux).closest('.special_tabs').find('.tab-container').css('height', ( tabSelectorHeight > currentTabHeight ? tabSelectorHeight : currentTabHeight ));
		}
		else jQuery(window.special_tabs_aux).closest('.special_tabs').find('.tab-container').css('height', jQuery(window.special_tabs_aux).closest('.special_tabs').find('.tab-container .current').height()+10);
		delete window.special_tabs_aux;
	}, 500);
});

function isScrolledIntoView(id){
	var elem = "#" + id;
	var docViewTop = jQuery(window).scrollTop();
	var docViewBottom = docViewTop + jQuery(window).height();

	if (jQuery(elem).length > 0){
		var elemTop = jQuery(elem).offset().top;
		var elemBottom = elemTop + jQuery(elem).height();
	}

	return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
	  && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}

function sliding_horizontal_graph(id, speed){
	jQuery("#" + id + " li span").each(function(i){
		var cur_li = jQuery("#" + id + " li").eq(i).find("span");
		var w = cur_li.attr("title");
		cur_li.animate({width: w + "%"}, speed);
	})
}

function graph_init(id, speed){
	jQuery(window).scroll(function(){
		if (jQuery('#'+id).hasClass('notinview')){
			if (isScrolledIntoView(id)){
				jQuery('#'+id).removeClass('notinview');
				sliding_horizontal_graph(id, speed);
			}
		}
	});
	
	if (isScrolledIntoView(id)){
		sliding_horizontal_graph(id, speed);
	}
}

function incrementNumerical(id, percent, speed){
	setTimeout(function(){
		var newVal = parseInt(jQuery(id+' .value').html(),10)+speed;

		if (newVal > percent) newVal = percent;
		jQuery(id+' .value').html(newVal);
		if (newVal < percent){
			incrementNumerical(id, percent, speed);
		}
	}, 1);
}

function htmlDecode(a) {
	var b = jQuery("<div/>").html(a).text();
	return b
}

/* Convert HEX to RGB */
function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

// Grayscale w canvas method
function grayscale(src){
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	var imgObj = new Image();
	imgObj.src = src;
	canvas.width = imgObj.width;
	canvas.height = imgObj.height; 
	ctx.drawImage(imgObj, 0, 0); 
	var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
	for(var y = 0; y < imgPixels.height; y++){
		for (var x = 0; x < imgPixels.width; x++){
			var i = (y * 4) * imgPixels.width + x * 4;
			var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
			imgPixels.data[i] = avg; 
			imgPixels.data[i + 1] = avg; 
			imgPixels.data[i + 2] = avg;
		}
	}
	ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
	return canvas.toDataURL();
	
}

function pine_validate_email(email) {
   var reg = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
   if(reg.test(email) == false) {
	  return 0;
   } else {
		   return 1;
   }
}


function pine_checkerror(elem){
	if(jQuery(elem).hasClass('with_error')) {
		jQuery(elem).removeClass('with_error').addClass('change_error');
		jQuery(elem).val("");
	}
}


function pine_check_menu_right_frontier(el){
	if (el.offset().left + el.width() + el.children('ul').width() > jQuery(window).width() || el.closest('menu-to-the-left').length > 0){
		el.find('ul').addClass('menu-to-the-left');
	} else {
		el.find('ul').removeClass('menu-to-the-left');
	}
}

/* sliding-graphs */
function isScrolledIntoView(e){var t="#"+e;var n=$(window).scrollTop();var r=n+$(window).height();if($(t).length>0){var i=$(t).offset().top;var s=i+$(t).height()}return s>=n&&i<=r&&s<=r&&i>=n}function sliding_horizontal_graph(e,t){$("#"+e+" li span").each(function(n){var r=n+1;var i=$("#"+e+" li:nth-child("+r+") span");var s=i.attr("title");i.animate({width:s+"%"},t)})}function graph_init(e,t){$(window).scroll(function(){if(isScrolledIntoView(e)){sliding_horizontal_graph(e,t)}else{}});if(isScrolledIntoView(e)){sliding_horizontal_graph(e,t)}}function htmlDecode(e){var t=$("<div/>").html(e).text();return t}function playpause(e){if(e.hasClass("playing")){$("#slider_container").cameraResume();e.removeClass("playing").addClass("paused")}else{$("#slider_container").cameraPause();e.removeClass("paused").addClass("playing")}}

jQuery(window).on("load", function(){ jQuery('img, a:not(.social-network)').on('mouseenter', function(){ jQuery(this).data('title', jQuery(this).attr('title') ).removeAttr('title'); }).on('mouseleave',function(){ jQuery(this).attr('title', jQuery(this).data('title') ); }); jQuery('form.pine_search_input').removeClass('not-ready'); });