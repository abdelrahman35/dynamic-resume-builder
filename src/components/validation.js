const globalValidation = {
  length: {
    inputList: ["text", "email"],
    validation: function validateLength(val) {
      return val.length < 3;
    },
    error: "value is too short",
    classNameStyle: "errorStyle",
  },
  regexVaidationForEnglishCharachters: {
    inputList: ["text"],
    validation: function validateLength(val) {
      const regexValidationForEnglishCharacters = /^[a-zA-Z@.]+$/;
      return !regexValidationForEnglishCharacters.test(val);
    },
    error: "only english characters are allowed",
    classNameStyle: "errorStyle",
  },
  emailValidation: {
    inputList: ["email"],
    validation: function validateLength(val) {
      console.log("test");
      const emailRegex =
        /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/gm;
      return !emailRegex.test(val);
    },
    error: "email is not valid",
    classNameStyle: "errorStyle",
  },
};

export default globalValidation;
