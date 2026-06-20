
function validateForm() {
	var role = document.getElementById("role").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var roleError = document.getElementById("roleError");
	var emailError = document.getElementById("emailError");
	var passwordError = document.getElementById("passwordError");
	var isValid = true;
  
	// Role Validation
	if (role === "") {
	  roleError.innerHTML = "Please select a role";
	  isValid = false;
	} else {
	  roleError.innerHTML = "";
	}
  
	// Email Validation
	if (email === "") {
	  emailError.innerHTML = "Email is required";
	  isValid = false;
	} else {
	  emailError.innerHTML = "";
	}
  
	// Password Validation
	if (password === "") {
	  passwordError.innerHTML = "Password is required";
	  isValid = false;
	} else {
	  passwordError.innerHTML = "";
	}
  
	if (isValid) {
	  document.getElementById("loginForm").submit(); // Submit the form if validation passes
	}
  }
  


// To validate the  sugnup page 
  function RegistrationValidation() {
	var role = document.getElementById("role").value;
	var firstname = document.getElementById("fname").value;
	var lastname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("cpassword").value;
	var companyName = document.getElementById("companyName").value;

	// Role Validation
	if (role === "") {
		alert("Please select a role");
		return false;
	}

	// Firstname and Lastname Validation
	if (!/^[A-Z][a-z]*$/.test(firstname)) {
		alert("First name must start with a capital letter.");
		return false;
	}
	if (!/^[A-Z][a-z]*$/.test(lastname)) {
		alert("Last name must start with a capital letter.");
		return false;
	}

	// Email Validation
	if (!/\S+@\S+\.\S+/.test(email)) {
		alert("Invalid email address.");
		return false;
	}

	// Password Validation
	if (password.length < 6 || !/^[0-9a-zA-Z]+$/.test(password)) {
		alert("Password must be at least 6 characters long and contain only alphanumeric characters.");
		return false;
	}

	// Confirm Password Validation
	if (password !== confirmPassword) {
		alert("Passwords do not match.");
		return false;
	}

	// Company Name Validation if Role is Company
	if (role === "Company" && companyName === "") {
		alert("Please enter your company name.");
		return false;
	}

	// If all validations pass, return true to submit the form
	return true;
}

// Add event listener to form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
	// Call the validation function before submitting the form
	if (!RegistrationValidation()) {
		// Prevent form submission if validation fails
		event.preventDefault();
	}
});

// Add event listener to role selection for showing/hiding company name field
document.getElementById('role').addEventListener('change', function() {
	var companyNameField = document.getElementById('companyNameField');
	var companyNameInput = document.getElementById('companyName');

	if (this.value === 'Company') {
		companyNameField.style.display = 'block';
		companyNameInput.required = true;
	} else {
		companyNameField.style.display = 'none';
		companyNameInput.required = false;
	}
});