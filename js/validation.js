function checkName() {

    let name = document.getElementById("name").value;
    let regex = /^[a-zA-ZА-Яа-я]{2,15}$/;
    let message = document.getElementById("messageName");
    
    if (regex.test(name)) { 
        document.getElementById("name").style.borderColor = "green";
        message.textContent = "";
        return true;
    } 
    else {
        document.getElementById("name").style.borderColor = "red";
        message.textContent = "Введите корректное имя: без цифр и дополнительных знаков";
        return false;
    }
}


function checkTel() {

    let tel = document.getElementById("tel").value;
    let regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    let message = document.getElementById("messageTel");
    
    if (regex.test(tel)) { 
        document.getElementById("tel").style.borderColor = "green";
        message.textContent = "";
        return true;
    } 
    else {
        document.getElementById("tel").style.borderColor = "red";
        message.textContent = "Проверьте правильность введеного номера телефона";
        return false;
    }
}

function checkTelegramm() {

    let telegramm = document.getElementById("telegramm").value;
    let regex = /^[a-zA-Z]{2,15}$/;
    let message = document.getElementById("messageTelegramm");
    
    if (regex.test(telegramm)) { 
        document.getElementById("telegramm").style.borderColor = "green";
        message.textContent = "";
        return true;
    } 
    else {
        document.getElementById("telegramm").style.borderColor = "red";
        message.textContent = "Минимум 5 символов: только латнские буквы и цифры  ";
        return false;
    }
}