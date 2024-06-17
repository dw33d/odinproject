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
    console.dir(controls.previousElementSibling); 

*/

// DOM methods

/* 
    When html code is parsed into the web, it is converted to the DOM, the nodes are JS objects, with properties and methods

    So - element.querySelector(selector) retuns a ref to the 1st match of the selector
    And - element.querySelectorAll(selectors) returns a nodelistt and contains refs to all the matches of the selectors
*/