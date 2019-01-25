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

//alternate way to write a for-loop using "of".  frog is a variable (can be named anything) and is assigned the value of whatever is the current object in the thing over which we are iterating.  For example, in the first loop frog is:

//    {
    //     name: "Chris Miller",
    //     class: "History",
    //     info: "Failed last exam",
    //     score: 59
    // }
//This makes it so you can just say frog.name or frog.class to call the object.  

let studentComponent = ""
for (let frog of students) {
    console.log(frog);

    if (frog.score >= 60) {
        studentComponent = studentComponent + `${createStudentComponent(frog.name, "passing", frog.class, frog.info)}`
    } else {
        studentComponent = studentComponent + `${createStudentComponent(frog.name, "failing", frog.class, frog.info)}`
    }
    console.log(studentComponent)
    document.querySelector("#container").innerHTML = studentComponent;
}

// This is an alternate to the other method where you use an iterator, 'i', and call the object in your code using students[i].name.  
// let studentComponent = ""
// for (i = 0; i < students.length; i++) {

//     if (students[i].score >= 60) {
//         studentComponent = studentComponent + `${createStudentComponent(students[i].name, "passing", students[i].class, students[i].info)}`
//     } else {
//         studentComponent = studentComponent + `${createStudentComponent(students[i].name, "failing", students[i].class, students[i].info)}`
//     }
//     console.log(studentComponent)
//     document.querySelector("#container").innerHTML = studentComponent;
// }

// rest operator
// This will allow you to pass as many arguments to your component-building functions as you want without the need to define each one in the argument list.

// const h1 = (...props) => {
//     return `<h1 class="${props[0]}">${props[1]}</h1>`
// }

// Can you think of a way to make a more generic function that not only takes the style and content as arguments, but also the element type?
function element(...props) {
    return `<${props[0]} class ="${props[1]}">${props[2]}</${props[0]}>`

}

const h1_alt = element("h2", "bordered", "This is some text")

document.querySelector("#alternate").innerHTML = (h1_alt);

// Creating Elements
// Using createElement(), you're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.


// Create five (5) section components, each with a class of message, and with the content of your choosing.
const textItems = [
    {
        class: "message_dot",
        content: "Hey Sydney, How are you?"
    },
    {
        class: "message_syd",
        content: "Hey Dot, pretty good!"
    },
    {
        class: "message_dot",
        content: "Are you at your mom's house?"
    },
    {
        class: "message_syd",
        content: "No, I am in Ohio."
    },
    {
        class: "message_dot",
        content: "Ok, enjoy your time there!"
    }
]

//create a container to hold the individual text elements
const textMsg = document.createElement('article')

//use a for-loop to cycle through the array and gather the messages
for(let i = 0; i<textItems.length; i++){
const textItem = document.createElement('section')
textItem.className = textItems[i].class
textItem.textContent = textItems[i].content

// Using appendChild(), attach each message as a child to the messages element.
textMsg.appendChild(textItem)

//This will send them to the DOM one at a time in the loop
// document.querySelector("#messages").appendChild(textItem)

}
// Example output.  This can only be seen because we built it before sending using textMsg.appendChild()
console.log("this is the textMsg object", textMsg);

//This will send them to the DOM all at once
// document.querySelector("#messages").innerHTML=textMsg
document.querySelector("#messages").appendChild(textMsg)


//Do it the slow way, one message at a time
//create container DIV element
const wholeText = document.createElement('div')

//add a section to the DIV
const text_1 = document.createElement('section')
//give the section a class
text_1.className = "plain-text";
//give the section some text
text_1.textContent = "This is a sample text content"
//send it over to the DOM
document.querySelector("#test-message").appendChild(text_1);

//Rinse, wash, repeat . . .
const text_2 = document.createElement('section')
text_2.className = "plain-text";
text_2.textContent = "This is a sample text content"
document.querySelector("#test-message").appendChild(text_2);

const text_3 = document.createElement('section')
text_3.className = "plain-text";
text_3.textContent = "This is a sample text content"
document.querySelector("#test-message").appendChild(text_3);

//you can't see what is built out because it just immediately sends it to the DOM
console.log("this is the wholeText object built one at a time", wholeText)



// 2.
// - Copy and paste the following code into your javascript file
​
const section = function(textParameter) {
  return `<section class="bordered dashed">${textParameter}</section>`
}
​
const h3 = function(textParameter) {
  return `<h3>${textParameter}</h3>`
}
​
const unorderedList = function(arrayParameter) {
  let list = "";
  for(let i = 0; i < arrayParameter.length; i++){
    list += `<li>${arrayParameter[i]}</li>`
  }
  return `<ul>${list}</ul>`
}
​
// - Your job is to build a function called buildInstructorComponent. The instructor component should include an h3 element, a section element, and a bulleted list of technologies that they know (just make some up)
​
const buildInstructorComponent = (h3Text, h3Section, listArray) => {

    const h3Element = h3(h3Text);
    const sectionElement = section(h3Section);
    const listElement = unorderedList(listArray);
    return `${h3Element} ${sectionElement} ${listElement}`;
}

const kimHTMLString = buildInstructorComponent("Kim", "Kim is great", ["HTLML", "JavaScript", "CSS", "PHP"])

document.querySelector("#container").innerHTML=kimHTMLString;


// - The buildInstructor function should call the three functions you just copied and pasted in your file








