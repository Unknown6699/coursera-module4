// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.

(function() {
  const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]
  for (let i = 0; i < names.length; i++) {
    let firstLetter = names[i].charAt(0).toLowerCase()
    if (firstLetter === "j") {byeSpeaker.speak(names[i])} else {helloSpeaker.speak(names[i])}
  }
})()