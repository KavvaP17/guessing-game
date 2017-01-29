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
        this._max=Math.round((this._min+this._max)/2-1);
        this._min=Math.round(this._min+1);
    }

    greater() 
    {
        this._min=Math.round((this._min+this._max)/2+1);
        this.max=Math.round(this._max-1);

    }
}

module.exports = GuessingGame;
