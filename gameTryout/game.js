// Waiting until DOM loaded and then add the eventListener to the button
// Button click hides the start screen and shows the game
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById("start-button")
    const startContainer = document.getElementById("start-container")
    const gameContainer = document.getElementById("game-container")
    
    startButton.addEventListener('click', function(e) {
        startContainer.style.display = "none"
        gameContainer.style.display = "flex"
    })
})

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const imageElement = document.getElementById("image")


let inventory = {}

const startGame = () => {
    inventory = {
        goldenFrog: false,
        sword: false
    }
    showSceneContent(1)
}


const showSceneContent = (sceneId) => {
    /* SET THE DATA FOR THE CURRENT SCENE */ 
    let sceneContent = {}

    scenes.forEach(scene => {
        if(scene.id === sceneId) {
            sceneContent = scene
        }
    })

    textElement.innerText = sceneContent.sceneDescription
    imageElement.src = sceneContent.image

    /* REMOVE THE CURRENT OPTIONS */
    while(optionButtonsElement.firstChild) {
        // As long as the parent has a first child, remove the first child
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    /* ADD THE NEW OPTIONS BUTTON FOR THE CURRENT SCENE */
    sceneContent.options.forEach(option => {
        // Check if the current option should be displayed or not
        if(option.showThisOption()) {
            // Create a new button element
            const newButton = document.createElement('button')

            // Set the text for the button
            newButton.innerText = option.optionText
            // Add the class for the button
            newButton.classList.add('btn')
            // Add an eventListener for the button
            // Anonymus function that calls selectOption
            newButton.addEventListener('click', () => selectOption(option))

            // Adding the new button element to the parent element
            optionButtonsElement.appendChild(newButton)
        }
    })
}

const selectOption = (option) => {
    const nextSceneId = option.nextScene

    if(option.inventoryWithThisOption) {
        inventory = option.inventoryWithThisOption
    }

    if(nextSceneId > 0 && nextSceneId != 10) {
        showSceneContent(nextSceneId) 
    } else if(nextSceneId === 10) {
        showSceneContent(battleWithDragon()) 
    } else {
        startGame()
    }
}

const battleWithDragon = () => {
    const dragonAttack = Math.floor(Math.random() * 8) + 1
    let playerAttack = Math.floor(Math.random() * 10) + 1

    if(inventory.sword) {
        playerAttack += 2
    }

    if(playerAttack >= dragonAttack) {
        return 11
    } else {
        return 9
    }
}

const scenes = [
    {
        id: 1,
        sceneDescription: "Du erwachst in einem verträumten Wald, riechst die Blumen und hörst Vögel zwitschern",
        image: "img/image01.jpg",
        options: [
            {
                optionText: "Du geniesst den Moment und schliesst deine Augen wieder",
                showThisOption: () => true,
                nextScene: 1
            },
            {
                optionText: "Du stehst auf, streckst dich einmal durch und gehst richtung Süden",
                showThisOption: () => true,
                nextScene: 2
            }
        ]
    },
    {
        id: 2,
        sceneDescription: "Du kommst auf deinem Weg zu einer Verzweigung",
        image: "img/image02.jpg",
        options: [
            {
                optionText: "Du gehst den Pfad rechts entlang",
                showThisOption: () => true,
                nextScene: 3
            },
            {
                optionText: "Du gehst den Pfad links entlang",
                showThisOption: () => true,
                nextScene: 4
            },
        ]
    },
    {
        id: 3,
        sceneDescription: "Dir leuchtet etwas funkeldes und glänzedes ins Auage. Bei näherer Betrachtung siehst du eine kleine Figur, um genau zu sein einen goldenen Frosch",
        image: "img/image03.jpg",
        options: [
            {
                optionText: "Du ignorierst die Figur und läufst weiter",
                showThisOption: () => true,
                nextScene: 4
            },
            {
                optionText: "Du nimmst den goldenen Frosch in deinen Beutel und läufst weiter",
                showThisOption: () => true,
                inventoryWithThisOption: { 
                    goldenFrog: true,
                    sword: false 
                },
                nextScene: 4
            },
        ]
    },
    {
        id: 4,
        sceneDescription: "Du begegnest einem Händler",
        image: "img/image04.jpg",
        options: [
            {
                optionText: "Du ignorierst den Händler",
                showThisOption: () => true,
                nextScene: 5
            },
            {
                optionText: "Du tauschst den goldenen Frosch gegen ein Schwert",
                // Use it as function because if not while the array is initialized the values are not set
                // from the inventory. Doing it with a function calls it at the time it is changed.
                showThisOption: () => inventory.goldenFrog,
                inventoryWithThisOption: { 
                    goldenFrog: false,
                    sword: true 
                },
                nextScene: 5
            },
        ]
    },
    {
        id: 5,
        sceneDescription: "Du stehst vor einem Grossen Schloss und hörst einen Drachen darin",
        image: "img/image05.jpg",
        options: [
            {
                optionText: "Du bist erschöpft und legst dich einmal hin",
                showThisOption: () => true,
                nextScene: 6
            },
            {
                optionText: "Du nimmst dein Schwert in die Hand und rennst in das Schloss hinein",
                showThisOption: () => inventory.sword,
                nextScene: 7
            },
            {
                optionText: "Du betrittst das Schloss",
                showThisOption: () => true,
                nextScene: 7
            },
        ]
    },
    {
        id: 6,
        sceneDescription: "Du schläfst tief ein und der Drache begegenet dir in deinem Traum und versucht seinen immerschlaf Zauber auf dich zu wirken.",
        image: "img/image06.jpg",
        options: [
            {
                optionText: "Du bist im ewigen tiefschlaf und wachst nie wieder auf! Starte das Spiel neu!",
                showThisOption: () => true,
                nextScene: 0
            },
            {
                optionText: "Wirf den goldenen Frosch nach dem Drachen",
                showThisOption: () => inventory.goldenFrog,
                nextScene: 11
            }
        ]
    },
    {
        id: 7,
        sceneDescription: "Du stehst vor dem Drachen und siehst das er jeden Moment zuschlagen wird und dich angreifft",
        image: "img/image07.jpg",
        options: [
            {
                optionText: "Renne mit erhobenem Haupt in den Kampf!",
                showThisOption: () => true,
                nextScene: 8
            },
            {
                optionText: "Du nimmst den Griff deines Schwertes fest in die Hand und rennst in den Kampf",
                showThisOption: () => inventory.sword,
                nextScene: 8
            },
            {
                optionText: "Renne wieder aus dem Schloss heraus",
                showThisOption: () => true,
                nextScene: 9
            },
        ]
    },
    {
        id: 8,
        sceneDescription: "Der Kampf findet statt",
        image: "img/image07.jpg",
        options: [
            {
                optionText: "Schlage mit deiner Faust zu",
                showThisOption: () => true,
                nextScene: 10
            },
            {
                optionText: "Schwing dein Schwert und Attackiere den Drachen",
                showThisOption: () => inventory.sword,
                nextScene: 10
            },
        ]
    },
    {
        id: 9,
        sceneDescription: "Der Drache erwischt dich mit einem tödlichen Angriff",
        image: "img/image09.jpg",
        options: [
            {
                optionText: "Starte das Spiel neu",
                showThisOption: () => true,
                nextScene: 0
            }
        ]
    },
    {
        id: 11,
        sceneDescription: "Du hast den Drachen erledigt und befreist die gefangene Person im Turm des Schlosses. Ihr verliebt euch ins unermessliche und lebt glücklich bis ans Ende eures Lebens",
        image: "img/image08.jpg",
        options: [
            {
                optionText: "Starte das Spiel neu",
                showThisOption: () => true,
                nextScene: 0
            }
        ]
    },
]

startGame()