document.addEventListener("DOMContentLoaded", function () {

    const signUpButton = document.getElementById('sign-up-button');
    const signInButton = document.getElementById('sign-in-button');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const logoutLink = document.getElementById('logout-link');
    const loginLink = document.getElementById('login-link');
    const userData = document.getElementById('user');
    const cartElement = document.querySelector('.cart');

    function isUserLoggedIn() {
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');
        return username !== null && email !== null;
    }

    if (cartElement && !isUserLoggedIn()) {
        cartElement.style.display = 'none';
    }

    if (signUpButton) {
        signUpButton.addEventListener('click', function () {
            document.querySelector('.contain').classList.add('sign-up-mode');
        });
    }

    if (signInButton) {
        signInButton.addEventListener('click', function () {
            document.querySelector('.contain').classList.remove('sign-up-mode');
        });
    }

    if (loginLink && logoutLink && userData) {
        if (localStorage.getItem("username")) {
            logoutLink.style.display = "inline";
            loginLink.style.display = "none";
            userData.textContent = `Welcome, ${localStorage.getItem("username")}`;
        } else {
            logoutLink.style.display = "none";
            loginLink.style.display = "inline";
            userData.textContent = "";
        }

        logoutLink.addEventListener('click', function (e) {
            e.preventDefault();
            const confirmation = confirm("Are you sure you want to log out?");
            if (confirmation) {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
                localStorage.removeItem("email");
                logoutLink.style.display = "none";
                loginLink.style.display = "inline";
                userData.textContent = "";
                alert("Logged out successfully");
            }
        });
    }

    if (signInForm) {
        signInForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");

            if (username === "" || password === "") {
                alert("please fill data");
                return false;
            }

            if (username !== storedUsername) {
                alert("Incorrect username");
                return false;
            }

            if (password !== storedPassword) {
                alert("Incorrect password");
                return false;
            }

            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            alert("تم تسجيل الدخول بنجاح!");
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }

    if (signUpForm) {
        signUpForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('signUpUsername').value.trim();
            const email = document.getElementById('signUpEmail').value.trim();
            const password = document.getElementById('signUpPassword').value.trim();

            if (username === "" || email === "" || password === "") {
                alert("please fill data");
                return false;
            }

            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            alert("Registration successful! You can now log in");
            setTimeout(() => {
                document.querySelector('.contain').classList.remove('sign-up-mode');
            }, 1500);
        });
    }
});










