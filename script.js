// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const paragraph = document.getElementById('paragraph');

changeTextBtn.addEventListener('click', function() {
    paragraph.textContent = "The paragraph text has been changed!";
    paragraph.style.color = "blue"; // Change text color
});

// Add or remove a box element
const addRemoveBtn = document.getElementById('add-remove-btn');
const boxContainer = document.getElementById('box-container');

let boxExists = false; // Keep track if box is there

addRemoveBtn.addEventListener('click', function() {
    if (!boxExists) {
        const box = document.createElement('div');
        box.id = "box";
        box.textContent = "I'm a box!";
        box.style.width = "150px";
        box.style.height = "150px";
        box.style.backgroundColor = "lightgreen";
        box.style.marginTop = "10px";
        box.style.display = "flex";
        box.style.justifyContent = "center";
        box.style.alignItems = "center";
        boxContainer.appendChild(box);
        boxExists = true;
    } else {
        const box = document.getElementById('box');
        if (box) {
            box.remove();
            boxExists = false;
        }
    }
});
