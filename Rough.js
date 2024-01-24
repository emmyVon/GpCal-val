input.forEach((input)=>{
    addEventListener("change",(e)=>{
        let numberofCourse = 0
         let Courses = []
    
    if(e.target.type === "number" && e.target.value !== ""){
        numberofCoursespan.textContent = e.target.value
        numberofCourse += e.target.value
    }
    if(e.target.type ==="text" && e.target !== ""){
        for(i=0;i<numberofCourse;i++){
            const input = document.createElement("input")
            input.type = "text"
            input.placeholder = "enter your course"
            CourseIn.appendChild(input)
            Courses.push(input.value)
            input.value = ''

        }

        Courses.map(item=>{
             CourseT.innerHTML = ` <tr>
                    <td>${item}</td>
                    <td>67</td>
                    <td>A</td>
                </tr>`
        })
        

       
        
    }
})})