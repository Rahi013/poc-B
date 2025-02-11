document.addEventListener("DOMContentLoaded", function () {
   
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); 
        let username = document.getElementById("first").value;
        let password = document.getElementById("password").value;

       
        const fixedUsername = "rahi";
        const fixedPassword = "1234";

        if (username === "" || password === "") {
            alert("Please enter both username and password!");
            return;
        }

        
        if (username === fixedUsername && password === fixedPassword) {
            localStorage.setItem("username", username);
            localStorage.setItem("password",password);
                     alert("Login successful!");
        //    localStorag.setItem("username",username)
        //    localStorage.setItem("password",password)
        } else {
            alert("Invalid username or password!");
        }
    });

    
 
});
