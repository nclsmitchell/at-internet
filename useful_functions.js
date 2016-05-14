/************************
TAGING
************************/

//Select page <title>
var pageTitle = document.getElementsByTagName('title')[0].innerHTML;

//Convert string to string without spaces or special characters
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

//Clicks taging automation
<a href="#" at-data-name="mylink" at-data-type="exit">My link</a>

if ($(this).attr("at-data-name") !== null) {

  $(this).click(function (e) {
    var clickName = $(this).attr("at-data-name");
    var clickType = $(this).attr("at-data-type") || "navigation";
    return tag.click.send({elem: $(this)[0], name: clickName, type: clickType});
  });
}

//Social buttons taging
function eventHandler(e) {
    if (e.data.service == "facebook_like") { //facebook_like: class of the link
        tag.click.send({elem:this, name: "pageName", level2: "level2", type: "action", chapter1: "chapter1", chapter2: "chapter2", chapter3: "facebook"});
    }
    if (e.data.service == "google_plusone") { //google_plusone: class of the link
        tag.click.send({elem:this, name: "pageName", level2: "level2", type: "action", chapter1: "chapter1", chapter2: "chapter2", chapter3: "google_plus"});
    }
    if (e.data.service == "tweet") { //tweet: class of the link
        tag.click.send({elem:this, name: "pageName", level2: "level2", type: "action", chapter1: "chapter1", chapter2: "chapter2", chapter3: "twitter"});
    }
}

//Test if adblock enabled
function getAttributes(url) {

  var attr = document.getElementsByTagName("img");

  for (var i = 0; i < attr.length; i++) {

    var attrSrc = attr[i].getAttribute("src");

    if attrSrc.match(url) != null {
        console.log(attrSrc);
    }
  }
}

//Force referrer
delete window.document.referrer;
window.document.__defineGetter__('referrer', function () {
  return "facebook.com";
});


/************************
DASHBOARD APP
************************/

//Convert Dashboard text into another, integrate between <script>...</script> in a text box
<script>
  function replaceElem(input, output, tag) {
    var array = document.getElementsByTagName(tag);
    var re = new RegExp(input);

    for (var i = 0; i < array.length; i++) {
      array[i].innerHTML = array[i].innerHTML.replace(re, output);
    }
  }

  setTimeout(function(){
    replaceElem("oldElem", "newElem", "span");
  }, 1000);
</script>

/************************
EXCEL - POWER QUERY
************************/

//Excel functions
table = Excel.CurrentWorkbook(){[Name="tableName"]}[Content],
date = table.Column(Table, "columnName"),
