
let form = document.querySelector('#form');

var firebaseConfig = {
    apiKey: "AIzaSyDrI1ZavBFDtjDFpt_cEqUCmnFMJl1qUSo",
    authDomain: "fir-eb48f.firebaseapp.com",
    projectId: "fir-eb48f",
    storageBucket: "fir-eb48f.appspot.com",
    messagingSenderId: "1015820255538",
    appId: "1:1015820255538:web:c3c66f6c895cc6b23c172b",
    measurementId: "G-46K9SQJW7N"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = form.elements.email.value;
    let password = form.elements.password.value;
    // console.log(email);
    // console.log(password);

    auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            form.reset();
            window.location.href = "home.html";
        })
        .catch(err => {
            alert(err.message);
        })
});
