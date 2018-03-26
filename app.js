/**** Lesson: this */ 

var timeline = {
    birthYear: 1980,
    todayYear: 2018,
    gradYear: 1998,
    gradAge: function(){
        return this.gradYear - 1980;
    },
    myAge: function(){
        return this.todayYear - this.birthYear;
    }
}

console.log(timeline.myAge());

//Challenge: Create a function expression that ---return--- your favorite greeting.

var greeting = function(){
    return "My favorite color is brown";
}

console.log(greeting());