class Tamagochi {
constructor(name, gender, family, birthDate) {
    this.name = name
    this.gender = "male"
    this.family = "Egg"
    this.birthDate = new Date()

    this.hunger = 0
    this.happiness = 0
    this.discipline = 0
    this.age = 0
    this.numberOfPoops = 0
    this.weightGrams = 1000

    this.isIll = false
    this.isHatched = false
    this.isPottyTrained = false

    this.lifeCycles = "Baby"
    this.currentLifeCycle = 0
  }
  hatch(){
    console.log("Our egg is hatched!")
    this.isHatched = true
    // makes 
  }
  feed(food){
    // meal: decreases hunger meter
    if (food === "Meal"){
    this.hunger = this.hunger - 1
    console.log("Thanks for the meal!")
    this.weightGrams = this.weightGrams + 200
    }
    // snack decreases hunger meter, increases the happinnes meter, but might make tamagochi ill
    else if (food === "Snack"){
    this.happiness = this.happiness + 1
    console.log("Thanks for the snack!")
    const randomNumber = Math.floor(Math.random()* 3)
    if (randomNumber === 0){
      this.isIll = true
      console.log(randomNumber)}
    }
  }
  poop(){
    // increase numberOfPoops, increase hunger meter
    this.numberOfPoops = this.numberOfPoops + 1
    this.hunger = this.hunger + 1
  }
  toilet(){
    // makes numberOfPoops go down, set isPottyTrained to true
    this.numberOfPoops = 0
    
    const randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 1){
      this.isPottyTrained = true 
      console.log("Poop")
    } 
  }
  grow(){
    // change lifeCycle property
    if (this.lifeCycles === 'Baby') {
      this.lifeCycles = 'Child'
      console.log("Child")
    } else if (this.lifeCycles === 'Child'){
      this.lifeCycles = 'Teen'
      console.log("Teen")
      } else if (this.lifeCycles === 'Teen'){
        this.lifeCycles = 'Adult'
        console.log("Adult")
        } else if (this.lifeCycles === 'Adult'){
          this.lifeCycles = 'Senior'
          console.log("Senior")
        } else if (this.lifeCycles === 'Senior'){
          console.log("Senior")
        }
      }
  scold(){
    // increases discipline meter, but happiness meter goes down
    console.log(`Bad tamagochi!`)
    this.discipline = this.discipline + 1
    this.happiness = this.happiness - 1
  }
  play(side){
    // player and tamagochi will pick left or right, if both guesses match, the happiness meter increases
    const leftOrRight = ["Left", "Right"]
    const randomNumber = Math.floor(Math.random() * 2)  // it picks a number

      if (side === leftOrRight[randomNumber]){  // [randomNumber] is the index (0 to 1, or left(0) and right(1)
        this.happiness = this.happiness + 1
        console.log("You guessed right!")
      }
    }
  }

const pet = new Tamagochi("Gudetama", "male", "Egg", new Date())

console.log(pet)
pet.hatch()
console.log(pet)
pet.play("Left")
pet.toilet()
console.log(pet)
// feed function: call either meal or snack
pet.grow()
pet.grow()
pet.grow()
pet.feed("Snack")
pet.feed("Meal")
console.log(pet)