<!DOCTYPE html>
<html>
<head>
	<title>DreamWeaver Login Page</title>
	<link rel="stylesheet" type="text/css" href="stylecontact.css">
</head>
<body>
     <form action="login.php" method="post">
     	<h2>DreamWeaver Inc. Farm Login Page</h2>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
     	<label>User Name</label>
     	<input type="text" name="uname" placeholder=" Employee User Name"><br>

     	<label>Password</label>
     	<input type="password" name="password" placeholder="Employee Password"><br>

     	<button type="submit">Login!</button>
     </form>
</body>
</html>