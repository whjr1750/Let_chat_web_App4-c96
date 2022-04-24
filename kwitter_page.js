//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }
      
      function send(){
      msg = doument.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name: user_name, 
      message: msg,
      like: 0
      });
      document.getElementById("msg").value = "";
      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
namewithtag = "<h4>" + name1 + "<img class = 'user_tick' src ='tick.png'></h4>";
messagewithtag = "<h4 class = 'message_h4'>" + message + "</h4>";

like_button = "<button class = 'btn btn-warning' id =" + firebase_message_id + " value ="+like+" onclick = 'updatelike(this.id)'></button>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

row = namewithtag + messagewithtag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
     } });  }); }
getData();

function updatelike(message_id)
{
      console.log("clickedon like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
      like : updateed_likes  
      });
}