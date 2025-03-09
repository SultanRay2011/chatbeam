// Dummy user data for simulation
const dummyUsers = [
  {
    username: "exampleUser",
    displayName: "Example User",
    email: "example@example.com",
    password: "password123",
  },
];

// Handling signup
document.getElementById("signupForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = event.target[0].value;
  const displayName = event.target[1].value;
  const email = event.target[2].value;
  const password = event.target[3].value;
  const confirmPassword = event.target[4].value;

  // Password validation
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Adding user to dummy database
  dummyUsers.push({ username, displayName, email, password });
  alert("Signup successful! Welcome to ChatBeam.");
  window.location.href = "login.html"; // Redirect to login page
});

// Handling login
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = event.target[0].value;
  const password = event.target[1].value;

  // Check against dummy user data
  const user = dummyUsers.find((u) => u.username === username && u.password === password);
  if (user) {
    alert(`Welcome back, ${user.displayName}!`);
    window.location.href = "dashboard.html"; // Redirect to dashboard
  } else {
    alert("Invalid username or password!");
  }
});
