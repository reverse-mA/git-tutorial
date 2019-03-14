function showPic(whichpic){
	var source = whichpic.getAttribute('href')
	var placeholder = document.getElementById('placeholder')
	placeholder.setAttribute("src",source)
	var text = whichpic.getAttribute('title')
	var description = document.getElementById('description')
	description.firstChild.nodeValue = text
}
function popUp(winURL){
	window.open(winURL,"popUp",width=320,height=480)
}