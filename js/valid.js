function checkN() {
    let nameInput = document.getElementById("n");
    let nameMessage = document.getElementById("messageN");
    let regex = /^[a-zA-ZА-Яа-я]{2,15}$/;

    if (nameInput.value === "") {
        nameMessage.innerHTML = "Пожалуйста, введите имя";
        nameInput.style.borderColor = "red";
        return false;
    } else if (!regex.test(nameInput.value)) {
        nameMessage.innerHTML = "Введите корректное имя: без цифр и дополнительных знаков";
        nameInput.style.borderColor = "red";
        return false;
    } else {
        nameMessage.innerHTML = "";
        nameInput.style.borderColor = "green";
        return true;
    }
}

function checkM() {
    let mailInput = document.getElementById("mail");
    let mailMessage = document.getElementById("messageMail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;

    if (mailInput.value === "") {
        mailMessage.innerHTML = "Введите электронную почту";
        mailInput.style.borderColor = "red";
        return false;
    } else if (!regex.test(mailInput.value)) {
        mailMessage.innerHTML = "Проверьте правильность введенной почты";
        mailInput.style.borderColor = "red";
        return false;
    } else {
        mailMessage.innerHTML = "";
        mailInput.style.borderColor = "green";
        return true;
    }
}

document.querySelector("#forms").addEventListener("submit", function (date2) {
    
    if (!checkN() || !checkM()) {
        date2.preventDefault();
        alert("Заполните все обязательные поля корректно");
    }
    else{
        alert("Спасибо за ваш отзыв!");
    }
});