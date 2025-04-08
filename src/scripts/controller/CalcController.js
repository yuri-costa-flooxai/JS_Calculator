class CalcController {

    constructor() {
        this._currentDate = new Date();
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.initialize()
    }

    initialize() {

        this.displayDateTime();

        setInterval(() => {
            this.displayDateTime();
        }, 1000);
    }

    displayDateTime() {
        this.displayDate = this._currentDate.toLocaleDateString(this._locale);
        this.displayTime = this._currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get _displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set _displayCalc(value) {
        this._displayCalc = value;
    }

    get _dataAtual() {
        return new Date();
    }

    set _dataAtual(value) {
        this._currentDate = value;
    }

}