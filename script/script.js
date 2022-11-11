const form = document.getElementById('form');

form.addEventListener("submit", (e)=> {
    let errorcounter = 0 ;

    const txtFirstName = document.getElementById('txt-firstname');
    const firstName = txtFirstName.value;
    const errorFirstName = document.getElementById('error-firstname');
    const erroriconFirstName = document.getElementById('erroricon-firstname');
    if(firstName == "" || firstName.trim() === ""){
        errorFirstName.style.display = "block";
        erroriconFirstName.style.display = "block";
        txtFirstName.value = "";
        txtFirstName.attributes.placeholder.value = "";
        txtFirstName.classList.add("txt-error-state");
        errorcounter++;
    }else{
        errorFirstName.style.display = "none";
        erroriconFirstName.style.display = "none";
        txtFirstName.attributes.placeholder.value = "First Name";
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
        txtlastName.attributes.placeholder.value = "";
        txtlastName.classList.add("txt-error-state");
        errorcounter++;
    }else{
        errorlastName.style.display = "none";
        erroriconlastName.style.display = "none";
        txtlastName.attributes.placeholder.value = "Last Name";
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
        txtemailaddress.attributes.placeholder.value = "email@example/com";
        txtemailaddress.classList.add("txt-error-state");
        txtemailaddress.classList.add("txt-erroremail");
        errorcounter++;
    }else{
        erroremailaddress.style.display = "none";
        erroriconemailaddress.style.display = "none";
        txtemailaddress.attributes.placeholder.value ="Email Address";
        txtemailaddress.classList.remove("txt-error-state");
        txtemailaddress.classList.remove("txt-erroremail");
    }

    const txtpassword = document.getElementById('txt-password');
    const password = txtpassword.value;
    const errorpassword = document.getElementById('error-password');
    const erroriconpassword = document.getElementById('erroricon-password');
    if(password == "" || password.trim() === ""){
        errorpassword.style.display = "block";
        erroriconpassword.style.display = "block";
        txtpassword.value = "";
        txtpassword.attributes.placeholder.value = "";
        txtpassword.classList.add("txt-error-state");
        errorcounter++;
    }else{
        errorpassword.style.display = "none";
        erroriconpassword.style.display = "none";
        txtpassword.attributes.placeholder.value = "Password";
        txtpassword.classList.remove("txt-error-state");
    }

    console.log(errorcounter)
    if(errorcounter > 0){
        e.preventDefault();
    }else{
        alert("Form Successfully Submitted");
    }
    
})

