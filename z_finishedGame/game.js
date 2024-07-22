document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById("start-button")
    const startContainer = document.getElementById("start-container")
    const gameContainer = document.getElementById("game-container")
    const nameField = document.getElementById("name-field")
    const textElement = document.getElementById('text')
    const optionButtonsElement = document.getElementById('option-buttons')
    const imageElement = document.getElementById("image")

    let playerName = ""
    let scenes = []

    startButton.addEventListener('click', function() {
        if(nameField.value === "") {
            alert("Gib einen Namen ein")
        } else {
            startContainer.style.display = "none"
            gameContainer.style.display = "flex"
            playerName = nameField.value
            startGame()
        }
    })
    
    let inventory = {}

    const startGame = () => {
        inventory = {
            diamond: false,
            sword: false
        }
        
        fillSceneData()
        showSceneContent(1)
    }

    const showSceneContent = (sceneId) => {
        let sceneContent = {}

        scenes.forEach(scene => {
            if(scene.id === sceneId) {
                sceneContent = scene
            }
        })

        textElement.innerText = sceneContent.sceneDescription
        imageElement.src = sceneContent.image

        while(optionButtonsElement.firstChild) {
            optionButtonsElement.removeChild(optionButtonsElement.firstChild)
        }

        sceneContent.options.forEach(option => {

            if(option.showThisOption()) {
                const newButton = document.createElement('button')

                newButton.innerText = option.optionText
                newButton.classList.add('btn')
                newButton.addEventListener('click', () => selectOption(option))

                optionButtonsElement.appendChild(newButton)
            }
        })

    }

    const selectOption = (option) => {
        if(option.inventoryWithThisOption) {
            inventory = option.inventoryWithThisOption
        }

        console.log(inventory)
        showSceneContent(option.nextScene)
    }

    const fillSceneData = () => {
        scenes = [
            {
                id: 1,
                sceneDescription: playerName + ", du erwachst in einem verträumten Wald, riechst die Blumen und hörst die Vögel zwitschern.",
                image: "img/image01.jpg",
                options: [
                    {
                        optionText: "Du geniesst den Moment, schliesst deine Augen wieder und schlummerst weiter.",
                        showThisOption: () => true,
                        nextScene: 1
                    },
                    {
                        optionText: "Du stehst auf, streckst dich einmal durch und gehst richtung Süden.",
                        showThisOption: () => true,
                        nextScene: 2
                    }
                ]	
            },
            {
                id: 2,
                sceneDescription: "Du kommst auf deinem Weg an eine Verzweigung.",
                image: "img/image02.jpg",
                options: [
                    {
                        optionText: "Du gehst den linken Pfad entlang.",
                        showThisOption: () => true,
                        nextScene: 3
                    },
                    {
                        optionText: "Du gehst den rechten Pfad entlang.",
                        showThisOption: () => true,
                        nextScene: 4
                    }
                ]	
            },
            {
                id: 3,
                sceneDescription: "Als du auf deinem Pfad weitergehst, erscheinen dir Pflanzen, wie du sie noch nie gesehen hast. Anstelle von Blüten zieren funkelnd leuchtende Steine die Kronen der Pflanzen.",
                image: "img/image03.jpg",
                options: [
                    {
                        optionText: "Du ignorierst die Pflanzen und läufst weiter.",
                        showThisOption: () => true,
                        nextScene: 4
                    },
                    {
                        optionText: "Du schaust dir die Blumen genauer an, willst sie aber nicht kaputt machen und läufst weiter.",
                        showThisOption: () => true,
                        nextScene: 4
                    },
                    {
                        optionText: "Du entfernst von einer Pflanze den Stein, packst ihn in deinen Beutel und läufst weiter.",
                        showThisOption: () => true,
                        nextScene: 4,
                        inventoryWithThisOption: { 
                            diamond: true
                        }
                    }
                ]	
            },
            {
                id: 4,
                sceneDescription: "Auf deiner Reise kommst du an einem Händler vorbei, der seine Laden scheinbar innerhalb eines Baumes aufgebaut hat.",
                image: "img/image04.jpg",
                options: [
                    {
                        optionText: "Das erscheint dir etwas komisch und du schaust kurz durch das Fenster ohne viel zu sehen und machst dich dann weiter.",
                        showThisOption: () => true,
                        nextScene: 5
                    },
                    {
                        optionText: "Du betrittst den Laden. Hinter der Theke steht ein alter, schlecht gelaunter Zwerg. Seine Laune ändert sich jedoch rasch als du ihm den Diamanten zeigst. Er bietet dir sein bestes Ritterschwert an im Tausch gegen den Diamanten und du nimmst das Schwert dankend an dich.",
                        showThisOption: () => inventory.diamond,
                        nextScene: 5,
                        inventoryWithThisOption: { 
                            diamond: false,
                            sword: true
                        }
                    }
                ]	
            }
        ]
    }












})

