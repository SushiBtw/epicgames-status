const ENTITIES = require('html-entities').AllHtmlEntities;

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

const between = exports.between = (haystack, left, right) => {
    let pos;
    pos = haystack.indexOf(left);
    if (pos === -1) { return ''; }
    haystack = haystack.slice(pos + left.length);
    if (!right) { return haystack; }
    pos = haystack.indexOf(right);
    if (pos === -1) { return ''; }
    haystack = haystack.slice(0, pos);
    return haystack;
};

const removeHtml = exports.removeHtml = string => new ENTITIES().decode(
    string.replace(/\n/g, ' ')
        .replace(/\s*<\s*br\s*\/?\s*>\s*/gi, '\n')
        .replace(/<\s*\/\s*p\s*>\s*<\s*p[^>]*>/gi, '\n')
        .replace(/<.*?>/gi, ''),
).trim();