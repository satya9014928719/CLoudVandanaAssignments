function submitForm() {
    // Validate the form
    var form = document.getElementById('surveyForm');
    if (!form.checkValidity()) {
      alert('Please fill out all the required fields.');
      return;
    }

    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;

    var gender = [];
    var genderCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    genderCheckboxes.forEach(function (checkbox) {
      gender.push(checkbox.value);
    });

    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    // Display values in a popup
    var popupContent =
      `<p><strong>First Name:</strong> ${firstName}</p>
       <p><strong>Last Name:</strong> ${lastName}</p>
       <p><strong>Date of Birth:</strong> ${dob}</p>
       <p><strong>Country:</strong> ${country}</p>
       <p><strong>Gender:</strong> ${gender.join(', ')}</p>
       <p><strong>Profession:</strong> ${profession}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Mobile Number:</strong> ${mobile}</p>`;

    document.getElementById('popup').innerHTML = popupContent;
    document.getElementById('popup').style.display = 'block';

    // Reset the form
    form.reset();
  }

  function resetForm() {
    document.getElementById('surveyForm').reset();
  }

  // Close the popup on clicking outside of it
  window.onclick = function (event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  };