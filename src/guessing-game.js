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
        this._min=Math.round((this._min+this._max)/2);
    }

    greater() 
    {
        this._max=Math.round((this._min+this._max)/2);

    }
}

module.exports = GuessingGame;
