document.addEventListener("DOMContentLoaded", function(event) {
  var para = document.createElement("p");
  var node = document.createTextNode("DOM load success");
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);
});