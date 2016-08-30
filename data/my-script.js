// Ex URL... localhost:8000/tests/game_test.js?l=23

function main(){
	var highlight = window.location.search.substr(3);
	prettyFormatPreContent(highlight)
	injectCSSStylesForClasses()
}

main()

function prettyFormatPreContent(highlight){
	var preElem = document.getElementsByTagName('pre')[0]
	var bodyElem = document.getElementsByTagName('body')[0]
	var lines = preElem.textContent.split('\n')
	bodyElem.removeChild(preElem)

	for(var i in lines){
		var div = document.createElement('div')
		var span = document.createElement('span')
		var text = document.createTextNode(lines[i])
		lineNum = parseInt(i) + 1
		if(lineNum == highlight){
			div.className = 'highlightLine'
		} else {
			div.className = 'normalLine'
		}
		span.className = 'lineNumber'
		span.textContent = lineNum
		div.appendChild(span)
		div.appendChild(text)
		bodyElem.appendChild(div)
	}
}

function injectCSSStylesForClasses(){
	var lineNumCSS = '.lineNumber { color:#666;margin-right:10px;text-align:center;width:30px;display:inline-block;border-right: 1px solid grey;background-color:#ECDF83; }'
	var normalLineCSS = '.normalLine { font-family: monospace;padding:0;line-height:18px; }'
	var highlightLineCSS = '.highlightLine { font-family: monospace;padding:0;background-color:goldenrod;line-height:18px; }'
	var style = document.createElement('style');
	style.type = 'text/css';
	style.textContent = lineNumCSS + normalLineCSS + highlightLineCSS
	document.getElementsByTagName('head')[0].appendChild(style);
}