---
layout: default
title: sbfaulkner/jquery.hint @ GitHub
---

# [jquery.hint](http://github.com/sbfaulkner/jquery.hint) #

<p class='subtitle'>a hinted input plugin for jquery</p>

The hint plugin for jquery provides a convenient (and stylish!) way to provide sample or hint text in input fields on your forms.

## Dependencies ##

* jquery

## Install ##

1. Copy javascript to your project.
2. Include javascript in your html.
3. Add input[type=text] to your html with corresponding label containing sample/hint text.
4. Invoke the plugin in your document ready handler.

## Example ##

{% highlight html %}
<html>
  <head>
    <title>jquery.token example</title>
    <script src="/javascripts/jquery.js" type="text/javascript"></script>
    <script src="/javascripts/jquery.hint.js" type="text/javascript"></script>
    <script type="text/javascript">
      $(document).ready(function() {
        $('input.email').hint();
      });
    </script>
  </head>
  <body>
    <label for='email'>Email address</label>
    <input type='text' class='email' id='email'/>
  </body>
</html>
{% endhighlight %}

<label for='email'>Email address</label>
<input type='text' class='email' id='email'/>

## License ##

<p class='legal'>
  Copyright © 2010 unwwwired.net
</p>

<p class='legal'>
  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
</p>

<p class='legal'>
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
</p>

<p class='legal'>
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</p>

## Author ##

S. Brent Faulkner (brentf@unwwwired.net)

<script type="text/javascript">
  //<![CDATA[
  $(document).ready(function() {
    $('input.email').hint();
  });
  //]]>
</script>
