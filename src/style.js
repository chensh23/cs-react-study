
import {createGlobalStyle} from "styled-components"

createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}


.show {
    /*opacity: 1;
    transition: all 1s ease-out;*/
    animation: show-item 1s ease-out forwards;
}

.hide {
    /*opacity: 0;
    transition: all 1s ease-out;*/

    animation: hide-item 1s ease-out forwards;
}

@keyframes show-item {
    0% {
        opacity: 0;
        color: red
    }

    50% {
        opacity: 0.5;
        color: yellow;
    }

    100% {
        opacity: 1;
        color: blue;
    }
}

@keyframes hide-item {
    0% {
        opacity: 1;
        color: red
    }

    50% {
        opacity: 0.5;
        color: yellow;
    }

    100% {
        opacity: 0;
        color: blue;
    }
}

.fade-enter, .fade-appear {
    opacity: 0;
}

.fade-enter-active, .fade-appear-active {
    opacity: 1;
    transition: opacity 1s ease-out;
}

.fade-enter-done {
    opacity: 1;
}

.fade-exit {
    opacity: 1;
}

.fade-exit-active {
    opacity: 0;
    transition: opacity 1s ease-out;
}

.fade-exit-done {
    opacity: 0;
}
`
