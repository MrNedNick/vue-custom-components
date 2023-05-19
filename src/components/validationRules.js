export function validate(rule, value, name) {
  const [ruleName, ruleParams] = rule.split(":");
  const params = [ruleName, ruleParams ? ruleParams.split(",") : []];
  // console.log(params);
  const rules = {
    required: function (val) {
      return !val ? `${name} is required` : "";
    },
    min: function (val) {
      return val.length >= params.ruleParams ? `${name} is min` : "";
    },
  };
  // console.log(rules.required(value))
  return rules.required(value);
}
// parseRule(rule) {
//   const [ruleName, ruleParams] = rule.split(':')
//   return [ruleName, ruleParams ? ruleParams.split(',') : []]
// },
// function validation(rulesName, value, name) {
//   // TODO: parse rule param
//   // TODO: should handle few errors
//   const rules = {
//     required: function(e) {
//       return !e ? `${name} is required` : '';
//     },
//     // min: function(params[min]) {}
//   };
//   return rules[rule](value);
// }


// export function validateRequired(value) {
//   return value.trim() !== '';
// }

// export function validateMinLength(value, minLength) {
//   return value.length >= minLength;
// }

// export function validateMaxLength(value, maxLength) {
//   return value.length <= maxLength;
// }

// export function validateEmail(value) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(value);
// }