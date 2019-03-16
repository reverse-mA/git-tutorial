function addLoadEvent(func) {
    var oldonload = window.onload;//将现有的事件处理函数的值存入变量中
    if (typeof window.onload != 'function') {
        window.onload = func;//如果这个事件处理函数没有绑定任何函数，就把新函数添加给它
    } else {
        window.onload = function() {
            oldonload();
            func();//如果已经绑定了函数，就把新函数追加到现有指令的末尾
      }
    }
}
function prepareLinks(){
	if(!document.getElementsByTagName)return false
	if(!document.getElementById)return false
	if(!document.getElementById("pokemonPic"))return false
	var images = document.getElementById("pokemonPic")
	var links = images.getElementsByTagName("a")
	for(var i=0;i<links.length;i++){
		links[i].onclick = function(){
			return showPic(this)
		}
	}
}
function showPic(pic){
	if(!document.getElementById("image"))return true
	var source = pic.getAttribute("href")
	var image = document.getElementById("image")
	if(image.nodeName!="IMG")return true
	image.setAttribute("src",source)
	if(!document.getElementById("text"))return false
	var text = document.getElementById("text")
	var subtext = pic.getAttribute("title")?pic.getAttribute("title"):""
	if(text.firstChild.nodeType==3)text.firstChild.nodeValue = subtext
	return false
}
addLoadEvent(prepareLinks)