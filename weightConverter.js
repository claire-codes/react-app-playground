module.exports =  {
    FACTOR: 6.35,

    kgToStone: function(kg) {
        // round to 2 d.p.
        return Math.round((kg / this.FACTOR) * 100) / 100;
    },

    stoneToKg: function(stone) {
        return stone * this.FACTOR;
    },

    stoneToStoneLbs: function(stone) {
        return 42;
    },

    stoneLbsToKg: function(stone, lbs) {
        return Math.round(this.stoneToKg(stone + (lbs / 14)) * 100) / 100;
    },
}
