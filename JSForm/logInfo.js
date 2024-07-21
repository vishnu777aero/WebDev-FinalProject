var classInfo = [];

function register() {
    var courseName = document.getElementById("courseName").value;
    var courseTeacher = document.getElementById("courseTeacher").value;
    var totalHours = document.getElementById("totalHours").value;

    if(isNaN(totalHours)) {
        alert("Please, enter the total Hours!");
        document.getElementById("totalHours").focus();
        document.getElementById("totalHours").value = "";
    } else if (!courseName.trim()) {
        alert("Please, enter the course name!");
        document.getElementById("courseName").focus();
        document.getElementById("courseName").value = "";
    } else if (!courseTeacher.trim()) {
        alert("Please, enter the course teacher!");
        document.getElementById("courseTeacher").focus();
        document.getElementById("courseTearcher").value = "";
    } else {
        alert("all data is corrent!");

        classInfo.push({
            courseName,
            courseTeacher,
            totalHours
        });

        obtainData();
        clean();
    }
}

function clean() {
    document.getElementById("courseName").value = "";
    document.getElementById("courseTeacher").value = "";
    document.getElementById("totalHours").value = "";
    document.getElementById("courseName").focus();
}

function obtainData() {
    var table = document.getElementById("table");
    table.innerHTML = "";

    for(var i = 0; i < classInfo.length; i++) {
        var makeRow = table.insertRow(-1); // adds content at the end

        var makeColumn1 = makeRow.insertCell(0);
        var makeColumn2 = makeRow.insertCell(1);
        var makeColumn3 = makeRow.insertCell(2);
        var makeColumn4 = makeRow.insertCell(3);
        var makeColumn5 = makeRow.insertCell(4);

        makeColumn1.value = i + 1;
        makeColumn2.value = classInfo[i].courseName;
        makeColumn3.value = classInfo[i].courseTeacher;
        makeColumn4.value = classInfo[i].totalHours;
        makeColumn5.value = `<button class="btn btn-info">Select</button>`;
    }
}