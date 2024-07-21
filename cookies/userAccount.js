


function SetCookies(){
    document.cookie = "userId=" + document.getElementById("userId").value +
    "|firstName=" + document.getElementById("firstName").value +
    "|lastName=" + document.getElementById("lastName").value +
    "|email="  + document.getElementById("email").value; 
    alert(document.cookie);
}

function GetCookies(){
    var arr = document.cookie.split('|');
    alert(arr.length);
}



function ClearAll(){
    
}













