//variables
var input = document.getElementById("keypress-input");
var output = document.getElementById("output-target");
var article = document.getElementsByClassName("article-section");
var pageTitle = document.getElementById("page-title");
var addColor = document.getElementById("add-color");
var guineaPig = document.getElementById("guinea-pig");
var makeLarge= document.getElementById("make-large");
var addBorder= document.getElementById("add-border");
var addRounding = document.getElementById("add-rounding");


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
input.addEventListener("keyup",function(){
	output.innerHTML = input.value;
});


//When you click the "Add color" button,
//the guinea-pig element's text color should change to blue.
addColor.addEventListener("click",function(event){
	guineaPig.classList.add("textBlue");
});


//When you click the "Hulkify" button, 
//the guinea-pig element's font size should become much larger.
addBorder.addEventListener("click",function(event){
	guineaPig.classList.add("addBorder");
});


//When you click the "Capture it" button,
// the guinea-pig element should have a border added to it.
makeLarge.addEventListener("click",function(event){
	guineaPig.classList.add("textLarge");
});


//When you click the "Rounded" button, 
//the guinea-pig element's border should become rounded.
addRounding.addEventListener("click",function(event){
	guineaPig.classList.add("addRounding");
});

