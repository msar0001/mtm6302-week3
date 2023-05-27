//accessing the document
console.log(document.title)
//finding an elemant by id 
const infiPara = document.getElementById("info")
console.dir(infiPara) 
console.log(infiPara) // if the log does not show the element properties uis dir

console.log(infiPara.textContent)
infiPara.textContent += "omar"

// finding elements using CSS selector
let container = document.querySelector(".container")
console.log(container)
// using the style property and setting CSS styles
container.style.maxWidth="800px"
container.style.margin="0 auto"

// finding all element using CSS selector
let allNode= document.querySelectorAll(".type")
console.log(allNode)
//looping through an array and accessing each itim individually insde the loop
allNode[0].style.background="red"
for(let eachNode of allNode){
    eachNode.style.border ="1px solid black"
}

/*traversing the DOM */
const mainNode=document.getElementById("threeNodes")
console.log(mainNode)

//accessing the children of an elemant

const listofNodes=mainNode.children
console.log(listofNodes)
// acces the second item in the array and set style
listofNodes[1].style.margin="10px 0"
//using firstElementchild to get the first element of anther element 
const firstNodeType=mainNode.firstElementChild
console.log(firstNodeType.textContent)

/* attribute node  */
const learnMore=document.getElementById("learn")
// getting the value of the attribute using getAttribute
console.log(learnMore.getAttribute("href"))
console.log(learnMore.getAttribute("class"))
// setting the value of the attribute using setAttribute
learnMore.setAttribute("target","_blank")


/* Manipulating Classes */

learnMore.classList.add("btn")


const fakeConsole=document.getElementById("box")
fakeConsole.setAttribute("style",`
background-color: powderblue;
padding: 10px;
border: 1px solid black;

`)

fakeConsole.innerHTML+="<p>this is the fake console ,where we can output our infomeration </p>"

fakeConsole.innerHTML+="The above url is"+learnMore.getAttribute("href")