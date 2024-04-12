const firebaseConfig = {
apiKey: "AIzaSyAs1yjTaklbAQJGQ1j3j6k9GDP6dtA70qU",
authDomain: "kwitterapp-ac5b2.firebaseapp.com",
databaseURL: "https://kwitterapp-ac5b2-default-rtdb.firebaseio.com",
projectId: "kwitterapp-ac5b2",
storageBucket: "kwitterapp-ac5b2.appspot.com",
messagingSenderId: "62916609912",
appId: "1:62916609912:web:06f18db3898dac5aaf2a8d",
measurementId: "G-9FW4BMNC3J"
}

  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;Room_names = childKey;
  firebase_message_id = childKey;
  messages_data = childData;
    //Start code
  console.log(firebase_message_id);
  console.log(message_data);
  name=message_data['name'];
  message=message_data['message'];
  like= message_data['like'];
  name_with_tag="<h4>" + name + "<img class='user-tick' src='tick.png'></h4>";
  message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
  like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
  span_with_tag= "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span><button><hr>";
    row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
        document.getElementById("output").innerHTML += row;
  //End code
  });});}
  getData();
  
  function addRoom()
  {
        room_name= document.getElementById("room_name").ariaValueMax;
  
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
  
        localStorage.setItem("room_name" , room_name);
  
        window.location="kwitter_room_html";
  }
  
  function redirectToRoomName(name)
  {
        console.log(name);
        localstorage.setItem("room_name", name);
        window.location = "kwitter_room_html";
  }
  
  function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "kwitter_room_html";
  }
  
  function send()
  {
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
  document.getElementById("msg").value="";
  }
  
  function update(message_id)
  {
      console.log("clicked on like button - "+ message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message.id).update({
like: updated_likes
      });
  }


function log() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}