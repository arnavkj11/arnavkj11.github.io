<?php ob_start() ?>

<html>
<head>
    <title>Registration Form</title>
    <link rel="stylesheet" type="text/css" href="css/customer_reg_form.css"/>
    
	<?php include'header.php';  ?>
    </head>
    <body>
    <div class="container_regfrm_container_parent">
	<h3>Online Account Opening Form</h3>
	<div class="container_regfrm_container_parent_child">
		<form method="post">
				 <input type="text" name="name" placeholder="Name*" required />
				 <select name ="gender" required >
					  <option class="default" value="" disabled selected>Gender*</option>
					  <option value="Male" required >Male</option>
					  <option value="Female">Female</option>
					  <option value="Others">Others</option>
				</select>
				 <input type="text" name="mobile" placeholder="Mobile no*" required />
				 <input type="text" name="email" placeholder="Email id*" />
				 <input type="text" name="landline" placeholder="Landline no*" />
				 <input type="text" name="dob" placeholder="Date of Birth*" onfocus="(this.type='date')" required />
				 <input type="text" name="pan_no" placeholder="PAN Number*" required />
				 <input type="text" name="citizenship" placeholder="Aadhar Card Number*" required />
				 <input class="address" type="text" name="homeaddrs" placeholder="Home Address*" required  />
				 <input class="address" type="text" name="officeaddrs" placeholder="Office Address" />
				 <input type="text" name="country" placeholder="INDIA" value="INDIA" readonly="readonly" />



				 <select name ="state" required >
					  <option class="default" value="" disabled selected>State*</option>
					  
					  <option value="Rajasthan">Rajasthan</option>
					  <option value="Maharashtra">Maharashtra</option>
					  <option value="Madhya Pradesh">Madhya Pradesh</option>
					  <option value="Utter Pradesh">Utter Pradesh</option>
					  <option value="Karnataka">Karnataka</option>
					  <option value="Delhi-NCR">Delhi-NCR</option>
					  <option value="Tamil Nadu">Tamil Nadu</option>
					  <option value="Telangana">Telangana</option>
				</select>



				 <select name ="city" required >
					  <option class="default" value="" disabled selected>City*</option>
					  <option value="Mumbai">Mumbai</option>
					  <option value="Pune">Pune</option>
					  <option value="Jaipur">Jaipur</option>
					  <option value="Udaipur">Udaipur</option>
					  <option value="Indore">Indore</option>
					  <option value="Gurgoan">Gurgoan</option>
					  <option value="Noida">Noida</option>
					  <option value="New Delhi">New Delhi</option>
					  <option value="Bengluru">Bengluru</option>
					  <option value="Chennai">Chennai</option>
					  <option value="Hyderabad">Hyderabad</option>
					  <!-- <option value="Vancouver">Vancouver</option>
					  <option value="Olympia">Olympia</option>
					  <option value="Honolulu">Honolulu</option>
					  <option value="Hawi">Hawi</option>
					  <option value="Lahaina">Lahaina</option>
					  <option value="Anchorage">Anchorage</option>
					  <option value="Sitka">Sitka</option>
					  <option value="Seward">Seward</option>
					  <option value="Richmond">Richmond</option>
					  <option value="Williamsburg">Williamsburg</option>
					  <option value="Alexandria">Alexandria</option>
					  <option value="Boise">Boise</option>
					  <option value="Twin Falls">Twin Falls</option>
					  <option value="Moscow">Moscow</option> -->
					  
				</select>



				 
				 <input type="text" name="pin" placeholder="Pin Code*" required />
				 <input type="text" name="arealoc" placeholder="Area/Locality*" required />
				 <!-- <input type="text" name="nominee_name" placeholder="Nominee Name (If any)" />
				 <input type="text" name="nominee_ac_no" placeholder="Nominee Account no"  /> -->
				 
				 <select name ="acctype" required >
					  <option class="default" value="" disabled selected>Account Type*</option>
					  <option value="Saving">Saving</option>
					  <option value="Current">Current</option>
				</select>
				<input type="submit" name="submit" value="Submit">
				</form>
         </div>
		 </div>
		 
<?php include'footer.php';?>
    
</body>
</html>


<?php 

if(isset($_POST['submit'])){

	session_start();
	$_SESSION['$cust_acopening'] = TRUE;
	$_SESSION['cust_name']=$_POST['name'];
	$_SESSION['cust_gender']=$_POST['gender'];
	$_SESSION['cust_mobile']=$_POST['mobile'];
	$_SESSION['cust_email']=$_POST['email'];
	$_SESSION['cust_landline']=$_POST['landline'];
	$_SESSION['cust_dob']=$_POST['dob'];
	$_SESSION['cust_pan=']=$_POST['pan_no'];
	$_SESSION['cust_citizenship']=$_POST['citizenship'];
	$_SESSION['cust_homeaddrs']=$_POST['homeaddrs'];
	$_SESSION['cust_officeaddrs']=$_POST['officeaddrs'];
	$_SESSION['cust_country']=$_POST['country'];
	$_SESSION['cust_state']=$_POST['state'];
	$_SESSION['cust_city']=$_POST['city'];
	$_SESSION['cust_pin']=$_POST['pin'];
	$_SESSION['arealoc']=$_POST['arealoc'];
	$_SESSION['nominee_name']=$_POST['nominee_name'];
	$_SESSION['nominee_ac_no']=$_POST['nominee_ac_no'];
	$_SESSION['cust_acctype']=$_POST['acctype'];
	
	header('location:cust_regfrm_confirm.php');
	
	
}

?>