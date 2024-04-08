const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
  ];
  const form = document.getElementById("login-form");
  const errorMsg = document.getElementById("error-msg");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      alert("Login successful!");
    } else {
      errorMsg.textContent = "Invalid username or password";
    }
  });
  