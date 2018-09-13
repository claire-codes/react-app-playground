const weightConverter = require('../weightConverter');

test('kg to stone', () => {
    expect(weightConverter.kgToStone(1)).toBe(0.16);
    expect(weightConverter.kgToStone(69.8)).toBe(10.99);
});

test('kg to stone lbs', () => {
    expect(weightConverter.kgToStoneLbs(1)).toEqual({ stone: 0, lbs: 2 });
    expect(weightConverter.kgToStoneLbs(0.7)).toEqual({ stone: 0, lbs: 1.5 });
    expect(weightConverter.kgToStoneLbs(69.8)).toEqual({ stone: 11, lbs: 0 });
});

test('stone to kg', () => {
    expect(weightConverter.stoneToKg(1)).toBe(6.35);
});

test('stone to stone and lbs', () => {
    expect(weightConverter.stoneToStoneLbs(1.5)).toEqual({ stone: 1, lbs: 7 });
    expect(weightConverter.stoneToStoneLbs(10.99)).toEqual({
        stone: 11,
        lbs: 0,
    });
});

test('stone lbs to kg', () => {
    expect(weightConverter.stoneLbsToKg(1, 7)).toBe(9.52);
});

test('lbs to stone', () => {
    expect(weightConverter.lbsToStone(14)).toBe(1);
    expect(weightConverter.lbsToStone(7)).toBe(0.5);
    expect(weightConverter.lbsToStone(3)).toBe(0.21);
    expect(weightConverter.lbsToStone(7.5)).toBe(0.54);
});

test('to two dec places', () => {
    expect(weightConverter.twoDecPlaces(1.3333333)).toBe(1.33);
    expect(weightConverter.twoDecPlaces(1.339)).toBe(1.34);
    expect(weightConverter.twoDecPlaces(1.335)).toBe(1.34);
    expect(weightConverter.twoDecPlaces(1.0)).toBe(1.0);
});

test('to nearest half pound', () => {
    expect(weightConverter.nearestHalfPound(1.333)).toBe(1.5);
    expect(weightConverter.nearestHalfPound(0)).toBe(0);
    expect(weightConverter.nearestHalfPound(1)).toBe(1);
    expect(weightConverter.nearestHalfPound(1.1)).toBe(1);
    expect(weightConverter.nearestHalfPound(1.4)).toBe(1.5);
    expect(weightConverter.nearestHalfPound(1.5)).toBe(1.5);
    expect(weightConverter.nearestHalfPound(1.6)).toBe(1.5);
    expect(weightConverter.nearestHalfPound(1.9)).toBe(2);
});
