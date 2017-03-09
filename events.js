//variables
var input = document.getElementById("keypress-input");
var output = document.getElementById("output-target");
var article = document.getElementsByClassName("article-section");
var pageTitle = document.getElementById("page-title");

//When any section is clicked the output target text should be "You clicked on the {text of the section} section"
//note we add the for loop here because i have more than one class with the same name
for (var i = 0; i < article.length; i++) {
	article[i].addEventListener("click",function(event){
		console.log("my event is ",event);
		output.innerHTML= `<p> you clicked on ${this.innerHTML} section </p>`;
	});
}

//When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// note the event of mouse hover over is called mouseover
pageTitle.addEventListener("mouseover",function(event){
	output.innerHTML = "You moved your mouse over the header ";
});

//When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// note the event of mouse hover over is called mouseout
pageTitle.addEventListener("mouseout",function(event){
	output.innerHTML = "You left me!!";
});

//When you type characters into the input field, the output element should mirror the text in the input field.

//When you click the "Add color" button, the guinea-pig element's text color should change to blue.

//When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.

//When you click the "Capture it" button, the guinea-pig element should have a border added to it.

//When you click the "Rounded" button, the guinea-pig element's border should become rounded.

//The first section's text should be bold.

//The last section's text should be bold and italicized.

//Make the buttons stop appearing next to each other as inline elements. Change them into block elements.