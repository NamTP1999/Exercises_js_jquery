
function add() {
	/*get request submit*/
	event.preventDefault();

	/* get value input  */
	var name = document.getElementById("name").value.trim();
	var email = document.getElementById("email").value.trim();
	var phone = document.getElementById("phone").value.trim();
	var birthday = document.getElementById("birthday").value;
	var password = document.getElementById("password").value.trim();
	var confirmpwd = document.getElementById("confirmpwd").value.trim();

	/* get id of view*/
	const dataName = document.getElementById("data_name");
	const dataEmail = document.getElementById("data_email");
	const dataPhone = document.getElementById("data_phone");
	const dataBirthday = document.getElementById("data_birthday");
	const avatarsData = document.getElementById('avatars');

	/* get id error  */
	const errorName = document.getElementById("error_name");
	const errorEmail = document.getElementById("error_email");
	const errorPhone = document.getElementById("error_phone");
	const errorBirthday = document.getElementById("error_birthday");
	const errorPassword = document.getElementById("error_password");
	const errorConfirmpwd = document.getElementById("error_confirmpwd");

	/* get id note */
	const note = document.getElementById("note");

	/* validate  form*/
	var text;
	var status = true;

	//input password
	statusPWD = validatePassword(password, errorPassword);

	//input birthday
	statusBD = validateBirthday(birthday, errorBirthday);

	//input name
	statusN = validateName(name, errorName);

	//input email
	statusE = validateEmail(email, errorEmail);

	//input phone
	statusP = validatePhone(phone, errorPhone);


	/* check password and confirmpassword*/
	if (password.toString() != confirmpwd.toString()) {
		text = "Entered password does not match";
		errorConfirmpwd.innerHTML = text;
	}

	/*format name  to capitalize*/
	name = formatName(name);

	/*format phone */
	phone = formatPhone(phone);

	/*format date*/
	// birthday = formatDate(birthday);

	/* save data */ 
	if (statusN && statusE && statusP && statusBD && password == confirmpwd) {
		//reset form 
		errorName.innerHTML = "";
		errorEmail.innerHTML = "";
		errorPhone.innerHTML = "";
		errorBirthday.innerHTML = "";
		errorPassword.innerHTML = "";
		errorConfirmpwd.innerHTML = "";

		note.style.display = "block";
		dataName.innerHTML = name;
		dataEmail.innerHTML = email;
		dataPhone.innerHTML = phone;
		dataBirthday.innerHTML = birthday;
		avatarsData.style.display = "block";
		return true;
	}
	
	return false;
}

/* validate form*/

function validateName(name, errorName) {

	const regName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
	const errorMess = "Invalid name given";
	if (!isRequired(name, errorName)) {
		return false;

	} else if (!isMax(name, errorName, 50)) {
		return false;

	} else if (!isRegex(name, errorName, regName, errorMess)) {
		return false;
	}

	return true;
}

function validateEmail(email, errorEmail) {
	const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const errorMess = "Invalid email given";

	if (!isRequired(email, errorEmail)) {
		return false;

	} else if (!isRegex(email, errorEmail, regEmail, errorMess)) {
		return false;

	} else if (!isBetween(email, errorEmail, 16, 40)) {
		return false;
	}

	return true;
}

function validatePhone (phone, errorPhone) {
	const regPhone =/((0)+([0-9]{9})\b)/g;
	const errorMess = "Start 0 ( Ex: 0123456789 )";

	if (!isRequired(phone, errorPhone)) {
		return false;
	} else if (!isRegex(phone, errorPhone, regPhone, errorMess)) {
		return false;
	}

	return true;
}

function validateBirthday(birthday, errorBirthday) {
	if (!isRequired(birthday, errorBirthday)) {
		return false;
	}else{
		let day = new Date();
        let year = day.getFullYear();
        let lastDay = new Date(birthday.slice(6), birthday.slice(3, 5), 0);
        let date = lastDay.getDate();
        if ( birthday.slice(3, 5) > 12 || birthday.slice(0, 2) > date || birthday.slice(6) >= year) {
        	error_birthday.innerHTML = "Please check the date month year";
        } else if(isNaN(birthday.slice(0, 2)) || 
        	isNaN(birthday.slice(3, 5)) || isNaN(birthday.slice(6)) ){
        	error_birthday.innerHTML = "Date cannot enter letters";
        }
        return true;
	}

	return true;
}

function validatePassword(password, errorPassword) {
	const regPassword =  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}/;
	const errorMess = "Password has at least one special character, number and uppercase letter";

	if ( password != "") {
		if(!isRegex(password, errorPassword, regPassword, errorMess)) {
			return false;
		} else if (!isBetween(password, errorPassword, 8, 30)) {
			return false;
		} else if (!/^[a-zA-Z]{1}/.test(password)) {
	        errorPassword.innerHTML = "Password must start with letter";
	        return false;
     	} else if (!/[\d]/.test(password)){
     		error_password = "Password has at least one special character, number and uppercase letter";
     	} 
	}
	return true;
}


/*function validate*/
function isRequired(inputValue, error_text){
	if (inputValue == "") {
		error_text.innerHTML = "Please Enter value";
		return false;
	}

	return true;
}

function isMax(inputValue, error_text, max){
	if (inputValue.length >= max) {
		error_text.innerHTML = "Please Enter less Than "+max+" Characters";
		return false;
	}

	return true;
}

function isRegex (inputValue, error_text , reg, errorMess) {
	if (!reg.test(inputValue)) {
		error_text.innerHTML = errorMess;
		return false;
	}

	return true;
}

function isBetween(inputValue, error_text , min, max) {
	if (inputValue.length < min || inputValue.length > max) {
		error_text.innerHTML = "Invalid , character length between " + min + " and " + max;
		return false;
	}

	return true;
}


/*format , name, phone, date */
function formatName(name) {
	const arrName = name.split(" ");

	for (var i = 0; i < arrName.length; i++) {
		arrName[i] = arrName[i].charAt(0).toUpperCase() + arrName[i].slice(1);
	}

	return arrName.join(" ");
}

function formatPhone(phone) {
	phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
	return phone;
}

function formatDate(birthday) {
	birthday = birthday.split(' ');
	thisDate = birthday[0].split('-');
	birthday = [thisDate[2],thisDate[1],thisDate[0] ].join("/");
	return birthday;
}

function inputDate(input) {
	if (input.value.length == 2) {
		input.value = input.value + "-";
	}
	if (input.value.length == 5) {
		input.value = input.value + "-";
	}
}


/* upload images*/
function loadFile(event) {
	const avatar = document.getElementById('avatar');
	const avatars = document.getElementById('avatars');
	avatar.src = URL.createObjectURL(event.target.files[0]);
	avatars.src = URL.createObjectURL(event.target.files[0]);
}

/*reset button*/
function resetForm() {
	location.reload();
}

/* catch events keyboard */  

document.onkeyup = function(event) {
	if (event.key == "Shift") {
		add();
	}
	if (event.key == "Delete") {
		resetForm();
	}
}
