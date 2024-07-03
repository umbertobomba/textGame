````js
document.addEventListener('DOMContentLoaded', function() {
    // Füge die Elemente einer Variable hinzu
    const fillListButton = document.getElementById("fill-list")    
    const addButton = document.getElementById("add")    
    const removeButton = document.getElementById("remove") 
    let container = document.getElementById("second-container")
    
    // Definiere das Array mit den aktuellen Liste an Früchten
    const fruitInBasket = [
        "Apple",
        "Cheery",
        "Banana"
    ]

    // Definiert das Array mit allen Früchten
    const allFruits = [
        "Apple",
        "Cheery",
        "Banana",
        "Blackberry",
        "Citron",
        "Coconut",
        "Mango",
        "Pear"
    ]

    // Deaktiviere die beiden add / remove Buttons
    addButton.disabled = true
    removeButton.disabled = true
    
    // Funktion um eine Zufällige Zahl zu bekommen
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min) 
    }

    // Event listener um die Früchteliste anzuzeigen
    fillListButton.addEventListener('click', function() {
        fruitInBasket.forEach(fruit => {
            // Erstelle ein neues div Element.
            let newChild = document.createElement('div')

            // Erstelle einen neuen Node und gib diesem einen Text mit
            let text = document.createTextNode(fruit);

            // Hänge dem neuen div den Node an.
            newChild.appendChild(text);

            // Hänge dem Container div als child Element das neu erstellte div an
            container.appendChild(newChild);
        })

        // Setze disabled auf den Button zum anzeigen der Liste
        fillListButton.disabled = true

        // Entferne disabled vom add / remove Button
        addButton.disabled = false
        removeButton.disabled = false
    })

    // Event listener um eine Frucht zu entfernen
    removeButton.addEventListener('click', function() {
        container.removeChild(container.lastElementChild)

        // Wenn das letzte Element entfernt wurde, deaktiviere den remove Button
        if(!container.lastElementChild) {
            removeButton.disabled = true
        }

        // Wenn der add Button deaktiviert ist, aktiviere ihn wieder
        if(addButton.disabled === true) {
            addButton.disabled = false
        }
    })

    // Event listener um eine Frucht hinzuzufügen
    addButton.addEventListener('click', function() {
        // Zufällige Nummber für die Auswahl der Frucht in Array
        let arrayIndex = randomNumber(0, 7)
        
        // Erstelle ein neues div Element.
        let newChild = document.createElement('div')

        // Erstelle einen neuen Node und gib diesem einen Text mit
        let text = document.createTextNode(allFruits[arrayIndex]);

        // Hänge dem neuen div den Node an.
        newChild.appendChild(text);

        // Hänge dem Container div als child Element das neu erstellte div an
        container.appendChild(newChild);

        // Sobald der Container 10 child Elemente hat deaktiviere add Button
        if(container.childElementCount >= 10) {
            addButton.disabled = true
        }

        // Wenn der remove Button deaktiviert ist, aktiviere ihn wieder
        if(removeButton.disabled === true) {
            removeButton.disabled = false
        }
    }) 
})

````
