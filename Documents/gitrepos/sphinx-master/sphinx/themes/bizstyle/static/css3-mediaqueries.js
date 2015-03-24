/*
 * bizstyle.css_t
 * ~~~~~~~~~~~~~~
 *
 * Sphinx stylesheet -- business style theme.
 *
 * :copyright: Copyright 2011-2014 by Sphinx team, see AUTHORS.
 * :license: BSD, see LICENSE for details.
 *
 */

@import url("basic.css");

/* -- page layout ----------------------------------------------------------- */

body {
    font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva',
                 'Verdana', sans-serif;
    font-size: 14px;
    letter-spacing: -0.01em;
    line-height: 150%;
    text-align: center;
    background-color: white;
    background-image: url(background_b01.png);
    color: black;
    padding: 0;
    border-right: 1px solid {{ theme_maincolor }};
    border-left: 1px solid {{ theme_maincolor }};

    margin: 0px 40px 0px 40px;
}

div.document {
    background-color: white;
    text-align: left;
    background-repeat: repeat-x;

    -moz-box-shadow: 2px 2px 5px #000;
    -webkit-box-shadow: 2px 2px 5px #000;
}

div.bodywrapper {
    margin: 0 0 0 240px;
    border-left: 1px solid #ccc;
}

div.body {
    margin: 0;
    padding: 0.5em 20px 20px 20px;
}

{%- if theme_rightsidebar|tobool %}
div.bodywrapper {
    margin: 0 240px 0 0;
    border-right: 1px solid #ccc;
}
{%- endif %}

div.related {
    font-size: 1em;

    -moz-box-shadow: 2px 2px 5px #000;
    -webkit-box-shadow: 2px 2px 5px #000;
}

div.related ul {
    background-color: {{ theme_maincolor }};
    height: 2em;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}

div.related ul li {
    color: white;
    margin: 0;
    padding: 0;
    height: 2em;
    float: left;
}

div.related ul li.right {
    float: right;
    margin-right: 5px;
}

div.related ul li a {
    margin: 0;
    padding: 0 5px 0 5px;
    line-height: 1.75em;
    color: #fff;
}

div.related ul li a:hover {
    color: #fff;
    text-decoration: underline;
}

div.sphinxsidebarwrapper {
    padding: 0;
}

div.sphinxsidebar {
    margin: 0;
    padding: 0.5em 12px 12px 12px;
    width: 210px;
    {%- if theme_rightsidebar|tobool %}
    float: right;
    {%- endif %}
    font-size: 1em;
    text-align: left;
}

div.sphinxsidebar h3, div.sphinxsidebar h4 {
    margin: 1em 0 0.5em 0;
    font-size: 1em;
    padding: 0.1em 0 0.1em 0.5em;
    color: white;
    border: 1px solid {{ theme_maincolor }};
    background-color: {{ theme_maincolor }};
}

div.sphinxsidebar h3 a {
    color: white;
}

div.sphinxsidebar ul {
    padding-left: 1.5em;
    margin-top: 7px;
    padding: 0;
    line-height: 130%;
}

div.sphinxsidebar ul ul {
    margin-left: 20px;
}

div.sphinxsidebar input {
    border: 1px solid {{ theme_maincolor }};
}

div.footer {
    background-color: white;
    color: {{ theme_maincolor }};
    padding: 3px 8px 3px 0;
    clear: both;
    font-size: 0.8em;
    text-align: right;
    border-bottom: 1px solid {{ theme_maincolor }};

    -moz-box-shadow: 2px 2px 5px #000;
    -webkit-box-shadow: 2px 2px 5px #000;
}

div.footer a {
    color: {{ theme_maincolor }};
    text-decoration: underline;
}

/* -- body styles ----------------------------------------------------------- */

p {
    margin: 0.8em 0 0.5em 0;
}

a {
    color: {{ theme_maincolor }};
    text-decoration: none;
}

a:hover {
    color: {{ theme_maincolor }};
    text-decoration: underline;
}

