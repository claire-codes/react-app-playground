const weightConverter = require('../weightConverter');

test('kg to stone', () => {
    expect(weightConverter.kgToStone(1)).toBe(0.16);
});

test('stone to kg', () => {
    expect(weightConverter.stoneToKg(1)).toBe(6.35);
});

test('stone to stone and lbs', ( ) => {
    
})