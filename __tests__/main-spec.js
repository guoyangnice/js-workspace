const createMutiplyTable1 = require('../main');

it('should return multiply table from 2 to 4 when call createMultiplyTable given 2 and 4', () => {
    expect(createMutiplyTable1(2, 4))
        .toBe("2*2=4\t\n2*3=6\t3*3=9\t\n2*4=8\t3*4=12\t4*4=16");
});

// it('should return false', () => {
//     expect(createMultiplyTable('2', '4'))
//         .toBe(false);
// });

// it('should return false', () => {
//     expect(createMultiplyTable(0, '4'))
//         .toBe(false);
// });

// it('should return false', () => {
//     expect(createMultiplyTable(1001, 1001))
//         .toBe(false);
// });