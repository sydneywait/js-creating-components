const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]


// 10 of the students are currently passing the course, and 2 students are not. You want passing, and non-passing, student information to be styled differently. You want passing students' names to be green, and non-passing students to be orange.
const h1 = (...props) => {
    return `<h1 class="${props[1]}">${props[0]}</h1>`
}

const section = (...props) => {
    return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}

const createStudentComponent = (...props) => `
    <div id="student">
        ${h1(props[0], props[1])}
        ${section(props[2], "section--padded")}
        ${aside(props[3], "pushRight")}
    </div>
`

// const container = document.querySelector("#container")
// container.innerHTML = createStudentComponent("Marcus Fulbright", "Algebra", "Not a bright student", "Got C's in Everything")

// If a student is passing, then the structure should look like the following.

// <div class="student">
//     <h1 class="xx-large passing">Student Name</h1>
//     <section class="bordered dashed section--padded">Student class</section>
//     <aside class="pushRight">Additional information</aside>
// </div>

let studentComponent = ""
for (i=0;i<students.length; i++) {
    
    if (students[i].score >= 60) {
        studentComponent = studentComponent +`${createStudentComponent(students[i].name, "passing", students[i].class, students[i].info)}`
    } else {
        studentComponent = studentComponent+ `${createStudentComponent(students[i].name, "failing", students[i].class, students[i].info)}`
    }
    console.log(studentComponent)
    document.querySelector("#container").innerHTML=studentComponent;
}

// rest operator
// This will allow you to pass as many arguments to your component-building functions as you want without the need to define each one in the argument list.

// const h1 = (...props) => {
//     return `<h1 class="${props[0]}">${props[1]}</h1>`
// }
