var firebaseConfig = {
      apiKey: "AIzaSyAXpIQm_z7MbgYRTaxwKY4KKTZ_CRovCac",
      authDomain: "kwitter-2c4fb.firebaseapp.com",
      databaseURL: "https://kwitter-2c4fb-default-rtdb.firebaseio.com",
      projectId: "kwitter-2c4fb",
      storageBucket: "kwitter-2c4fb.appspot.com",
      messagingSenderId: "385509001083",
      appId: "1:385509001083:web:42deefdb86df66e7a6dfde"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();




function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
console.log(room_name);
console.log(user_name);
console.log("screen3");
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").innerHTML="";
}