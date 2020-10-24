module.exports = function toReadable (number) {
    let numberValue = number;
    let numeral = numberValue % 10;           
    numberValue = (numberValue - numeral) / 10       
    let tens = numberValue % 10;
    numberValue = (numberValue - tens) / 10          
    let hundred = numberValue % 10; 
    numberValue = (numberValue - hundred) / 10       
    
    let numeralArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teensArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tensArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let hundredText; 
    if (hundred !== 0) {
        hundredText = `${numeralArray[hundred]} hundred`;
    } else {
        hundredText = '';
    }       
    
    let tensText;
    if (tens === 1) {
        tensText = teensArray[numeral];
    } else if (tens !== 0 && tens !== 1) {
        tensText = tensArray[tens];
    } else if (tens === 0){
        tensText = '';
    }

    let numeralText;
    if (tens === 1 || (hundred !== 0 || tens !== 0) &&  numeral === 0) {
        numeralText = '';
    } else if ((hundred !== 0 || tens !== 0 && tens !== 1) && numeral !== 0 || (hundred == 0 || tens == 0) && (numeral === 0 || numeral !== 0))  {
        numeralText = numeralArray[numeral];
    } 

    let resulArray = [hundredText, tensText, numeralText];
    return resulArray.filter(element => element !== '').join(' ');
}