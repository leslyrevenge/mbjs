/**** Lesson: Function Expression */

//Challenge: create an object, timeline, that have key value for the following: birth year, today year, high school grad year. 

var timeline = {
    birthYear: 1980,
    todayYear: 2018,
    gradYear: 1998,
    gradAge: function(){
        return 1998 - 1980;
    }
}

console.log(timeline.gradAge());