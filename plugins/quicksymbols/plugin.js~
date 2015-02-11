CKEDITOR.plugins.add( 'quicksymbols',
{
	lang : [ 'en' ],
	init: function( editor )
	{
		CKEDITOR.dialog
		.add('quicksymbolsDialog',
			function(editor) {
				//Make sure TwoDeeEditorPlugin is configured
				CKTwoDeeEditorPlugin.setEditor(editor);
				var mathDefs = [				
				//Lowercase Greek
				{title: "alpha", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&alpha;</mi></mrow></math>"},
				{title: "beta", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&beta;</mi></mrow></math>"},
				{title: "gamma", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&gamma;</mi></mrow></math>"},
				{title: "delta", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&delta;</mi></mrow></math>"},
				{title: "epsilon", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&epsilon;</mi></mrow></math>"},
				{title: "varepsilon", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&varepsilon;</mi></mrow></math>"},
				{title: "zeta", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&zeta;</mi></mrow></math>"},
				{title: "eta", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&eta;</mi></mrow></math>"},
				{title: "theta", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&theta;</mi></mrow></math>"},
				{title: "vartheta", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&vartheta;</mi></mrow></math>"},
				{title: "iota", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&iota;</mi></mrow></math>"},
				{title: "kappa", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&kappa;</mi></mrow></math>"},
				{title: "lambda", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&lambda;</mi></mrow></math>"},
				{title: "mu", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&mu;</mi></mrow></math>"},
				{title: "nu", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&nu;</mi></mrow></math>"},
				{title: "xi", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&xi;</mi></mrow></math>"},
				{title: "omicron", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&omicron;</mi></mrow></math>"},
				{title: "pi", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&pi;</mi></mrow></math>"},
				{title: "rho", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&rho;</mi></mrow></math>"},
				{title: "sigma", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&sigma;</mi></mrow></math>"},
				{title: "tau", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&tau;</mi></mrow></math>"},
				{title: "upsilon", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&upsilon;</mi></mrow></math>"},
				{title: "phi", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&phi;</mi></mrow></math>"},
				{title: "varphi", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&varphi;</mi></mrow></math>"},
				{title: "chi", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&chi;</mi></mrow></math>"},
				{title: "psi", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&psi;</mi></mrow></math>"},
				{title: "omega", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&omega;</mi></mrow></math>"},
				//Uppercase Greek
				{title: "Gamma", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&Gamma;</mi></mrow></math>"},
				{title: "Delta", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&Delta;</mi></mrow></math>"},
				{title: "Theta", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&Theta;</mi></mrow></math>"},
				{title: "Lambda", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&Lambda;</mi></mrow></math>"},
				{title: "Xi", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&Xi;</mi></mrow></math>"},
				{title: "Pi", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&Pi;</mi></mrow></math>"},
				{title: "Sigma", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&Sigma;</mi></mrow></math>"},
				{title: "Upsilon", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&Upsilon;</mi></mrow></math>"},
				{title: "Phi", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&Phi;</mi></mrow></math>"},
				{title: "Psi", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&Psi;</mi></mrow></math>"},
				{title: "Omega", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>&Omega;</mi></mrow></math>"}
				];
				//Uppercase Latin
				for (var i=0; i<26; i++){
					mathDefs.push({title: String.fromCharCode(i+65), mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>" + String.fromCharCode(i+65) + "</mi></mrow></math>"});
				}
				//Lowercase Latin
				for (var i=0; i<26; i++){
					mathDefs.push({title: String.fromCharCode(i+97), mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>" + String.fromCharCode(i+97) + "</mi></mrow></math>"});
				}
				//Functions
				mathDefs.push({title: "f(x)", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>f</mi><mfenced open='(' close=')'><mrow><mi>x</mi></mrow></mfenced></mrow></math>"});
				mathDefs.push({title: "g(x)", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>g</mi><mfenced open='(' close=')'><mrow><mi>x</mi></mrow></mfenced></mrow></math>"});
				//Unit Vectors
				mathDefs.push({title: "x hat", mathml:"<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mover><mrow><mi>x</mi></mrow><mrow><mi>&Hat;</mi></mrow></mover></mrow></math>"});
				mathDefs.push({title: "y hat", mathml:"<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mover><mrow><mi>y</mi></mrow><mrow><mi>&Hat;</mi></mrow></mover></mrow></math>"});
				mathDefs.push({title: "z hat", mathml:"<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mover><mrow><mi>z</mi></mrow><mrow><mi>&Hat;</mi></mrow></mover></mrow></math>"});
				mathDefs.push({title: "i hat", mathml:"<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mover><mrow><mi>"+String.fromCharCode(305)+"</mi></mrow><mrow><mi>&Hat;</mi></mrow></mover></mrow></math>"});
				mathDefs.push({title: "j hat", mathml:"<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mover><mrow><mi>"+String.fromCharCode(567)+"</mi></mrow><mrow><mi>&Hat;</mi></mrow></mover></mrow></math>"});
				mathDefs.push({title: "k hat", mathml:"<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mover><mrow><mi>k</mi></mrow><mrow><mi>&Hat;</mi></mrow></mover></mrow></math>"});
				//Misc
				mathDefs.push({title: "Infinity", mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>"+String.fromCharCode(8734)+"</mi></mrow></math>"});
				//Some symbols + accented Latin characters
				var charDefs = Array();
				for (var i=0; i<222; i++){
					charDefs.push({title: String.fromCharCode(i+161), text: String.fromCharCode(i+161)});
				}
				//Euro
				charDefs.push({title: String.fromCharCode(8364), text: String.fromCharCode(8364)});
				charDefs.push({title: String.fromCharCode(8218), text: String.fromCharCode(8218)});
				charDefs.push({title: String.fromCharCode(8219), text: String.fromCharCode(8219)});
				charDefs.push({title: String.fromCharCode(8222), text: String.fromCharCode(8222)});
				charDefs.push({title: String.fromCharCode(8230), text: String.fromCharCode(8230)});
				charDefs.push({title: String.fromCharCode(8482), text: String.fromCharCode(8482)});
				charDefs.push({title: String.fromCharCode(9658), text: String.fromCharCode(9658)});
				charDefs.push({title: String.fromCharCode(8226), text: String.fromCharCode(8226)});
				charDefs.push({title: String.fromCharCode(8594), text: String.fromCharCode(8594)});
				charDefs.push({title: String.fromCharCode(8658), text: String.fromCharCode(8658)});
				charDefs.push({title: String.fromCharCode(8594), text: String.fromCharCode(8594)});
				charDefs.push({title: String.fromCharCode(8660), text: String.fromCharCode(8660)});
				charDefs.push({title: String.fromCharCode(9670), text: String.fromCharCode(9670)});
				charDefs.push({title: String.fromCharCode(8776), text: String.fromCharCode(8776)});

				var mathGridWidth = 10;
				var charGridWidth = 20;
				var mathNumButtons = mathDefs.length;
				var charNumButtons = charDefs.length;
				var mathGridHeight = Math.ceil(mathNumButtons/mathGridWidth);
				var charGridHeight = Math.ceil(charNumButtons/charGridWidth);
				var mathElemArray = Array();
				var charElemArray = Array();
				var rowArray;
				mathElemArray.push({
					type: 'html',
					html: "<p>"+editor.lang.quicksymbols.mathinstructions+"</p>"
				});
				for (var i=0; i<mathGridHeight; i++){					
					rowArray = Array();
					for (var j=0; j<mathGridWidth; j++){
						if (mathDefs[mathGridWidth*i+j] !== undefined){
							rowArray[j] = {
								type: 'button',
								title: mathDefs[mathGridWidth*i+j].title,
								mathml: mathDefs[mathGridWidth*i+j].mathml,
								id: 'mathButton' + (mathGridWidth*i+j),
								onLoad: function(){
									document.getElementById(this.domId).firstChild.innerHTML=this.mathml;
							//		MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.domId]);
								},
								onClick: function(){
//console.dir(this.mathml);						
									var newSymbol = CKEDITOR.dom.element.createFromHtml(this.mathml);
//console.dir(newSymbol);
									CKTwoDeeEditorPlugin.typesetElement(this.mathml, function(result) {
										var element  = CKEDITOR.dom.element.createFromHtml(result);
console.dir(element);
										editor.insertElement(element);
										CKTwoDeeEditorPlugin.resetVariables(self); 
										
									});									
								//	editor.insertElement(newSymbol);
									
									this.getDialog().hide();
								},
								className: 'quicksymbols_button'
							}
						}
					}
					mathElemArray.push({
						type: 'hbox',
						children: rowArray,
						onLoad: function(){
							MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.domId]);
						},
					});
				}
				charElemArray.push({
					type: 'html',
					html: "<p>"+editor.lang.quicksymbols.charinstructions+"</p>"
				});
				for (var i=0; i<charGridHeight; i++){					
					rowArray = Array();
					for (var j=0; j<charGridWidth; j++){
						if (charDefs[charGridWidth*i+j] !== undefined){
							rowArray[j] = {
								type: 'button',
								title: charDefs[charGridWidth*i+j].title,
								label: charDefs[charGridWidth*i+j].text,
								text: charDefs[charGridWidth*i+j].text,
								id: 'charButton' + (charGridWidth*i+j),
								onClick: function(){
									editor.insertText(this.text);
									this.getDialog().hide();
								},
								className: 'quicksymbols_button'
							}
						}
					}
					charElemArray.push({
						type: 'hbox',
						children: rowArray
					});
				}
				return {
					suffix: editor.id,
					getId: function(theId) {
						return theId + '_' + this.suffix;
					},
					title : editor.lang.quicksymbols.title,							
					minWidth : 250,
					minHeight : 250,
					contents : [
						
						{
							id: 'tab-math',
							label: editor.lang.quicksymbols.mathtab,
							elements: mathElemArray
						},
						{
							id: 'tab-char',
							label: editor.lang.quicksymbols.chartab,
							elements: charElemArray
						}
					],
					buttons:[CKEDITOR.dialog.cancelButton],
					onLoad: function(){
						//
					}
				};
			}
		);

      
      editor.addCommand( 'quicksymbols', new CKEDITOR.dialogCommand(
			'quicksymbolsDialog')
     );
      
	   
      editor.ui.addButton( 'quicksymbols',
      {
       		label : editor.lang.quicksymbols.title,
			command : 'quicksymbols',
			icon : 'specialchar'
      } );
  
   }
});
