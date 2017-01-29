class GuessingGame {
    constructor() 
    {
        this._max=0;
        this._min=0;
    }

    setRange(min, max) 
    {
        this._max=max;
        this._min=min;
    }

    guess() 
    {
        return Math.round((this._max+this._min)/2);
    }

    lower() 
    {
        var delta=Math.round((this._max-this._min)/2);
        this._max-=delta;
    }

    greater() 
    {
        var delta=Math.round((this._max-this._min)/2);
        this._min+=delta;

    }
}

module.exports = GuessingGame;
