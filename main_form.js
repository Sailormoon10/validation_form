<!DOCTYPE html>
<html>
<head>
  <title>Form Validation Example</title>
  <script>
    function validateForm() {
      let name = document.forms["myForm"]["name"].value;
      let email = document.forms["myForm"]["email"].value;
      let password = document.forms["myForm"]["password"].value;

      if (name == "") {
        alert("Please enter your name.");
        return false;
      }
      if (email == "") {
        alert("Please enter your email.");
        return false;
      }
      if (password == "") {
        alert("Please enter your password.");
        return false;
      }
      if (password.length < 8) {
        alert("Your password must be at least 8 characters long.");
        return false;
      }
    }
  </script>
</head>
<body>
  <h1>Form Validation Example</h1>
  <form name="myForm" onsubmit="return validateForm()" method="post">
    <label for="name">Name:</label>
    <input type="text" name="name"><br>

    <label for="email">Email:</label>
    <input type="email" name="email"><br>

    <label for="password">Password:</label>
    <input type="password" name="password"><br>

    <input type="submit" value="Submit">
  </form>
</body>
</html>
