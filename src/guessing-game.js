class GuessingGame {
    constructor(value) {
        this.value = value;
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.value = Math.floor((this.max - this.min + 1) / 2 + this.min)
    }

    lower() {
        return this.max = this.value
    }

    greater() {
        return this.min = this.value
    }
}

module.exports = GuessingGame;
