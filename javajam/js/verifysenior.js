var age;

age = prompt("Enter your age:")
if (age >= 65) {
    output = "Free Friday Coffee Night for Seniors!";
    
} else {
    output = "Enjoy music and make memories!";
}
document.getElementById("verify").innerHTML = output;