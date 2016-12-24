module.exports =  {
    FACTOR: 6.35,

    kgToStone: function(kg) {
        kg = parseFloat(kg);
        // round to 2 d.p.
        return this.twoDecPlaces(kg / this.FACTOR);
    },

    stoneToKg: function(stone) {
        stone = parseFloat(stone);
        return stone * this.FACTOR;
    },

    stoneToStoneLbs: function(stone) {
        stone = parseFloat(stone);
        return 42;
    },

    stoneLbsToKg: function(stone, lbs) {
        stone = parseFloat(stone);
        lbs = parseFloat(lbs);
        return this.twoDecPlaces(this.stoneToKg(stone + (lbs / 14)));
    },

    twoDecPlaces: function(numb) {
        return Math.round(numb * 100) / 100;
    }
}
