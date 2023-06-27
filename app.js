let showPassword = document.querySelector('.show-password');
let passwordInp = document.querySelector('.password-input');
let  passwordCheck =document.querySelectorAll('.list-item')

showPassword.addEventListener('click',()=>{
    showPassword.classList.toggle('fa-eye');
    showPassword.classList.toggle('fa-eye-slash');

    passwordInp.type =passwordInp.type=='password' ? 'text' :'password';
})

// validation
let validation = [
    {regex:/.{8,}/}, //At least 8 character
    {regex:/[0-9]/},//numbers
    {regex:/[a-z]/},
    {regex:/[A-Z]/},
    {regex:/[^A-Za-z0-9]/},

]

passwordInp.addEventListener('keyup',()=>{
    validation.forEach((item,i)=>{
        let isValid =item.regex.test(passwordInp.value);
        if(isValid){
            passwordCheck[i].classList.add('checked')
        }else{
            passwordCheck[i].classList.remove('checked')
        }
    })
})