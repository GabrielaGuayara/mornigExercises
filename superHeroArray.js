let characters = [
    {name:"Joker", type: "Villain"},
    {name:"Superman", type: "Superhero"},
    {name:"Batman", type: "Superhero"},
    {name:"Spiderman", type: "Superhero"},
]

const Hulk = { name: "Hulk", type: "Superhero"}
characters.push(Hulk)
const Venom = { name: "Hulk", type: "Villain"}
characters.push(Venom)
const Deadpool = { name: "Hulk", type: "Superhero"}
characters.push(Deadpool)
const Monarch = { name: "Monarch", type: "Villain"}
characters.push(Monarch)
const IronMain = { name: "Blackwindow", type: "Superhero"}
characters.push(IronMain)
const CaptainAmerica = { name: "CaptainAmerica", type: "Superhero"}
characters.push(CaptainAmerica)
const Darkseid = { name: "Blackwindow", type: "Villain"}
characters.push(Darkseid)
const Blackwindow = { name: "Blackwindow", type: "Superhero"}
characters.push(Blackwindow)
const Magneto = { name: "Magneto", type: "Superhero"}
characters.push(Magneto)
const Deathstroke = { name: "DeathStroke", type: "Villain"}
characters.push(Deathstroke)
const DoctorStrange = { name: "DoctorStrange", type: "Superhero"}
characters.push(DoctorStrange)
const Thanos = { name: "Thanos", type: "Villain"}
characters.push(Thanos)
const Thor = { name: "Thor", type: "Superhero"}
characters.push(Thor)
const Carnage = { name: "Carnage", type: "Villain"}
characters.push(Carnage)
const Ares= { name: "Ares", type: "Villain"}
characters.push(Blackwindow)
const Rorschach = { name: "Rorschach", type: "Superhero"}
characters.push(Rorschach)

// console.log(character.length)

function sortVilainSuperHeros(characters){

    let charactersdic = {

        Superhero: [],
        Villian: [],

    }

    for(let i = 0; i < characters.length; i++ ){

        if(characters.length === 0){
            return;
        }

        let hero = characters[i].type;
        let characterName = characters[i].name;

        if(hero === "Superhero")
                charactersdic.Superhero.push(characterName)
            else
                charactersdic.Villian.push(characterName)
    }


    return charactersdic;
}

console.log(sortVilainSuperHeros(characters))