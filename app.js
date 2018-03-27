/**** Lesson: Extends (inherritance) */ 

class Haiti{
    constructor(){
        this.capital = "Port-au-Prince";
        this.militia = "Ton Ton Macout";
        this.leader = "Pa Pa Doc";
        this.iYear = 1804
    }
    getCapital(){
        return this.capital;
    }
    getMilitia(){
        return this.militia;
    }
}

class Independence extends Haiti{
    getIndependenceSince(){
        return 2018 - this.iYear;
    }
}
var haiti = new Haiti;
console.log(haiti.getMilitia());

var haitiIndependence = new Independence;
console.log(haitiIndependence.getIndependenceSince());

//Challenge: use params intead of hard codinging year.
