function myFunction() {
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const loginButton = document.getElementById('login-button');

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    // //if (emailValue === 'sam@mail.com' && passwordValue === 'samsam') {
    //     alert('Connexion réussie !');
    // } else {
    //     alert('Identifiants invalides. Veuillez réessayer.');
    // }

    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
        })

    })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem('token', res.token)
            //a faire redirection vers la page home 
            window.location.replace("./index.html")

        })
        .catch(e => alert(e))


}


