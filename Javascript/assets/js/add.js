
function add(){
	/* get value input  */
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var birthday = document.getElementById("birthday").value;
	var password = document.getElementById("password").value;
	var confirmpwd = document.getElementById("confirmpwd").value;

	/* get id of view*/
	var data_name = document.getElementById("data_name");
	var data_email = document.getElementById("data_email");
	var data_phone = document.getElementById("data_phone");
	var data_birthday = document.getElementById("data_birthday");
	var avatars_data = document.getElementById('avatars');

	/* get id error  */
	var error_name = document.getElementById("error_name");
	var error_email = document.getElementById("error_email");
	var error_phone = document.getElementById("error_phone");
	var error_birthday = document.getElementById("error_birthday");
	var error_password = document.getElementById("error_password");
	var error_confirmpwd = document.getElementById("error_confirmpwd");

	/* get id note */
	var note = document.getElementById("note");

	/*convert name to capitalize*/
	const arrName = name.split(" ");
	for (var i = 0; i < arrName.length; i++) {
		arrName[i] = arrName[i].charAt(0).toUpperCase() + arrName[i].slice(1);
	}
	name = arrName.join(" "); 

	/* validate  */
	var text;
	var status = true;

	   //input name
	   
	   if(name.length >= 50){
	   	text = "Please Enter less Than 50 Characters";
	   	error_name.innerHTML = text;
	   	status = false;
	   }else{
	   	var regName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
	   	if(!regName.test(name)){
	   		text = "Invalid name given";
	   		error_name.innerHTML = text;
	   		status = false;
	   	}
	   }

	   //input email

	   var regEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	   if(!regEmail.test(email)){
	   	text = "Invalid email given";
	   	error_email.innerHTML = text;
	   	status = false;
	   }else if(email.length < 16 || email.length > 40){
	   	text = "Invalid email, character length between 6 and 30";
	   	error_email.innerHTML = text;
	   	status = false;
	   }

	   //input phone

	   var regPhone =/((09|03|07|08|05)+([0-9]{8})\b)/g;
	   if(!regPhone.test(phone)){
	   	text = "Invalid phone given";
	   	error_phone.innerHTML = text;
	   	status = false;
	   }
	   		/*format date dd/mm/yyyy*/
		phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");


	   //input password

	   var regPassword =  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	   if(!regPassword.test(password)){
	   	text = "Password has at least one special character, number and uppercase letter";
	   	error_password.innerHTML = text;
	   	status = false;
	   }else if(password.length < 8 || password.length > 30){
	   	text = "Invalid password, character length between 8 and 30";
	   	error_password.innerHTML = text;
	   	status = false;
	   }

	   if(password.toString() != confirmpwd.toString()){
	   	text = "Entered password does not match";
	   	error_confirmpwd.innerHTML = text;
	   	status = false;
	   }

	   //required input 
	   
	   if(name == ""){
	   	text = "Please Enter valid Full name";
	   	error_name.innerHTML = text;
	   	status = false;
	   }
	   if( email== ""){
	   	text = "Please Enter valid Email";
	   	error_email.innerHTML = text;
	   	status = false;status = false;
	   }
	   if( phone== ""){
	   	text = "Please Enter valid Phone";
	   	error_phone.innerHTML = text;
	   	status = false;
	   }

	   if( birthday== ""){
	   	text = "Please Enter valid Birthday";
	   	error_birthday.innerHTML = text;
	   	status = false;
	   }

	   /* save data */ 
	   if(status == true){
	   	note.style.display = "block";
	   	data_name.innerHTML = name;
	   	data_email.innerHTML = email;
	   	data_phone.innerHTML = phone;
	   	data_birthday.innerHTML = birthday;
	 	avatars_data.style.display = "block";
	   	return false;
	   }
	   
	   return false;
	}

	/* upload images*/
	function loadFile(event) {
		var avatar = document.getElementById('avatar');
		var avatars = document.getElementById('avatars');
		avatar.src = URL.createObjectURL(event.target.files[0]);
		avatars.src = URL.createObjectURL(event.target.files[0]);
	};

	/*reset button*/
	function resetForm(){
		document.getElementsByTagName('form')[0].reset();
	}

	/* catch events keyboard */  
	function isKeyPressed(event) {
		var x = document.getElementById("demo");
		if (event.key === "Shift") {
			add();
		}

		if (event.key === "Delete") {
			resetForm();
		} 

	}
	