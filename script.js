console.log ('Hello world!');

let num = 1;
num = 3;
num += 3;
num++;
num = num**2;
num = 13;
num = num %2;
// It will use the X ?/number ? number value, example 6 1/2 would be 1
num %= 2;
//var text = 'Hello'; Dont use var
console.log(num);
let string = 'hello';
// soovitatud kasutada ' märke, kui just lauses ei ole ' näiteks don't, ss kasutada ""
string = "hello";
string = `hello
multi line
string`;
string = `hello number is: ${num}`
string = 'hello number is: '+ num;

let boolean = true;
console.log(boolean);
boolean = false;
console.log(boolean);
boolean = true || false || true;
console.log(boolean);
boolean = !true;
console.log(boolean);
boolean = true && false || true && !false;
console.log(boolean);
num = 10;
boolean = num > 10;
boolean = num < 10;
boolean = num == 10;
console.log(boolean);
boolean = num >= 10;
console.log(boolean);
if(num == 10) {
    console.log('võrdne kümnega');
} else {
    console.log('ei ole võrdne kümnega');
}
console.log(Boolean(num));
console.log(Boolean('sfakoksf'));
console.log(Boolean(0));
console.log(Boolean(''));

let noValue = null;
let noValue2;
console.log(noValue);
console.log(noValue2);
num = 1/0;
console.log(num);
num = -1/0;
console.log(num);

let array = [1, 2, true, 1.2, 'hello'];
console.log(array);
console.log(array[4])