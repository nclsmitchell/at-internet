# at-internet
*Useful JavaScript elements dedicated to the AT Internet solutions*


### Taging

- **toAtString** (*string*):
Convert string to string without spaces or special characters

```
function toAtString (string) {
  string = string.replace(/ /g, "_").toLowerCase();
  string = string.replace(/[\300-\306]|[\340-\346]/g, "a");
  string = string.replace(/[\310-\313]|[\350-\353]/g, "e");
  string = string.replace(/[\314-\317]|[\354-\357]/g, "i");
  string = string.replace(/[\322-\330]|[\362-\370]/g, "o");
  string = string.replace(/[\331-\334]|[\371-\374]/g, "u");
  string = string.replace(/[\307\347]/g, "c");
  string = string.replace(/[\321\361]/g, "n");
  string = string.replace(/[^\w]/gi, '_');
  return string;
}
```

- Clicks taging automation:

```
//Link example <a href="#" at-data-name="mylink" at-data-type="exit">My link</a>

function sendClick (e) {
  var clickName = e.target.getAttribute("at-data-name");
  var clickType = e.target.getAttribute("at-data-type") || "navigation";
  return tag.click.send({elem: this, level2: "1", name: clickName, type: clickType});
}

var el = document.querySelectorAll('[at-data-name]');

for (var i = 0; i < el.length; i++) {
  el[i].addEventListener("click", sendClick, false);
}
```

- Referrer forcing

```
delete window.document.referrer;
window.document.__defineGetter__('referrer', function () {
  return "newReferrer.com";
});
```

### Dashboard App

- **replaceElem** (*input, output, tagName*):
Convert Dashboard text into another, integrate between <script>...</script> in a text box


```
function replaceElem (input, output, tag) {
  var array = document.getElementsByTagName(tag);
  var re = new RegExp(input);

  for (var i = 0; i < array.length; i++) {
    array[i].innerHTML = array[i].innerHTML.replace(re, output);
  }
}

setTimeout(function (){
  replaceElem("oldElem", "newElem", "span");
}, 1000);
```
