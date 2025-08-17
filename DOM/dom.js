/*
Document Object Model(DOM):
 By default Browser provides an object named ' document ' , it contains  elements code so that we can change,manipulate,
add/delete it

To Do this all, we need to do some basic DOM Activities:

   I. DOM Selection: We can select HTML elements in JS using 5 ways
              i.getElementsByTagName('element'): it selects all the elements of respective tag and return an array of elements
              ii. getElementsByClassName('className'): it selects all the elements of restive class and return an array of elements.
              iii. getElementById('idName'): it select the only element which contains respective id.
              iv. querySelector('query'): it selects the element with respective query but its select only the first occurrence.
              v. querySelectorAll('query'): it selects all the elements with respective query
and return an array


In DOM, every element is also an object
   II. DOM Manipulation:
We can manipulate/update the element we selected. To manipulate we can use,
         I. textContent: textContext brings the text inside the element.
            we can even update it
            Eg: <h1>Hello world</h1>
                  <script>
                    const ele= document.querySelector('h1');
                      ele.textContent="Bye Bye"
                  </script>
           II. innerText: innerText brings the text inside the elements. we can even update it but it also consider 
             the stylesheet. Except in the case visibility hidden for an element, innerText and textContent can be   interchangeable
           III. innerHTML: innerHTML is used to update the html content of DOM elements.
               element.innerHTML = '<strong>New HTML content</strong>';
           IV.  Change Attributes
               we can set/get Attributes such as classes/id's
               element.setAttribute('class', 'newClass');
               element.setAttribute('id', 'newId');
                // Get an attribute
                let id = element.getAttribute('id');
                console.log(id);
            V. Change Styles
                  element.style.color = 'red';
                  element.style.fontSize = '20px';
                 element.style.backgroundColor = 'yellow';
            vi. change class names:
                 element.classList.add('className');
                 element.classList.add('remove');
                 element.classList.add('toggle');
  III. DOM creation: we can create an element from JS using 
    document.createElement('element')
  we can even append element inside parent element using
  append -- used to append multiple elements
  appendChild -- used to append single element



*/