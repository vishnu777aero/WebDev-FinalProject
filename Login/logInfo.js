var classInfo = [];

function register(){
    var courseName = document.getElementById("courseName").value;
     var courseTeacher = document.getElementById("courseTeacher").value;
     var totalHours = document.getElementById("totalHours").value;
    
    /*
    isNaN is method that return true if the valueis number
    and convert the value to a number before validate
        */
    if(isNaN(totalHours)){
        alert("Please enter the total of Hours");
        document.getElementById("totalHours").focus();
        document.getElementById("totalHours").value = "";
    }else if(!isNaN(courseName)){
        alert("Please enter the Course Name");
        document.getElementById("courseName").focus();
        document.getElementById("courseName").value = "";
    }else if(!isNaN(courseTeacher)){
        alert("Please enter the Course Teacher");
        document.getElementById("courseTeacher").focus();
        document.getElementById("courseTeacher").value = "";
    }else {
        alert("All data is correct");
        classInfo.push({
            "courseName":courseName,//index0 
             "courseTeacher":courseTeacher,//index1
             "totalHours":totalHours//index2
        });
        obtainData();
        clean();
    }
}

function clean(){
    document.getElementById("courseName").value = ""; 
    document.getElementById("courseTeacher").value = "";
    document.getElementById("totalHours").value = "";
    document.getElementById("courseName").focus();
}

function obtainData(){
    var table = document.getElementById("table");
    
    table.innerHTML="";
    for(var i=0;i<classInfo.length;i++){
//add new row at end of the table (-1)
        //add the rows
        var makeRow = table.insertRow(-1);
        //add the columns
        var makeColumn1 =makeRow.insertCell(0);
        var makeColumn2 =makeRow.insertCell(1);
        var makeColumn3 =makeRow.insertCell(2);
        var makeColumn4 =makeRow.insertCell(3);
        var makeColumn5 =makeRow.insertCell(4);
    
        makeColumn1.innerHTML =i+1;
        makeColumn2.innerHTML =classInfo[i].courseName;
        makeColumn3.innerHTML =classInfo[i].courseTeacher;
        makeColumn4.innerHTML =classInfo[i].totalHours;
        makeColumn5.innerHTML ="<button class ='btn btn-success' onclick = 'selection("+i+")'> Select </button>";
      
    }
}

function selection (i){
    document.getElementById("id").value =i;
    document.getElementById("courseName").value =classInfo[i].courseName;
    document.getElementById("courseTeacher").value =classInfo[i].courseTeacher;
        document.getElementById("totalHours").value =classInfo[i].totalHours;

    document.getElementById("register").style.display = "none";
     document.getElementById("save").style.display = "inline-block";
     document.getElementById("cancel").style.display = "inline-block";
    document.getElementById("remove").style.display = "inline-block";
}

function cancelButton(){
    document.getElementById("register").style.display =  "inline-block";
     document.getElementById("save").style.display = "none";
     document.getElementById("cancel").style.display = "none";
    document.getElementById("remove").style.display = "none";
    clean();
}

function removeButton(){
    var id = document.getElementById("id").value; 
   classInfo.splice (id,1);
    clean();
    obtainData();
    document.getElementById("register").style.display =  "inline-block";
     document.getElementById("save").style.display = "none";
     document.getElementById("cancel").style.display = "none";
    document.getElementById("remove").style.display = "none";
    
    
}

function saveButton(){
     var id = document.getElementById("id").value; 
   var courseName = document.getElementById("courseName").value;
     var courseTeacher = document.getElementById("courseTeacher").value;
     var totalHours = document.getElementById("totalHours").value;
    
     if(isNaN(totalHours)){
        alert("Please enter the total of Hours");
        document.getElementById("totalHours").focus();
        document.getElementById("totalHours").value = "";
    }else if(!isNaN(courseName)){
        alert("Please enter the Course Name");
        document.getElementById("courseName").focus();
        document.getElementById("courseName").value = "";
    }else if(!isNaN(courseTeacher)){
        alert("Please enter the Course Teacher");
        document.getElementById("courseTeacher").focus();
        document.getElementById("courseTeacher").value = "";
    }else {
        alert("All data is correct");
        classInfo.push({
            "courseName":courseName,//index0 
             "courseTeacher":courseTeacher,//index1
             "totalHours":totalHours//index2
        });
        obtainData();
        clean();
    }
    
}


    
