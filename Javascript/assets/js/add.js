
function add(){
	/*get request submit*/
	event.preventDefault();

	/* get value input  */
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var birthday = document.getElementById("birthday").value;
	var password = document.getElementById("password").value;
	var confirmpwd = document.getElementById("confirmpwd").value;

	/* get id of view*/
	const data_name = document.getElementById("data_name");
	const data_email = document.getElementById("data_email");
	const data_phone = document.getElementById("data_phone");
	const data_birthday = document.getElementById("data_birthday");
	const avatars_data = document.getElementById('avatars');

	/* get id error  */
	const error_name = document.getElementById("error_name");
	const error_email = document.getElementById("error_email");
	const error_phone = document.getElementById("error_phone");
	const error_birthday = document.getElementById("error_birthday");
	const error_password = document.getElementById("error_password");
	const error_confirmpwd = document.getElementById("error_confirmpwd");

	/* get id note */
	const note = document.getElementById("note");

	/* validate  form*/
	var text;
	var status = true;

	   //input name
	  	status = validateName(name, error_name);

	   //input email
	   status = validateEmail(email, error_email);

	   //input phone
	   status = validatePhone(phone, error_phone);

	   //input birthday
	   status = validateBirthday(birthday, error_birthday);

	   //input password
	   status = validatePassword(password, error_password);

	/* check password and confirmpassword*/
   	if(password.toString() != confirmpwd.toString()){
   		text = "Entered password does not match";
   		error_confirmpwd.innerHTML = text;
   		status = false;
	}

	/*format name  to capitalize*/
	name = formatName(name);
	  
	/*format phone */
	phone = formatPhone(phone);

	/*format date*/
	birthday = formatDate(birthday);

	/* save data */ 
	if(status){
	 	note.style.display = "block";
	   	data_name.innerHTML = name;
	   	data_email.innerHTML = email;
	   	data_phone.innerHTML = phone;
	   	data_birthday.innerHTML = birthday;
	 	avatars_data.style.display = "block";
	   	return true;
	}
	   
	return false;
}

	/* validate form*/

	function validateName(name, error_name) {

		const regName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
		const errorMess = "Invalid name given";
		if(!isRequired(name, error_name)){
		   	return false;

		}else if(!isMax(name, error_name, 50)){
			return false;

		}else if(!isRegex(name, error_name, regName, errorMess)){
			return false;
		}

		return true;
	}

	function validateEmail(email, error_email) {
		const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		const errorMess = "Invalid email given";

		if(!isRequired(email, error_email)){
		   	return false;

		}else if(!isRegex(email, error_email, regEmail, errorMess)){
		   	return false;

	   }else if(!isBetween(email, error_email, 16, 40)){
		   	return false;
	   }

	   return true;
	}

	function validatePhone(phone, error_phone) {
		const regPhone =/((09|03|07|08|05)+([0-9]{8})\b)/g;
		const errorMess = "Invalid phone given";

	   if(!isRequired(phone, error_phone)){
		   	return false;

		}else if(!isRegex(phone, error_phone, regPhone, errorMess)){
		   	return false;

	   }

	   return true;
	}

	function validateBirthday(birthday, error_birthday) {
		if(!isRequired(birthday, error_birthday)){
		   	return false;

		}

	   return true;
	}

	function validatePassword(password, error_password) {
	   const regPassword =  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	   const errorMess = "Password has at least one special character, number and uppercase letter";

	   if(!isRegex(password, error_password, regPassword, errorMess)){
		   	return false;

	   }else if(!isBetween(password, error_password, 8, 30)){
		   	return false;
	   }

	   return true;
	}


	/*function validate*/
	function isRequired(inputValue, error_text){
		if(inputValue == ""){
			error_text.innerHTML = "Please Enter value";
			return false;
		}
		return true;
	}

	function isMax(inputValue, error_text, max){
		if(inputValue.length >= max){
			error_text.innerHTML = "Please Enter less Than "+max+" Characters";
			return false;
		}

		return true;
	}

	function isRegex(inputValue, error_text , reg, errorMess){
		if(!reg.test(inputValue)){
			error_text.innerHTML = errorMess;
			return false;
		}

		return true;
	}

	function isBetween(inputValue, error_text , min, max){
		if(inputValue.length < min || inputValue.length > max){
		   	error_text.innerHTML = "Invalid , character length between "+min+" and "+max;
		   	return false;
		}

		return true;
	}


	/*format , name, phone, date */
	function formatName(name){
		const arrName = name.split(" ");
		for (var i = 0; i < arrName.length; i++) {
			arrName[i] = arrName[i].charAt(0).toUpperCase() + arrName[i].slice(1);
		}
		return arrName.join(" ");
	}

	function formatPhone(phone){
		phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
		return phone;
	}

	function formatDate(birthday){
		birthday = birthday.split(' ');
		thisDate = birthday[0].split('-');
        birthday = [thisDate[2],thisDate[1],thisDate[0] ].join("/");
        return birthday;
	}


	/* upload images*/
	function loadFile(event) {
		const avatar = document.getElementById('avatar');
		const avatars = document.getElementById('avatars');
		avatar.src = URL.createObjectURL(event.target.files[0]);
		avatars.src = URL.createObjectURL(event.target.files[0]);
	};

	/*reset button*/
	function resetForm(){
		document.getElementsByTagName('form')[0].reset();
	}

	/* catch events keyboard */  
	function isKeyPressed(event) {
		const x = document.getElementById("demo");
		if (event.key === "Shift") {
			add();
		}

		if (event.key === "Delete") {
			resetForm();
		} 

	}

