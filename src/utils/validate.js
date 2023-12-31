export function isValidate(email, password, name) {
  const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isValidName = /^[A-Za-z][A-Za-z0-9_]{2,29}$/.test(name);

  if (email === "" || password === "" || name === "") {
    return "All fields are mandatory";
  }

  if (!isValidEmail) {
    return "Invaild Email";
  }

  if (!isValidPassword) {
    return "Invaild Password";
  }
  if (!isValidName) {
    return "Invaild Name";
  }
  return null;
}
