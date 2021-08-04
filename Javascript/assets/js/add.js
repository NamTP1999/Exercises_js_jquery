
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

	//input name
	status = validateName(name, errorName);

	//input email
	status = validateEmail(email, errorEmail);

	//input phone
	status = validatePhone(phone, errorPhone);

	//input birthday
	status = validateBirthday(birthday, errorBirthday);

	//input password
	status = validatePassword(password, errorPassword);

	/* check password and confirmpassword*/
	if(password.toString() != confirmpwd.toString()){
	   	text = "Entered password does not match";
	   	errorConfirmpwd.innerHTML = text;
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
	if(!isRequired(name, errorName)){
		return false;

	}else if(!isMax(name, errorName, 50)){
		return false;

	}else if(!isRegex(name, errorName, regName, errorMess)){
		return false;
	}

	return true;
}

function validateEmail(email, errorEmail) {
	const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const errorMess = "Invalid email given";

	if(!isRequired(email, errorEmail)){
		return false;

	}else if(!isRegex(email, errorEmail, regEmail, errorMess)){
		return false;

	}else if(!isBetween(email, errorEmail, 16, 40)){
		return false;
	}

	return true;
}

function validatePhone(phone, errorPhone) {
	const regPhone =/((09|03|07|08|05)+([0-9]{8})\b)/g;
	const errorMess = "Invalid phone given";

	if(!isRequired(phone, errorPhone)){
		return false;

	}else if(!isRegex(phone, errorPhone, regPhone, errorMess)){
		return false;

	}

	return true;
}

function validateBirthday(birthday, errorBirthday) {
	if(!isRequired(birthday, errorBirthday)){
		return false;

	}

	return true;
}

function validatePassword(password, errorPassword) {
	const regPassword =  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	const errorMess = "Password has at least one special character, number and uppercase letter";

	if(!isRegex(password, errorPassword, regPassword, errorMess)){
		return false;

	}else if(!isBetween(password, errorPassword, 8, 30)){
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

