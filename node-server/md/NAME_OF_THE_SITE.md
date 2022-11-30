1. Poate din cauza asta cînd faci reset la pagină pe cîteva sute de milesecunde îți apare alt font-family. Nu sunt sigur dar trebuie să încerc acest lucru.

```cs
.clearfix {
	overflow: auto;
	clear: both;
}
```

```html
<div class="clearfix"></div>
```

2.  In caz ca nu merge, incearca proprietatea `font-display`sau  `@font-face`

* [css-tricks.com](https://css-tricks.com/almanac/properties/f/font-display/)
* [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display)

3. Acesta chestie se numeshte мерцание загружаемых шрифтов, uitete la primu punct.

https://overcoder.net/q/292047/%D0%BC%D0%B5%D1%80%D1%86%D0%B0%D0%BD%D0%B8%D0%B5-%D1%88%D1%80%D0%B8%D1%84%D1%82%D0%B0-%D0%BF%D1%80%D0%B8-%D0%B4%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9-%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B5-%D0%BD%D0%BE%D0%B2%D1%8B%D1%85-css-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2