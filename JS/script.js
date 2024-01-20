function validateName(){
    let nameError=document.getElementById('username-error');
    let name=document.getElementById('username');
  if(name.value.length < 5 || name.value.length >20){
        nameError.innerHTML=' Name should be five to twenty character'
        name.style.borderColor='red'
        return false
    }
    else{
        nameError.innerHTML=''
        name.style.borderColor=''
        return true
    }
}
 function validateEmail(){
    let email=document.getElementById('useremail')
    let emailError=document.getElementById('email-error')
    let regEx=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
if(email.value.trim()==''){
    emailError.innerHTML= 'Email cannot be blank!!'
    email.style.borderColor='red'
    return false
}
else if(!email.value.match(regEx)){
    emailError.innerHTML='Invalid Email Format'
    email.style.borderColor='red'
    return false
}
    else{
        emailError.innerHTML=''
        email.style.borderColor=''
        return true
   }
}
function validatePassword(){
    let password=document.getElementById('user-password')
    let passwordError=document.getElementById('password-error')
    
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password.value)) {
        passwordError.innerHTML = ' Password must be at least 8 characters long and include at least one letter and one digit.'
        
        password.style.borderColor = 'red';
        return false;
    }
    else {
        
        const strength = assessPasswordStrength(password.value);

        
        if (strength === 'weak') {
            passwordError.innerHTML = ' Password strength: Weak';
            password.style.borderColor = 'orange';
            passwordError.style.color = 'orange';
        } else if (strength === 'medium') {
            passwordError.innerHTML = ' Password strength: Medium';
            password.style.borderColor = 'yellow';
            passwordError.style.color = 'yellow';
        } else {
            passwordError.innerHTML = ' Password strength: Strong';
            password.style.borderColor = 'green';
            passwordError.style.color='green';
        }

        return true;
    }
}

function assessPasswordStrength(password) {
    
    if (password.length < 8) {
        return 'weak';
    } else if (password.length < 12) {
        return 'medium';
    } else {
        return 'strong';
    }
}

function validateRepeat(){
    let password=document.getElementById('user-password')
    let repeatPass=document.getElementById('repeat-password')
    let repeatPassError=document.getElementById('repeat-error')
    if(password.value != repeatPass.value){
        repeatPassError.innerHTML='Password mismatch';
        repeatPass.style.borderColor='red'
        return false
    }
    else{
        repeatPassError.innerHTML=''
        repeatPass.style.borderColor=''
        return true
    }
}
function validateForm(){
    let loginError=document.getElementById('login-error')
    if ( ! validateName()||!validateEmail()||!validatePassword()||!validateRepeat())
    {
          loginError.innerHTML='Please Resolve the errors !!!'
    return false
    }
    else{
        loginError.innerHTML=''
        return true
    }
}
 