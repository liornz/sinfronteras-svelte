
export type userInput = {
  email: string;
  name: string;
  message: string;
};

const validateUserInput = (userInput: userInput): boolean => {
  let inputIsValid = true;
  const { email, name, message } = userInput;
  const pattern =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const isValidEmail = pattern.test(email);

  if (
    !isValidEmail ||
    !name ||
    name.trim() === '' ||
    !message ||
    message.trim() === ''
  ) {
    inputIsValid = false;
  }
  return inputIsValid;
};

export default validateUserInput;
