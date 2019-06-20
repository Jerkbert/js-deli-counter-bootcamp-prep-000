
var newGuestNumber = 46;

function takeANumber(currentLine, newGuest){
  currentLine.push(newGuest); //adds newGuest to end of currentLine array
  return `Welcome, ${newGuest}. You are number ${currentLine.length} in line.`; //currentLine.length counts index 0 as 1 so this will give the correct place in line. 
}

function takeANumberTwo(currentLine){
  newGuestNumber++;
  currentLine.push(newGuestNumber);
  return `Welcome, your number is ${newGuestNumber}. You are number ${currentLine.length} in line.`;
}

function nowServing(deliLine){
  var currentServe = deliLine.shift(); //shifts index 0 off of the deliLine
  if (deliLine.length===0){
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${currentServe}.`; //returns the index that was shifted off
  }
}

function currentLine(deliLine){
  var i = 0;
  var line = []; //creating an empty array for the line position
  while (i < deliLine.length){
    line.push(` ${i+1}. ${deliLine[i]}`); 
    i++; //iterates the line position (i+1) as well as the index of deliLine. 
  }
  if (deliLine.length === 0){
    return `The line is currently empty.`;
  } else {
    return `The line is currently:${line}`;
  }
}

var deliLine = ['Joe','Kim','Paul'];
console.log(takeANumber(deliLine, 'Hank'));
console.log(takeANumberTwo(deliLine))
console.log(currentLine(deliLine));
console.log(nowServing([deliLine]));
console.log(nowServing([]));
console.log(currentLine([deliLine]));
console.log(currentLine([]));