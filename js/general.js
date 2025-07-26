export function convertPixelNumberToNumber(value) {
	let newValue = +(value.replace("px",""));

	// newValue = isNaN(newValue) ? 0 : newValue;
	if(isNaN(newValue)) {
		newValue = 0;
	}

	return newValue;
}

// Função que cria bloqueio para cliques rápidos
export function shouldItClick(buttonTag, callback) {
	buttonTag.shouldItClick = true;

	buttonTag.addEventListener("click", (e) => {
		console.log("button click - before ", buttonTag.shouldItClick);
		
		if(buttonTag.shouldItClick === false) {
			return;
		}
		
		console.log("button click - after ", buttonTag.shouldItClick);

		buttonTag.shouldItClick = false;

		callback();

		setTimeout(() => {
			buttonTag.shouldItClick = true;
		}, 500);
	});
}