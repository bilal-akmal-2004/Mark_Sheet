function grade(percentageParameter){
        if(percentageParameter>90){
           return "A"
        }else if(percentageParameter>=80){
           return "B"
        }else if(percentageParameter>=70){
          return "C"
       }else if(percentageParameter>=60){
          return "D"
       }else if(percentageParameter>=50){
          return "E"
       }else{
          return "F"
       }
}
function scholarShip(percentageParameter){
   if(percentageParameter>90){
      return "10% Off"
   }else if(percentageParameter>=80){
      return "6% Off"
   }else if(percentageParameter>=70){
     return "4% Off"
  }else if(percentageParameter>=60){
     return "No scholarship for you."
  }else if(percentageParameter>=50){
     return "No scholarship for you."
  }else{
     return "Well you need to repeat the class."
  }
}
//  Taking username and subject marks here
let userName = prompt("Enter your name: ")
let subjectsArray = ["Comp","Chem","Isl","Geo","Mat"]
let subMarks = []
for(let i=0;i<subjectsArray.length;i++){
   let nam = +prompt("Enter the marks of "+subjectsArray[i]+" :")
   if(nam > 100){
         alert("Marks should be under or equal to 100.")
         nam = +prompt("Enter the marks of "+subjectsArray[i]+" :")
   }
     subMarks.push(nam) 
}

// display the studwents name 
let mainDiv = document.getElementById("main")
let headingName = document.createElement("h1")
headingName.innerText = "Student's name : "+userName;
mainDiv.appendChild(headingName)


// now making the first cloum here containg subMarks, subjects and other stuff
let tableElm = document.createElement("table")
let tableRow = document.createElement("tr")
let tableCol1 = document.createElement("th")
let tableCol2 = document.createElement("th")
tableCol1.innerText = "Subjects"
tableCol2.innerText = "Marks"
tableRow.appendChild(tableCol1)
tableRow.appendChild(tableCol2)
tableElm.appendChild(tableRow)
mainDiv.appendChild(tableElm)

// now shoign the makrs\
for(let i=0;i<subjectsArray.length;i++){
    let tableRow = document.createElement("tr")
    let tableCol1 = document.createElement("td")
    let tableCol2 = document.createElement("td")
    tableCol1.innerText = subjectsArray[i]
    tableCol2.innerText = subMarks[i]
    tableRow.appendChild(tableCol1)
    tableRow.appendChild(tableCol2)
    tableElm.appendChild(tableRow)
    mainDiv.appendChild(tableElm)
}

// no for the toatl marks here
let totalMarks = document.createElement("tr")
let totalMarksCol = document.createElement("td")
totalMarksCol.innerText = "Total Marks"
totalMarks.appendChild(totalMarksCol)
tableElm.appendChild(totalMarks)
mainDiv.appendChild(tableElm)
let totalMarksShow = 0;
for(let i=0;i<subjectsArray.length;i++){
    totalMarksShow += subMarks[i]
}
let totalMarksCol2InNumber = document.createElement("td")
totalMarksCol2InNumber.innerText = totalMarksShow;
totalMarks.appendChild(totalMarksCol2InNumber)
tableElm.appendChild(totalMarks)
mainDiv.appendChild(tableElm)

// now for the percentage her e
let percentageRow = document.createElement("tr")
let percentageCol = document.createElement("td")
percentageCol.innerText = "Percentage"
percentageRow.appendChild(percentageCol)
tableElm.appendChild(percentageRow)
mainDiv.appendChild(tableElm)
let percentageCol1 = document.createElement("td")
percentageCol1.innerText = Math.floor(((totalMarksShow/(500))*100))+"%";
percentageRow.appendChild(percentageCol1)
tableElm.appendChild(percentageRow)
mainDiv.appendChild(tableElm)

// now for the grade
let percentageForGradeFunction = Math.floor(((totalMarksShow/(500))*100));;
let gradeRow = document.createElement("tr")
let gradeCol = document.createElement("td")
gradeCol.innerText = "Grade"
gradeRow.appendChild(gradeCol)
tableElm.appendChild(gradeRow)
mainDiv.appendChild(tableElm)
let gradeCol1 = document.createElement("td")
gradeCol1.innerText = grade(percentageForGradeFunction);
gradeRow.appendChild(gradeCol1)
tableElm.appendChild(gradeRow)
mainDiv.appendChild(tableElm)

// now for the SCHOLARASHI
let scholarShipRow = document.createElement("tr")
let scholarShipCol = document.createElement("td")
scholarShipCol.innerText = "Scholarship"
scholarShipRow.appendChild(scholarShipCol)
tableElm.appendChild(scholarShipRow)
mainDiv.appendChild(tableElm)
let scholarShipCol1 = document.createElement("td")
scholarShipCol1.innerText = scholarShip(percentageForGradeFunction)
scholarShipRow.appendChild(scholarShipCol1)
tableElm.appendChild(scholarShipRow)
mainDiv.appendChild(tableElm)