div.body a {
    text-decoration: underline;
}

h1, h2, h3 {
    color: {{ theme_maincolor }};
}

h1 {
    margin: 0;
    padding: 0.7em 0 0.3em 0;
    font-size: 1.5em;
}

h2 {
    margin: 1.3em 0 0.2em 0;
    font-size: 1.35em;
    padding-bottom: .5em;
    border-bottom: 1px solid {{ theme_maincolor }};
}

h3 {
    margin: 1em 0 -0.3em 0;
    font-size: 1.2em;
    padding-bottom: .3em;
    border-bottom: 1px solid #CCCCCC;
}

div.body h1 a, div.body h2 a, div.body h3 a,
div.body h4 a, div.body h5 a, div.body h6 a {
    color: black!important;
}

h1 a.anchor, h2 a.anchor, h3 a.anchor,
h4 a.anchor, h5 a.anchor, h6 a.anchor {
    display: none;
    margin: 0 0 0 0.3em;
    padding: 0 0.2em 0 0.2em;
    color: #aaa!important;
}

h1:hover a.anchor, h2:hover a.anchor, h3:hover a.anchor, h4:hover a.anchor,
h5:hover a.anchor, h6:hover a.anchor {
    display: inline;
}

h1 a.anchor:hover, h2 a.anchor:hover, h3 a.anchor:hover, h4 a.anchor:hover,
h5 a.anchor:hover, h6 a.anchor:hover {
    color: #777;
    background-color: #eee;
}

a.headerlink {
    color: #c60f0f!important;
    font-size: 1em;
    margin-left: 6px;
    padding: 0 4px 0 4px;
    text-decoration: none!important;
}

a.headerlink:hover {
    background-color: #ccc;
    color: white!important;
}

cite, code, tt {
    font-family: 'Consolas', 'Deja Vu Sans Mono',
                 'Bitstream Vera Sans Mono', monospace;
    font-size: 0.95em;
    letter-spacing: 0.01em;
}

code {
    background-color: #F2F2F2;
    border-bottom: 1px solid #ddd;
    color: #333;
}

code.descname, code.descclassname, code.xref {
    border: 0;
}

hr {
    border: 1px solid #abc;
    margin: 2em;
}

a code {
    border: 0;
    color: #CA7900;
}

a code:hover {
    color: #2491CF;
}

pre {
    background-color: transparent !important;
    font-family: 'Consolas', 'Deja Vu Sans Mono',
                 'Bitstream Vera Sans Mono', monospace;
    font-size: 0.95em;
    letter-spacing: 0.015em;
    line-height: 120%;
    padding: 0.5em;
    border-right: 5px solid #ccc;
    border-left: 5px solid #ccc;
}

pre a {
    color: inherit;
    text-decoration: underline;
}

td.linenos pre {
    padding: 0.5em 0;
}

div.quotebar {
    background-color: #f8f8f8;
    max-width: 250px;
    float: right;
    padding: 2px 7px;
    border: 1px solid #ccc;
}

div.topic {
    background-color: #f8f8f8;
}

table {
    border-collapse: collapse;
    margin: 0 -0.5em 0 -0.5em;
}

table td, table th {
    padding: 0.2em 0.5em 0.2em 0.5em;
}

div.admonition {
    font-size: 0.9em;
    margin: 1em 0 1em 0;
    border: 3px solid #cccccc;
    background-color: #f7f7f7;
    padding: 0;
}

div.admonition p {
    margin: 0.5em 1em 0.5em 1em;
    padding: 0;
}

div.admonition li p {
    margin-left: 0;
}

div.admonition pre, div.warning pre {
    margin: 0;
}

div.highlight {
    margin: 0.4em 1em;
}

div.admonition p.admonition-title {
    margin: 0;
    padding: 0.1em 0 0.1em 0.5em;
    color: white;
    border-bottom: 3px solid #cccccc;
    font-weight: bold;
    background-color: #165e83;
}

