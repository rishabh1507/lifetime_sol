
// var firebaseConfig = {
//     apiKey: "AIzaSyBPPhczpl8MCerIjaq7tIULwxkYfgfHCJE",
//     authDomain: "lifetimesol12.firebaseapp.com",
//     databaseURL: "https://lifetimesol12.firebaseio.com",
//     projectId: "lifetimesol12",
//     storageBucket: "lifetimesol12.appspot.com",
//     messagingSenderId: "228000419455",
//     appId: "1:228000419455:web:c5fd4cd77957fef2da794a",
//     measurementId: "G-CGL7T6QSD8"
// };
// var firebaseConfig = {
//     apiKey: "AIzaSyAEQuuL7ucpHYqFSFX2ExDSvH7zaK7ZRwY",
//     authDomain: "lifesol12.firebaseapp.com",
//     databaseURL: "https://lifesol12.firebaseio.com",
//     projectId: "lifesol12",
//     storageBucket: "lifesol12.appspot.com",
//     messagingSenderId: "253211258294",
//     appId: "1:253211258294:web:ef06bcaf5834b2b5ace517",
//     measurementId: "G-13RLCQMTQY"
// };
var firebaseConfig = {
    apiKey: "AIzaSyAEQuuL7ucpHYqFSFX2ExDSvH7zaK7ZRwY",
    authDomain: "lifesol12.firebaseapp.com",
    databaseURL: "https://lifesol12.firebaseio.com",
    projectId: "lifesol12",
    storageBucket: "lifesol12.appspot.com",
    messagingSenderId: "253211258294",
    appId: "1:253211258294:web:ef06bcaf5834b2b5ace517",
    measurementId: "G-13RLCQMTQY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// Refference mesages collection
var messagesRef = firebase.database().ref('messages1');


// listen for form submit
// document.getElementById('contact-form')

// submitform
function submitForm(){
    // e.preventDefault();
    // console.log(123);

    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var service = getInputVal('service');
    var message = getInputVal('message');

    // console.log(name);
    if(name == "" || phone == ""){
        alert("No Blank Fields")
        return false;
    }
    else {
        saveMessage(name, email, phone,service, message);
        true;
    }

}


// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;

}

// save message to firebase
function saveMessage(name, email, phone,service,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email:email,
        service:service,
        phone:phone,
        message:message
    });
}


