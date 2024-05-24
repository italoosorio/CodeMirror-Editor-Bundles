# CodeMirror Editor Bundles

After a steep learning curve to configure and compile the [CodeMirror](https://codemirror.net) code editor for my application, I want to share the pre-compile CodeMirror editors I generated. These editors could help some developers who want to start using CodeMirror in their projects on a direct download-and-use basis.

These editors come pre-compile and don't allow configuration or customization. If the developer needs a very customized code Editor, then learning to configure and compile CodeMirror is the way to go, not these editors.

## Editors

Five editors are provided, covering the most common web development coding:  HTML, CSS, JavaScript, SQL, and XML. These editors can be used using the following constructors.

### HtmlEditor()

This editor specializes in HTML code. This includes suport for embedded CSS and JavaScript. It uses the ```htmleditor.js``` file. 

```
<!-- The HTML element containing the editor -->
<div id="editor"></div>

<!-- Javascript reference to the editor file -->
<script src="htmleditor.js"></script>

<!-- Instantiating the editor. It receives as parameter the HTML element's ID -->
<script>
	var editor = new HtmlEditor("editor");
</script>
```

### CssEditor()

This editor specializes in CSS code. It uses the ```csseditor.js``` file. 

```
<!-- The HTML element containing the editor -->
<div id="editor"></div>

<!-- Javascript reference to the editor file -->
<script src="csseditor.js"></script>

<!-- Instantiating the editor. It receives as parameter the HTML element's ID -->
<script>
	var editor = new CssEditor("editor");
</script>
```

### JSEditor()

This editor specializes in JavaScript code. It uses the ```jseditor.js``` file. 

```
<!-- The HTML element containing the editor -->
<div id="editor"></div>

<!-- Javascript reference to the editor file -->
<script src="htmleditor.js"></script>

<!-- Instantiating the editor. It receives as parameter the HTML element's ID -->
<script>
	var editor = new JSEditor("editor");
</script>
```

### SqlEditor()

This editor specializes in SQL code. It uses the ```sqleditor.js``` file. 

```
<!-- The HTML element containing the editor -->
<div id="editor"></div>

<!-- Javascript reference to the editor file -->
<script src="htmleditor.js"></script>

<!-- Instantiating the editor. It receives as parameter the HTML element's ID -->
<script>
	var editor = new SqlEditor("editor");
</script>
```

### XmlEditor()

This editor specializes in XML code. It uses the ```xmleditor.js``` file. 

```
<!-- The HTML element containing the editor -->
<div id="editor"></div>

<!-- Javascript reference to the editor file -->
<script src="htmleditor.js"></script>

<!-- Instantiating the editor. It receives as parameter the HTML element's ID -->
<script>
	var editor = new XmlEditor("editor");
</script>
```

## Methods

### set(code)

Binds the editor to the HTML element. The HTML element content will fill the editor. If the ***code\*** parameter is provided, it will fill the editor. This method is used when the editor is instantiated. 

This method is commonly used to rebind the editor to the HTML element after it has been unbound using the unset() method.

```
editor.set();
```

```
editor.set("<h1>Hello</h1>");
```

### unset()

Unbinds the HTML element from the code. After this operation, the HTML element will contain the editor code.

```
editor.unset()
```

### setLightTheme()

Activates the editor's Light theme. The editor is instantiated with the Light theme.

```
editor.setLightTheme();
```

### setDarkTheme()

Activates the editor's Dark theme.

``` 
editor.setDarkTheme();
```

To instantiate the editor with the Dark theme, include the "dark" parameter in the editor's constructor.

```
var editor = new XmlEditor("editor","dark");
```

### setReadOnly(mode)()

Chanes the editor to "read-only" if the ***mode\*** parameter is "true" or to "write" if the ***mode\*** parameter is "false." It will switch the editor to the opposite mode if no parameter is provided.

```
editor.setReadOnly(true) // Changes editor to read-only mode

editor.setReadOnly(false) // Changes editor to write mode

editor.setReadOnly() // Switches the editor modo
```

### setCode(code)

Replace the editor's code with the provided code.

```
editor.setCode("<h1>Hello</h1>");
```

### getCode()

Returns the editor's code.

```
var code = editor.getCode();
```

### getSelection()

Returns the editor's selected code.

```
var codeSelected = editor.getSelection();
```

### replaceSelection(code)

Replaces the editor's selected code with the provided code.

```
editor.replaceSelection("<div>Hello</div>");
```

### openSearch()

Open the editor's search and replace the panel programmatically.

```
editor.openSearch();
```

## Style

The editor can be stylize using this CSS classes.

```
<style>
	/* Host HTML */
	#editor {
		font-size: 1.2em;
		height: 400px;
		width: 100%;
	}

	/* CodMirror Editor - Fill container size */
	.cm-editor {
		height: 100%;
		width: 100%;
	}
	
	/* Optional style. Sets the editor background color for the read-only mode */
	.cm-editor-readonly {
		background-color: #gray;
	}
	
</style>
```

## Recognition

I want to say thank you to anyone in the [CodeMirror](https://discuss.codemirror.net) forum who has helped me understand the CodeMirror misteries.

