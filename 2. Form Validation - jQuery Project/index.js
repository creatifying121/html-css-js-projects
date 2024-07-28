function isEmail(email) {
  var regexEmail =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regexEmail.test(email);
}

// regex for phone number validation
function isPhone(phn) {
  var regexPhn = /^(0|91)?[6-9][0-9]{9}$/;
  return regexPhn.test(phn);
}

// implementing validations

var errMsg = "";
var missingField = "";

$("#submitBtn").click(function () {
  if ($("#email").val() == "") {
    missingField += "<p>Email cannot be empty</p>";
  }

  if ($("#phone").val() == "") {
    missingField += "<p>Phone Number cannot be empty</p>";
  }

  if ($("#password").val() == "") {
    missingField += "<p>Password cannot be empty</p>";
  }

  if ($("#confPassword").val() == "") {
    missingField += "<p>Confirm Password cannot be empty</p>";
  }

  if (!isEmail($("#email").val())) {
    errMsg += "<p>Email is not valid</p>";
  }

  if (!isPhone($("#phone").val())) {
    errMsg += "<p>Phone number is not valid</p>";
  }

  if ($("#confPassword").val() != $("#password").val()) {
    errMsg += "<p>Password does not match</p>";
  }

  if (errMsg == "") {
    $("#success").html("Registered successfully");
    $("#success").css("display", "block");
  } else {
    $("#errors").html(errMsg + missingField);
  }
});
