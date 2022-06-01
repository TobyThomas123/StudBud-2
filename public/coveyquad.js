//This code is based on Drew Cosgrove's local storage demo. See references.

// Bind an event to the submit button to capture information from the form and store it into localStorage.
let subButton = document.getElementById("itemsubmit");

// Render the items from local storage so the page appears correct when it loads.
renderItems();

// The event listener gets bound to the submit button and the contents of the internal function are run when the button is clicked.
subButton.addEventListener("click", function() {

  let taskName = document.getElementById("taskname").value;
  let dueDate = document.getElementById("duedate").value;
  let timeInput = document.getElementById("timeinput").value;
  let importanceInput = document.getElementById("importanceinput").value;
  let urgencyInput = document.getElementById("urgencyinput").value;


  // Make a JS object to contain the data we want to write into local storage for each item.
  let itemObj = {
    'taskName': taskName,
    'dueDate': dueDate,
    'timeInput': timeInput,
    'importanceInput': importanceInput,
    'urgencyInput': urgencyInput,
  };


  // Get the item list from localStorage. 
  let existingItems = getItems();

  // Add the new item onto the end of the list.
  existingItems.push(itemObj);



  existingItems = JSON.stringify(existingItems);


  localStorage.setItem('items', existingItems);

  // Render the items using our custom function.
  renderItems();
});




function getItems() {
  // Check to see if we have any item items in local storage already
  let items = localStorage.getItem('items');

  // If the value of the items variable is `null` then we have not created or used localStorage yet. If this is true, we create an empty array and return that to the code that ran getItems(). 
  if (items == null) {
    return [];
  }


 
  items = JSON.parse(items);

  // Return the list of items back to the code that ran this function.
  return items;
}

// Render the items to the screen using the DOM manipulation methods.
function renderItems() {
  // Use our custom getItems() function to retrieve info from local storage.
  let items = getItems();

  // Find the UL element within the #itemlist DIV.


  let moreImpMoreUrgUL = document.querySelector('#more-important-more-urgent ul')
  let lessImpMoreUrgUL = document.querySelector('#less-important-more-urgent ul')

  let moreImpLessUrgUL = document.querySelector('#more-important-less-urgent ul')
  let lessImpLessUrgUL = document.querySelector('#less-important-less-urgent ul')

  // Clear the contents of the UL to rebuild it fresh.
  

  moreImpMoreUrgUL.innerHTML = "";
  lessImpMoreUrgUL.innerHTML = "";
  moreImpLessUrgUL.innerHTML = "";
  lessImpLessUrgUL.innerHTML = "";

  // forEach is like a shorthand for() loop. It runs the internal function once per item in the array.
  items.forEach(function(item) {

    // Create a li DOM element to hold each item
    let itemLi = document.createElement('li');




    // Create a span element to hold the name of the item.

    let taskName = document.createElement('span');
    taskName.setAttribute('class', 'taskname'); 
    taskName.innerText = item.taskName; 

    let dueDate = document.createElement('span');
    dueDate.setAttribute('class', 'dueDate'); 
    dueDate.innerText = item.dueDate; 

    let timeInput = document.createElement('span');
    timeInput.setAttribute('class', 'timeInput'); 
    timeInput.innerText = item.timeInput; 

    let importanceInput = document.createElement('span');
    importanceInput.setAttribute('class', 'importanceInput');
    importanceInput.innerText = item.importanceInput;

    let urgencyInput = document.createElement('span');
    urgencyInput.setAttribute('class', 'urgencyInput');
    urgencyInput.innerText = item.urgencyInput;

    // Add an element to represent the remove button
    let itemRemove = document.createElement('button');
    itemRemove.setAttribute('class', 'remove');
    itemRemove.innerText = 'x'; 

    // Add an event handler to the remove button. 
    itemRemove.addEventListener("click", function() {
    
      itemLi.remove();


      removeItem(item.taskName);

    });

    // Add the name and remove button to the li
    itemLi.appendChild(taskName);
    itemLi.appendChild(timeInput);
    itemLi.appendChild(dueDate);
 

    itemLi.appendChild(itemRemove);

 


    if(item.importanceInput==="more"){
      if(item.urgencyInput==="more"){
        moreImpMoreUrgUL.appendChild(itemLi);
      }else{
        moreImpLessUrgUL.appendChild(itemLi);
      }
    }else{
      if(item.urgencyInput==="less"){
        lessImpLessUrgUL.appendChild(itemLi);
      }else{
        lessImpMoreUrgUL.appendChild(itemLi);
      }
    }
  });
}

// Removes a specific item, by name from local storage.
function removeItem(taskName) {
  
  let items = getItems();

 
  let itemIndex = items.findIndex(function(item) {
    return item.taskName == taskName;
    return item.timeInput == timeInput;
    return item.dueDate == dueDate;
    return item.importanceInput == importanceInput;
    return item.urgencyInput == urgencyInput;
  });

  
  items.splice(itemIndex, 1);

  // Now we do the same process of writing information back into local storage that we did earlier.
  items = JSON.stringify(items);
  localStorage.setItem('items', items);
}
