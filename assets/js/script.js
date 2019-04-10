var config = {
    apiKey: "AIzaSyDmutEzkOYbhS_nAunN2TdKjCtUWEklzBw",
    authDomain: "https://test-cbdf9.firebaseapp.com/",
    databaseURL: "https://test-cbdf9.firebaseio.com/",
    projectId: "test-cbdf9",
    storageBucket: "test-cbdf9.appspot.com",
    messagingSenderId: "701831376948"
};
firebase.initializeApp(config);

var database = firebase.database();

var contacts = [];
var chats = [];
database.ref().on("value", function (snapshot) {
    contacts = snapshot.val().Contacts;
    chats = snapshot.val().Message_chats;

    loadContacts();

})

function loadContacts() {
    $(".contacts-container").empty();
    for (let i in contacts) {
        console.log(i)
        let a = $("<button>");
        $(a).html(contacts[i]);
        $(a).data("value",contacts[i])
        $(".contacts-container").append(a);
    }
}

// var currentContact;
// $(document).on("click", "button", function () {
//     currentContact = $(this).data("value");
//     for (let i in chats) {
//         if (i == currentContact) {
//             for (let j in chats[i]) {
//                 for (let k in chats[i][j]) {
//                     console.log(chats[i][j][k])
//                 }
//             }
//         }
//     }
// })

// $(".send").on("click", function () {
//     let text = $(".message-text").val();
//     let key=database.ref("/Message_chats/"+currentContact+"/messages/").push().key;
//     database.ref("/Message_chats/" + currentContact + "/messages/"+key).set(text)
//     $(".message-text").val("")
// })

