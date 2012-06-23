jqShare
=======

jqShare is a jQuery plugin that ease the pain of creating share links for social sharing with javascript.


Often occurs you create new contents on the fly with ajax and want the user to have a list of links
to share the new content on their favourite social. If this is the case, this plugin is the right one for you.

Curious about that? Just start by playing a bit with our [dynamic demo page](http://jsbin.com/apasow/12),
so go and take a look at the [code](http://jsbin.com/apasow/12/edit)

## First glimpse

Using jqShare is as simple as using every other jQuery plugin. Speaking in code language you have to:

### 1. Prepare your html properly

    <div class="myShareDiv">
        <ul>
            <li><a class="_link-share-facebook">Share on Facebook</a></li>
            <li><a class="_link-share-twitter">Share on Twitter</a></li>
        </ul>
    </div>

As you can see, you just have to create a container which holds a set of links classed with the convention `_link-share-serviceName`
(obviously you can customize the class prefix if you don't like the default one) where _serviceName_ is the name of the
social service on which you want to share.

### 2. Initialize the plugin on your container

    $('.myShareDiv').jqShare(
        data :
        {
            url : 'http://www.site-i-want-to-share.com',
            title: 'uh, Such an awesome website my friends!'
        }
    );

The code here is almost self-explainatory. You have to call the plugin on the container div an populate the data object option
with the information about the website you want to make shareable: the _url_ and a descriptive message (_title_) to attach to the post.

This will _automagically_ turns your share links into fully-functionally clickable links!

Simple, isn't it?


## Supported services

Currently the supported services are:

  * [Facebook](http://fb.com)
  * [Twitter](http://twitter.com)
  * [Google+](http://plus.google.com)
  * [Pinterest](http://www.pinterest.com)

But you can simply [add other services on the fly](#adding-services-on-the-fly-or-even-customize-existing-ones) if needed.

## Plugin options

I've already told you jqShare behaves just like any other jQuery plugin and I'm pretty sure you are used to jQuery plugins.
So here's the the list of the option parameters you may use to configure the plugin on initialization:

### linkSelector

Default value : `"._link-share-"`

Used to configure the selector that allows the plugin to find all the links inside the container. Notice that this is just
a prefix, the service name will be appended to this selector (e.g. `"._link-share-facebook"`) to match only the known services.

### data

Default value:

    {
        url     : '',
        title   : '',
        image   : ''
    }

An object used to pass all the information about the link you want to make shareable. Every sub-parameter is almost self-explanatory:

  * `url` to pass the url you want to share (e.g. `"http://www.i-have-the-best-website-of-the-world.com"`)
  * `title` a descriptive title that will appear on some services (_facebook_ / _pinterest_ / _twitter_) as link title
  (e.g. `"Hey dude, this is really the best website of the world"`)
  * `image` this parameter is used by some services (_pinterest_) to determinate which image to share. So you have basically
  to provide an absolute url of an image of your choice (e.g. `"http://www.i-have-the-best-website-of-the-world.com/favicon.png"`)

## Retrieving the jqShare instance

Every time you call the jqShare plugin on some DOM element (that will be the jqShare container) the created jqShare instance
is injected to the DOM element data parameters, so it would be pretty easy for you to retrieve it for further manipulation.

E.g.

    //define options (intentionally truncated)
    var options = ... ;

    //instantiate the plugin
    $('.myContainer').jqShare(options);

    //retrieve the jqShare instance
    var jqShareInstance = $('.myContainer').data('jqShare');

## Useful methods for the jqShare instance

If you retrieved the jqShare instance you can update all the links without re-initializing the plugin again. You can use
the methods `setData` and `update`. Let's have a quick look on them:

### setData

Set data allows you to set new data to create the new share urls. Notice share links will not be automatically updated
after calling setData, if you want to trigger an update you have to explicitly call the `update` method on the jqShare
instance.

    setData(data, merge);

**Parameters**:

  * `data`: an object structured as the `data` option used to initialize the plugin (you can add the same attributes: `url`, `title`, `image`, etc...)
  * `merge`: a boolean value that indicates whether the new data is going to be merged with the existing one or not.
  If this value is set to `true` the new attributes will be merged to existing ones (i.e. the will overwrite redeclared ones and
  leaves unchanged the others). If the value is set to `false` the whole data object will be replaced with the new one.

### update

Used to effectively trigger the update of the dom elements after a `setData` call.

    update()

**No parameters**.

## Overwrite data options for specific services

Do you want to create a different title only for twitter on a different url only for facebook or pinterest? Yes you can!

You can pass special attributers to the `data` object (while initializing the plugin or while changing the data wiht `setData`) to do so.
Special attributes follow this convention `attributeName-serivce`. Check this example:

    $('.myContainer').jqShare({
        data:
        {
            url : 'http://www.site-i-want-to-share.com',
            title: 'uh, Such an awesome website my friends!',
            title-twitter: 'uh, Such an awesome website my friends! via @myTwitter #links #sharing #websites'
        }
    })

This way you have a custom title that will be applied only to the twitter service creating an optimized tweet.

## Adding services on the fly or (even) customize existing ones!

If you need more services than the default ones you can easily add them.
Services definitions are stored inside the `JqShare.prototype.services`. This variable olds an object (organized as a
key-value storage) where every service is defined by a link prototype such the following:

    'http://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${title}'

The actual configuration holds the following services:

    services :
    {
        // ${url} url, ${title} title, ${image} media
        facebook : 'https://www.facebook.com/sharer.php?u=${url}&t=${title}',
        twitter  : 'http://twitter.com/home?status=${url}%20-%20${title}',
        google   : 'https://plus.google.com/share?url=${url}',
        pinterest: 'http://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${title}'
    },

As you can see in the comment line each prototype can hold some placeholder like `${url}` or `${title}` that will be
automatically replaced with the current instance values while using the plugin. So, to add new services you would just have
to alter the services object as follows:

    JqShare.prototype.services.tumblr = 'http://www.tumblr.com/share?v=3&u=${url}&t=${title}';

As you imagined this allows you to have tumblr as new sharing service. Obviously you can even redefine existing ones by overwriting them.

## License
You are free to use this plugin both for commercial and non-commercial projects. However, if you plan to edit and redistribute the plugin you should give credit to the [developer](https://github.com/lmammino) by linking the [original github page of the project](https://github.com/lmammino/jqShare).

### Thankyou for being interested! ;)