export function isMoreThanOneWord(value) {
  return value.split(/\s+/).length > 1;
}

export function containsNumeric(value) {
  return /\d/.test(value);
}

export function containsLetter(value) {
  return Array.from(value).every((char) => /[A-Za-z]/.test(char));
}
