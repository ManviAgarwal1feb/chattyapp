function adduser(){
    user_name=document.getElementById("adduser").value;
    localStorage.setItem("USERNAME",user_name);
    window.location="kwitter_room.html";
}