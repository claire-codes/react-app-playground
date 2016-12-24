const weightConverter = require('../src/weightConverter');

test('kg to stone', () => {
    expect(weightConverter.kgToStone(1)).toBe(0.16);
});

xtest('kg to stone lbs', () => {
    expect(weightConverter.kgToStoneLbs(1)).toMatchObject({stone: 0, lbs: 2});
});

test('stone to kg', () => {
    expect(weightConverter.stoneToKg(1)).toBe(6.35);
});

xtest('stone to stone and lbs', ( ) => {
    expect(weightConverter.stoneToStoneLbs(1.5)).toMatchObject({stone: 1, lbs: 7});
});

test('stone lbs to kg', () => {
    expect(weightConverter.stoneLbsToKg(1, 7)).toBe(9.52);
});

test('to two dec places', () => {
    expect(weightConverter.twoDecPlaces(1.3333333)).toBe(1.33);
    expect(weightConverter.twoDecPlaces(1.339)).toBe(1.34);
    expect(weightConverter.twoDecPlaces(1.335000)).toBe(1.34);
    expect(weightConverter.twoDecPlaces(1.00000)).toBe(1.00);
});