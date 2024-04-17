//Create Power puff girl objets
function PowerpuffGirl (name, color, superpower){
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isleader = false

    this.displayInfo = function(){
        console.log(`Powerpuff Girl information 
        Name : ${this.name}
        Color : ${this.color}
        Superpower: ${this.superpower}
        ${this.isleader ? 'leader: YES': 'Leader: Now'}
        `)
    }
    this.becomeLeader = function(){
        this.isleader= true
        console.log(`${this.name} has become the leader of the Power puff girl`)
    }
}
const blossom = new PowerpuffGirl('Blossom', 'Blue', 'Ice')
const cloei = new PowerpuffGirl('Cloei', 'Red', 'five')

blossom.displayInfo()
cloei.displayInfo()

blossom.becomeLeader()
blossom.displayInfo()
cloei.displayInfo()
