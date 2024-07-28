# ToC

- [Arbeitsumgebung, Git und der Editor](#Arbeitsumgebung,-Git-und-der-Editor)
- [Einstieg Basics](#Einstieg-Basics)
- [Erweiterte Techniken](#Erweiterte-Techniken)
- [Text Spiel Programmieren](#text-spiel-programmieren)

<br>
<br>
<br>

# Arbeitsumgebung, Git und der Editor

### Editor
- [VScode](https://code.visualstudio.com/download) herunterladen und installieren
- In Extensions Live Server installieren

### Git & Versionierung
- [Git](https://git-scm.com/downloads) herunterladen und installieren.
- [GitHub](https://github.com/) Account erstellen.
- [Repository](https://github.com/umbertobomba/textGame) öffnen und fork repo.

<br>
<br>
<br>

# Einstieg Basics

### HTML

##### Basic HTML Gerüst 
```html
<!DOCTYPE html>
<html>
	<head>
		...content
	</head>
	
	<body>
		...content
	</body>
</html>
```

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Page Title</title>
	</head>
	
	<body>
		<div>Mein erstes html div</div>	
	</body>
</html>
```

> Kopiere den code aus dem zweiten Beispiel in das `index.html` file und speichere die Datei.

<br>

Bei html spricht man von tags, sobald etwas im Code innerhalb von spitzen Klammern steht. Dabei wird unterschieden zwischen dem opening- & closing tag. Als Beispiel: das div tag innerhalb des body tags beginnt mit dem opening tag `<div>` und wird geschlossen mit dem closing tag `</div>`. Es gibt Ausnahmen, jedoch in der Regel hat ein html tag immer ein opening- & closing tag. Während das Wort tag die korrekte Bezeichnung ist innerhalb des codes, wird oft auch von einem Element gesprochen. Dies bezieht sich auf die Sicht des Browsers, somit ist das selbe gemeint wenn von einem `div` Element oder tag gesprochen wird.

<br>

##### Unterschiedliche HTML tags
Neben den oben verwendeten html tags gibt es etwas über 100 weitere tags die verwendet werden können. Viele davon dienen der Semantik, einige werden zur Gruppierung benutzt und andere haben ganz spezifische Einsatzbereiche. Für dieses Projekt setzt sich der Fokus lediglich auf die vier html tags:

- `<div>`
- `<input>`
- `<button>`
- `<img>`

```html
<div>...</div>

<input type="text">

<button>Drück mich!</button>
```

> Füge die drei neuen html tags innerhalb des body tags ein und speichere die Datei.

<br>

##### Kommentare in HTML

Eine Zeile Code zu kommentieren ist nie falsch um zu einem späteren Zeitpunkt rasch wieder in die Logik des Projektes rein zu kommen. Neben der Dokumentation kann mit einem Kommentar auch ein Teil des Codes temporär deaktiviert werden, dabei wird von "auskommentieren" gesprochen. In HTML wird ein Kommentar auch mit einem opening & closing tag definiert. Der Start macht `<!--` und geschlossen wird ein Kommentar mit `-->`. Alles innerhalb des tags wird nicht als Code interpretiert und kann über mehrere Zeilen definiert werden.

```html
<!-- Ich bin ein Kommentar -->
<div>...</div>

<input type="text">

<button>Drück mich!</button>
```

> Versuche einmal das `input` tag sowie den `button` mit einem Kommentar auszublenden.

<br>

##### Das div tag und nesting (parent/child)

Während das div tag im Vergleich zu anderen tags relativ simple aussieht, ist es ein wahres Arbeitstier und (fast) ein Alleskönner. Das div tag verdeutlicht sehr gut das Prinzip der Verschachtelung, in englisch auch unter nesting bekannt. Unter Vorbehalt von einigen Ausnahmen kann jedes html tag weitere tags in sich haben, dabei wird von nesting gesprochen. Das äussere html tag wird parent element genannt während alles innerhalb ein child element ist. Sehr oft werden div tags benutzt für die Organisation und Gruppierung von anderen html tags. Bei der Webentwicklung wird dafür oft der Begriff container benutzt.

> Versuche einmal dein `div` tag zu verschachteln mit mehreren child elements. Die Vorteile von nesting werden im weiteren Verlauf des Projekt immer offensichtlicher, aktuell reicht es einfach zu wissen das es nesting gibt.

<br>

##### Das input tag

Das input tag ist das erste tag welches nicht der Methodik folgt mit einem opening- & closing tag. Auffallend ist das innerhalb der spitzen Klammern zusätzlich noch `type=text` geschrieben steht. Dabei handelt es sich um ein Attribute für ein html tag und ein tag kann mehrere solcher Attribute bekommen. In dieser Ausführung des `<input>` tags werden alle nötigen Informationen mittels Attribute mitgegeben und nicht zwischen dem opening- & closing tag.

```html
<input type="text" placeholder="Schreib doch was">
<input type="password" placeholder="Ich bin ein Passwort">
```

> Füge die beiden tags innerhalb deines body tags ein und schau was sich ändert.

<br>

##### Das button & image tag

Die beiden tags benötigen noch etwas Vorwissen und kommen in den nächsten Abschnitten zum Zuge.

<br>

##### Vorbereitung für nächsten Abschnitt

Für die kommenden Beispiele im nächsten Abschnitt wird eine spezifische Struktur benötigt. Lösche alles innerhalb des body tags in deiner `index.html` Datei und versuche folgendes umzusetzen: 
- Das body tag soll zwei container Elemente haben.
- Im ersten container soll ein Element für einen Titel, einen Text sowie für ein Zitat sein.
- Im zweiten container soll ein Element für einen Titel, ein Textfeld und ein Button sein.
 
Wenn du nicht sicher bist, öffne die Datei `baseStructure.md` zur Unterstützung oder zum Abgleich.

<br>
<br>

### CSS
CSS (Cascading Style Sheets) wird verwendet, um das Aussehen von html Elementen zu gestalten. Es ermöglicht die Kontrolle von Farben, Schriftarten, Abstände, Rahmen und Positionierung von Elementen. 

<br>

##### Inline styles

Das Aussehen, definiert in css wird umgangssprachlich styles genannt. Der Name inline styles kommt daher, weil die styles direkt auf der Zeile des html tags als Attribute definiert werden. 

```html
<div style="font-size: 32px; color: blue;">Titel</div>
```

Im style Attribut `style=""` wird auf das Property `font-size` und `color` zugegriffen und der Wert (Value) von 32 Pixel, respektive der Farbe blau gesetzt. Die Schreibform für css styles ist immer `property: value;` und muss zwingend mit einem Semikolon enden.

> Füge das style Attribut wie oben beschrieben dem ersten `div` innerhalb des ersten containers an und speichere die Datei.

Für die bessere Übersicht können die inline styles auch auf mehrere Zeilen aufgebrochen werden, zu sehen im Beispiel unterhalb. Nichtsdestotrotz ist es nicht Zielführend und nicht Wartungsfreundlich (maintainable) styles inline zu definieren. 

```html
<div style="
	 font-size: 32px; 
	 color: blue;
	 ">
	 Titel
</div>
```

<br>

##### Das style tag

Um styles zu definieren gibt es mit `style` ein eigenes HTML tag zum definieren der styles.

```html
<head>
	<title>Page Title</title>
	<style>
	...
	</style>
</head>
```

> Füge das `style` tag im `head` tag hinzu.

<br>

##### CSS classes und ID's

Mit dem style tag werden die styles nicht mehr inline geschrieben im html tag und somit ausgelagert. Damit ein CSS style einem Element zugewiesen werden kann, werden Klassen und ID's eingesetzt. Der Unterschied zwischen Klassen und ID's ist das ID's einzigartig sein müssen, während Klassen an so viele Elemente wie gewünscht hinzugefügt werden können. Eine Klasse oder ID wird mit einem Attribut dem HTML tag angefügt mit `class="namen-der-Klasse"` oder `id="name-der-id"`. Innerhalb des style tags wird auf eine Klasse mit einem Punkt verwiesen `.name-der-klasse` und auf eine ID mit einem hashtag `#name-der-id`.

```html
<div class="main-title">Titel</div>
```

> Füge in deinem `index.html` file den beiden div tags für beide Titel die css Klasse hinzu wie im Beispiel oben.

```html
<head>
	<title>Page Title</title>
	<style>
		.main-title {
			font-size: 32px; 
			color: blue;
		}
	</style>
</head>
```

> Innerhalb des style tag referenziere die Klasse `main-title` und gib ihr die selben styles wie vorhin inline. Speichere die Datei und schaue wie sich beide Titel anpassen.

Gib den beiden div Elementen für den Text und das Zitat die Klassen `text` und `quote`.

<br>

##### Farben & Schrift anpassen 

```html
<style>
	.main-title {
		font-size: 32px;
		color: blue;
	}

	.text {
		font-size: 24px;
		background-color: lightgray;
	}

	.quote {
		font-size: 20px;
		font-style: italic;
		color: grey;
	}
</style>
```

> Innerhalb des script tags füge die zwei neuen Klassen hinzu mit den Properties/Values wie oben beschrieben.

<br>

##### Margin und padding property

Standardmässig sind alle html Elemente immer nahtlos miteinander verbunden. Aktuell werden alle Elemente praktisch ohne Abstand untereinander angezeigt. Um zu zeigen, das es sich beim zweiten Titel um einen eigenständigen Abschnitt handelt würde ein wenig Abstand gut tun. Dafür kommt das Property `margin` ins Spiel welches eine Sperrzone um das HTML Element definiert.

```html
<div class="first-container">
	<div class="main-title">Titel</div>
	<div class="text">Text</div>
	<div class="quote">Zitat</div>
</div>
```

> Gib dem parent Element von deinem ersten Titel, dem Text und dem Zitat eine Klasse namens `first-container`.

```css
.first-container {
	margin-bottom: 40px;
}
```

> Gib der Klasse in den styles das Property `margin-bottom` und einen Wert vom `40px`. Damit machst du unterhalb des Elementes eine Sperrzone von 40 Pixel. Speichere die Datei und schaue die Veränderung an.

Der Text mit dem grauen Hintergrund klebt auf der rechten Seite direkt am Rand was nicht toll aussieht. Der Text ist diesmal innerhalb des Elementes und eine Sperrzone mit `margin` rundherum zu machen ist nicht die Lösung. Dafür kommt das Property `padding` zum Einsatz welches die Sperrzone innerhalb des Elementes macht. 

```css
.text {
	font-size: 24px;
	background-color: lightgray;
	padding: 8px 0px 8px 16px;
}
```

> Erweitere die `text` Klasse mit `padding` wie im Beispiel oben.

<br>

##### Unterschiedliche Schreibweisen von padding & margin

Die beiden properties `margin` und `padding` können unterschiedlich geschrieben werden, sprich auf die properties kann unterschiedlich zugegriffen werden. Soll ein Wert nur in eine Richtung gelten, kann direkt auf das property mit der entsprechenden Orientierung zugegriffen werden wie z.B `margin-top`. Werden zwei oder mehr Orientierungen benötigt kommt die Schreibweise `margin: 2px 0 2px 0` zum Zuge. Dabei ist der erste Wert immer gegen oben (top) und geht im Uhrzeigersinn drum herum. Soll einer Richtung keinen Wert zugewiesen werden, wird dies mit der Ziffer 0 deklariert. Als dritte Variante kann `margin: 12px` geschrieben werden, was auf allen vier Seiten den selben Wert hinzufügt. Die gleichen Schreibweisen gelten auch für `padding`. 

```css
.class01 {
	margin: 2px 4px 8px 16px;
}

.class02 {
	margin-top: 2px;
	margin-right: 4px;
	margin-bottom: 8px;
	margin-left: 16px
}

.class03 {
	margin: 12px
}
```

<br>

##### Ausgelagerte styles Datei

Mit diesen vier CSS Klassen wird es bereits etwas überfüllt im `index.html` file und grundsätzlich sollen zur Übersicht und maintainability im `index.html` auch nur HTML Elemente und tags drin stehen. Für eine bessere Übersicht können die styles in ein externes file ausgelagert werden. 

> Erstelle ein neues file mit dem Namen `styles.css` und kopiere die vier CSS Klassen ohne das style tag rein.

Damit der Browser die Anweisungen bekommt wie die HTML Elemente aussehen sollen, jetzt wo weder etwas inline steht noch in einem `style` tag, muss das externe file referenziert werden. Das geschieht im `head` tag wie im Beispiel unten zu sehen ist.

```html
<head>
	<link rel="stylesheet" href="styles.css">
	<title>Page Title</title>
</head>
```

> Füge das `link` tag in deinem `index.html` file ein innerhalb des `head` tag und lösche das `style` tag.

<br>

##### Pseudo-classes

Pseudo Klassen in CSS sind spezielle keywords, die einer CSS Klasse hinzugefügt werden, um einen spezifischen Zustand des Elementes zu definieren. Das ermöglicht es, Elemente basierend auf ihrem Zustand zu stylen. In dem Beispiel mit `.button:hover` ist der Teil nach dem Doppelpunkt die Pseudo Klasse. Sobald ein hover effect (Mit der Maus auf das Element ohne zu klicken) stattfindet, bekommt jedes Element mit der Klasse `.button` die styles aus der Klasse `.button:hover`. Ohne den hover effect, alle Elemente haben die styles aus der normalen `.button` Klasse.  

```css
.button {
	padding: 8px 24px 8px 24px;
	border: 1px solid grey;
	border-radius: 5px;
}

.button:hover {
	background-color: black;
	color: white;
}
```

> Gib dem button tag im `index.html` die Klasse "button" und kopiere die beiden CSS Klassen in dein `styles.css` file. Navigiere anschliessend mit dem Mauszeiger auf den Button ohne zu klicken.

<br>
<br>

### JavaScript

JavaScript ermöglicht es, das Verhalten von html Elementen auf einer Webseite zu steuern. Im kommenden Teil werden die basics erarbeitet um am Schluss mit den html Elementen im `index.html` zu interagieren.

<br>

##### Browser devTools und die Konsole

Jeder Browser verfügt über die Developer Tools, welche mit einem klick auf die rechte Maustaste geöffnet werden können oder direkt über die Taste F12. Aktuell reicht es einmal in den diversen Menüs in den devTools die Konsole zu öffnen.

<br>

##### Script tag & console.log()

Mit dem script tag kann wie bei den styles, javascript direkt im `index.html` file geschrieben werden welches auf der Webseite ausgeführt wird. Die Funktion `console.log()` ermöglicht es, alles was innerhalb der Klammern steht in der Konsole auszugeben. 

```html
<head>
	<link rel="stylesheet" href="styles.css">
	<title>Page Title</title>
	<script>
		console.log("Hello Amy")
	</script>
</head>
```

> Füge das script tag im `index.html` file innerhalb des header tags ein und schaue was in der Konsole passiert.

<br>

##### Ausgelagerte javascript Datei

Mit der selben Begründung für die Übersicht und maintainability, sollte der javascript code nicht innerhalb des `index.html` files stehe. Aus diesem Grund wird auch der javascript code in ein externes files geschrieben und im `index.html` referenziert.

```html
<head>
	<link rel="stylesheet" href="styles.css">
	<script src="game.js"></script>
	<title>Page Title</title>
</head>
```

> Erstelle ein neues file mit dem Namen `game.js` und kopiere die Zeile innerhalb des script tags in das neue file. Im `index.html`file passe das script tag an wie oben im Beispiel.

<br>

##### Kommentare in javascript

Wie auch in HTML möglich, können auch in javascript Kommentare hinterlegt werden. In javascript gibt es zwei Möglichkeiten einen Kommentar zu definieren.

```js
// Nur diese Zeile dient als Kommentar und wird single line comment genannt
console.log("Hello Amy")

/* Das ist ein Kommentar über mehrere Zeilen
und wird multi line comment genannt */
```

<br>

##### Variablen

In Variablen können Werte abgespeichert werden für die Benutzung zu einem späteren Zeitpunkt oder um Wiederholungen zu verhindern, wenn ein Wert immer wieder verwendet werden soll. In javascript gibt es drei Varianten eine Variable zu definieren:
- `var`
- `let`
- `const`
Während `var` die "alte" Art ist eine Variable zu definieren, sind die zwei anderen die "neue" Variante zum definieren von Variablen. Der Fokus für diese Projekt liegt auf `let` und `const`.

```js
// Definiert zwei Variablen mit einem Vor- & Nachname
let firstName = "Gil"
const LAST_NAME = "Bertoli"

// Gibt die Werte aus den beiden Variablen auf die Konsole aus
console.log(firstName)
console.log(LAST_NAME)
```

Die Wörter `let` oder `const` teilen dem Code mit, das eine Variable definiert wird. Mit dem zweiten Wort wird der Name der Variable definiert. Bei der Auswahl des Namens gibt es bis auf wenige Ausnahmen keine Restriktionen, jedoch best practices. Auf der rechten Seite des Gleichzeichen wird der Inhalt oder Wert der Variable definiert.

 Best Practices:
- `let` wird immer in CamelCase geschrieben.
- `const` wird in Uppercase geschrieben und Wörter werden mit einem _ getrennt.

Ein Wert einer Variable kann zu jedem Zeitpunkt verändert und angepasst werden. Dafür ändert sich die Schreibweise nur darin, das es kein `let` oder `const` benötigt, da die Variable bereits definiert wurde.

```js
// Definiert zwei Variablen mit einem Vor- & Nachname
let firstName = "Gil"
const LAST_NAME = "Bertoli"

// Definiert den Wert der Variable firstName zu "Amrei"
firstName = "Amrei"

// Gibt die Werte aus den beiden Variablen auf die Konsole aus
console.log(firstName)
console.log(LAST_NAME)
```

> Füge der Variable LAST_NAME einen neuen Nachnamen zu und schau was in der Konsole passiert.

<br>

##### Datentypen

```js
// String
console.log("Amy benutzt jetzt javascript in der konsole")

// Number
console.log(2)

// Boolean
console.log(true)
```

<br>

##### Datentypen erkennen / ausgeben

Mit der Funktion `typeof()` wird erkannt um welchen Datentyp es sich handelt von dem Objekt innerhalb der Klammer. 

```js
let string = typeof("Amy benutzt javascript")
let number = typeof(2)
let bool = typeof(true)

console.log(string)
console.log(number)
console.log(bool)
```

<br>

##### Operatoren für Nummern

```js
// Addition
console.log(2 + 2)

// Subtraktion
console.log(10 - 5)

// Multiplikation
console.log(3 * 3)

// Division
console.log(20 / 2)

// Modulo
console.log(10 % 3)
```

<br>

##### Operatoren für Strings

Es handelt sich hier nicht direkt um einen Operator für strings, da Buchstaben nicht miteinander addiert oder multipliziert werden können. Trotzdem ist es möglich bei strings ein `+` zu verwenden um die beiden Texte miteinander zu kombinieren.

```js
let firstName = "Amy"
let lastName = "Bertoli"
let fullName = firstName + lastName

console.log(fullName)
```

Variablen und Datentypen können beliebig miteinander kombiniert werden. Um das Problem mit dem Leerschlag in der `fullName` Variable zu lösen, wird einfach zwischen die beiden Variablen ein leerer String hinzugefügt.

```js
let firstName = "Amy"
let lastName = "Bertoli"
let fullName = firstName + " " + lastName

console.log(firstName)
console.log(lastName)
console.log("Mein Name ist " + fullName + " und ich mag die Zahl " + 8)
```

Im Beispiel oben wird zweimal die Funktion `console.log()` aufgerufen um `firstName` und dann `lastName` auf der Konsole auszugeben. Dies kann abgekürzt werden indem beide Variablen auf einer Zeile geschrieben werden, getrennt von einem Komma `console.log(firstName, lastName)`.

<br>

##### Zufälliger Werte ausgeben

Mit der Funktion `Math.random()` wird eine zufällige Zahl zwischen 0 und 1 generiert.

```js
let randomNumber = Math.random() 
console.log(randomNumber)
```

```js
let min = 1
let max = 10

let randomNumber = Math.random() * (max - min) + min
console.log(randomNumber)
```

> Definiere einen Bereich worin die zufällige Zahl sein soll. In dem Beispiel oben zwischen 1-10.

Mit der Funktion `Math.floor()` wird eine Zahl mit einer Dezimalstelle auf die nächste ganze Zahl die kleiner ist gerundet.

```js
let min = 1
let max = 10

let randomNumber = Math.floor(Math.random() * (max - min) + min)
console.log(randomNumber)
```

<br>

##### Vergleichsoperatoren

Diese Art des Operator ist eine sehr häufig verwendete Methode und ein Grossteil des Programmierens würde nicht funktionieren ohne. Weshalb dies so wichtig ist, wird im nächsten Abschnitten aufgezeigt. Für jetzt ist es einfach einmal wichtig zu wissen das es diese Vergleichsoperatoren gibt und wie sie grundsätzlich funktionieren.

Der Aufbau eines solchen Vergleichsoperator ist immer:
**Aussage, Vergleichsoperator, Aussage**

>Nimm dir einen Vergleichsoperator nach dem anderen Vor und schaue die Ausgabe in der Konsole an.

```js
// Vergleicht ob zwei Werte identisch sind
console.log(5 === 5)

// Vergleich das die beiden Werte nicht identisch sind
console.log(5 != 5)

// Vergleicht ob der erste Wert kleiner ist als der zweite Wert
console.log(5 < 4)

// Vergleicht ob der erste Wert grösser ist als der zweite Wert
console.log(5 > 4)

// Vergleicht ob der erste Wert kleiner oder gleich ist wie der zweite Wert
console.log(5 <= 5)

// Vergleicht ob der erste Wert grösser oder gleich ist wie der zweite Wert
console.log(5 >= 4)
```

<br>

##### If / else

Das Herzstück einer jeden Programmiersprache! Mit if / else kann je nach Kondition anders reagiert werden, sprich ein anderer Code Abschnitt ausgeführt werden. 

Der Aufbau eines if / else statements ist folgender: 
Wenn (if) die Aussage in der Klammer richtig (true) ist, dann führe den Code innerhalb der geschweiften `{}` Klammern aus. Sonst (Else), führe den Code innerhalb der zweiten geschweiften Klammer aus.
`
Wir nehmen uns hier ein kleines Beispiel aus dem Spiel Anno und dem Bauen von Farmerhütten. 

```js
let woodInStorage = 10
CONST BUILDING_COST = 5

if(woodInStorage > BUILDING_COST) {
	console.log("Du baust eine Farmerhütte")
} else {
	console.log("Zu wenig Rohstoffe in deinem Kontor")
}
```

> Verändere die Menge an Holz in deiner Variable damit der Code aus dem else block ausgeführt wird. Vielleicht findest du auch gleich den versteckten Fehler in diesem if / else statement.

Du kannst in einem statement auch Operatoren benutzen, um z.B Zahlen zu addieren. Dazu ein Beispiel von einer Budgetplanung, wo zuerst die Kosten für Essen und Miete zusammengerechnet und dann mit dem Budget verglichen werden.

```js
let costOfFood = 200
let costOfRent = 1350
const BUDGET = 1000 

if((costOfFood + costOfRent) < BUDGET ) {
	console.log("Du bist im Budget")
} else {
	console.log("Du hast diesen Monat zu viel ausgegeben!")
}
```

<br>

##### Else if

In einem if / else statement gibt es noch die Option von `else if {}`, dies wird benutzt wenn nicht nur auf eine Kondition sondern auf mehrere reagiert werden soll. 

Damit erweitert sich der Aufbau des if / else statement auf folgendes: 
Wenn (if) die erste Aussage in der Klammer richtig (true) ist, dann führe den Code innerhalb der geschweiften `{}` Klammern aus. Sollte (else if) die Aussage in der zweiten Klammer korrekt sein, führe den Code innerhalb der zweiten geschweiften Klammer aus. Sonst (Else), führe den Code innerhalb der dritten geschweiften Klammer aus.

```js
let costOfFood = 500
let costOfRent = 500
const BUDGET = 1000

if((costOfFood + costOfRent) < BUDGET) {
	console.log("Du bist im Budget")
} else if((costOfFood + costOfRent) === BUDGET) {
	console.log("Du hast es auf den Punkt getroffen")
} else {
	console.log("Du hast diesen Monat zu viel ausgegeben!")
}
```

<br>

##### If mit AND & OR

Es besteht die Möglichkeit bei einem Statement auch auf mehrere Werte zu prüfen. Dabei kann der if block ausgeführt werden wenn z.B nur einer der Werte stimmt oder es müssen zwingend alle Werte true sein.

```js
let whoOpensTheDoor = "Amy"

// If statement mit OR
if(whoOpensTheDoor === "Amy" || whoOpensTheDoor === "Gil") {
	console.log("Amy oder Gilby kommt nach Hause")
} else {
	console.log("Heee... " + whoOpensTheDoor + " wohnt nicht hier!!!")
}
```

```js
let person01 = "Amy"
let person02 = "Gil"

// If statement mit AND
if(person01 === "Amy" && person02 === "Gil") {
	console.log("Amy und Gilby kommt zusammen nach Hause")
} else {
	console.log("Nur einer von beiden wohnt hier")
}
```

<br>

##### If statement ohne else block

Oft wird der else block nicht benötigt und ein if / else wird nur verwendet zur Überprüfung ob ein gewisses Ereignis eintrifft. Dafür kann der else block auch komplett weg gelassen werden.

```js
let highScore = 25
let score = 12

// Else block der gar nichts macht
if(score > highScore) {
	console.log("Speichere den neuen Highscore in die Datenbank")
} else {
	// do nothing
}

// Schreibweise ohne else block
if(score > highScore) {
	console.log("Speichere den neuen Highscore in die Datenbank")
}
```

<br>

##### Funktionen

Funktionen ermöglichen es wiederverwendbaren Code zu schreiben. Mit Funktionen ist der Code lesbarer, die Wartung wird erleichtert und Wiederholungen werden vermieden. Eine Funktion kann wieder auf mehrere Varianten geschrieben werden. 

Einmal als sogenannte "arrow function" wo diese wie bei der definition einer variable mit `const name =` beginnt und auf der rechten Seite des Gleichheitszeichens wird die Funktion definiert.

```js
const name = () => {
	// Code der ausgeführt wird
}
```

Die zweite Variante definiert mit dem Wort `function` das es sich um eine Funktion handelt. Als zweites wird der Funktion einen Namen gegeben und innerhalb der geschweiften `{}` Klammern definiert was für Code ausgeführt werden soll.

```js
function name() {
	// Code der ausgeführt wird
}
```

Es gibt noch andere Möglichkeiten, diese werden aber für dieses Projekt nicht benötigt. In den kommenden Beispielen und im Spiel werden ausschliesslich "arrow functions" eingesetzt bis auf eine Ausnahme.

<br>

##### Funktionen ausführen

Eine Funktion wird immer aufgerufen mit dem Namen der Funktion, gefolgt von zwei Klammern. Im Beispiel unten wird die Funktion mit `sayHello()` aufgerufen und kann so oft verwendet werden wie gewünscht. Sollte sich der der Text nun ändern zu "Aloah Amy", kann dies in der Funktion einmalig geändert werden. Überall im Code wo die Funktion aufgerufen wird, ist der Text nun automatisch angepasst.

```js
const sayHello = () => {
	console.log("Hello Amy")
}

// Die Funktion mit dem Namen sayHello wird aufgerufen
sayHello()
sayHello()
sayHello()
```

> Erstelle die Funktion wie oben im Beispiel und rufe diese mehrfach auf.

<br>

##### Parameter für Funktionen

Beim Aufruf einer Funktion können Parameter mitgeschickt werden innerhalb der Klammern. Dies ermöglicht eine dynamische Funktion, welche Code ausführt mit Parameter welche der Funktion mitgegeben werden. 
Die `sayHello` Funktion wird erweitert dem Parameter `name` innerhalb der Klammern. Dabei handelt es sich um einen Platzhalter und kann wie eine Variable angesehen werden, welche jedoch nicht zuerst definiert werden muss. Innerhalb der Funktion kann zu jeder Zeit auf den Parameter `name` zugegriffen werden und erhält den Wert, welcher der Funktion beim Aufruf mitgeschickt wurde.

```js
// Funktion mit Parameter
const sayHello = (name) => {
	console.log("Hello " + name)
}
```

Parameter dienen wie erwähnt als Platzhalter und werden gefüllt mit Werten, welche beim Aufruf der Funktion mitgeschickt werden. Im Beispiel unterhalb wird die Funktion aufgerufen und innerhalb der Klammern der String `"Gilby"` mitgeschickt. Dieser wird in der Funktion automatisch dem Parameter `name` zugeteilt.

```js
// Funktion mit Parameter
const sayHello = (name) => {
	console.log("Hello " + name)
}

// Die Funktion wird mit dem Parameter "Gilby" aufgerufen
sayHello("Gilby")
```

 Wird die Funktion als Beispiel mit zwei Werten `sayHello("Gilby", "Bertoli")` aufgerufen, wird der erste Wert dem `name` zugewiesen, der zweite Wert kann jedoch keinem Parameter zugewiesen werden. Erwartet die Funktion zwei Parameter, so muss dies in der Funktion deklariert und erweitert werden.

```js
// Funktion mit zwei Parameter
const sayHello = (name, lastName) => {
	console.log("Hello " + name + " " + lastName)
}

// Die Funktion wird mit dem Parameter "Gilby" und "Bertoli" aufgerufen
sayHello("Gilby", "Bertoli")
```

Parameter sind nicht auf Strings limitiert sondern können alle Datentypen aufnehmen.

```js
// Funktion mit zwei Parameter
const sayHello = (name, age) => {
	console.log("Hello " + name + ", du bist " + age + " Jahre alt")
}

// Funktion wird mit einem String und einer Nummber aufgerufen
sayHello("Gilby", 25)
```

<br>

##### Wert zurückgeben aus Funktion

Eine Funktion kann nicht nur benutzt werden um einfach einen Codeblock auszuführen, die Funktion kann auch einen Wert zurückgeben welcher in eine Variable gespeichert wird. Wichtig dabei ist das Wort `return` was aus der Funktion etwas ausgibt.

```js
// Funktion die zwei Nummern erwarten und diese Addiert
const myFunction = (firstNum, secondNum) => {
	return firstNum + secondNum
}

// Variable die das Resultat speichert
let addedNumbers = myFunction(2, 5)

// Ausgabe des Wertes der Variable
console.log(addedNumbers)
```

<br>

##### Programmiere einen simplen Taschenrechner

Mit allem was bisher erarbeitet wurde kann ein simpler Taschenrechner programmiert werden. Folgende Anforderungen sollen dabei erfüllt werden:

- Erstelle eine Funktion welche zwei Zahlen entgegen nimmt.
- Die Funktion soll die beiden Zahlen addieren, subtrahieren, dividieren und multiplizieren.
- Das Ergebnis soll auf die Konsole ausgegeben werden.

Eine Lösungsvariante findest du im file `calculator.md`.

<br>

##### Arrays

Arrays sind spezielle Datenstrukturen, die es ermöglichen, mehrere Werte in einer einzigen Variablen zu speichern. Diese Werte können beliebige Datentypen sein wie Nummern, Strings, Objekte (Dazu im nächsten Abschnitt mehr) oder sogar andere Arrays. Ein Array wird mit eckigen Klammern `[]` erstellt, und die Werte innerhalb sind durch Kommas getrennt.

```js
let fruits = ["Banana", "Apple", "Grapes"]

// Ausgabe des kompletten Array
console.log(fruits)

// Ausgabe der Anzahl an Werten innerhalb des Array
console.log(fruits.length)

// Direkter Aufruf eines Wertes innerhalb eines Array
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
```

Ein wichtiger Teil eines Arrays ist das es sich bei den Werten innerhalb um indexbasierte Elemente handelt mit einem numerischen Index. Hört sich extrem kompliziert an und steckt auch noch etwas mehr dahinter, was es aber eigentlich bedeutet, ist das immer das erste Element auf dem Index 0 ist. Aus diesem Grund wird das erste Element mit `fruits[0]` aufgerufen und das letzte Element im Beispiel oben mit `fruits[2]`, obwohl `fruits.length` die Ziffer 3 ausgibt.

Ein Array bringt neben der Funktion `arrayNamen.length`  einige weiter Funktionen mit wie z.B.
- `push()` & `pop()`
- `shift()` & `unshift()`
- `forEach()` & `map()`

<br>

##### Array push & pop

```js
let fruits = ["Banana", "Apple"]
console.log(fruits)

// push() fügt einen neuen Wert an letzter Stelle des Arrays ein
fruits.push("Cherries")
console.log(fruits)

// pop() entfernt das letzte Element im Array
fruits.pop()
console.log(fruits)
```

<br>

##### Array shift & unshift

```js
let fruits = ["Banana", "Apple"]
console.log(fruits)

// shift() entfernt das erste Element im Array
fruits.shift()
console.log(fruits)

// unshift() fügt einen neuen Wert an erster Stelle ein
fruits.unshift("Cherries")
console.log(fruits)
```

<br>

##### Array forEach

Die Funktion `forEach` ermöglicht es über die Werte innerhalb eines Array zu iterieren und für jedes einzelne Element Code auszuführen. Ein kurzer Fokus auf das Wort `fruit` innerhalb der Klammern von `fruits.forEach()`. Dieses Wort ist frei wählbar und funktioniert im Grundprinzip gleich wie bei den Parameter einer Funktion. Was auch immer der Wert innerhalb des Array ist in der aktuellen iteration, wird darin gespeichert und ist innerhalb der geschweiften Klammern benutzbar.

```js
let fruits = ["Banana", "Apple", "Cherries", "Grapefruit"]

fruits.forEach(fruit => {
	console.log("I like " + fruit + "!")
})
```

Die `forEach` Funktion erhält nicht nur das aktuelle Element als Parameter, ein zweiter Parameter wird mitgeschickt welcher den aktuellen Index mitgibt. 

```js
let fruits = ["Banana", "Apple", "Cherries", "Grapefruit"]

fruits.forEach((fruit, index) => {
	console.log("Aktuelle Iteration: " + index)
	console.log("I like " + fruit + "!")
})
```

<br>

##### Object

Ein Object ist gleich wie das Array eine spezielle Datenstruktur um mehrere Werte in einer Variable zu speichern. Ein Object wird mit geschweiften Klammern `{}` erstellt, und die Werte innerhalb sind auch durch Kommas getrennt. Der Unterschied zum Array ist jedoch das ein Wert eines Objects immer aus einem `key:value` pair besteht. Im Beispiel unten ist der erste Wert `brand:"Toyota"` und dabei ist `brand` der key und `"Toyota"` der dazugehörige value. Ein Zugriff oder die Ausgabe aller Werte eines Objects ist möglich mit `console.log(car)`. Durch das `key:value` pair kann aber auch auf ganz spezifische Werte zugegriffen werden wie z.B. mit `console.log(car.color)`. 

```js
const car = {
	brand: "Toyota",
	color: "Red",
	year: 2012,
	secondHand: true
} 

console.log(car)
console.log(car.color)
```

Durch die Möglichkeit mit einem `key` auf einen spezifischen Wert Zugriff zu erhalten eignen sich Objects sehr gut um auch Funktionen zu beinhalten. Bei Funktionen innerhalb von Objects wird von einer Methode gesprochen. Die Funktion wird etwas anders definiert, ist jedoch von Prinzip und Aufbau das gleiche. Mit `honk` als key haben wir der Funktion sozusagen einen Namen gegeben, dann wird mit dem Wort `function` definiert das es sich um eine Funktion handelt. In der Klammern können Parameter aufgenommen werden und innerhalb der geschweiften Klammern ist der auszuführende Code. 

```js
const car = {
	brand: "Toyota",
	color: "Red",
	year: 2012,
	secondHand: true,
	honk: function() {
		console.log("My " + this.brand + " makes Whoop Whoop!")
	}
}

// Ausführen einer Methode eines Objects
car.honk()
```

Etwas neues innerhalb der Funktion ist der Begriff `this` was lokal in der Funktion auf den aktuellen Kontext verweist. Mit `this` referenziert die Funktion auf das aktuelle Object und ersetzt den Namen des Objects. In der Ausgabe in die Konsole könnte `this.brand` auch mit `car.brand` ersetzt werden und hätte das selbe Ergebnis. Für die maintainability und Flexibilität wird `this` verwendet, somit funktioniert der Code auch noch falls das Object umbenannt werden würde in z.B. "vehicle". 

<br>

##### Ein Object iterieren / loopen

Auch in einem Object kann ein loop gemacht werden wie bei einem Array. Dieser wird jedoch etwas anders gemacht und wirkt auf den ersten Blick etwas komplexer. 

```js
for(let key in car) {
	if(car.hasOwnProperty(key)) {
		console.log(key + ": " + car[key])
	}
}
```

Die erste Zeile `for(let key in car)` iteriert über jedes einzelnen key / value pair innerhalb des Objects. Für jede Iteration wird "temporär" mit `let key` eine variable definiert mit dem Namen key, welcher den `key` des key / value pairs gespeichert hat.  

```js
// Ausgabe des kompletten Objects
console.log(car)

// Ausgabe jedes keys auf einer neuen Zeile
for(let key in car) {
	console.log(key)
}
```

Die Ausgabe des Wertes mit `car[key]` sieht aus wie bei einem Array und ist anfänglich nicht intuitiv weil der Zugriff auf ein value in den Beispielen oberhalb mit `car.color` gemacht wurden. Die eckigen Klammern werden in einem Object benutzt, wenn der `key` als Variable vorliegt. Der Grund dafür ist das bei einem for loop der `key` in der variable als String gespeichert wird. Somit würde `car.key` aufgelöst z.B `car."color"`  bedeuten. Aus diesem Grund werden bei einem Object keys in variablen mit der eckigen Klammer aufgelöst.

```js
// Ausgabe des kompletten Objects
console.log(car)

// Ausgabe jedes keys auf einer neuen Zeile
for(let key in car) {
	console.log(key + ": " + car[key])
}
```

Der letzte Teil der nun noch fehlt ist das if statement `if(car.hasOwnProperty(key))`. Es ist eine Best Practice beim Iterieren über Objects in javascript und alle weiteren Information dazu würden den Rahmen dieses Projektes sprengen.

<br>

##### Objects in Arrays und umgekehrt

Ein Object kann ein oder mehrere Arrays beinhalten sowie ein Array auch Objects beinhalten kann.

```js
// Object mit einem Array
const car = {
	brand: "Toyota",
	color: "Red",
	owners: ["Gilby", "Amy", "Hippo"]
}

// Ausgabe des Objects
console.log(car)

Ausgabe des Array innerhalb des Objects
console.log(car.owners)

// forEach Funktion über Array innerhalb des Object
car.owners.forEach(owner => {
	console.log(owner + " was an owner of the car")
})
```

```js
// Array mit einem Object
const fruits = ["Banana", "Apple", {favoritFruit: "Cherry", hateFruit: "Melon"}]

// Ausgabe des Array
console.log(fruits)

// Ausgabe des Object innerhalb des Array
console.log(fruits[2])

// forEach Funktion über Array innerhalb des Object
fruits.forEach(fruit => {
	console.log(fruit)
})
```

<br>
<br>
<br>

# Erweiterte Techniken

Erstelle einen neuen Ordner mit dem Namen "02_Advanced" und erstelle darin ein neues `index.html`, `game.js` und `styles.css` file. Für das `index.html` kann die Vorlage von unten verwendet werden.

```html
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="styles.css">
		<script src="game.js"></script>
		<title>Page Title</title>
	</head>
	<body>
		...
	</body>
</html>
```

<br>

### Event listener auf button

Damit bei einem klicken auf einen Button javascript ausgeführt werden kann, muss ein event listener erstellt werden. Dieser hört (listen) oder reagiert auf einen spezifischen event und führt dann Code aus. In dem Beispiel mit dem Button reagiert der Code auf den event eines Klicks. 

```html
<body>
	<div id="first-container">
		<button id="start-button">click me</button>
	</div>
</body>
```

> Füge im `body`tag ein neues `div` ein mit der ID `first-container` und darin ein `button` mit der id `start-button`.

Um mit dem richtigen HTML Element zu arbeiten, gibt es das vordefinierte Object `document`, in der Webentwicklung wird dabei vom DOM gesprochen (Document Object Model). Einfach gesagt ist der DOM die komplette HTML Struktur und beinhaltet jedes Element und auch jeden Node. Ein Node ist ein generischer Begriff, der jede Art von Knoten (Node) in der Baumstruktur des DOM beschreibt, während ein Element eine spezifische Art von Node ist welcher HTML Elemente repräsentiert mit all ihren Eigenschaften.

Im Beispiel unten haben wir zwei Nodes, einmal das `div` und einmal den Text. Das `div` ist ein HTML Element da es spezifische Eigenschaften hat wie es sich verhalten soll und wie es dargestellt wird. Der Text im Gegenzug ist einfach nur ein simpler Text und deshalb einfach ein Node. 

```html
<div>
	Text
</div>
```

Mit der Funktion `getElementById()` kann ein spezifisches Element selektiert werden im DOM. Im Beispiel unten wird in der Variable `startButton` das Element mit der ID "start-button" gespeichert.

```js
// HTML Element wird einer variable zugewiesen
const startButton = document.getElementById("start-button")

console.log(startButton)
```

Aktuell wird in der Konsole für das `console.log(startButton)` der Wert `null` angezeigt. Dies bedeutet das die Variable keinen Wert gespeichert hat, sprich das der gespeicherte Wert null ist. Der Grund dafür ist wie HTML aufgebaut und interpretiert wird von einem Browser.

HTML wird vom Browser von oben nach unten interpretiert. Zeile für Zeile werden die Elemente aufgebaut, bis am Ende das ganze Gerüst steht. Wenn der Browser im Beispiel unterhalb die zweite Zeile interpretiert, weis er noch nicht das auf der dritten Zeile ein `<button>` tag kommt.

```html
<body>
	<div id="first-container">
		<button id="start-button">click me</button>
	</div>
</body>
```

Das `script` tag hat dabei ein spezielle Eigenschaft. Die Interpretation des Browsers wird blockiert, bis der Code innerhalb des `script` tags ausgeführt wurde. Erst wenn der Code fertig ausgeführt wurde, macht der Browser weiter mit der nächsten Zeile innerhalb des `index.html` files.

Dies hat zur Folge, das während der Code ausgeführt wird im `game.js` file, im `index.html` file alles unterhalb der Zeile `<script src="game.js"></script>` unbekannt ist. 
Im `game.js` file wird nach einem Element gesucht mit der ID "start-button", welches zu diesem Zeitpunkt noch nicht existiert. Aus diesem Grund wird der Wert `null` in der Konsole ausgegeben.

Um dem entgegenzuwirken muss ein weiterer event listener benutzt werden. Der listener wird dem `document` (DOM) angefügt mit der Funktion `addEventListener()`. Die Funktion erwartet zwei Properties, einmal das event auf das gehört werden soll, in diesem Fall `DOMContenLoaded` und als zweites die Funktion welche ausgeführt werden soll. 

```js
document.addEventListener('DOMContentLoaded', function() {

})
```

> Kopiere den Code der bisher nur `null` ausgegeben hat in die Funktion des event listeners wie unten im Beispiel.

```js
document.addEventListener('DOMContentLoaded', function() {
	// HTML Element wird einer variable zugewiesen
	const startButton = document.getElementById("start-button")
	
	console.log(startButton)
})
```

Dem Element aus der Variable `startButton` kann nun auf dem selben Weg ein listener hinzugefügt werden, nur dieser soll auf das Event `click` hören. Damit kann Code ausgeführt werden sobald der Button gedrückt wird.

```js
document.addEventListener('DOMContentLoaded', function() {
	// HTML Element wird einer variable zugewiesen
	const startButton = document.getElementById("start-button")
	
	// Eventlistener wird dem HTML Element angehängt
	startButton.addEventListener('click', function() {
		console.log("Button clicked")
	})
})
```

Mit einem `prompt` kann Interaktivität auf die Seite gebracht werden mit einem Klick auf den Button. Die Eingabe wir in die Variable `name` gespeichert und anschliessend mit einer `alert` box ausgegeben.

```js
startButton.addEventListener('click', function() {
	let name = prompt("Gib deinen Namen ein")
	alert("Hi " + name)
})
```

<br>

### HTML child und parent Elemente anzeigen

In javascript ist es möglich das parent oder child Element anzuzeigen aus der Sicht des aktuellen Elements. Mit `parentElement` auf das Element der Variable `startButton` wird das parent `div` des Containers angezeigt.

```js
startButton.addEventListener('click', function() {
	console.log("Parent Element des Buttons")
	console.log(startButton.parentElement)
})
```

Das geht auch in die andere Richtung mit allen child Elements welche innerhalb eines Elementes sind. 

```html
<body>
	<div id="first-container">
		<button id="start-button">click me</button>
	</div>
	
	<div id="second-container">
		<div>Erstes Element</div>
		<div>Zweites Element</div>
		<div>Drittes Element</div>
	</div>
</body>
```

> Füge innerhalb des `body` tag einen zweiten Container hinzu mit drei `div` Elementen drin.

```js
document.addEventListener('DOMContentLoaded', function() {
	const startButton = document.getElementById("start-button")
	const secondContainer = document.getElementById("second-container")
	
	startButton.addEventListener('click', function() {
		console.log("Child Elements des Containers")
		console.log(secondContainer.children)
	})
})
```

> Weise den zweiten Container einer Variable zu und zeige alle child Elements innerhalb des Containers in der Konsole an mit `.children`.

```js	
startButton.addEventListener('click', function() {
	const firstChild = secondContainer.firstElementChild
	firstChild.style.backgroundColor = "yellow"
})
```

<br>

### HTML Elemente manipulieren

Einem HTML Element können beliebig child Elemente hinzugefügt und wieder entfernt werden. Für dieses Beispiel soll der erste Container drei Buttons haben und der zweite soll leer sein. Im javascript file soll zum Start nur der leere event listener auf dem DOM sein.

```html
<body>
	<div id="first-container">
		<button id="fill-list">Liste anzeigen</button>
		<button id="remove">Entferne eine Frucht</button>
		<button id="add">Füge eine Frucht hinzu</button>
	</div>
	
	<div id="second-container"></div>
</body>
```

```js
document.addEventListener('DOMContentLoaded', function() {

})
```

Um einen Button welcher angezeigt wird zu deaktivieren, kann diesem das Property `disabled` mitgegeben werden. Dies kann direkt auf dem `button` Element in HTML gemacht werden wie im Beispiel unten zu sehen.

```html
<div id="first-container">
	<button disabled id="fill-list">Liste anzeigen</button>
	<button id="remove">Entferne eine Frucht</button>
	<button id="add">Füge eine Frucht hinzu</button>
</div>
```

> Setze das `disabled` Property und speichere die Datei und schaue das Verhalten an.

Für die Kontrolle des Verhaltens mit javascript, kann dieses Property auch direkt im Code gesetzt werden.

```js
document.addEventListener('DOMContentLoaded', function() {
	// Füge die buttons einer Variable hinzu
	const fillListButton = document.getElementById("fill-list")
	const addButton = document.getElementById("add")
	const removeButton = document.getElementById("remove")
	
	// Deaktiviere die beiden add / remove Buttons
	addButton.disabled = true
	removeButton.disabled = true
})
```

> Füge die drei neuen Buttons einer Variable hinzu und setz das Property `disabled` vom add & remove Button auf `true`. Anschliessend entferne `disabled` wieder vom ersten Button im `index.html` file.

Mit einem Klick auf den Knopf "Zeige die Liste an" sollen alle Früchte innerhalb eines Array in der Konsole angezeigt werden.

```js
const fruitInBasket = [
	"Apple",
	"Cheery",
	"Banana"
]

fillListButton.addEventListener('click', function() {
	fruitInBasket.forEach(fruit => {
		console.log(fruit)
	})
})
```

> Erstelle unterhalb des bisherigen Codes ein Array mit Früchten und gib dem `fillListButton` einen event listener auf den Klick. Erstelle einen Loop über das Array bei einem Klick auf den Button.

Anstelle der Anzeige der Früchte in der Konsole sollen nun neue HTML Elemente dem Container `div` angefügt werden als child Elemente. 

Das wird wie bei der Interpretation von HTML schrittweise gemacht:
- Erstelle ein neues `div` Element.
- Erstelle einen neuen Node und gib diesem einen Text mit.
- Hänge dem neuen `div` den Node an.
- Hänge dem Container `div` als child Element das neu erstellte `div` an.

```js
// Füge das Container div einer Variable zu
let container = document.getElementById("second-container")

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
```

Als letztes soll sobald alle Früchte aufgelistet werden der Button deaktiviert werden. Die beiden anderen Buttons zum hinzufügen und entfernen sollen nun aktiviert werden.

```js
// Setze disabled auf den Button zum anzeigen der Liste
fillListButton.disabled = true

// Entferne disabled vom add / remove Button
addButton.disabled = false
removeButton.disabled = false
```

> Aktiviere und deaktiviere die Buttons nachdem der  `forEach` loop aber noch innerhalb des event listeners

<br>

### Advanced Challenge

Als letzte Challenge bevor die Umsetzung des Spiels beginnt soll die Logik umgesetzt werden, das mit den beiden Buttons Früchte der Liste hinzugefügt und entfernt werden können.

Acceptance criteria:
- A click on the remove button should remove the last fruit on the list.
- As long as the fruit array and the list is empty, the remove button should be disabled.
- A click on the add button should add a random fruit from the `allFruits` array at the end of the list.
- The list should at max display 10 fruits.
- If the displayed list of fruits is full, the add button should be disabled.

```js
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
```

Für Unterstützung oder zum Abgleich steht eine Mögliche Lösung in der Datei `fruitList.md` zur Verfügung.

<br>
<br>
<br>

# Text Spiel programmieren

Mit diesem Projekt wird ein Spiel programmiert, welches dem Spieler in Textform eine Szene beschreibt und Optionen zur Verfügung stellt, wie der Spieler sich entscheiden möchte. Der Spieler geht so durch mehrere Szenen bis er (vielleicht) das Ende des Spiels erreicht. Je nach Auswahl in einer Szene kann dies Auswirkungen auf die Optionen der nächsten Szenen haben oder gar komplette Szenen überspringen. 

> WICHTIG: Benutze bei den Klassen und ID's aus der Anleitung unbedingt die exakten Namen damit die im voraus erstellten CSS styles passen.

<br>

### Setup & HTML Struktur

Erstelle einen neuen Ordner mit dem Namen "TextGame" und erstelle darin eine `index.html`, `game.js` und `styles.css` Datei. Kopiere den Inhalt des files `baseIndex.html` aus dem "support" Ordner in dein `index.html`. 

Erstelle innerhalb des `body` tags ein `div` mit der Klasse `main-container`. Erstelle darin zwei weitere `div` Elemente mit der ID `start-container`, respektiv `game-container`.

```html
<body>
	<div class="main-container">
		<div id="start-container">
			Start container
		</div>
		
		<div id="game-container">
			Game container
		</div>
	</div>
</body>
```

Innerhalb des `start-container` erstelle drei weitere Elemente. Ein `div` mit der Klasse `game-title` und einem Titel wie z.B "Amy's Programmier Abenteuer". Ein text `input` Feld mit der ID `name-field` und einem `placeholder`. Als letztes ein `button` mit der ID `start-button`. 

```html
<div id="start-container">
	<div class="game-title">Amy's Programmier Abenteuer</div>
	<input id="name-field" type="text" placeholder="Name"/>
	<button id="start-button">Start</button>
</div>
```

Innerhalb des `game-container` erstelle drei Elemente. Ein `img` Element mit der ID `image`, ein `div` Element mit der ID `text` und ein weiteres `div` mit der ID `option-buttons` und der Klasse `btn-grid`. 

```html
<div id="game-container">
	<img id="image">
	<div id="text">
		Text
	</div>
	<div id="option-buttons" class="btn-grid">
	</div>
</div>
```

Im `div` mit der ID `option-buttons` erstelle einen `button` mit der Klasse `btn` und dem Text "Option01". Kopiere den `button` dreimal und passe die Nummer im Text an damit diese fortlaufen sind.

```html
<div id="option-buttons" class="btn-grid">
	<button class="btn">Option01</button>
	<button class="btn">Option02</button>
	<button class="btn">Option03</button>
	<button class="btn">Option04</button>
</div>
```

<br>

### Übersicht des user interface

Alle Elemente zur Anzeige des Spiels sind nun im `index.html` bereits erstellt, jedoch noch ohne Inhalte. Zum besseren Verständnis werden die einzelnen Elemente und deren Aufgaben aufgezeigt.

`<div class="main-container">`
Der Haupt-Container welcher das komplette Spiel beinhaltet.

`<div id="start-container">`
Der Container der als Startseite dient und alle nötigen Elemente beinhaltet wie:
- Titel des Spiels
- Textfeld zur Eingabe des Spielernamens
- Der Startknopf um das Spiel zu starten

`<div id="game-container">`
Der Container welche alle Elemente beinhaltet für das Spiel.

`<img id="image">`
Das Element welches das Bild der aktuellen Szene anzeigt in dem der Spieler sich befindet.

`<div id="text">`
Der Text welcher die aktuelle Szene beschreibt.

`<div id="option-buttons" class="btn-grid">`
Das Element welche die möglichen Option für den Spieler anzeigt (z.B "Gehe nach Links" oder "Gehe nach Rechts")

<br>

### Statische Inhalte füllen

Erstelle einen neuen Ordner mit dem Namen `img` und kopiere alle Bilder welche im Ordner support/images sind.

Aktuell ist ein `img` tag vorhanden im `index.html` welches jedoch noch kein Bild anzeigt. Dafür muss ein Attribut hinzugefügt werden mit dem Pfad zum Bild das angezeigt werden soll. Das Attribut `src` steht für source und zeigt den Pfad zum Bild an. 

```html
<img id="image" src="./img/image01.jpg">
```

Öffne die Datei `scenes.md` im Ordner support und kopiere den Text der ersten Szene in das `div` Element mit der ID `text`. Ersetze in den ersten beiden Buttons für die Optionen die Optionstexte aus der ersten Szene.

<br>

### Startansicht von Spielansicht trennen

Die Startansicht sollte zu Beginn des Spiels alleine angezeigt werden ohne die Spielansicht. Wird das Spiel gestartet soll die Startansicht ausgeblendet werden und die Spielansicht eingeblendet. Der einfachheitshalber gibt dem `game-container` einen inline style mit `display: none;`.

```html
<div id="game-container" style="display: none;">
</div>
```

Mit einem event listener auf dem `start-button` soll das Attribut `display: none;` dem `start-container` angefügt werden. Im selben Moment soll dem `game-container` der style `display: none;` wieder entfernt werden. 

> Erstelle den event listener um den DOM zu laden und einen für den `start-button`. Erfasse die Elemente für den Button und die beiden Container in einer Variable.

```js
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById("start-button")
    const startContainer = document.getElementById("start-container")
    const gameContainer = document.getElementById("game-container")
    
    startButton.addEventListener('click', function() {
    })
})
```

Einem Element welches in einer Variable hinterlegt ist, können auf styles direkt zugegriffen und diese verändert werden. In dem Beispiel unten wird dem `start-container` der style `display: none;` hinzugefügt während dieser dem `game-container` entfernt wird, sprich auf `flex`gesetzt wird.

```js
startButton.addEventListener('click', function() {
	startContainer.style.display = "none"
	gameContainer.style.display = "flex"
})
```

Die Funktion um vom der Startansicht in die Spielansicht zu wechseln ist nun funktionsfähig, hat jedoch noch ein unschönes Verhalten. Das Textfeld für den Namen kann leer gelassen werden und das Spiel trotzdem gestartet. 

> Füge das `name-field`einer Variable hinzu. Gib diese in der Konsole aus mit dem Zusatz `.value` bei einem Klick auf den Button.

```js
const nameField = document.getElementById("name-field")

startButton.addEventListener('click', function() {
	startContainer.style.display = "none"
	gameContainer.style.display = "flex"
	console.log(nameField.value)
})
```

Mit dem Zugriff auf den Inhalt aus dem Textfeld kann daruaf geprüft werden. Sollte der Wert leer sein soll eine Meldung angezeigt werden, falls dieser nicht leer ist startet das Spiel.

```js
startButton.addEventListener('click', function() {
	if(nameField.value === "") {
		alert("Gib einen Namen ein")
	} else {
		startContainer.style.display = "none"
		gameContainer.style.display = "flex"
	}
})
```

<br>

### Vorgefertigte Styles übernehmen

Öffne die Datei `styles.css` aus dem Ornder support und kopiere den kompletten Inhalt und kopiere diesen in das `styles.css` des Projektes.

<br>

### Alle nötigen Funnktionen definieren

Aktuell wird der angezeigte Szenentext, die Auswahl und das Bild von statischen Daten angezeigt. Damit das Spiel gespielt und von einer Szene zur nächsten gewechselt werden kann, müssen die Daten dynamisch geladen werden. Dafür werden 4 Funktionen gebraucht um die komplette Spiellogik zu steuern.

> Zum Start definiere die drei letzten HTML ELemente für das Bild, den Text und die Buttons in eine Variable.

```js
    const textElement = document.getElementById('text')
    const optionButtonsElement = document.getElementById('option-buttons')
    const imageElement = document.getElementById("image")
```

> Erstelle ein leeres Array mit dem Namen "scenes" sowie die vier Funktionen aus dem Beispiel unterhalb, was diese genau machen wird anschliessend erklärt.

```js
	let scenes = []

	const startGame = () => {
		// Do something
    }

    const showSceneContent = (sceneId) => {
		// Do something
    }

    const selectOption = (option) => {
		// Do something
    }

    const fillSceneData = () => {
		scenes = [
			{
				id: 1,
				text: "Scene Text 01"	
			}
		]
    }
```

<br>

#### **startGame function**

Die Funktion `startGame()` stösst den ganzen Text und Ablauf des Spiels an. Neben dieser Hauptfunktion wird darin zu einem späteren Zeitpunkt das Inventar initialisiert.

<br>

#### **showSceneContent function**

Die Funktion `showSceneContent(sceneId)` steuert was angezeigt werden soll in welcher Szene. Die Funktion erwartet eine `sceneId` mit der auf die aktuelle Szene zugegriffen werden kann mit dem Inhalt. Ist die korrekte Szene gefunden, füllt die Funktion die Inhalte der HTML Elemente ab damit die korrekte Szene beschrieben wird und die entsprechenden Optionen.

<br>

#### **selectOption function**

Die Funktion `selectOption()` nimmt die Auswahl entgegen, welche Option in der aktuellen Szene ausgewählt wurde. Jede Option hat automatisch die Information, welches die nächste Szene sein soll in form der nächsten `sceneId`. Damit wird innerhalb dieser Funktion erneut die `showSceneContent(sceneId)` Funktion aufgerufen mit der entsprechenden `sceneId`.

<br>

#### **fillSceneDate function**

Die Funktion `fillSceneData()` ist nur aus einem Grund eine Funktion. Der Inhalt des Array hätte eigentlich auch direkt bei der Initialisierung definiert werden können. Das hätte aber zur Folge das wir den Spielernamen nicht verwenden können, denn dieser ist zum Zeitpunkt der initialisierung noch nicht bekannt.

<br>

### Befüllen der ersten Szene

Das `scenes` Array wird gefüllt mit Objects welche die Daten der Szene beinhalten. Ein Object für eine Szene hat einen key für die `id`, die `sceneDescription` und für die `options` welches wiederum ein Array ist. Das `options` Array hat mehrere Objects mit den Informationen zu den einzelnen Optionen. Eine Option besteht zu Beginn aus den keys `optionText` und `nextScene`.  							

```js
scenes = [
	{
		id: 1,
		sceneDescription: "Scene Text 01",
		options: [
			{
				optionText: "Option01",
				nextScene: 2
			},
			{
				optionText: "Option02"
			}
		]	
	}
]
```

> Übernimm die Texte aus der Datei `scenes.md` für die erste Szene und erstelle eine zweite Szene ohne Inhalt.

```js
scenes = [
	{
		id: 1,
		sceneDescription: "Du erwachst in einem verträumten Wald, riechst die Blumen und hörst die Vögel zwitschern.",
		options: [
			{
				optionText: "Du geniesst den Moment, schliesst deine Augen wieder und schlummerst weiter.",
				nextScene: 2
			},
			{
				optionText: "Du stehst auf, streckst dich einmal durch und gehst richtung Süden."
			}
		]	
	},
	{
		id: 2,
		sceneDescription: "Ich bin die zweite Szene"
	}
]
```

> Rufe in der `startGame` Funktion die beiden Funktionen `fillSceneData()` und `showSceneContent()` auf.

```js
const startGame = () => {
        fillSceneData()
        showSceneContent(1)
    }
```

<br>

### Anzeigen der Inhalte in den HTML Elementen

> Definiere innerhalb der `showSceneContent` Funktion die lokale Variable `sceneContent` welche alle Informationen der aktuellen Szene beinhalten soll. Mache einen loop über das `scenes` Array und gib die Szene einmal in der Konsole aus.

```js
let sceneContent = {}

scenes.forEach(scene => {
	console.log(scene)
})
```

> Prüfe innerhalb des loops ob die `id` der aktuellen Szene übereinstimmt mit der `sceneId` welche der Funktion mitgegeben wurde. Stimmen beide Nummern überein, setzte den Inhalt der Variable `sceneContent` auf die Informationen der aktuellen Szene im loop. Gib den Inhalt aus `sceneContent` in der Konsole aus.

```js
let sceneContent = {}

scenes.forEach(scene => {
	if(scene.id === sceneId) {
		sceneContent = scene
		console.log(sceneContent)
	}
})
```

> Zum Verständnis, ändere die `sceneId` welche in der Funktion `showSceneContent()` innerhalb der `startGame` Funktion ausgeführt wird. Ändere die ID auf 2 und führe den Code erneut aus. 

> Versuche einmal die Funktion `showSceneContent()` in einfachen Worten zu erklären, was diese im aktuellen Zustand macht.

Mit der korrekten Szene welche gefunden wurde, muss deren Inhalt in die HTML Elemente abgefüllt werden. In der Szene ist der key `sceneDescription`, welcher die Beschreibung der aktuellen Szene als value beinhaltet. Dieser Inhalt soll in dem HTML Element angezeigt werden welches in der variable `textElement` hinterlegt wurde.

```js
textElement.innerText = sceneContent.sceneDescription
```

> Setzte die `sceneDescription` als Text in das HTML Element nach dem loop am Ende der Funktion `showSceneContent()`.

Aktuell ist noch kein Unterschied zu sehen, da der Inhalt der Szene der selbe ist, wie bereits im `index.html` direkt zwischen den tags geschrieben ist. Um einen Unterschied zu sehen, wird der eingegebenen Namen in die erste `sceneDescription` eingebunden. 

```js
{
	id: 1,
	sceneDescription: playerName + " du erwachst in...",
	options: [...]	
}
```

> Füge dem Text der `sceneDescription` innerhalb des `scenes` Array die Variable `playerName` mit.

<br>

#### Verfügbare Optionen anzeigen

Der aktuelle Stand des Projektes zeigt bereits die Beschreibung der Szene, jedoch noch nicht die verfügbaren Optionen. Jede Szene im Projekt wird eine Beschreibung haben, weshalb einfach der Inhalt des HTML Elementes ersetzt werden kann. Die Anzahl an möglichen Option hängt jedoch von der aktuellen Szene ab und zu einem späteren Zeitpunkt auch von den getroffenen Entscheidungen. Aus diesem Grund benötigen die Optionen ein wenig mehr Logik im Code. Als erstes werden die buttons mit den Optionen welche aktuell angezeigt werden, aus dem DOM entfernt. In einem zweiten Schritt wird dem DOM die neuen buttons mit den Verfügbaren Optionen angehängt. 

```js
console.log(optionButtonsElement.firstElementChild)
```

> Füge die Ausgabe in die Konsole wie oben in deinem Code ein am Ende der Funktion `showSceneContent()`.

In der Konsole wird nun das erste childElement des divs mit der ID `option-buttons` angezeigt. Dieses div ist definiert in der Variable `optionButtonsElement`. Mit der Funktion `removeChild()` kann ein childElement entfernt werden.

```js
console.log(optionButtonsElement.firstChild)
optionButtonsElement.removeChild(optionButtonsElement.firstChild)
```

> Entferne das `firstChild` vom `optionButtonsElement` und schaue was im Spiel nach dem speichern passiert.

Wir wissen das es aktuell vier Optionen hat und können aus diesem Grund den Code drei mal kopieren und haben dann alle Elemente entfernt.

```js
console.log(optionButtonsElement.firstChild)
optionButtonsElement.removeChild(optionButtonsElement.firstChild)

console.log(optionButtonsElement.firstChild)
optionButtonsElement.removeChild(optionButtonsElement.firstChild)

console.log(optionButtonsElement.firstChild)
optionButtonsElement.removeChild(optionButtonsElement.firstChild)

console.log(optionButtonsElement.firstChild)
optionButtonsElement.removeChild(optionButtonsElement.firstChild)

console.log(optionButtonsElement.firstChild)
```

> Kopiere den Code damit vier Elemente entfernt werden und gib am Ende nochmal die Ausgabe in die Konsole aus.

Unterhalb des Szenentextes ist nun keine Option mehr ersichtlich da alle entfernt wurden. Die Lösung ist jedoch nicht sehr schön und hat zusätzlich Fehlerpotential. Wenn als Beispiel eine Szene nur drei Optionen hat, geben wir trotzdem dem Befehl die vierte Option zu entfernen. Da diese nicht existiert, gibt es einen Fehler in der Konsole. 

> Kopiere die Zeile welche das `firstChild` entfernt ein fünftes Mal in deinem Code und schaue was in der Konsole passiert. Entferne die Zeile anschliessend wieder nachdem der Fehler angezeigt wurde.

Die Logik kann mit einem loop relativ elegant gelöst werden. Die ersten vier `console.log()` Befehle geben in der Konsole das Element aus, der fünfte gibt den Wert `null` aus. Der Wert `null` wird ausgegeben weil das Element `optionButtonsElement` kein child Element mehr hat, diese wurden alle entfernt. Diese fünf Ausgaben in der Konsole können auch als ein true / false statement interpretiert werden. Die ersten vier Ausgaben zeigen ein ELement an, was bedeuted es ist `true`. Die letzte Ausgabe hat kein Element mehr und der Wert `null` wird ausgegeben und dieser wird als `false` interpretiert. 

<br>

**Kurzer Exkurs while loop**

Mit der Funktion `forEach()` wurde bereits ein loop gezeigt, jedoch gibt es noch weitere Möglichkeiten einen loop zu definieren. In diesem Beispiel wird der `while()` loop angeschaut. Dieser kann sehr nützlich sein, sollte jedoch mit bedacht eingesetzt werden da er prädestiniert ist infinite loops im Code einzubauen was schlussendlich zu einem crash des Codes führt.

```js
while(statement) {
	console.log("...do something")
}
```

Der Aufbau des while loops sagt während (while) eine gewisse Kondition (statement) zutrifft, führe den Code innerhalb aus. Sobald die Kondition nicht mehr zutrifft beende den loop. Anhand eines kleines Beispieles soll das etwas genauer erklärt werden.

```js
let number = 0

while(number <= 5) {
	console.log(number)
	number++
}
```

> Übernimm das Beispiel und füge den Code unterhalb des letzten `console.log()` Befehls ein.

<br>

Das selbe Prinzip kann nun übernommen werden für die Optionen. Mit `while(optionButtonsElement.firstChild)` wird der code innerhalb des loops nur ausgeführt, solange das statement `true` ist. Ist das statement true bedeuted dies das sich ein child element innerhalb von `optionButtonsElement` befindet. Der auszuführende code soll das erste child element entfernen. Wurde das erste child element entfernt ist die erste iteration des loops beendet und das statement wird erneut geprüft. Hat `optionButtonsElement` noch immer ein child element, ist das statement erneut true und der code entfernt wieder das erste child element. Wurde in unserem Beispiel das vierte child element entfernt, ist das statement der fünften iteration `false`. Aus diesem Grund wird der while loop beendet und ist nun vorbereitet alle Optionen zu entfernen, egal wie viele vorhanden sind.  

```js
while(optionButtonsElement.firstChild) {
	optionButtonsElement.removeChild(optionButtonsElement.firstChild)
}
```

Der erste Teil für die Optionen ist mit dem entfernen der aktuellen Optionen erledigt, als zweites sollen nun die möglichen Optionen aus der aktuellen Szene angezeigt werden.

> Füge ein `console.log(sceneContent)` in deinem Code ein um erneut einen Einblick auf die aktuelle Szene zu erhalten.

Das aktuelle Szenen object verfügt über einen key mit dem Namen `options` welcher als value ein Array hat mit den zur verfügung stehenden Optionen der Szene. Mit einem `forEach()` loop auf den `options` kann auf jede einzelne Option der Szene zugegriffen werden.

```js
sceneContent.options.forEach(option => {
	console.log(option)
	console.log(option.optionText)
})
```

> Gib einmal den kompletten Inhalt einer Option aus mit `console.log(option)` und als zweites direkt den Text der Option mit `console.log(option.optionText)`.

Als nächster Schritt muss ein neues HTML Element erstellt werden mit `document.createElement()`. Innerhalb der Klammern wird mit `'button'` definiert, das es sich dabei um einen Button handelt. Der neue Button wird mit `const newButton =` direkt einer Variable zugewiesen. Dem Button wird dann mit `newButton.innerText = option.optionText` der Text aus der Option eingefügt. Mit `newButton.classList.add('btn')` wird dem Button eine spezifische CSS Klasse mit dem Namen `'btn'` geben für das aussehen. Am Schluss wird dem Element `optionButtonsElement` der neue Button als child element angefügt mit `optionButtonsElement.appendChild(newButton)`. Dies wird so oft gemacht wie die Szene entsprechende Optionen hat.

```js
sceneContent.options.forEach(option => {
	const newButton = document.createElement('button')

	newButton.innerText = option.optionText
	newButton.classList.add('btn')

	optionButtonsElement.appendChild(newButton)
})
```

> Für einen Test kannst du innerhalb des `scenes` Array einmal eine dritte Option der ersten Szene hinzufügen.

<br>

#### Klick event auf buttons

Die Optionen der Szene werden nun angezeigt, machen jedoch noch nicht viel beim einem Klick darauf. Damit die Buttons etwas ausführen bei einem Klick benötigen diese einen eventhandler der auf den Klick hört. 

```js
newButton.addEventListener('click', () => selectOption())
```

> Füge dem Button einen eventhandler an wie oben im Beispiel. Füge diesen Code unterhalb der Zeile ein wo du dem BUtton die CSS Klasse gibst.

Zu sehen im Beispiel unterhalb wurde bisher bei einem eventlistener immer als zweiten Parameter die Funktion definiert und direkt darin den Code der ausgeführt werden soll. Im Beispiel oben definieren wir nicht die Funktion als zweiten Parameter, wir geben mit `() => selectOption()` direkt die Funktion mit welche aufgerufen werden soll.

```js
// Beispiel mit dem Startknopf für das Spiel
startButton.addEventListener('click', function() {
	// Code der ausgeführt werden soll
	console.log("Ich wurde geklickt")
})
```

> Füge in der Definition der Funktion `selectOption()` ein `console.log("Ich wurde geklickt")` ein und klicke auf die Buttons.

Die Buttons ahben nun alle einen eventhandler und führen die Funktion `selectOption()` aus. In dieser FUnktion wird nun die Logik umgesetzt für einen Wechsel der Szene. Die Funktion erwartet einen Parameter mit der aktuellen Option damit im Code bkannt ist welche Option gewählt wurde. 

> Gib beim eventhandler der Funktion die aufgerufen werden soll noch die aktuelle Option als Parameter mit `() => selectOption(option)`. In der `selectOption()` Funktion gib die gewählte Option in der Konsole aus.

Der Parameter `option` ist ein object mit key / value pairs. Aktuell haben beide Optionen den Text, jedoch nur eine Option den key `nextScene`. 

> Gib der ersten Option als `nextScene` den value `1` und der zweiten Option den value `2`. 

Wenn du nun die erste Option wählst und weiter schlummerst, bleibst du in der ersten Szene stecken bis du dich dazu entscheidest aufzustehen mit der zweiten Option. Wird die zweite Option gewählt, soll die zweite Szene geladen werden. Erinnerst du dich noch an den Anfang, wo in der `startGame()` Funktion eine Funktion mit dem Namen `showSceneContent()` aufgerufen wird um das ganze Spiel anzustossen? Da wurde als Parameter fix die Nummer `1` mitgegeben, weil das Spiel immer mit der ersten Szene starten soll. Innerhalb der Funktion `showSceneContent()` wurde geschaut welche Szene soll dargestellt werden. Dann wurde der Inhalt der entsprechenden Szene im HTML angezeigt und neue HTML Elemente erstellt für die Buttons. Zum Schluss wurde den Buttons noch ein eventhandler gegeben damit diese geklickt werden können. Die selbe Funktion wird nun wieder aufgerufen, nur mit dem Unterschied das nicht harddcodiert die erste Szene als Parameter mitgegeben wird. Für den Parameter der Szene steht nun der Wert von `nextScene` innerhalb des `option` objects. 

```js
const selectOption = (option) => {
	showSceneContent(option.nextScene)
}
```

> Rufe die Funktion `showSceneContent()` innerhalb der Funktion `selectOption()` auf und gib als Paramter die nächste Szene mit, welche in der Option definiert ist.

Mit dieser letzten Zeile an Code, ist der komplette Zyklus des Spiels einmal definiert worden. Das Spiel geht für den Rest des Projektes - bis auf eine kleine Ausnahme - immer wieder durch diese beiden Funktionen!

<br>

#### Bilderwechsel in Szenen

> Nimm die Beschreibung und die Optionen für die zweite Szene aus dem file `scenes.md` und füge diese deiner zweiten Szene an im `scenes` Array. Als `nextScene` gibst du der ersten Option die Nummer `3`, der zweiten Option die Nummer `4`.

Der Wechsel der Szenen funktioniert bisher ganz gut, lediglich das angezeigte Bild bleibt das selbe wie im `index.html` file hinterlegt ist. Natürlich sollen sich auch die Bilder der Szene entsprechend dynamisch ändern. Dafür benötigen die Szenen ein neues key / value pair mit dem Pfad zum Bild.

```js
{
	id: 1,
	sceneDescription: playerName + ", du erwachst in einem verträumten Wald, riechst die Blumen und hörst die Vögel zwitschern.",
	image: "img/image01.jpg",
	options: [
		{
			optionText: "Du geniesst den Moment, schliesst deine Augen wieder und schlummerst weiter.",
			nextScene: 1
		},
		{
			optionText: "Du stehst auf, streckst dich einmal durch und gehst richtung Süden.",
			nextScene: 2
		}
	]	
}
```

> Füge der ersten Szene den key `image` hinzu und als value den Pfad zum Bild. Mache das selbe für die zweite Szene und passe den Bildnamen an zu "image02.jpg". 

Im `index.html` file wurde dem `<img>` tag als Attribute der Pfad zum Bild mitgegeben. Das wurde im Attribute `src=""` gemacht und genau dieses Attribut muss nun dynamisch mit dem value von `image` abgefüllt werden. 

```js
imageElement.src = sceneContent.image
```

> Füge den Code direkt vor den while loop für die Optionen ein, nach der Zeile wo die Beschreibung der Szene gesetzt wird.

<br>

#### Das Inventar des Spielers

> Füge eine neue Szene deinem `scenes` Array hinzu mit der id `3`. Nimm die Beschreibung und die Optionen für die dritte Szene aus dem file `scenes.md` und füge diese hinzu. Als `nextScene` gibst du allen drei Option die Nummer `4`. Als letztes passe den Bildnamen an zu "image03.jpg".

Wählt der Spieler die dritte Option und packt einen Stein in seinen Beutel, muss dieser im Verlauf des Spiels wieder verfügbar sein. Dafür verwenden wir ein object das als Inventar dient. Darin werden items verwaltet und mit einem boolean definiert ob der Spieler das item bei sich trägt oder nicht. 

> Definiere vor der `startGame()` Funktion ein leeres object mit `let inventory = {}`. Innerhalb der `startGame()` Funktion soll der Inhalt des Inventars definiert werden wie im Beispiel unten.

```js
let inventory = {}

const startGame = () => {
    inventory = {
        diamond: false
    }

	fillSceneData()
    showSceneContent(1)
}
```

Aktuell ist bekannt, das sich im Inventar ein Diamant aufhalten kann. Zu Beginn des Spiels ist das Inventar leer, weshalb der Wert von `diamond` initial auf `false` gesetzt wird. Wenn der Spieler sich nun entschiedet die Option zu wählen den Stein einzupacken, muss dies bei der entsprechenden Option hinterlegt sein.

```js
{
	optionText: "Du entfernst von einer Pflanze den Stein...",
	nextScene: 4,
	inventoryWithThisOption: { 
		diamond: true
	}
}
```

> Füge der Option den key `inventoryWithThisOption` hinzu und als value ein object wo `diamond` den Wert `true` hat.

Wenn der Spieler nun diese Option auswählt, hat das `option` object mit dem gearbeitet wird, ein neues key / value pair das den neuen Stand des Inventars wiederspiegelt. Eine Sache fehlt jedoch noch, denn aktuell ist lediglich die Information vorhanden das sich das Inventar geändert hat. Mit der Information selber wird noch nicht weiter gearbeitet. Das wird in der Funktion `selectOption()` gemacht, wo der Code die ausgewählte Option erhält. Bevor mit der Zeile `showSceneContent(option.nextScene)` die nächste Szene geladen wird mit den Informationen aus der Option, soll noch das Inventar updated werden. Ob das Inventar updated werden soll, kann wieder mit dem selben Prinzip umgesetzt werden, wie bei dem while loop und dem löschen der alten Buttons. Diesmal einfach in einem if statement, wie unten im Beispiel zu sehen ist.

```js
if(option.inventoryWithThisOption) {
	// update inventory
}
```

Alle bisherigen Optionen haben keinen key mit dem Namen `inventoryWithThisOption`. Prüft der Code dieses statement, erhält er in diesem Fall `undefined`, weil es diesen key nicht gibt. Das wiederum wird wie bei `null` als `false` interpretiert. Sobald aber eine Option gewählt wird, welche den key hat, wird der entsprechende Wert ausgegeben. Das wird als `true` interpretiert und teilt mit, das es ein update am Inventar gibt.

```js
const selectOption = (option) => {
	if(option.inventoryWithThisOption) {
		inventory = option.inventoryWithThisOption
	}

	console.log(inventory)
	showSceneContent(option.nextScene)
}
```

> Erweitere das if statement in der Funktion um das aktuelle Inventar mit dem neuen Wert zu überschreiben und gib das Inventar auf die Konsole aus. Keine Sorgen: Du wirst nach der letzten Option in einen Fehler in der Konsole laufen, weil es noch keine neuen Szene gibt.

<br>

#### Bedingte Szenen anzeigen

> Füge eine neue Szene deinem `scenes` Array hinzu mit der id `4`. Nimm die Beschreibung und die Optionen für die vierte Szene aus dem file `scenes.md` und füge diese hinzu. Als `nextScene` gibst du allen Option die Nummer `5`. Als letztes passe den Bildnamen an zu "image04.jpg".

Für die zweite Option, den Tauschhandel, muss erneut das Inventar updated werden. Nach dieser Option ist der Spieler wieder nichtmehr im Bestitz des Diamanten, jedoch neu hat er ein Schwert.

```js
let inventory = {}

const startGame = () => {
    inventory = {
        diamond: false,
		sword: false
    }

	fillSceneData()
    showSceneContent(1)
}
```

> Ereitere das Inventar mit dem Schwert und setze es initial auf `false.`. Ergänze auch in der Szene 3 die Option, sprich das Inventar mit `sword: false`. In der vierten Szene setzt du im Inventar den Diamanten wieder auf `false` und neu das Schwert auf `true`.

Nun kann der Spieler seinen Diamanten gegen ein Schwert tauschen beim Händler. Was aber, wenn der Spieler den Stein nicht eingepackt hat oder den rechten Pfad genommen hat? Trifft dies zu, sollte lediglich die Option zur Verfügung stehen das der Spieler weiter zieht. Um das umzusetzen, benötigt jede Option eine Information ob sie angezeigt werden darf oder nicht. Umgesetzt wird dies mit einer Funktion innerhalb des objects der Option, auch bekannt unter einer Methode. Diese kann aufgerufen werden und gibt als antwort ob die Option angezeigt werden soll oder nicht.

> Gehe zur ersten Szene und erweitere die erste Option mit dem key `showThisOption` und als value trägst du die Funktion `() => true` ein wie unten im Beispiel. Für die zweite Option machst du das selbe, nur anstelle von `true` schreibst du `false`.

```js
{
	optionText: "Du geniesst den Moment und schliesst deine Augen wieder",
	showThisOption: () => true,
	nextScene: 1
}
```

Wenn nun im Code die Funktion `option.showThisOption()` aufgerufen wird, gibt diese den Wert `true` oder `false` zurück. Es ist eine verkürzte Schreibweise, welche in einer Definition einer Funktion ausgeschreiben so aussehen würde wie im Beispiel unten.

```js
const showThisOption = () => {
	return true
}
```

> Gehe in die Funktion `showSceneContent()` bis zu der Zeile im Code wo der loop über die Optionen gemacht wird mit `sceneContent.options.forEach()`. Erstelle auf der ersten Zeile innerhalb des loops ein if statement wie in dem Beispiel unten, welches die Funktion `showThisOption()` der aktuellen Option aufruft. 

```js
if(option.showThisOption()) {
	console.log("show this option")
}
```

> Verschiebe den Rest des codes innerhalb des loops in das if statement wie unten im Beispiel.

```js
if(option.showThisOption()) {
	const newButton = document.createElement('button')

	newButton.innerText = option.optionText
	newButton.classList.add('btn')
	newButton.addEventListener('click', () => selectOption(option))

	optionButtonsElement.appendChild(newButton)
}
```

Bisher wurden alle möglichen Optionen einer Szene genommen, daraus Buttons erstellt um dem Spieler angezeigt. Mit dieser neuen Logik wird zuerst überprüft ob die Option überhaupt angezeigt werden soll, und wenn nicht wird diese erst gar nicht angezeigt. Das ist gut zu sehen da die erste Szene aktuell nur noch eine Option anzeigt. Der Grund dafür ist das `showThisOption()` der zweiten Option den Wert `false` zurück gibt.

> Ändere die Funktion der zweiten Option das diese auch `true` zurück gibt. Kopiere diese Funktion in jede Option welche bisher erstellt wurde und lasse überall den Wert `true` zurück geben. Wurde das gemacht sollte wieder alles so angezeigt werden wie vorher.

Bei den Optionen, welche an eine gewisse Bedingung geknüpft sind, kann nun der Wert eines items aus dem Inventar benutzt werden. Hat der Spieler den Diamanten im Inventar, so ist dessen Wert `true`. Ist er nicht im Inventar hat er den Wert `false`. Anstelle von direkt einen `true` oder `false` Wert in der Funktion `showThisOption()` zurückzugeben, geben wir den Wert des entsprechenden items im Inventar zurück.

```js
{
	optionText: "Du betrittst den Laden...",
	showThisOption: () => inventory.diamond,
	nextScene: 5,
	inventoryWithThisOption: { 
		diamond: false,
		sword: true
	}
}
```

> Erweitere in der Option wo du das Schwert tauschen kannst die Funktion zu `showThisOption: () => inventory.diamond`. 

Hat der Spieler nun den Diamanten im Inventar, so wird die Option angezeigt. Hat er keinen Diamanten im Inventar wir die Option erst gar nicht angezeigt.

<br>

#### Alternativer Weg zum Spielende

> Füge eine neue Szene deinem `scenes` Array hinzu mit der id `5`. Nimm die Beschreibung und die Optionen für die fünften Szene aus dem file `scenes.md` und füge diese hinzu. Als `nextScene` gibst du allen Option die Nummer `6`. Als letztes passe den Bildnamen an zu "image05.jpg".

> Für die Option mit dem Schwert ziehen, prüfe ob das Schwert im Inventar ist und gib diese Option nur frei, wenn der Spieler auch ein Schwert im Inventar hat.

In dieser Szene wollen wir einen alternativen Weg definieren, wie das Spiel "gewonnen" werden kann und der Kampf gegen den Drachen komplett umgangen wird. Die Optionen, bei denen der Spieler das Schloss betritt, ist der normale Weg durchs Spiel und die nächste Szene soll die Nummer `6` sein. Der alternative Weg bildet sich bei der Option wo der Spieler auf der Lichtung rastet. Der Spieler ist so erschöpft, das er bereits nach kurzer Zeit einschläft. Da es sich um einen "Traumwächter Drachen" handelt, besucht dieser den Spieler in seinem Traum während er schläft. Der Spieler ist in keinster Weise dem Drachen gewachsen in der Traumwelt, besonders weil dieser hier Zugriff auf Magie hat. Der Drache verzaubert den Spieler mit seinem Immerschlaf Zauber, worauf der Spieler im ewigen Tiefschlaf ist bist zu seinem Tode. Der Spieler hat also mit dieser Option das Spiel verloren und muss von vorne starten. Es sei denn, der Spieler hat seinen Diamanten nicht gegen das Schwert getauscht. Hat er den Diamanten noch immer bei sich, reflektiert dieser den Zauber und steckt den Drachen in den ewigen Tiefschlaf. Damit hat der Spieler gewonnen und kommt als nächstes direkt zur "Spiel gewonnen" Szene. 

> Füge eine neue Szene deinem `scenes` Array hinzu mit der id `20`. Nimm die Beschreibung und die Optionen für die Szene 20 aus dem file `scenes.md` und füge diese hinzu. Als `nextScene` gibst du beiden Option temporär die Nummer `0`. Passe die zweite Option so an das diese nur angezeigt wird, wenn der Spieler den Diamanten im Inventar hat. Als letztes passe den Bildnamen an zu "image20.jpg".

> In der Szene mit der Nummer `5`, passe die nächste Szene der letzen Option an und gib dieser die Nummer `20`.

Die Nummer der Szene wurde absichtlich auf `20` gesetzt, damit dieser alternative Weg nicht zwischen den Szenen des regulären Weges steht. Der alternative Weg ist somit umgesetzt, die Szenen zu deren die beiden Optionen führen, werden später umgesetzt. Wir kommen also nochmals zu dieser Szene zurück zu einem späteren Zeitpunkt.

<br>

#### Kampf gegen den Drachen

Kümmern wir uns wieder um den regulären Weg und dem Kampf gegen den Drachen. Dafür benötigen wir zwei Szenen: Einmal eine Szene kurz vor dem Kampf, wo der Spieler die Option hat in den Kampf zu gehen oder den Rückzug anzusetzen. Die zweite Szene ist der Kampf selber, in dem anschliessend entschieden wird ob der Drache besiegt wurde oder der Spieler.

> Füge eine neue Szene deinem `scenes` Array hinzu mit der id `6`. Nimm die Beschreibung und die Optionen für die Szene 6 aus dem file `scenes.md` und füge diese hinzu. Als `nextScene` gibst du allen Option die Nummer `7`. Passe die Option mit dem Schwert so an, das diese nur angezeigt wird, wenn der Spieler das Schwert im Inventar hat. Als letztes passe den Bildnamen an zu "image06.jpg".

> Füge eine neue Szene deinem `scenes` Array hinzu mit der id `7`. Nimm die Beschreibung und die Optionen für die Szene 7 aus dem file `scenes.md` und füge diese hinzu. Als `nextScene` gibst du allen Option die Nummer `0`. Passe die Option mit dem Schwert so an, das diese nur angezeigt wird, wenn der Spieler das Schwert im Inventar hat. Behalte den Bildnamen für diese Szene bei "image06.jpg".

Für den Kampf gegen den Drachen lassen wir zufällige Nummern entschieden ob der Spieler trifft oder nicht, sprich ob er gewinnt oder nicht. Dabei soll natürlich die Verwendung des Schwertes die Chancen für den Spieler etwas erhöhen. 

> Erstelle eine neue Funktion mit dem Namen `battleWithDragon` welche eine Ausgabe auf die Konsole macht mit `console.log("Kampf gegen den Drachen")`. Erstelle diese nach der `selectOption` Funktion und noch bevor der `fillSceneData`.

```js
const battleWithDragon = () => {
	console.log("Kampf gegen den Drachen")
}
```

> Aus Testzwecken rufe die Funktion innerhalb von `startGame` auf. Somit musst du nicht jedesmal das komplette Spiel durchspielen um eine Änderung zu sehen. Sobald du das Spiel startest siehst du in der Konsole was dein Code macht. 

```js
const startGame = () => {
        inventory = {
            diamond: false,
            sword: false
        }
        
		battleWithDragon()

        fillSceneData()
        showSceneContent(1)
    }
```

Für den Drachen und den Spieler wird jeweils eine zufällige Zahl generiert. Ist die Zahl des Spielers grösser oder gleich wie die Zahl des Drachens, so gewinnt der Spieler. Trifft dies nicht zu so gewinnt der Drache. Mit `Math.floor(Math.random() * 10) + 1` wird eine Zufällige Zahl zwischen 1 - 10 generiert. 

> Erstelle eine Variable mit dem Namen `dragonAttack` und eine mit dem Namen `playerAttack`. Weise den beiden Variablen die zufällige Nummer zu und gib die Resultate in der Konsole aus.

```js
const battleWithDragon = () => {
	console.log("Kampf gegen den Drachen")

	let dragonAttack = Math.floor(Math.random() * 10) + 1
	let playerAttack = Math.floor(Math.random() * 10) + 1

	console.log("Der Drache würfelt: " + dragonAttack)
	console.log("Der Spieler würfelt: " + playerAttack)
}
```

> Mache ein if statement vor den Ausgaben in die Konsole, das prüft ob das Schwert im Inventar ist. Wenn dies zutrifft addiere die zufälligen Nummer des Spielers mit 2 als Bonus. 

```js
const battleWithDragon = () => {
	console.log("Kampf gegen den Drachen")

	let dragonAttack = Math.floor(Math.random() * 10) + 1
	let playerAttack = Math.floor(Math.random() * 10) + 1

	if(inventory.sword) {
		playerAttack += 2
		console.log("player attacks with sword")
	}

	console.log("Der Drache würfelt: " + dragonAttack)
	console.log("Der Spieler würfelt: " + playerAttack)
}
```

> Für einen Test kannst du in der `startGame` Funktion das `inventory` object anpassen und den Wert des Schwertes auf `true` setzen. Setze nach dem Test den Wert wieder zurück auf `false`.

> Erweitere die Funktion mit einem weiteren if statement, welches prüft ob der Spieler gewonnen hat oder der Drache. Gib entsprechend das Resultat in der Konsole aus.

```js
const battleWithDragon = () => {
	console.log("Kampf gegen den Drachen")

	let dragonAttack = Math.floor(Math.random() * 10) + 1
	let playerAttack = Math.floor(Math.random() * 10) + 1

	if(inventory.sword) {
		playerAttack += 2
	}

	console.log("Der Drache würfelt: " + dragonAttack)
	console.log("Der Spieler würfelt: " + playerAttack)

	if(playerAttack >= dragonAttack) {
		console.log("Der Spieler hat den Drachen besiegt")
	} else {
		console.log("Der Drache hat gewonnen!")
	}
}
```

Die Funktion für den Kampf gegen den Drachen ist soweit umgesetzt, das ein Gewinner dabei raus kommt. Nun muss die Logik noch so angepasst werden, das die Funktion `battleWithDragon` im richtigen Moment aufgerufen wird. Als zweiten Schritt muss die Information wer gewonnen hat noch ins Spiel miteinfliessen.

Gestartet wird mit dem ersten Teil, dem Abfangen wann der Kampf stattfindet und die Funktion ausgeführt werden muss. Dafür haben wir bereits die Optionen der Szene 7 wo der Kampf statt findet vorbereitet. Beide Optionen in der Kampfszene haben als nächste Szene die Nummer `0`, welche es jedoch nicht gibt. Die Nummer kann in der `selectOption` abgefangen werden und mit einem if statement wird gesteuert was ausgeführt werden soll.

> Schreibe ein if statement nach der Logik für das Inventar innerhalb der `selectOption` Funktion. Ist der Wert von `nextScene` die Nummer `0` so soll die Funktion `battleWithDragon` aufgerufen werden. Ist der Wert nicht `0`, dann soll die die Funktion `showSceneContent()` wie bisher aufgerufen werden.

```js
const selectOption = (option) => {
	if(option.inventoryWithThisOption) {
		inventory = option.inventoryWithThisOption
	}

	if(option.nextScene === 0) {
		battleWithDragon()
	} else {
		showSceneContent(option.nextScene)
	}        
}
```

Wenn alles richtig gemacht wurde, sollte alles weiterhin so funktionieren wie bisher. In der Kampfszene wird anschliessend der Sieger in die Konsole ausgegeben.

In der Kampfszene entscheidet sich, ob der Spieler gewinnt oder nicht. Für beide Situationen gibt es eine letzte Szene, welche im nächsten Abschnitt gemacht wird. Was aktuell aber noch fehlt ist die Logik, wie das Spiel nach der Kampfszene zur letzten Szene wechselt. Am Grundprinzip wie die gewünschte Szene angezeigt wird ändert sich nichts und wird weiterhin über die Funktion `showSceneContent()` gehandhabt. Die Funktion `showSceneContent()` benötigt als Parameter die `sceneId` in Form einer Nummer, die besagt welche Szene als nächstes angezeigt werden soll. Somit benötigen wir in der Funktion `selectOption`, im if statement wo die Funktion für den Kampf aufgerufen wird, die entsprechende Nummer der Szene welche aufgerufen werden soll. Haben wir diese Nummer, so kann die Funktion `showSceneContent()` aufgerufen werden und als Parameter die finale `sceneId` mitgegeben werden. Die "verloren" Szene wird die ID `9` haben und die "gewonnen" Szene die ID `10`.

> Erweitere den Code in der `battleWithDragon` Funktion, innerhalb des if statements welches den Sieger entscheidet. Nach der Ausgabe in die Konsole, sende die entsprechende Nummer der Szene zurück.

```js
if(playerAttack >= dragonAttack) {
	console.log("Der Spieler hat den Drachen besiegt")
	return 10
} else {
	console.log("Der Drache hat gewonnen!")
	return 9
}
```

Wenn die Funktion `battleWithDragon` nun in eine Variable definiert wird, ruft dies automatisch die Funktion auf. Bisher haben Funktionen in diesem Projekt immer nur Code ausgeführt. Mit dem `return` statement wird zum ersten Mal auch ein Wert zurückgegeben. Dieser Wert wird anschliessend in der Variable gespeichert und kann abgerufen werden.

> Erweitere den Code in der `selectOption` Funktion, innerhalb des if statements welches die `battleWithDragon` Funktion aufruft. Erstelle eine neue Variable mit dem Namen `battleResult` und definiere darin den Aufruf der Funktion `battleWithDragon`. Anschliessend rufst du die Funktion `showSceneContent` auf und als Parameter gibst du den Wert der Variable `battleResult` mit.

```js
if(option.nextScene === 0) {
	let battleResult = battleWithDragon()
	showSceneContent(battleResult)
} else {
	showSceneContent(option.nextScene)
}   
```

<br>

#### Spiel gewonnen / verloren Szene

> Füge eine neue Szene deinem `scenes` Array hinzu mit der id `9`. Nimm die Beschreibung und die Optionen für die Szene 9 aus dem file `scenes.md` und füge diese hinzu. Als `nextScene` gibst du der Option die Nummer `99`. Als letztes passe den Bildnamen an zu "image09.jpg".

> Füge eine neue Szene deinem `scenes` Array hinzu mit der id `10`. Nimm die Beschreibung und die Optionen für die Szene 10 aus dem file `scenes.md` und füge diese hinzu. Als `nextScene` gibst du der Option die Nummer `99`. Als letztes passe den Bildnamen an zu "image10.jpg".

Die Option der beiden Szenen zeigt auf die Nummer `99` um das Spiel neu zu starten. Gleich wie die Nummer `0` abgefangen wird für die Funktion mit dem Kampf kann nun zusätzlich noch die Nummer `99` abgefangen werden um das Spiel neu zu starten. Dafür wir der Befehl `window.location.reload()` verwendet welcher den Browser zum neuen laden der Seite zwingt. Damit ist der Spieler wieder am Anfang des Spiels, das Inventar ist zurückgesetzt und ein neues Abenteuer kann gestartet werden.

> Erweitere das if statement in der `selectOption` Funktion, welches die `battleWithDragon` Funktion aufruft. Schreibe einen `elseif` Block und prüfe ob die Nummer `99` ist. Wenn dies zutrifft so füre den Code `window.location.reload()` aus.

```js
if(option.nextScene === 0) {
	let battleResult = battleWithDragon()
	showSceneContent(battleResult)
} else if(option.nextScene === 99) {
	window.location.reload()
} 
else {
	showSceneContent(option.nextScene)
}   
```

Nun fehlen noch zwei kleine Details und das Spiel ist beendet. In der Szene 6 ist die letzte Option das der Spieler davon rennt. Sind wir mal ehrlich, niemand kann einem Drachen davon rennen! Die Option soll auch in einer "verloren" Szene enden, jedoch können wir nicht die bereits vorhanden verwenden weil der Text nicht ganz passt.

> In der Szene 6 ändere in der letzen Option den Wert von `nextScene` zu der Nummer `8`. 

> Füge eine neue Szene deinem `scenes` Array hinzu mit der id `8`. Nimm die Beschreibung und die Optionen für die Szene 8 aus dem file `scenes.md` und füge diese hinzu. Als `nextScene` gibst du der Option die Nummer `99`. Als letztes passe den Bildnamen an zu "image09.jpg". 

> In der Szene 20, passe in der ersten Option den Wert von `nextScene` an und gib einen Wert von `99` um das Spiel neu zu starten. Die zweite Option soll zur Szene mit der Nummer `10` führen und das Spiel direkt gewinnen. 