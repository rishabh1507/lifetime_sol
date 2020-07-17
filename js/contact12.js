
var firebaseConfig = {
    apiKey: "AIzaSyBPPhczpl8MCerIjaq7tIULwxkYfgfHCJE",
    authDomain: "lifetimesol12.firebaseapp.com",
    databaseURL: "https://lifetimesol12.firebaseio.com",
    projectId: "lifetimesol12",
    storageBucket: "lifetimesol12.appspot.com",
    messagingSenderId: "228000419455",
    appId: "1:228000419455:web:c5fd4cd77957fef2da794a",
    measurementId: "G-CGL7T6QSD8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// Refference mesages collection
var messagesRef = firebase.database().ref('messages1');


// listen for form submit
document.getElementById('contact-form').addEventListener('submit',submitForm);

// submitform
function submitForm(e){
    e.preventDefault();
    console.log(123);

    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
<<<<<<< HEAD
    var service = getInputVal('service');
=======
>>>>>>> e63592877aef4f0c60fd57f0fdb4955f5b6c1b93
    var message = getInputVal('message');

    console.log(name);

<<<<<<< HEAD
    saveMessage(name, email, phone,service, message);
=======
    saveMessage(name, email, phone, message);
>>>>>>> e63592877aef4f0c60fd57f0fdb4955f5b6c1b93
}


// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;

}

// save message to firebase
<<<<<<< HEAD
function saveMessage(name, email, phone,service,message){
=======
function saveMessage(name,email,phone,message){
>>>>>>> e63592877aef4f0c60fd57f0fdb4955f5b6c1b93
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email:email,
<<<<<<< HEAD
        service:service,
=======
>>>>>>> e63592877aef4f0c60fd57f0fdb4955f5b6c1b93
        phone:phone,
        message:message
    });
}


