function Student(studentID, fullName, dob, className, gpa) {
  this.studentID = studentID;
  this.fullName = fullName;
  this.dob = dob;
  this.className = className;
  this.gpa = gpa;
}

Student.prototype.displayInfo = function () {
  return `
        <tr>
            <td>${this.studentID}</td>
            <td>${this.fullName}</td>
            <td>${this.dob}</td>
            <td>${this.className}</td>
            <td>${this.gpa}</td>
            <td><button onclick="deleteRow(this)" class="btn btn-danger" >Xóa</button></td>
        </tr>
    `;
};

function addStudent() {
  var studentID = document.getElementById("studentID").value;
  var fullName = document.getElementById("fullName").value;
  var dob = document.getElementById("dob").value;
  var className = document.getElementById("class").value;
  var gpa = document.getElementById("gpa").value;

  var student = new Student(studentID, fullName, dob, className, gpa);
  var table = document.getElementById("studentTable");
  var row = table.insertRow(-1);
  row.innerHTML = student.displayInfo();
  // Reset form fields
  document.getElementById("studentForm").reset();
}

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function showList() {
  var listBtn = document.querySelectorAll(".list");
  var table = document.getElementById("studentTable");
  table.classList.toggle("hidden");

  var firstList = listBtn[0];
  var secondList = listBtn[1];

  firstList.classList.toggle("hide");
  secondList.classList.toggle("hide");
}
