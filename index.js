function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine){

  if (!katzDeliLine.length){
    return `There is nobody waiting to be served!`
  }
    return `Currently serving ${katzDeliLine.shift()}.`
  }

function currentLine(katzDeliLine){

  if (!katzDeliLine.length){
    return `The line is currently empty.`
  }
  const deliLine = []
  for (let i = 0, l = katzDeliLine.length; i < l; i++){

    deliLine.push(`${i+1}. ${katzDeliLine[i]}`)}

return `The line is currently: ${deliLine.join(`, `)}`
}
