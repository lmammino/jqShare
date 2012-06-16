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

Simple isn't it?


## Supported services

Currently the supported services are:

  * [Facebook](http://fb.com)
  * [Twitter](http://twitter.com)
  * [Google+](http://plus.google.com)
  * [Pinterest](http://www.pinterest.com)

But you can simply [add other services on the fly](#adding-services-on-the-fly-or-\(even\)-customize-existing-ones!) if needed.

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

**To be written** sorry no time yet :(

## Useful methods for the jqShare instance

**To be written** sorry no time yet :(

## Overwrite data options for specific services

**To be written** sorry no time yet :(

## Adding services on the fly or (even) customize existing ones!

**To be written** sorry no time yet :(