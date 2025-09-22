
  document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guests = document.getElementById('guests').value;

    if (!name || !email || !phone || !date || !time || !guests) {
      alert('Please fill all fields.');
      return;
    }
    alert(`Thank you, ${name}! Your table for ${guests} guests has been booked on ${date} at ${time}. We will contact you shortly at ${email} or ${phone}.`);

    this.reset();
  })

  document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();

var name = document.getElementById("name").value ;
var email = document.getElementById("email").value ;
var phone = document.getElementById("phone").value ;
var person = document.getElementById("person").value ;
var date = document.getElementById("date").value ;
var submit = document.getElementById("sumbit").value ;

var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var phoneError = document.getElementById('phoneError');

nameError.textContent="";
emailError.textContent="";
phoneError.textContent="";

var valid = true ;

if(!/^[A-Za-z]+$/.test(name)) {
nameError.textContent = "just letters";
valid = false ;
}

if(!/^[A-Za-z0-9]+@(gmail|yahoo)\.com$/.test(email)) {
emailError.textContent = "enter a valid email";
valid = false ;
}

if(!/^[0-9]+$/.test(phone)) {
phoneError.textContent = "just numbers";
valid = false ;
}

if (valid) {
    alert("the booking is done");

    var bookingData = 
      "<html>" +
      "<head>" +
      "<title>Booking Confirmation</title>" +
      "<style>" +
      "body {background: #f5f5f5; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;}" +
      ".card {background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.2); max-width: 400px; text-align: center;}" +
      ".card h2 {margin-bottom: 20px; color: #333;}" +
      ".card p {margin: 8px 0; color: #555;}" +
      ".card button {margin-top: 20px; padding: 10px 20px; background: burlywood; color: white;}" +
      "</style>" +
      "</head>" +
      "<body>" +
      "<div class='card'>" +
      "<h2>Booking Confirmation</h2>" +
      "<p><b>Name:</b> " + name + "</p>" +
      "<p><b>Email:</b> " + email + "</p>" +
      "<p><b>Phone:</b> " + phone + "</p>" +
      "<p><b>Date:</b> " + date + "</p>" +
      "<p><b>Number of persons:</b> " + person + "</p>" +
      "<button onclick='window.close()'>Close</button>" +
      "</div>" +
      "</body>" +
      "</html>";

    var newWindow = window.open("", "_blank");
    newWindow.document.write(bookingData);
  }
});

