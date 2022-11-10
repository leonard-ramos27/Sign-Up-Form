const form = document.getElementById('form');

form.addEventListener("submit", (e)=> {

    const txtFirstName = document.getElementById('txt-firstname');
    const firstName = txtFirstName.value;
    const errorFirstName = document.getElementById('error-firstname');
    const erroriconFirstName = document.getElementById('erroricon-firstname');
    if(firstName == "" || firstName.trim() === ""){
        errorFirstName.style.display = "block";
        erroriconFirstName.style.display = "block";
        txtFirstName.value = "";
        txtFirstName.classList.add("txt-error-state");
    }else{
        errorFirstName.style.display = "none";
        erroriconFirstName.style.display = "none";
        txtFirstName.classList.remove("txt-error-state");
    }

    const txtlastName = document.getElementById('txt-lastname');
    const lastName = txtlastName.value;
    const errorlastName = document.getElementById('error-lastname');
    const erroriconlastName = document.getElementById('erroricon-lastname');
    if(lastName == "" || lastName.trim() === ""){
        errorlastName.style.display = "block";
        erroriconlastName.style.display = "block";
        txtlastName.value = "";
        txtlastName.classList.add("txt-error-state");
    }else{
        errorlastName.style.display = "none";
        erroriconlastName.style.display = "none";
        txtlastName.classList.remove("txt-error-state");
    }

    const txtemailaddress = document.getElementById('txt-emailaddress');
    const emailAddress = txtemailaddress.value;
    const erroremailaddress = document.getElementById('error-emailaddress');
    const erroriconemailaddress = document.getElementById('erroricon-emailaddress');
    if(emailAddress == "" || emailAddress.trim() === ""){
        erroremailaddress.style.display = "block";
        erroriconemailaddress.style.display = "block";
        txtemailaddress.value = "";
        txtemailaddress.attributes.placeholder = "email@example/com";
        txtemailaddress.classList.add("txt-error-state");
    }else{
        erroremailaddress.style.display = "none";
        erroriconemailaddress.style.display = "none";
        txtemailaddress.attributes.placeholder="Email Address";
        txtemailaddress.classList.remove("txt-error-state");
    }

    const txtpassword = document.getElementById('txt-password');
    const password = txtpassword.value;
    const errorpassword = document.getElementById('error-password');
    const erroriconpassword = document.getElementById('erroricon-password');
    if(password == "" || password.trim() === ""){
        errorpassword.style.display = "block";
        erroriconpassword.style.display = "block";
        txtpassword.value = "";
        txtpassword.classList.add("txt-error-state");
    }else{
        errorpassword.style.display = "none";
        erroriconpassword.style.display = "none";
        txtpassword.classList.remove("txt-error-state");
    }

    e.preventDefault();
})

