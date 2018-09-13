module.exports = {
    FACTOR: 6.35,

    kgToStone: function(kg) {
        kg = parseFloat(kg);
        return this.twoDecPlaces(kg / this.FACTOR);
    },

    kgToStoneLbs: function(kg) {
        kg = parseFloat(kg);
        let rawStone = this.kgToStone(kg);
        return this.stoneToStoneLbs(rawStone);
    },

    stoneToKg: function(stone) {
        stone = parseFloat(stone);
        return stone * this.FACTOR;
    },

    stoneToStoneLbs: function(rawStone) {
        rawStone = parseFloat(rawStone);
        let rawLbs = rawStone % 1;
        let lbs = this.nearestHalfPound(rawLbs * 14);
        if (lbs === 14) {
            return {
                stone: Math.ceil(rawStone),
                lbs: 0,
            };
        }
        return {
            stone: parseInt(rawStone, 10),
            lbs: this.nearestHalfPound(rawLbs * 14),
        };
    },

    stoneLbsToKg: function(stone, lbs) {
        stone = parseFloat(stone);
        lbs = parseFloat(lbs);
        return this.twoDecPlaces(this.stoneToKg(stone + this.lbsToStone(lbs)));
    },

    lbsToStone: function(stone) {
        return this.twoDecPlaces(stone / 14);
    },

    twoDecPlaces: function(numb) {
        return Math.round(numb * 100) / 100;
    },

    nearestHalfPound: function(numb) {
        return Math.round(numb * 2) / 2;
    },
};
