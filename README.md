1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById() selects element by id. id has to be unique
     getElementByClassName() selects element by class name. May not be unique
     querySelector() selects the first element by its class name or id name
     querySelectorAll() selects all the elements with the same name of id or class


2. How do you create and insert a new element into the DOM?

Ans: let new = document.createElement("p");
     new.innerText = "Programming Hero"
     document.body.appendChild(new);

3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling is when an event starts on the element one interacted with and then moves up through its parent elements in the DOM.
For example, if I click a button inside a div, the click event first runs on the button, then it goes up to the div, then to the body,
and continues.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a technique where instead of adding event listeners to many child elements, 
you add one event listener to their parent and handle the events from there.

It is useful because:
i. It reduces the number of event listeners, which makes the code cleaner.
ii. It improves performance, especially when there are many elements.


5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() stops the browser from doing its normal thing.
     stopPropagation() stops the event from going up to parent elements.

     
