/*******************************************************************************
 * CodeMirror Bundle - JS
 * Copyright © 2023 Italo Osorio
 * http://silk.oopsclick.com
 *
 *  Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 ******************************************************************************/

var generateButton = function(label, action){

	const newButton = document.createElement('button');
	newButton.textContent = label;
	newButton.addEventListener("click", action);
	document.getElementById('bar').appendChild(newButton);

}

var fillBar = function(){

	generateButton("Light Theme", function(){
		editor.setLightTheme();
	});

	generateButton("Dark Theme", function(){
		editor.setDarkTheme();
	});

	generateButton("Get Code", function(){
		const text = editor.getCode();
		if( text=="" ){
			alert("No code in editor!")
			return;
		}
		alert(text);
	});

	generateButton("Set Code", function(){
		const text = prompt("New Code");
		if( text == null ) return;
		if( text=="" ){
			alert("No code entered!")
			return;
		}
		editor.setCode(text);
	});

	generateButton("Get Selection", function(){
		const text = editor.getSelection();
		if( text=="" ){
			alert("No code selected!")
			return;
		}
		alert("Selected: "+text);
	});

	generateButton("Replace Selection", function(){
		const text = editor.getSelection();
		if( text=="" ){
			alert("No code selected!")
			return;
		}

		const code = prompt("New code");
		if( code == null ) return;
		if( code=="" ){
			alert("No code entered!")
			return;
		}
		editor.replaceSelection(code);
	});

	generateButton("Editable", function(){
		editor.setReadOnly(false);
	});

	generateButton("Read Only", function(){
		editor.setReadOnly(true);
	});

	generateButton("Search", function(){
		editor.openSearch();
	});

	generateButton("Unset Editor", function(){
		editor.unset();
	});

	generateButton("Set Editor", function(){
		editor.set();
	});

}
