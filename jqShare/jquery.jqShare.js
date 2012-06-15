/**
 * jqShare is a jQuery plugin that ease the pain of creating share links for social sharing with javascript.
 *
 * Often occurs you create new contents on the fly with ajax and want the user to have a list of links
 * to share the new content on their favourite social. If this is the case, this plugin is the right one for you.
 *
 * @author Luciano Mammino <lmammino@oryzone.com>
 * @version 1.0
 */
(function($)
{
    // our plugin constructor
    var JqShare = function( elem, options ){
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;

        this.metadata = this.$elem.data( 'plugin-options' );
    };

    // the plugin prototype
    JqShare.prototype = {
        defaults: {
            linkSelector: '._link-share-'
        },

        services : {
            // ${url} url, ${title} title, ${image} media
            facebook : 'https://www.facebook.com/sharer.php?u=${url}&t=${title}',
            twitter  : 'http://twitter.com/home?status=${url}%20-%20${title}',
            google   : 'https://plus.google.com/share?url=${url}',
            pinterest: 'http://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${title}'
        },

        init: function(container) {
            this.container = container;
            this.config = $.extend({}, this.defaults, this.options, this.metadata);
            this.data = this.config.data || {
                url : '',
                title : '',
                image : ''
            };

            this.update();
            return this;
        },

        setData: function(data, merge)
        {
            if(typeof(merge) == 'undefined')
                merge = false;

            if(merge)
                this.data = $.extend(this.data, data);
            else
                this.data = data;
        },

        update: function()
        {
            var service,
                data,
                variable,
                currentUrl;

            for(service in this.services)
            {
                currentUrl = this.services[service];

                data =
                {
                    url : this.data['url-' + service] || this.data.url,
                    title : this.data['title-' + service] || this.data.title,
                    image : this.data['image-' + service] || this.data.image
                };

                for(variable in data)
                    currentUrl = currentUrl.replace(new RegExp('\\$\\{'+ variable + '\\}',"gi"), encodeURIComponent(data[variable]));

                this.container.find(this.config.linkSelector + service).attr('href', currentUrl);
            }
        }
    };

    JqShare.defaults = JqShare.prototype.defaults;

    $.fn.jqShare = function(options) {
        return this.each(function() {
            $(this).data('jqShare', new JqShare(this, options).init($(this)));
        });
    };

})(jQuery);