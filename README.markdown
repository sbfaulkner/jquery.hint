# jquery.hint

jquery plugin to convert field labels into in-field hints i.e. sample text

## Usage

1. Copy javascript to your project.

2. Include javascript in your html.

        <script src="/javascripts/jquery.js" type="text/javascript"></script>
        <script src="/javascripts/jquery.hint.js" type="text/javascript"></script>

3. Add input[type=text] to your html with corresponding label containing sample/hint text.

        <label for='email'>Email address</label>
        <input type='text' id='email' class='hinted'/>

4. Invoke the plugin in your document ready handler.

        $(document).ready(function() {
          $('input.hinted').hint();
        });

## Options

### hintClass
Class name to add to field when hint is present.

Default: 'hint'

## CHANGES

## TODO

* support for password fields? perhaps dynamically changing type from text to password (and back).

## Legal

**Author:** S. Brent Faulkner <brentf@unwwwired.net>  
**License:** Copyright &copy; 2010 unwwwired.net, released under the MIT license