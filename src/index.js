module.exports = function toReadable (number) {
    if (+number == undefined || +number >= 1000 || +number < 0)  throw ('Enter value from 1 to 999');
    number = String(number);
    number = number.split('');
    if (number[0] == 0) return 'zero';
    let result = [];

    for (let i = number.length - 1; i >= 0; i--) {
        // UNITS
        if (i == number.length - 1) {
            switch (+number[i]) {
                case 1:
                    result.push('one');
                    break;
                case 2:
                    result.push('two');
                    break;
                case 3:
                    result.push('three');
                    break;
                case 4:
                    result.push('four');
                    break;
                case 5:
                    result.push('five');
                    break;
                case 6:
                    result.push('six');
                    break;
                case 7:
                    result.push('seven');
                    break;
                case 8:
                    result.push('eight');
                    break;
                case 9:
                    result.push('nine');
                    break;
            };
        // TENS    
        } else if (i == number.length - 2 && number[i] == 1) {
            switch (+(number[i] + number[i + 1])) {
                // 10-19
                case 10:
                    result.pop();
                    result.push('ten');
                    break;
                case 11:
                    result.pop();
                    result.push('eleven');
                    break;
                case 12:
                    result.pop();
                    result.push('twelve');
                    break;
                case 13:
                    result.pop();
                    result.push('thirteen');
                    break;
                case 14:
                    result.pop();
                    result.push('fourteen');
                    break;
                case 15:
                    result.pop();
                    result.push('fifteen');
                    break;
                case 16:
                    result.pop();
                    result.push('sixteen');
                    break;
                case 17:
                    result.pop();
                    result.push('seventeen');
                    break;
                case 18:
                    result.pop();
                    result.push('eighteen');
                    break;
                case 19:
                    result.pop();
                    result.push('nineteen');
                    break;
            };
                //20-90
        } else if (i == number.length - 2) {
            switch (+number[i]) {
                case 2:
                    result.push('twenty');
                    break;
                case 3:
                    result.push('thirty');
                    break;
                case 4:
                    result.push('forty');
                    break;
                case 5:
                    result.push('fifty');
                    break;
                case 6:
                    result.push('sixty');
                    break;
                case 7:
                    result.push('seventy');
                    break;
                case 8:
                    result.push('eighty');
                    break;
                case 9:
                    result.push('ninety');
                    break;
            };
        // HUNDREDS
        } else if (i == number.length - 3) {
            switch (+number[i]) {
                case 1:
                    result.push('one hundred');
                    break;
                case 2:
                    result.push('two hundred');
                    break;
                case 3:
                    result.push('three hundred');
                    break;
                case 4:
                    result.push('four hundred');
                    break;
                case 5:
                    result.push('five hundred');
                    break;
                case 6:
                    result.push('six hundred');
                    break;
                case 7:
                    result.push('seven hundred');
                    break;
                case 8:
                    result.push('eight hundred');
                    break;
                case 9:
                    result.push('nine hundred');
                    break;
            };
        };
    };

    return result.reverse().join(' ');
}
