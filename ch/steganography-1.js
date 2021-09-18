// Not a part of a challenge. You can still try to break it ;p
async function submit_flag(){
	let input = document.getElementById("flag_input");
	let input_value = input.value;
	let is_correct = await compare_flag_hashes(input_value, 1);

	if (is_correct) {
		input_colors(true);
	}
	else {
		input_colors(false);
	}
}