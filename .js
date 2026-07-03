document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("message");

    if(name === "" || email === "" || phone === "" || password === "" || confirmPassword === ""){
        message.style.color = "red";
        message.innerHTML = "Please fill all fields!";
        return;
    }

    if(password !== confirmPassword){
        message.style.color = "red";
        message.innerHTML = "Passwords do not match!";
        return;
    }

    if(phone.length !== 10 || isNaN(phone)){
        message.style.color = "red";
        message.innerHTML = "Enter a valid 10-digit phone number!";
        return;
    }

    message.style.color = "green";
    message.innerHTML = "Registration Successful!";
});