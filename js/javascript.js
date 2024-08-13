const register_btn = document.querySelector(".register-btn");

const login_btn = document.querySelector(".login-btn");

const form_box = document.querySelector(".form-box");

const forgot_password_btn = document.querySelector(".forgot-password-btn")

const back_btn = document.querySelector(".back-btn")

const continue_btn = document.querySelector(".continue-btn")

const conform_btn = document.querySelector(".conform-btn")

const close_btn = document.querySelector(".close-btn")

register_btn.addEventListener("click", () => {
    form_box.classList.add("active")
});

login_btn.addEventListener("click", () => {
    form_box.classList.remove("active")
});
forgot_password_btn.addEventListener("click", () => {
    form_box.classList.add("otp")
});
back_btn.addEventListener("click", () => {
    form_box.classList.remove("otp")
});

continue_btn.addEventListener("click", () => {
    form_box.classList.add("change-password")
});

conform_btn.addEventListener("click", () => {
    form_box.classList.add("massage")
});

close_btn.addEventListener("click", () => {
    form_box.classList.remove("massage")
    form_box.classList.remove("change-password")
    form_box.classList.remove("otp")

});