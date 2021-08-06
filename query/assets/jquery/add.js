$().ready(function() {
	$("#formProfile").validate( {
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		rules: {
			"name": {
				required: true,
				validateName: true,
				maxlength: 50
			},
			"email": {
				required: true,
				email: true,
				rangelength: [16, 40]
			},
			"phone": {
				required: true,
				validatePhone: true
			},
			"birthday": {
				required: true,
				maxlength: 15
			},
			"password": {
				validatePassword: true,
			},
			"confirmpwd": {
				validatePassword: "#confirmpwd",
				equalTo: "#password",
			}
		},

		submitHandler: function(form) {
			var name = $("#name").val();
			name = formatName(name);
			var email = $("#email").val();
			var phone = $("#phone").val();
			phone = formatPhone(phone);
			var birthday = $("#birthday").val();
			birthday = formatDate(birthday);

			/*save data*/
			$("#note").show();    
			$("#data_name").text(name);
			$("#data_email").text(email);
			$("#data_phone").text(phone);
			$("#data_birthday").text(birthday);
			$("#avatars").show();   
		}
	});

	/* custom method*/
	$.validator.addMethod("validateName", function (value, element) {
		return this.optional(element) || /^[a-zA-Z]+ [a-zA-Z]+$/.test(value);
	},"Invalid full name given");

	$.validator.addMethod("validatePhone", function (value, element) {
		return this.optional(element) || /((09|03|07|08|05)+([0-9]{8})\b)/g.test(value);
	}, "Invalid phone given");

	$.validator.addMethod("validatePassword", function (value, element) {
		return this.optional(element) || 
		/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value);
	}, "Invalid password given");

})

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


/* upload images*/
function loadFile(event) {
	const avatar = document.getElementById('avatar');
	const avatars = document.getElementById('avatars');
	avatar.src = URL.createObjectURL(event.target.files[0]);
	avatars.src = URL.createObjectURL(event.target.files[0]);
};

/*reset button*/
function resetForm() {
	location.reload();
}

/* catch events keyboard */  
function isKeyPressed(event) {
	const x = document.getElementById("demo");
	if (event.key === "Shift") {
		$("#formProfile").valid();
	}

	if (event.key === "Delete") {
		resetForm();
	} 

}