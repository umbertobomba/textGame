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

        if(option.nextScene === 0) {
            let battleResult = battleWithDragon()
            showSceneContent(battleResult)
        } else if(option.nextScene === 99) {
            window.location.reload()
        } 
        else {
            showSceneContent(option.nextScene)
        }        
    }

    const battleWithDragon = () => {
        let dragonAttack = Math.floor(Math.random() * 10) + 1
        let playerAttack = Math.floor(Math.random() * 10) + 1

        if(inventory.sword) {
            playerAttack += 2
        }

        console.log("Der Drache würfelt: " + dragonAttack)
        console.log("Der Spieler würfelt: " + playerAttack)
    
    
        if(playerAttack >= dragonAttack) {
            console.log("Der Spieler hat den Drachen besiegt")
            return 10
        } else {
            console.log("Der Drache hat gewonnen!")
            return 9
        }
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
            },
            {
                id: 5,
                sceneDescription: "Du kommst an eine Felsklippe und siehst einen Weg der nach unten führt. Eine Brücke überquert den Fluss und ein Weg zu einem riesigen Schloss ist zu sehen. Du machst dich auf den Weg zum Schloss und als du kurz vor dem Eingangstor stehst, hörts du ein Knurren und Fauchen. Du kennst dieses Geräusch, es ist unverkennbar ein Drachen, der dieses Schloss zu seinem Zuhause gemacht hat.",
                image: "img/image05.jpg",
                options: [
                    {
                        optionText: "Du ziehst dein Schwert und begibst dich zum Eingangstor.",
                        showThisOption: () => inventory.sword,
                        nextScene: 6
                    },
                    {
                        optionText: "Vorsichtig begiebst du dich zum Eingangstor.",
                        showThisOption: () => true,
                        nextScene: 6
                    },
                    {
                        optionText: "Du bist von deiner langen Reise erschöpft. Du gehst zurück und rastest auf einer entfernten Lichtung. Hoffentlich hat der Drache dich vorhin nicht bemerkt.",
                        showThisOption: () => true,
                        nextScene: 20
                    }
                ]	
            },
            {
                id: 20,
                sceneDescription: "Du bist so erschöpft und legst dich hin. Eine kühle Brise weht über dein Gesicht und das sanfte Vorgelzwitschern in der Ferne verleitet dich innert Minuten zum Schlafen. In deinem Traum wird es von einem Moment auf den anderen komplett dunkel und düster. Du hörst wieder das Knurren und Fauchen, nur diesmal siehst du den Drachen auch. Es ist ein Traumwächter Drache! Noch bevor du dir der Situation völlig bewusst bist, zaubert dieser bereits seinen Immerschlaf Zauber auf dich!",
                image: "img/image20.jpg",
                options: [
                    {
                        optionText: "Bevor du dich versiehst, hat der Drache dich mit dem Zauber erwischt und du bist im ewigen tiefschlaf bis zu deinem Lebensende. Starte das Spiel neu!",
                        showThisOption: () => true,
                        nextScene: 99
                    },
                    {
                        optionText: "Der Diamant in deinem Beutel leuchtet und pulsiert so stark, das du selbst durch den Stoff des Beutels darauf aufmerksam wirst. Keine Sekunde zu früh ziehst du reflexartig den Diamanten aus dem Beutel und reflektierst den Zauber auf den Drachen.",
                        showThisOption: () => inventory.diamond,
                        nextScene: 10
                    }
                ]
            },
            {
                id: 6,
                sceneDescription: "Als du das Eingangstor betritts, landet der gewaltige Drache vor dir. Du fühlst die Wucht als auf dem Boden aufsetzt, für einen Bruchteil vibrieren und zittern die Steine um dich herum. Der Drache ist in der Angriffshaltung und wird jeden Moment auf dich zu stürmen.",
                image: "img/image06.jpg",
                options: [
                    {
                        optionText: "Renne mit erhobenem Haupt in den Kampf!",
                        showThisOption: () => true,
                        nextScene: 7
                    },
                    {
                        optionText: "Du nimmst den Griff deines Schwertes noch fester in die Hand und rennst in den Kampf!",
                        showThisOption: () => inventory.sword,
                        nextScene: 7
                    },
                    {
                        optionText: "Niemals kannst du diesen Kampf gewinnen geht dir duch deinen Kopf. Du drehst dich um und rennst davon!",
                        showThisOption: () => true,
                        nextScene: 8
                    },
                ]
            },
            {
                id: 7,
                sceneDescription: "Der Drache stürmt auf dich zu! Als der Drache so nahe vor dir steht, erkennst du eine frische Wunde an seinem Bauch die gerade so knapp zusammen gewachsen ist. Das ist deine Chance deinen Nachteil in dem Kampf zu negieren.",
                image: "img/image06.jpg",
                options: [
                    {
                        optionText: "Du versuchst mit der Faust die frische Wunde zu treffen.",
                        showThisOption: () => true,
                        nextScene: 0
                    },
                    {
                        optionText: "Du schwingst dein Schwert und versuchst es in die frische Wunde zu rammen.",
                        showThisOption: () => inventory.sword,
                        nextScene: 0
                    },
                ]
            },
            {
                id: 8,
                sceneDescription: "Dachtest du echt das du einem Drachen davon rennen kannst? ",
                image: "img/image09.jpg",
                options: [
                    {
                        optionText: "Starte das Spiel neu!",
                        showThisOption: () => true,
                        nextScene: 99
                    }
                ]
            },
            {
                id: 9,
                sceneDescription: "Du verfehlst nur knapp die Wunde, jedoch hast du mit deiner Offensiven Aktion komplett deine Verteidigung vernachlässigt. Der Drache hingegen trifft und verletzt dich tödlich!",
                image: "img/image09.jpg",
                options: [
                    {
                        optionText: "Starte das Spiel neu!",
                        showThisOption: () => true,
                        nextScene: 99
                    }
                ]
            },
            {
                id: 10,
                sceneDescription: "Du hast die Schwachstelle des Drachens perfekt ausgenutzt und dieser fällt zu Boden noch bevor er dir etwas antun konnte. Ohne den Drachen der über das Schloss wacht, erkundest du nun das Grundstück. An der Spitze des Schlossturms entdeckst du eine Person. Du befreist die Person und ihr verliebt euch ins unermessliche und lebt glücklich bis ans Ende eures Lebens.",
                image: "img/image10.jpg",
                options: [
                    {
                        optionText: "Starte das Spiel neu!",
                        showThisOption: () => true,
                        nextScene: 99
                    }
                ]
            },
        ]
    }












})

