const car = {
	brand: "Toyota",
	color: "Red",
	year: 2012,
	secondHand: true,
    honk: function() {
        console.log("My " + this.brand + " makes Whoop Whoop!")
    }
} 

console.log(car)
console.log(car.color)

// Ausführen einer Methode eines Objects
car.honk()