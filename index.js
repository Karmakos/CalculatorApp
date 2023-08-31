
// document.getElementById("calc-btn").addEventListener('click', calculateAge)

function calculateAge(){
const currentTime = Date.now();
var selectedDate = document.getElementById('date-slt');
const userDate = new Date (selectedDate.value);

// getting the time difference in Milliseconds
var ageMS = (currentTime - userDate);
// getting age in days
var ageDays = (ageMS/(1000*3600*24));
var ageDaysRounded = Math.floor(ageDays);
// getting age in months
var ageMonths = (ageDaysRounded/30);
// getting age in years
var ageYears = (ageMonths/12);

// display the age in the HTML div
if (ageYears>0) {
    document.getElementById('result-div').innerHTML='<h3>You are '+ ageYears +' Years Old</h3>';
}
else if(ageMonths>0 && ageMonths<=12){
    document.getElementById('result-div').innerHTML='<h3>You are '+ageMonths+ ' Months Old</h3>'
}
else if  (ageDaysRounded>0 && ageDaysRounded<=30){
document.getElementById('result-div').innerHTML='<h3>You are '+ ageDaysRounded + ' Days Old</h3>'
}
else {
    document.getElementById('result-div').innerHTML='<h3>Your Birthdate Entry is Invalid!</h3>';
}}