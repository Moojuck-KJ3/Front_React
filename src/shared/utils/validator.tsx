export const validateLoginForm = ({ email, password }: { email: string; password: string }): boolean => {
  const isMailValid: boolean = validateMail(email);
  const isPasswordValid: boolean = validatePassword(password);

  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}): boolean => {
  return validateMail(email) && validatePassword(password) && validateUsername(username);
};

const validatePassword = (password: string): boolean => {
  return password.length > 5 && password.length < 12;
};

export const validateMail = (email: string): boolean => {
  const emailPattern: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const validateUsername = (username: string): boolean => {
  return username.length > 2 && username.length < 13;
};
