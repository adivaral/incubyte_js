const add = require('./add');

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return input number if there is only one input',()=> {
        expect(add("1").tobe(1));
    });

    test('should accept multiple numbers as input',()=> {
            expect(add("1,4,6").tobe(11));
    });

    test('should check new line in beetween numbers , and handle them',()=> {
        expect(add("1/n4,6").tobe(11));
    });

    test('should handle different delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

});
