function addData() {
  // Récupération des valeurs des champs de formulaire
  var namef = document.getElementById("First").value;
  var namel = document.getElementById("Last").value;
  var phone = document.getElementById("namep").value;
  var email = document.getElementById("namee").value;
  var company = document.getElementById("cname").value;
  var address = document.getElementById("namea").value;
  // Faites quelque chose avec les données récupérées, par exemple :
  console.log("namef : " + namef);
  console.log("namel : " + namel);
  console.log("phone : " + phone);
  console.log("email : " + email);
  console.log("company : " + cname);
  console.log("address : " + namea);
  // Réinitialisation des champs de formulaire
  document.getElementById("namef").value = "";
  document.getElementById("namel").value = "";
  document.getElementById("namep").value = "";
  document.getElementById("namee").value = "";
  document.getElementById("cname").value = "";
  document.getElementById("namea").value = ""; 
  document.getElementById("RegForm").reset();
}
function ValidationForm() {
  let email = document.forms["RegForm"]["namee"];
  if(email.value == "") {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if(email.value.indexOf("@", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if(email.value.indexOf(".", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
}
function validatePhone(phone) {
  const regex = /^\d+$/;
  return regex.test(phone) && phone.length > 0;
  }
/*function ValidationForm() {
    let usernamef = document.forms["RegForm"]["First"];
    let usernamel = document.forms["RegForm"]["Last"];
    let email = document.forms["RegForm"]["namee"];
     let phone = document.forms["RegForm"]["namep"];
    let company = document.forms["RegForm"]["cname"];
    let address= document.forms["RegForm"]["namea"];
    if (usernamef.value == "") {
        alert("Please enter your first name.");
        usernamef.focus();
        return false;
      }
    if (usernamel.value == "") {
        alert("Please enter your last name.");
        usernamel.focus();
        return false;
      }
    if(email.value == "") {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if(email.value.indexOf("@", 0) < 0) {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if(email.value.indexOf(".", 0) < 0) {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if(phone.value == "") {
      alert("Please enter your telephone number.");
      phone.focus();
      return false;
    }
    if(address.value == "") {
      alert("Please enter your address");
      address.focus();
      return false;
    }
    if(company.value == "") {
        alert("Please enter your company name");
        company.focus();
        return false;
      }
    
}
var bouton1 = document.getElementById("bouton1");
bouton1.addEventListener("click", function() {
  console.log("Bouton 1 cliqué!");
});*/
const form = document.getElementById('RegForm');
const username = document.getElementById('First');
const last = document.getElementById('Last');
/*const password = document.getElementById('password');
const password2 = document.getElementById('password2');*/

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

/*const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}*/

/*const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    /*if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
 */
