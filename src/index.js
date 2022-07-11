const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

const regex = /^(\d{1})(\d{2})$/;
const getLT20 = (n) => a[Number(n)];
const getGT20 = (n) => b[n[0]] + ' ' + a[n[1]];

module.exports = function toReadable (number) {
	if (number === 0) return 'zero'
    let numStr = '' + number;
  
  const [, n1, n2] = ('000' + numStr).substr(-3).match(regex);
  let str = '';
  str += n1 != 0 ? getLT20(n1) + 'hundred ' : '';
  str += n2 != 0 ? (getLT20(n2) || getGT20(n2)) : '';

  return str.trim();
}
