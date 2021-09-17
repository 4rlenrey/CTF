function input_colors(success) {
		let objects = [];
		let colors = [];
		objects.push(document.getElementById("submit_button"));
		objects.push(document.getElementById("flag_container"));
		objects.push(document.getElementById("flag_input"));
		objects.push(document.getElementById("flag_header"));
		for (let x = 0; x < 4; x++) {
			colors[x] = objects[x].style.color;
			objects[x].style.color = (success) ? '#9BFFFF' : '#E93E00';
			objects[x].style.borderColor = (success) ? '#9BFFFF' : '#E93E00';
		}
		setTimeout(function () {
			for (let x = 0; x < 4; x++) {
				objects[x].style.color = colors[x];
				objects[x].style.borderColor = colors[x];
			}
		}, 500);
}