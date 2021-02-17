// Regex
export const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
export const user = /^[a-zA-Z0-9._-]{4,18}/;
export const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;
export const integer = /(^\d{0,9}$)/;
export const numberValidation = /^([0-9]\d*(\.)\d*|0?(\.)\d*[0-9]\d*|[0-9]\d*)$/;

export const isValidUser = (input: string) => {
	const isOnlyNumbers = integer.test(input);
	const isValidName = user.test(input);

	if (isOnlyNumbers) {
		return false;
	}

	if (isValidName && !isOnlyNumbers) {
		return true;
	}
};

export const isValidPassword = (input: string) => password.test(input);
