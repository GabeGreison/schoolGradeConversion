function getGrade(grade){

let scoreA = grade >= 90 && grade <=100
let scoreB = grade >= 80 && grade <= 89
let scoreC = grade >= 70 && grade <= 79
let scoreD = grade >= 60 && grade <= 69
let scoreF = grade >= 0 && grade < 60

let finalGrade;

if(scoreA){
    finalGrade = "A"

 } else if (scoreB){

    finalGrade = "B"

 } else if (scoreC){

    finalGrade = "C"

 } else if(scoreD){
    finalGrade = "D"

 } else if(scoreD){

    finalGrade = "D"

 } else if(scoreF){

    finalGrade = "F"

 } else (finalGrade = "Inválida")


 
 return finalGrade

}

console.log(`Nota ${getGrade(58)}`)