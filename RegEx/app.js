const signupform = document.querySelector("#signup-form");
const message = document.querySelector(".message");

const regEx = /^[a-zA-z0-9]{6,12}$/;

signupform.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputVal = signupform.username.value;

    if(regEx.test(inputVal)) {
        message.textContent = "Ma'lumot to'g'ri kiritildi."
    }else{
        message.textContent = "Ma'lumot noto'g'ri kiritildi."
    }
});

signupform.username.addEventListener("keyup", (e) => {
    if(regEx.test(e.target.value)){
        signupform.username.setAttribute("class", "success")
    }else{
        signupform.username.setAttribute("class", "error")
    }
});