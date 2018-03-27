/**** Lesson: Classes */ 

class Haiti{
    constructor(){
        this.capital = "Port-au-Prince";
        this.militia = "Ton Ton Macout";
        this.leader = "Pa Pa Doc";
    }
    getCapital(){
        return this.capital;
    }
    getMilitia(){
        return this.militia;
    }
}

var haiti = new Haiti;
console.log(haiti.getMilitia());

//Challenge: create a function that subtract two numbers. One of the numbers must be a param. 

function subtract(year){
    return year - 1980;
}
console.log(subtract(1998));