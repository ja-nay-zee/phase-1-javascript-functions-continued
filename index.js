function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun();
saturdayFun("bathe my dog"); // passes with or without this 


function mondayWork(location = "go to the office"){
    return `This Monday, I will ${location}.`
}

mondayWork();
mondayWork("work from home");

// function wrapAdjective(mark = "*") {
//     (adj="special") 
//     return `You are ${mark} ${description} ${mark}!`
// } 

// wrapAdjective();
// wrapAdjective("||")("a dedicated programmer");

function wrapAdjective(mark = "*") {
    return function(adj = "special") {
        return `You are ${mark}${adj}${mark}!`
    }
}

const myWrapFunct = wrapAdjective()
myWrapFunct("a hard worker")


// wrapAdjective("||")("a dedicated programmer!");

// let wrapAdjective = function (mark = "*") {
//     return function(adj="special") {
//         reutrn `You are ${mark} ${adj} ${mark}!`
//     }
// }