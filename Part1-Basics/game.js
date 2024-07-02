document.addEventListener('DOMContentLoaded', function() {
    // Füge die buttons einer Variable hinzu
    const fillListButton = document.getElementById("fill-list")    
    const addButton = document.getElementById("add")    
    const removeButton = document.getElementById("remove") 
    
    // Deaktiviere die beiden add / remove Buttons
    addButton.disabled = true
    removeButton.disabled = true

    const fruitInBasket = [
        "Apple",
        "Cheery",
        "Banana"
    ]

    let container = document.getElementById("second-container")

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
})
