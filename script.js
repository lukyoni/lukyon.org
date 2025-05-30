var $ = {};
$.id = function(id) { return document.getElementById(id); }
$.qs = function(sel, root) { return (root || document).querySelector(sel); }
$.qsa = function(sel, root) { return (root || document).querySelectorAll(sel); }
$.hasClass = function(el, klass) { return el && el.classList.contains(klass); }
$.addClass = function(el, klass) { if (el) el.classList.add(klass); }
$.removeClass = function(el, klass) { if (el) el.classList.remove(klass); }
$.html = function(el, html) { if (el) return el.innerHTML = html ? html : el.innerHTML; return '';}
$.hash = function(at) {if (at) window.location.hash = '#' + at; return window.location.hash.substr(1);}

function page(page) {
    if (page == '') page = 'home';
    let content = $.id('content');
    let contentx = $.id('content-' + page);
    $.html($.id('content'), $.html($.id('content-' + page)));
    $.qsa('#navbar a.selected').forEach(el => { $.removeClass(el, 'selected'); });
    $.addClass($.qs('#navbar a[data-page="' + page + '"]'), 'selected');
    $.hash(page);
} 
page($.hash());