div.danger    { border: 3px solid #f0908d; background-color: #f0cfa0; }
div.error     { border: 3px solid #f0908d; background-color: #ede4cd; }
div.warning   { border: 3px solid #f8b862; background-color: #f0cfa0; }
div.caution   { border: 3px solid #f8b862; background-color: #ede4cd; }
div.attention { border: 3px solid #f8b862; background-color: #f3f3f3; }
div.important { border: 3px solid #f0cfa0; background-color: #ede4cd; }
div.note      { border: 3px solid #f0cfa0; background-color: #f3f3f3; }
div.hint      { border: 3px solid #bed2c3; background-color: #f3f3f3; }
div.tip       { border: 3px solid #bed2c3; background-color: #f3f3f3; }

div.danger p.admonition-title, div.error p.admonition-title {
    background-color: #b7282e;
    border-bottom: 3px solid #f0908d;
}

div.caution p.admonition-title,
div.warning p.admonition-title,
div.attention p.admonition-title {
    background-color: #f19072;
    border-bottom: 3px solid #f8b862;
}

div.note p.admonition-title, div.important p.admonition-title {
    background-color: #f8b862;
    border-bottom: 3px solid #f0cfa0;
}

div.hint p.admonition-title, div.tip p.admonition-title {
    background-color: #7ebea5;
    border-bottom: 3px solid #bed2c3;
}

div.admonition ul, div.admonition ol,
div.warning ul, div.warning ol {
    margin: 0.1em 0.5em 0.5em 3em;
    padding: 0;
}

div.versioninfo {
    margin: 1em 0 0 0;
    border: 1px solid #ccc;
    background-color: #DDEAF0;
    padding: 8px;
    line-height: 1.3em;
    font-size: 0.9em;
}

.viewcode-back {
    font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva',
                 'Verdana', sans-serif;
}

div.viewcode-block:target {
    background-color: #f4debf;
    border-top: 1px solid #ac9;
    border-bottom: 1px solid #ac9;
}

p.versionchanged span.versionmodified {
    font-size: 0.9em;
    margin-right: 0.2em;
    padding: 0.1em;
    background-color: #DCE6A0;
}

/* -- table styles ---------------------------------------------------------- */

table.docutils {
    margin: 1em 0;
    padding: 0;
    border: 1px solid white;
    background-color: #f7f7f7;
}

table.docutils td, table.docutils th {
    padding: 1px 8px 1px 5px;
    border-top: 0;
    border-left: 0;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
}

table.docutils td p {
    margin-top: 0;
    margin-bottom: 0.3em;
}

table.field-list td, table.field-list th {
    border: 0 !important;
    word-break: break-word;
}

table.footnote td, table.footnote th {
    border: 0 !important;
}

th {
    color: white;
    text-align: left;
    padding-right: 5px;
    background-color: #82A0BE;
}

div.container div.code-block-caption {
    background-color: #EEE;
    border-style: solid;
    border-color: #CCC;
    border-width: 1px 5px;
}

/* WIDE DESKTOP STYLE */
@media only screen and (min-width: 1176px) {
body {
    margin: 0 40px 0 40px;
}
}

/* TABLET STYLE */
@media only screen and (min-width: 768px) and (max-width: 991px) {
body {
    margin: 0 40px 0 40px;
}
}

/* MOBILE LAYOUT (PORTRAIT/320px) */
@media only screen and (max-width: 767px) {
body {
    margin: 0;
}
div.bodywrapper {
    margin: 0;
    width: 100%;
    border: none;
}
div.sphinxsidebar {
    display: none;
}
}

/* MOBILE LAYOUT (LANDSCAPE/480px) */
@media only screen and (min-width: 480px) and (max-width: 767px) {
body {
    margin: 0 20px 0 20px;
}
}

/* RETINA OVERRIDES */
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (min-device-pixel-ratio: 2) {
}

/* -- end ------------------------------------------------------------------- */
