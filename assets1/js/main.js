(function ($) {
    "use strict";

    /*:::::::::::::::::::::::::::::::::::
            Navbar Area
    :::::::::::::::::::::::::::::::::::*/

     // Navbar Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            $(".navbar").addClass("bg-primari");
        } else {
            $(".navbar").removeClass("bg-primari");
        }
    });


    //Smoth Scroll
    $(function () {
        $('.nav-link, .smoth-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });

    /*==========================
        Hero Area Slider
    ============================*/

    $('.hero-area-slids').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        doots: false,
        autoplay: true,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeIn'

    });
    //Wow Animation
    new WOW().init();
    /*==========================
        Hero Title typer
    ============================*/
    var element = $('.typed');

    $(function () {
        element.typed({
            strings: ["Web Designer.", "Graphic Designer."],
            typeSpeed: 100,
            loop: true,
            autoplay: true,
        });
    });

    /*::::::::::::::::::::::::::::::::::::
       Portfolio Section
    ::::::::::::::::::::::::::::::::::::*/

    lightbox.option({
        'imageFadeDuration': 800,
        'resizeDuration': 500,
        'wrapAround': true
    });

    $('.portfolio-area').mixItUp();


    /*::::::::::::::::::::::::::::::::::::
       Testimonial Section
    ::::::::::::::::::::::::::::::::::::*/

    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });


    /*::::::::::::::::::::::::::::::::::::
       Contact Area 
    ::::::::::::::::::::::::::::::::::::*/
    var form = $('#contact-form');

    var formMessages = $('.form-message');
    $(form).submit(function (e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);

                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });
    
    
    /*::::::::::::::::::::::::::::::::::::
    Preloader
    ::::::::::::::::::::::::::::::::::::*/
    $(window).on('load', function () {
        $('.preloader').fadeOut();
    });

}(jQuery));

/*::::::::::::::::::::::::::::::::::::
    Project request form
    ::::::::::::::::::::::::::::::::::::*/

 new JotformFeedback({ type: 2, width: 700, height:900, fontColor: "#FFFFFF", background: "#F59202", isCardForm: false, formId: "230088999574475" , buttonText: "Project request form", buttonSide: "bottom", buttonAlign: "right", base: "https://form.jotform.com/", }); 
 var ifr = document.getElementById("lightbox-230088999574475");
 if (ifr) { 
       var src = ifr.src; var iframeParams = []; if (window.location.href && window.location.href.indexOf("?") > -1) { iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&')); } if (src && src.indexOf("?") > -1) { iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&")); src = src.substr(0, src.indexOf("?")) } iframeParams.push("isIframeEmbed=1"); ifr.src = src + "?" + iframeParams.join('&'); } window.handleIFrameMessage = function(e) { if (typeof e.data === 'object') { return; } var args = e.data.split(":"); if (args.length > 2) { iframe = document.getElementById("lightbox-" + args[(args.length - 1)]); } else { iframe = document.getElementById("lightbox"); } if (!iframe) { return; } switch (args[0]) { case "scrollIntoView": iframe.scrollIntoView(); break; case "setHeight": iframe.style.height = args[1] + "px"; if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) { iframe.style.minHeight = args[1] + "px"; } break; case "collapseErrorPage": if (iframe.clientHeight > window.innerHeight) { iframe.style.height = window.innerHeight + "px"; } break; case "reloadPage": window.location.reload(); break; case "loadScript": if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; } var src = args[1]; if (args.length > 3) { src = args[1] + ':' + args[2]; } var script = document.createElement('script'); script.src = src; script.type = 'text/javascript'; document.body.appendChild(script); break; case "exitFullscreen": if (window.document.exitFullscreen) window.document.exitFullscreen(); else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen(); else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen(); else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen(); else if (window.document.msExitFullscreen) window.document.msExitFullscreen(); break; } var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false; if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) { var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)}; iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*"); } }; window.isPermitted = function(originUrl, whitelisted_domains) { var url = document.createElement('a'); url.href = originUrl; var hostname = url.hostname; var result = false; if( typeof hostname !== 'undefined' ) { whitelisted_domains.forEach(function(element) { if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) || hostname === element ) { result = true; } }); return result; } };
 if (window.addEventListener) {
 window.addEventListener("message", handleIFrameMessage, false);
 }
 else if (window.attachEvent) { window.attachEvent("onmessage", handleIFrameMessage); } 




