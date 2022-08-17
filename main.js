
document.getElementById('btn-submit-button').addEventListener('click',function(){
    const submitEmail = document.getElementById('submit-email');
    const email = submitEmail.value;
    const submitPassword = document.getElementById('submit-password');
    const password = submitPassword.value;
    email.value = '';
    console.log(email,password);
})