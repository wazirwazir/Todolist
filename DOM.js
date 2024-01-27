var input = document.getElementById("inn");
var button = document.getElementById("but");
var ol = document.getElementById("list")

button.addEventListener("click", function() {
    if (input.value.length > 0) {
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    ol.appendChild(li)
    input.value = "";
    }
})

input.addEventListener("keypress", function(entre){
    if (input.value.length > 0 && entre.keyCode === 13) {
        var li = document.createElement("li")
        li.appendChild(document.createTextNode(input.value))
        ol.appendChild(li)
        input.value = "";
        }
})

var li = document.createElement("li")
li.addEventListener("click", function() {
    var erase = document.createElement("button")
    erase.appendChild(document.createTextNode("Delete"))
    li.classList.add(erase)
})
