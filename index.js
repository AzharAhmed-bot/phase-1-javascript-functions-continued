// code your solution here
function saturdayFun(activity='roller-skate'){
   
    return `This Saturday, I want to ${activity}!` ;
}
console.log(saturdayFun());
console.log(saturdayFun("Bath my dog!"));


let mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork());
console.log(mondayWork("work from home."));

function wrapAdjective(adjective="*"){
    
    return function(msg="a hard worker"){
        return `You are ${adjective}${msg}${adjective}!` ;
    }
}
console.log(wrapAdjective("||")("a dedicated programmer"));