function checkName() {
    let nameInput = document.getElementById("name");
    let nameMessage = document.getElementById("messageName");
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

function checkTel() {
    let telInput = document.getElementById("tel");
    let telMessage = document.getElementById("messageTel");
    let regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    if (telInput.value === "") {
        telMessage.innerHTML = "Dведите номер телефона";
        telInput.style.borderColor = "red";
        return false;
    } else if (!regex.test(telInput.value)) {
        telMessage.innerHTML = "Проверьте правильность введеного номера телефона";
        telInput.style.borderColor = "red";
        return false;
    } else {
        telMessage.innerHTML = "";
        telInput.style.borderColor = "green";
        return true;
    }
}

function checkTelegramm() {
    let telegrammInput = document.getElementById("telegramm");
    let telegrammMessage = document.getElementById("messageTelegramm");
    let regex = /^[a-zA-Z]{2,15}$/;

    if (telegrammInput.value === "") {
        telegrammMessage.innerHTML = "Dведите аккаунт Telegram";
        telegrammInput.style.borderColor = "red";
        return false;
    } else if (!regex.test(telegrammInput.value)) {
        telegrammMessage.innerHTML = "Минимум 5 символов: только латинские буквы и цифры";
        telegrammInput.style.borderColor = "red";
        return false;
    } else {
        telegrammMessage.innerHTML = "";
        telegrammInput.style.borderColor = "green";
        return true;
    }
}

document.querySelector("form").addEventListener("submit", function (date) {
    
    if (!checkName() || !checkTel() || !checkTelegramm()) {
        date.preventDefault();
        alert("Заполните все обязательные поля корректно");
    }
    else{
        alert("Спасибо за ваш отклик!");
    }
});