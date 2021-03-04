


// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     var id = profile.getId(); // Do not send to your backend! Use an ID token instead.
//     var name = profile.getName();
//     var imgurl = 'Image URL: ' + profile.getImageUrl();
//     var email = profile.getEmail(); // This is null if the 'email' scope is not present.
//     var id_token = googleUser.getAuthResponse().id_token;

//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', '');
//     xhr.setRequestHeader("Content-Type", "application/json");

//     var data = JSON.stringify({ "id": id, "name": name, "imgurl": imgurl, "email": email, "token": id_token });


//     xhr.send(data);

// }

// function signup() {

//     var key = document.getElementById("password").value;
//     var key1 = document.getElementById("password1").value;
//     var email = document.getElementById("email").value;


//     let xhr = new XMLHttpRequest();

//     let url = "";

//     if (email.value().length === 0) {
//         alert('Please enter your email');
//         return false;

//     }
//     else if (key.value().length === 0) {
//         alert('Please enter your password');
//         return false;

//     }
//     else if (key1.value().length === 0) {
//         alert('Please enter your password');
//         return false;

//     } else   if (key !== key1) {
//         alert("Password did not match");  
//     } else {
        
//         xhr.open("POST", url, true);

//         xhr.setRequestHeader("Content-Type", "application/json");

//         xhr.onreadystatechange = function () {

//             if (xhr.readyState === 4 && xhr.status === 200) {


//                 alert(this.responseText);

//             }

//         };


//         var data = JSON.stringify({ "email": email, "key": key, "key1": key1 });
//         xhr.send(data);
      
//     }

// }

// function signin() {

//     var email = document.getElementById("email").value;
//     var key = document.getElementById("key").value;


//     let xhr = new XMLHttpRequest();

//     let url = "";
//     if (email.value().length === 0) {
//         alert('Please enter your email');
//         return false;

//     } else if (key.value().length === 0) {
//         alert('Please enter your password');
//         return false;

//     } else {
//         xhr.open("POST", url, true);

//         xhr.setRequestHeader("Content-Type", "application/json");

//     xhr.onreadystatechange = function () {

//         if (xhr.readyState === 4 && xhr.status === 200) {

//             var response = xhr.responseText;
//             if (response === "1") {
//                 window.location = "";

//             } else {
//                 alert("Incorrect Details");
//             }

//         }

//     };

//     var data = JSON.stringify({ "email": email, "key": key });

//     xhr.send(data);

//     }
 
// }