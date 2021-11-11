<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>DreamWeaver Home Page</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
     <h1>Welcome, <?php echo $_SESSION['names']; ?></h1>
     <a href="logout.php">Continue....</a>
</body>
</html>

<?php 
}else{
     header("Location: index.php");
     exit();
}
 ?>