function calculateAge() {
    // get the diameter and species of the tree from the form
    var diameter = document.getElementById('diameter').value;
    var species = document.getElementById('species').value;
 
    // calculate the age of the tree based on the diameter and species
    var age = (diameter / species) * 60;
 
    // display the result in the "result" paragraph
    document.getElementById('result').innerHTML = 'The age of the tree is ' + age + ' years';
 }
 
 // To use this script with the HTML form, you will need to add an onclick attribute to the button element in the form and set it to calculateAge(). Here is an example of how you can do this:

 <button onclick="calculateAge()">Calculate Age</button>
