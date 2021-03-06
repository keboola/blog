/*!
 *
 *  Project:  Keboola papers
 *  Author:   Petr Urbanek - www.r4ms3s.cz
 *  Twitter:  @r4ms3scz
 *
 * @param {Object} window, document, undefined
 *
 */

 (function(window, document, undefined) {
    
    // Defaults
    // =====================================
   
    var r4 = window.r4 = {
        utils : {},
        cache : {}
    };
  

    // Methods
    // =====================================

    r4.utils.init = function() {
        r4.cache.window                = $(window);
        r4.cache.document              = $(document);
        r4.cache.html                  = $('html');
        r4.cache.body                  = $('body');

        r4.cache.header                = r4.cache.body.find('header');


        // MEDIA QUERIES
        r4.mobile = false;
        r4.bounds = [
            [1000, 10000, function() {
                mobile = false;
            }],
            [0, 1000, function() {
                mobile = true;
            }]
        ],
        r4.lastBound = -1;

    };


    // RESIZE
    r4.utils.resize = function(start){
        r4.utils.calcBounds(r4.cache.window, r4.bounds, r4.lastBound, start);
    };


    // RESIZE METHODS
    r4.utils.calcBounds = function(ths, bounds, lastBound, start) {
        var w = ths.width(),
            h = ths.height();
        for(var i = 0, j = bounds.length; i < j; i++) {
            if(w > bounds[i][0] && w < bounds[i][1] && lastBound !== i) {
                bounds[i][2]();
                lastBound = i;
            }
        }

    };




    // MOST RECENT ARTICLE - SLIDER
    r4.utils.articleslider = function(w){

        var slider = $('.most-recent-list'),
            content = slider.find('.most-recent-list-content'),
            item = content.find('li');

        var fullw = 0,
            wparam = 400,
            w = r4.cache.window.width();

        if (w <= 1000) {
            wparam = 160;
        } else if (w <= 1280) {
            wparam = 260;
        }

        item.each(function(){
            fullw = fullw + $(this).width();
        });

        content.css({
            width: fullw + wparam + 'px'
        });


        var wrap = slider.parent(),
            options = {
                horizontal: 1,
                //itemNav: 'forceCentered',
                itemNav: 'basic',
                //smart: 1,
                //activateMiddle: 1,
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                startAt: 0,
                scrollBy: 0,
                speed: 300,
                elasticBounds: 1,
                //easing: 'easeOutExpo',
                pagesBar: slider.find('.most-recent-pages'),
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1,
                //cycleBy: 'items',
                //cycleInterval: 2500,
                prevPage: wrap.find('.btn-prevpage'),
                nextPage: wrap.find('.btn-nextpage')
            },
            sly = new Sly(slider, options);
            sly.init();
            

        // SLIDER - RESIZE
        r4.cache.window.smartresize(function() {

            var fullw = 0,
                wparam = 400,
                w = r4.cache.window.width();

            r4.cache.window.smartresize(function() {
                if (w <= 1000) {
                    wparam = 160;
                } else if (w <= 1280) {
                    wparam = 260;
                }

                item.each(function(){
                    fullw = fullw + $(this).width();
                });

                content.css({
                    width: fullw + wparam + 'px'
                });
                
                sly.reload();
            });
            
        });

    };



    r4.utils.domLoad = function() {

        r4.utils.resize();
        r4.cache.window.smartresize(function() {
            r4.utils.resize();
        });
        


        // SHOW / HIDE MENU
        $('.btn-show-menu').on('click', function(e){
            e.preventDefault();

            r4.cache.html.toggleClass('show-menu');
        });



        // MOST RECENT ARTICLE - SLIDER
        if ($('.most-recent-list').length){
            r4.utils.articleslider();    
        }


        // SHARE FACEBOOK
        $('.share-btn-fb').on('click', function(e){
            e.preventDefault();

            var a = $(this),
                url = a.data('url');

            window.open('http://facebook.com/sharer/sharer.php?u='+encodeURIComponent(url), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
        });


        // SHARE TWITTER
        $('.share-btn-tw').on('click', function(e){
            e.preventDefault();

            var a = $(this),
                url = a.data('url'),
                text = a.data('text');

            window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
        });


    };


    // Initialize Events
    // =====================================

    r4.utils.init();

    jQuery(function($) {
        r4.utils.domLoad();
    });


})(window, document);

// debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
(function($,sr) {

    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap) {
                    func.apply(obj, args);
                }
                timeout = null;
            }

            if (timeout) {
                clearTimeout(timeout);
            } else if (execAsap) {
                func.apply(obj, args);
            }
            timeout = setTimeout(delayed, threshold || 100);
        };
    };

    jQuery.fn[sr] = function(fn){ return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
