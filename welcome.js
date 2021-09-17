function submit_flag() {
	var input = document.getElementById("flag_input");
	var input_value = input.value;
	if (input_value == "4rl{k1gglv2nrr69kwqbt85nw46}") {
		input_colors(true);
	}
	else {
		input_colors(false);
	}
}