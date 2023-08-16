const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

const inputs = [123, '123', 123.456, -123.00, false, true, undefined];

console.log('SIMPLE TESTS:');

inputs.forEach(i => {
    console.log(`${isNumber(i)}: ${i} is number`);
});
