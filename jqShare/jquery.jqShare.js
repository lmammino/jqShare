/**
 * jqShare is a jQuery plugin that ease the pain of creating share links for social sharing with javascript.
 *
 * Often occurs you create new contents on the fly with ajax and want the user to have a list of links
 * to share the new content on their favourite social. If this is the case, this plugin is the right one for you.
 *
 * @author Luciano Mammino <lmammino@oryzone.com>
 * @version 1.0
 */
var JqShare = null;
(function ($) {

    // our plugin constructor
    JqShare = function ( elem, options ) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;

        this.metadata = this.$elem.data( 'plugin-options' );
    };

    // the plugin prototype
    JqShare.prototype =
    {
        defaults:
        {
            linkSelector: '._link-share-',
            data:
            {
                url : window.location.href || '',
                title : $('title').text() || '',
                image : $('img:first').attr('src') || ''
            }
        },

        init: function (container)
        {
            this.container = container;
            this.config = $.extend({}, this.defaults, this.options, this.metadata);
            this.data = this.config.data;

            this.update();

            return this;
        },

        setData: function (data, merge) 
        {
            
            if (typeof merge === 'undefined')
                merge = false;            

            if (merge)
                this.data = $.extend(this.data, data);
            else
                this.data = data;

            return this;
        },

        update: function () 
        {
            var service,
                data,
                variable,
                currentUrl;

            for (service in this.services) 
            {
                
                if (this.services.links.hasOwnProperty(service)) {
                    
                    currentUrl = this.services.links[service];
                                
                    data = {
                        url : this.data['url-' + service] || this.data.url,
                        title : this.data['title-' + service] || this.data.title,
                        image : this.data['image-' + service] || this.data.image
                    };
    
                    for (variable in data)
                        currentUrl = currentUrl.replace(new RegExp('\\$\\{'+ variable + '\\}',"gi"), encodeURIComponent(data[variable]));                
    
                    this.container.find(this.config.linkSelector + service).attr('href', currentUrl);
                }
            }

            return this;
        }
    };

    JqShare.defaults = JqShare.prototype.defaults;

    JqShare.prototype.services =
    {
        // ${url} url, ${title} title, ${image} media

        links :
        {
            facebook : 'https://www.facebook.com/sharer.php?u=${url}&t=${title}',
            twitter  : 'http://twitter.com/home?status=${url}%20-%20${title}',
            google   : 'https://plus.google.com/share?url=${url}',
            pinterest: 'http://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${title}'
        },

        buttons :
        {
            twitter : '<a href="https://twitter.com/share" class="twitter-share-button" data-via="loige">Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>'
        }
    };

    $.fn.jqShare = function (options)
    {
        return this.each(function () {
            $(this).data('jqShare', new JqShare(this, options).init($(this)));
        });
    };
})(jQuery);