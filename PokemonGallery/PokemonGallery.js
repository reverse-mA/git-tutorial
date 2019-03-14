window.onload = prepareLinks
function prepareLinks(){
	var links = document.getElementsByTagName("a")
	for(var i=0;i<links.length;i++){
		if(links[i].getAttribute("class")=="pm"){
			links[i].onclick = function(){
				showPic(this)
				return false
			}
		}
	}
}
function showPic(pic){
	var source = pic.getAttribute("href")
	var image = document.getElementById("image")
	image.setAttribute("src",source)
	var text = document.getElementById("text")
	var subtext = pic.getAttribute("title")
	text.firstChild.nodeValue = subtext
}