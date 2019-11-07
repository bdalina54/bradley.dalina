(function (w,d)
{
    //'use_strict';
    d.documentElement.classList.remove("no-js");
    var site_email = d.querySelector('.site-email');
    var site_number = d.querySelector('.site-number');
    if(site_email){
        site_email.addEventListener("mouseover", function(){
            this.setAttribute("href","mailto: bdalina54@gmail.com");
        }, false);
        site_email.addEventListener("mouseout", function(){
            this.setAttribute("href","");
        }, false);
    }
    if(site_number){
        site_number.addEventListener("mouseover", function(){
            this.setAttribute("href","tel: 639264482952");
        }, false);
        site_number.addEventListener("mouseout", function(){
            this.setAttribute("href","");
        }, false);
    }

    function init() {
        // quit if this function has already been called
        if (arguments.callee.done) return;
        // flag this function so we don't do the same thing twice
        arguments.callee.done = true;

        setTimeout(function(){d.body.classList.add('loaded'); d.querySelector('html').removeAttribute('style'); }, 3000);

        setTimeout(function(){
            var fbroot = d.getElementById("fb-root");
            var fbscript =  d.createElement("script");
                fbscript.setAttribute("language","javascript");
                fbscript.type = "text/javascript";
                fbscript.setAttribute("rel","nofollow");
                fbscript.setAttribute("defer","defer");
                fbscript.innerHTML = ""+
                                        "window.fbAsyncInit = function() {"+
                                          "FB.init({"+
                                            "xfbml            : true,"+
                                            "version          : 'v4.0'"+
                                        "});"+
                                    "};"+
                                    ""+
                                        "(function(d, s, id) {"+
                                        "var js, fjs = d.getElementsByTagName(s)[0];"+
                                        "if (d.getElementById(id)) return;"+
                                        "js = d.createElement(s); js.id = id;"+
                                        "js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';"+
                                        "fjs.parentNode.insertBefore(js, fjs);"+
                                    "}(document, 'script', 'facebook-jssdk'));";
                fbroot.appendChild(fbscript);

                if(d.querySelector(".webp header#header")){
                    d.querySelector(".webp header#header").style.backgroundImage="url(images/emma-matthews-558684-unsplash.webp)";
                }
                if(d.querySelector(".no-webp header#header")){
                    d.querySelector(".no-webp header#header").style.backgroundImage="url(images/emma-matthews-558684-unsplash.jpg)";
                }
                if(d.querySelector(".webp section#working-experience")){
                    d.querySelector(".webp section#working-experience").style.backgroundImage="url(images/architecture-black-and-white-buildings-1437493.webp)";
                }
                if(d.querySelector(".no-webp section#working-experience")){
                    d.querySelector(".no-webp section#working-experience").style.backgroundImage="url(images/architecture-black-and-white-buildings-1437493.jpg)";
                }
                if(d.querySelector(".webp section#contact")){
                    d.querySelector(".webp section#contact").style.backgroundImage="url(images/emma-matthews-558684-unsplash.webp)";
                }
                if(d.querySelector(".no-webp section#contact")){
                    d.querySelector(".no-webp section#contact").style.backgroundImage="url(images/emma-matthews-558684-unsplash.jpg)";
                }

                // make a stylesheet link
                var FontAwesome = document.createElement( "link" );
                FontAwesome.rel = "stylesheet";
                FontAwesome.href = "fonts/font-awesome.min.css";
                FontAwesome.setAttribute("id","css_fontawesome");
                FontAwesome.setAttribute("media","all");
                FontAwesome.setAttribute("async","async");
                FontAwesome.type = "text/css";
                // insert it at the end of the head in a legacy-friendly manner
                document.head.insertBefore( FontAwesome, d.getElementById("css_opensans").nextSibling ); //d.head.childNodes[ document.head.childNodes.length - 1 ]

        }, 10000);


        d.getElementById('bradley-dalina-css').setAttribute('rel', 'stylesheet');
    }
    if (d.addEventListener) {
        d.addEventListener("DOMContentLoaded", init, false);
    }
    w.onload = init;
    /*@cc_on @*/
    /*@if (@_win32)
      document.write('<link id="font-awesome-css" rel="stylesheet" href="assets/css/font-awesome.min.css" as="style" type="text/css" async onload="this.media='all'">');
      document.write('<link id="css_opensans" rel="stylesheet" href="fonts/open-sans.css" as="style" type="text/css" async onload="this.media='all'">');
      document.write('<link id="bradley-dalina-css" rel="stylesheet" href="/css/bradley-dalina.css" as="style" type="text/css" async onload="this.media='all'">');
    /*@end @*/
})(window, document);
