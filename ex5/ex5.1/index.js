function updateFormula() {
    // Get the value in 'x' input field
    var x = document.getElementsByName('x')[0].value;
    // Get the value in 'y' input field
    var y = document.getElementsByName('y')[0].value;
    // Get index of the selected operation from dropdown
    var operation = document.getElementsByName('operation')[0].value;
    // Get text (plus, minus, times, divide)
    var operationText = document.getElementsByTagName('option')[operation].innerText;
    // Update the formula 
    document.getElementById('formula').innerText = `${x} ${operationText} ${y} = ?`;
}

// Loop over elements
for (var i = 0; i < document.forms[0].elements.length; i++) {
    // Assign a variable 'element'
    const element = document.forms[0].elements[i];
    // Add an 'onchange' event listener to each element
    // When an element's value changes, the 'updateFormula' function will be called
    element.onchange = updateFormula;
}
