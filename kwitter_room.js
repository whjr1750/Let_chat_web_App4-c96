
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAVQ4edbItXCpOvYz-8Ug_OLSPVWU1VCFk",
  authDomain: "kwitter-cb37a.firebaseapp.com",
  databaseURL: "https://kwitter-cb37a-default-rtdb.firebaseio.com",
  projectId: "kwitter-cb37a",
  storageBucket: "kwitter-cb37a.appspot.com",
  messagingSenderId: "783865564558",
  appId: "1:783865564558:web:599de4000cb484e90828df",
  measurementId: "G-QGBDZG3FM7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

  function addroom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room_names-" + Room_names);
    row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirect(thisid)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectRoom_names(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
  }