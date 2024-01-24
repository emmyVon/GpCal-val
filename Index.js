const inputcount = document.querySelector(".courseCount")
const inputCourse = document.querySelector(".course")
const numberofCoursespan = document.getElementById("nocourse")
const CourseT = document.querySelector(".course-table")
const CourseIn = document.querySelector(".course-in")
const TimeTable = document.querySelector(".reading")
let numberofCourse = 9
let Courses = []
let grade;
inputcount.addEventListener ("change",(e)=>{
     numberofCoursespan.textContent = e.target.value
        numberofCourse += e.target.value
  
    })

    const CourseOnchange = (e)=>{
        const input = e.target
            if(input.value !== ''){
                Courses.push(input.value)
            }
            input.value = ""
    }

    const UpdateTable = ()=>{
        CourseT.innerHTML = ""
            Courses = Courses.slice(0,numberofCourse)
            Courses.map(item=>{
            const row = document.createElement("tr")
             row.innerHTML = `
                    <td>${item}</td>
                    <td>67</td>
                    <td>A</td>
                `
                CourseT.appendChild(row)
        })
    }

    const CalculateGP = ()=>{
        Courses.map(item=>{
            
        })
        switch (grade) {
            case A:
                grade+=5
                break;
            case B:
                grade+=4
                break;
            case C:
                grade+=3
                break;
            case D:
                grade+=2
                break;
            case E:
                grade+=1
                break;
            case F:
                grade+=1
                break;
        
            default:
                break;
        }
    }

    const createTable = ()=>{
      const table = document.createElement('table')
      let rows;
    for(i=0;i<numberofCourse;i++){
       rows = document.createElement('tr');
        table.appendChild(rows)
    } 
    TimeTable.appendChild(table) 
    
}