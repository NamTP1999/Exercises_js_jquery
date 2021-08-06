$().ready(function() {
	$( "#id_items" ).change(function() {
		
		const option = $('#id_items').val();

		/* get length option of province*/
		const countProvince = $('#province > option').length;

		/* set highlight */
		for (let i = 1; i <= countProvince; i++) {
			/* select item*/
			if (option == i ) {
				$('#province :nth-child(' + i + ')').css("color", "white");
				$('#province :nth-child(' + i + ')').css("background", "gray");
			} else {
				$('#province :nth-child(' + i + ')').css("color", "black");
				$('#province :nth-child(' + i + ')').css("background", "none");
			}

			/* select even number*/
			if (option == (countProvince + 1)) {
				if (i % 2 == 0) {
					$('#province :nth-child(' + i + ')').css("color", "white");
					$('#province :nth-child(' + i + ')').css("background", "gray");
				}
			}

			/* select odd*/
			if (option == (countProvince + 2)) {
				if (i % 2 != 0) {
					$('#province :nth-child(' + i + ')').css("color", "white");
					$('#province :nth-child(' + i + ')').css("background", "gray");
				}
			}

			/* reset*/
			if (option == (countProvince + 3)) {
				$('#province :nth-child(' + i + ')').css("color", "black");
				$('#province :nth-child(' + i + ')').css("background", "none");
			}

		}

	})
})
