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
        this._max=Math.round((this._min+this._max)/2-0.5);
        this._min=Math.round(this._min+0.5);
    }

    greater() 
    {
        this._min=Math.round((this._min+this._max)/2);
        this.max=Math.round(this._max-0.5);

    }
}

module.exports = GuessingGame;
