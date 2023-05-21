export function validate(rule, value, name) {
  const [ruleName, ruleParams] = rule.split(":");
  const rules = {
    required: function (val) {
      return !val ? `${name} is required` : '';
    },
    min: function (val) {
      return val.length < ruleParams ? `Min length ${ruleParams}!` : '';
    },
    max: function (val) {
      return val.length > ruleParams ? `Max length ${ruleParams}!` : '';
    },
    email: function (val) {
      return validEmail(val) ? '' : 'Enter valid Email!';
    },
    maxSize: function (val) {
      return val.size > (ruleParams * 10e5) ? `File size should be maximun ${ruleParams} MB` : '';
    },
    minSize: function (val) {
      return val.size < (ruleParams * 10e5) ? `File size should be minimum ${ruleParams} MB` : '';
    },
  };
  return rules[ruleName](value);
}

function validEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}