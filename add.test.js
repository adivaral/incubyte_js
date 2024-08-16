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

});