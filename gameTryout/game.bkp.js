const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

// Define the state
let state = {}

const startGame = () => {
    state = {}
    showTextNode(1)
}

const showTextNode = (textNodeIndex) => {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text

    // Remove the current option buttons
    while(optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if(showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}


const selectOption = (option) => {
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: "You wake up in a dreamy forrest",
        options: [
            {
                text: "Take the goo",
                setState: { blueGoo: true },
                nextText: 2
            },
            {
                text: "Leave the goo and go north",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "You continue your travel north and encounter a merchant",
        options: [
            {
               text: "Trade the blue goo for a sword",
               requiredState: (currentState) => currentState.blueGoo,
               setState: { blueGoo: false, sword: true },
               nextText: 3  
            },
            {
                text: "Trade the blue goo for a shield",
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, shield: true },
                nextText: 3  
            },
            {
                text: "Ignore the merchant",
                nextText: 3  
            }
        ]
    }
]





startGame()