class CalcController {

    constructor() {
        this._displayCalc = "0";
        this._currentDate;
        this.initialize()

    }

    initialize() {
        let _displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        _displayCalcEl.innerHTML = this._displayCalc;
        dateEl.innerHTML = this._currentDate.toLocaleDateString();
        timeEl.innerHTML = this._currentDate.toLocaleTimeString();
    }

    get _displayCalc() {
        return this._displayCalc;
    }

    set _displayCalc(value) {
        this._displayCalc = value;
    }

    get _dataAtual() {
        return this._currentDate;
    }

    set _dataAtual(value) {
        this._currentDate = value;
    }

}