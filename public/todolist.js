//This code is based on Drew Cosgrove's local storage demo. See references.

// Bind an event to the submit button to capture information from the form and store it into localStorage.
let subButton = document.getElementById("itemsubmit");

// Render the items 
renderItems();

// The event listener gets bound to the submit button and the contents of the internal function are run when the button is clicked.
subButton.addEventListener("click", function() {

  // Start by getting the form values.
  let taskName = document.getElementById("taskname").value;
  let dueDate = document.getElementById("duedate").value;
  let timeInput = document.getElementById("timeinput").value;
  let importanceInput = document.getElementById("importanceinput").value;
  let urgencyInput = document.getElementById("urgencyinput").value;


  // Make a JS object 
  let listObj = {
    'taskName': taskName,
    'dueDate': dueDate,
    'timeInput': timeInput,
    'importanceInput': importanceInput,
    'urgencyInput': urgencyInput,
  };


  // Get the item list from localStorage. 
  let existingItems = getItems();

  // Add the new item onto the end of the list.
  existingItems.push(listObj);


  // Local storage can only store strings, while we want to store an array.
  existingItems = JSON.stringify(existingItems);

  // And finally we write the JSON string into local storage.
  localStorage.setItem('items', existingItems);

  // Render the items using our custom function.
  renderItems();
});

//FUNCTIONS BELOW

// Gets items from local storage!
function getItems() {
  // Check to see if we have any item items in local storage already
  let items = localStorage.getItem('items');

  
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
  let itemUl = document.querySelector('#itemlist ul');



  // Clear the contents of the UL to rebuild it fresh.
  
  itemUl.innerHTML = ""; 



  // Runs the internal function once per item in the array.
  items.forEach(function(item) {

    // Create a li DOM element to hold each item
    let listLi = document.createElement('li');

    

    // Create a span element to hold the name of the item.

    let taskName = document.createElement('span');
    taskName.setAttribute('class', 'taskName'); // We can set classes so CSS can target it nicely later.
    taskName.innerText = item.taskName; // And we just put the text into this span, and nothing else.

    let dueDate = document.createElement('span');
    dueDate.setAttribute('class', 'dueDate'); // We can set classes so CSS can target it nicely later.
    dueDate.innerText = item.dueDate; // And we just put the text into this span, and nothing else.

    let timeInput = document.createElement('span');
    timeInput.setAttribute('class', 'timeInput'); // We can set classes so CSS can target it nicely later.
    timeInput.innerText = item.timeInput; // And we just put the text into this span, and nothing else.

    let importanceInput = document.createElement('span');
    importanceInput.setAttribute('class', 'importanceInput');
    importanceInput.innerText = item.importanceInput;

    let urgencyInput = document.createElement('span');
    urgencyInput.setAttribute('class', 'urgencyInput');
    urgencyInput.innerText = item.urgencyInput;

    // Add an element to represent the remove button
    let itemRemove = document.createElement('button');
    itemRemove.setAttribute('class', 'remove');
    itemRemove.innerText = 'X'; 


    let itemComplete = document.createElement('button');
    itemComplete.setAttribute('class', 'complete');
    itemComplete.innerText = 'V'; 

    // Add an event handler to the remove button. 
    itemRemove.addEventListener("click", function() {
      // This allows us to remove the list li element directly which takes care of the visual removal.
      listLi.remove();

      // And the custom removeItem function helps us to remove it from local storage.
      removeItem(item.taskName);

    });

    itemComplete.addEventListener("click", function() {
      // This allows us to remove the list li element directly which takes care of the visual removal.
      listLi.remove();

      // And the custom removeItem function helps us to remove it from local storage.
      removeItem(item.taskName);

    });
    // Add the name and remove button to the li
    listLi.appendChild(taskName);
    listLi.appendChild(timeInput);
    listLi.appendChild(dueDate);
    // itemLi.appendChild(importanceInput);
    // itemLi.appendChild(urgencyInput);

    listLi.appendChild(itemRemove);

    // Add the li to the ul.
    itemUl.appendChild(listLi);

  });
}

// Removes a specific item, by name from local storage.
function removeItem(taskName) {
  // Use our custom getItems() function to retrieve info from local storage. 
  let items = getItems();

  // This helps us to find the array index for the item that we want to remove. 
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
