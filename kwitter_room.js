
var firebaseConfig = {
  apiKey: "AIzaSyD-CnAw9yoz3OBXKgF_TVpS99xKgUBntz8",
  authDomain: "kwitter-new-6a091.firebaseapp.com",
  databaseURL: "https://kwitter-new-6a091-default-rtdb.firebaseio.com",
  projectId: "kwitter-new-6a091",
  storageBucket: "kwitter-new-6a091.appspot.com",
  messagingSenderId: "491976452262",
  appId: "1:491976452262:web:92d6d79fe029bc83442c67",
  measurementId: "G-WWFVBNJ7YT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
