$(document).ready(function() {
    var app = document.getElementById("laptop-typewriter");
    var typewriter = new Typewriter(app, {
        delay: 75
    });

    typewriter
        .typeString(
            'class <span class="syntax-dark-blue">Human</span> <span class="curly-braces">{</span>'
        )
        .typeString("<br>")
        .typeString(
            '<span class="indent-once">constructor</span><span class="parentheses">(</span><span class="syntax-dark-blue">name</span><span class="parentheses">)</span> <span class="curly-braces">{</span>'
        )
        .typeString("<br>")
        .typeString(
            '<span class="syntax-dark-blue indent-twice">this</span>.name = name;'
        )
        .typeString("<br>")
        .typeString('<span class="indent-once curly-braces">}</span>')
        .typeString("<br>")
        .typeString("<br>")
        .pauseFor(500)
        .typeString(
            '<span class="indent-once">get</span> <span class="syntax-dark-blue">greeting</span><span class="parentheses">()</span> <span class="curly-braces">{'
        )
        .typeString("<br>")
        .typeString(
            '<span class="indent-twice syntax-dark-blue">return</span> <span class="syntax-light-blue">`Hello! My name is</span>'
        )
        .typeString("<br>")
        .typeString(
            '<span class="indent-twice">$</span><span class="curly-braces">{</span>this.<span class="syntax-dark-blue">name</span><span class="curly-braces">}</span>!<span class="syntax-light-blue">`</span>;'
        )
        .typeString("<br>")
        .typeString('<span class="indent-once">}</span>')
        .typeString("<br>")
        .typeString("<br>")
        .typeString(
            'const <span class="sytax-dark-blue">Coder</span> = <span class="syntax-dark-blue">new</span> Human<span class="parentheses">(</span><span class="syntax-light-blue">"Rebecca"</span><span class="parentheses">)</span>;'
        )
        .typeString("<br>")
        .typeString("<br>")
        .typeString("Coder.greeting;")
        .start();
    console.log("Hello! My name is Rebecca!");
});