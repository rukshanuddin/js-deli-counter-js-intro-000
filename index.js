function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
 let i = 0;
  while (i < katzDeliLine.length);
  if (katzDeliLine === 0){
    return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}`
  }
}
function currentLine(katzDeliLine){
  let i = 0;
   while (i < katzDeliLine.length);
   if (katzDeliLine === 0){
     return `There is nobody currently in line!`
   }
   else {
     return `The line is currently ${i+1}${katzDeliLine[i]}`
   }
}
