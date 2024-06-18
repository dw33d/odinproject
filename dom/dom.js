// The DOM...Document Object Model

// A tree-like representation of the contents of a webpage.
// A tree of nodes to be more specific, with different relationships which depend on how they are arranged on an html document

// Selectors are used to target a node that are needed to be targeted

// One can use a combo of CSS style selectors and relationship selectors

/*

    HTML: 


    <div id="container">
        <div class="display"></div>
        <div class="controls">
    </div>

    JS: 

    const container = document.querySelector(#container) ##This selects the parent div, #container
    console.dir(container.firstElementChild); ##This selects the first child of the div, display

    const controls = document.querySelector(".controls"); ##Selects the control div
    console.dir(controls.previousElementSibling); ##This selects the display div

*/

// DOM methods

/* 
    - When html code is parsed into the web, it is converted to the DOM, the nodes are JS objects, with properties and methods


    ## Query Selection ##

    - So - element.querySelector(selector) returns a ref to the 1st match of the selector
    - And - element.querySelectorAll(selectors) returns a nodelist and contains refs to all the matches of the selectors

        - Apparently the return value behaves and looks like an array, it is not, but is infact a node list.
            -A nodelist is an object that is a collection of nodes
                - A node is a point in a node tree, so a document/element/text/comments
            - The  difference is that, many array methods are missing. If needed, convert nodelist into an array

    ## Element  Creation ##

    - document.createElement(tagename, [options]) creates a new element tag
        - const para = document.createElement("p");
            - DOES NOT INSERT INTO THE DOM (not appended)
        Can Be Manipulated With:
        - parentNode.appendChild(childNode) - appends childNode on to the DOM, and returns a ref to child
        - parentNode.insertBefore(newNode, referenceNode) will put new node into the parent node before the reference node (Dont know what the f*** that means)
        - parentNode.removeChild(child) will remove the child from the parentNode
*/

const link = document.querySelector("a");
const sect = document.querySelector("section");
const para = document.createElement("p");
const text = document.createTextNode("- the OG source for web development knowledge.");
const linkPara = document.querySelector("p");

// NB Should add an event listener that triggers the response after you click the link(if the user even comes back 🤣)
sect.appendChild(para);


link.textContent = "Mozilla Internet Ligma Organization"

link.href = "https://music.youtube.com/watch?v=dQw4w9WgXcQ";

para.textContent = "We hope you enjoyed the prank 🤣";

linkPara.appendChild(text);