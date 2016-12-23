const weightConverter = require('../weightConverter');

test('kg to stone', () => {
    expect(weightConverter.kgToStone(1)).toBe(0.16);
});

test('stone to kg', () => {
    expect(weightConverter.stoneToKg(1)).toBe(6.35);
});

test('stone to stone and lbs', ( ) => {
    expect(weightConverter.stoneToStoneLbs(1.5)).toMatchObject({stone: 1, lbs: 7});
})

test('stone lbs to kg', () => {
    expect(weightConverter.stoneLbsToKg(1, 7)).toBe(9.52);
});