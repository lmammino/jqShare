jqShare
=======

jqShare is a jQuery plugin that ease the pain of creating share links for social sharing with javascript.


Often occurs you create new contents on the fly with ajax and want the user to have a list of links
to share the new content on their favourite social. If this is the case, this plugin is the right one for you.

Curious about that? Just start by playing a bit with our [dynamic demo page](http://jsbin.com/apasow/12),
so go and take a look at the [code](http://jsbin.com/apasow/12/edit)

## First glimpse

Using jqShare is simple as using every other jQuery plugin. Speaking in code language you have to:

### 1. Prepare your html properly

    <div class="myShareDiv">
        <ul>
            <li><a class="_link-share-facebook>Share on Facebook</a></li>
            <li><a class="_link-share-twitter>Share on Twitter</a></li>
        </ul>
    </div>

As you can see you just have to create a container which holds a set of links classed with the convention `_link-share-serviceName`
 where _serviceName_ is the name of the social service on which you want to share.

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
Simple isn't it?


## Supported services

Currently the supported services are:

  * [Facebook](http://fb.com)
  * [Twitter](http://twitter.com)
  * [Google+](http://plus.google.com)
  * [Pinterest](http://www.pinterest.com)

But you can simply add other services on the fly if needed.

## Plugin options

<To be written> sorry no time yet :(

## Overwrite data options for specific services

<To be written> sorry no time yet :(

## Adding services on the fly

<To be written> sorry no time yet :(