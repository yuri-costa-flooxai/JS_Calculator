class CalcController {

    constructor() {
        this._displayCalc = "0";
        this._dataAtual;

    }

    get _displayCalc() {
        return this._displayCalc;
    }

    set _displayCalc(value) {
        this._displayCalc = value;
    }
    
    get _dataAtual() {
        return this._dataAtual;
    }

    set _dataAtual(value) {
        this._dataAtual = value;
    }

}