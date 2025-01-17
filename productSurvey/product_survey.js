const username = document.getElementById("name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const job = document.getElementById("job");
const designation = document.getElementById("designation");
const productType = document.getElementById("productType");
const feedback = document.getElementById("feedbackText");
const experience = document.getElementById("userExperience");

const submitButton = document.getElementById("submitBtn");
submitButton.onclick = submitFeedback;

function submitFeedback(){
    alert("Thank you for your valuable feedback");

    document.getElementById('userName').innerHTML = username.value;
    document.getElementById('userAge').innerHTML = age.value;
    document.getElementById('userEmail').innerHTML = email.value;
    document.getElementById('userJob').innerHTML = job.value;
    document.getElementById('userDesignation').innerHTML = designation.value;
    document.getElementById('userProductChoice').innerHTML = productType.value;
    document.getElementById('userFeedback').innerHTML = feedback.value;

    document.getElementById('userInfo').style.display = 'block';

    document.getElementById('userProductExperience').innerHTML = productType.value;
    document.getElementById('usersExperience').innerHTML = experience.value;

    document.getElementById('userExperienceInfo').style.display = 'block';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });