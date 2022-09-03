let state = false;
let password = document.getElementById("password");
let weak = document.querySelector('.password-weak')
let passwordStrength = document.getElementById('password-strength');
let lowercase = document.querySelector('.low-case i');
let uppercase = document.querySelector('.upper-case i');
let number = document.querySelector('.one-number i');
let eightChar = document.querySelector('.eight-character i');
let specialChar = document.querySelector('.one-special-char i');
let x = document.querySelector('.password-weak i')

let strength = 0;

// console.log(weak)

function myFunction(show) {

    if (show.classList.contains('fa-eye-slash')) {
        show.classList.remove('fa-eye-slash')
        show.classList.add('fa-eye')
    } else {
        show.classList.remove('fa-eye')
        show.classList.add('fa-eye-slash')
    }
}

function toggle() {
    if (state) {
        password.setAttribute("type", "password")
        state = false;
    }
    else {
        password.setAttribute("type", "text");
        state = true;
    }
}



password.addEventListener('keyup', function () {
    let pass = password.value;
  
    checkStrength(pass);
   
})

function checkStrength(password) {


    if (/[a-z]/.test(password)) {

        lowercase.classList.remove('fa-circle-xmark');
        lowercase.classList.add('fa-check');
    } else {
        lowercase.classList.add('fa-circle-xmark');
        lowercase.classList.remove('fa-check');
    }

    if (/[A-Z]/.test(password)) {

        uppercase.classList.remove('fa-circle-xmark');
        uppercase.classList.add('fa-check');
    } else {
        uppercase.classList.add('fa-circle-xmark');
        uppercase.classList.remove('fa-check');
    }

    if (/[0-9]/.test(password)) {

        console.log(strength)
        number.classList.remove('fa-circle-xmark')
        number.classList.add('fa-check')
    } else {
        number.classList.add('fa-circle-xmark')
        number.classList.remove('fa-check')
    }

    if (password.length > 7) {

        eightChar.classList.remove('fa-circle-xmark')
        eightChar.classList.add('fa-check')
    } else {
        eightChar.classList.add('fa-circle-xmark')
        eightChar.classList.remove('fa-check')
    }

    if (/[!,@,#,$,%,^,&,*,_,~]/.test(password)) {

        specialChar.classList.remove('fa-circle-xmark')
        specialChar.classList.add('fa-check')
    } else {
        specialChar.classList.add('fa-circle-xmark')
        specialChar.classList.remove('fa-check')
    }

    // if ((lowercase.classList.contains('fa-check')) && (uppercase.classList.contains('fa-check')) && (number.classList.contains('fa-check')) && (eightChar.classList.contains('fa-check')) && (uppercase.classList.contains('fa-check'))) {
    //     x.classList.remove('fa-circle-xmark')
    //     x.classList.add('fa-check')
    //     console.log(x.classList)
    
    // }
    // else {
    //     x.classList.add('fa-circle-xmark')
    //     x.classList.remove('fa-check')
    // }




    strength = Array(...document.querySelectorAll(".fa-check")).length;
    console.log(Array(...document.querySelectorAll(".fa-check")))

    if (strength == 0) {
        passwordStrength.style.width = '0%';
        weak.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>Password strength: Weak"
    }
    else if (strength == 3) {
        passwordStrength.classList.remove('progress-bar-warning')
        passwordStrength.classList.remove('progress-bar-success')
        passwordStrength.classList.add('progress-bar-danger')
        passwordStrength.style.width = '10%';
        weak.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>Password strength: Weak"
      
    }
    else if (strength == 4) {
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.style.width = '60%';
        weak.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>Password strength: Moderate"
        
    }
    else if (strength == 5) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.style.width = '100%';
        weak.innerHTML = "<i class='fa-solid fa-check'></i>Password strength: Strong"
    
    }

}
