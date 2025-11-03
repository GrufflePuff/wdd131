// Define aCourse object.
const aCourse = {
    code: 'WDD131',
    name: 'Javascript Language',
    logo: 'js-logo.png',
    
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],

    
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
    }
            
            
  };

console.log(aCourse.code);

// Set course name from object.
document.querySelector("#courseName").textContent = aCourse.name;
// Set course code from object.
document.querySelector("#courseCode").textContent = aCourse.code;
// Set logo from object.
document.querySelector("#courseLogo").setAttribute("src", aCourse.logo);
// Restrict logo size.
document.querySelector("#courseLogo").style.width = '100px';

console.log(aCourse.sections[1].roomNum);

aCourse.enrollStudent();

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

const chicken = document.getElementById("chicken");
const chickenImg = document.getElementById("chickenImg");

chicken.addEventListener("click", toggleChicken)

function toggleChicken() {
    chickenImg.classList.toggle("hidden");
    chicken.classList.toggle("shake");
};