export declare enum DecimalMathCalcType {
    round = "round",
    ceil = "ceil",
    floor = "floor",
    trunc = "trunc"
}
export default class Decimal {
    powers: Array<number>;
    constructor();
    private intpow10;
    private isRound;
    private decimalAdjust;
    round(num: number, decimalPlaces: number): number;
    ceil(num: number, decimalPlaces: number): number;
    floor(num: number, decimalPlaces: number): number;
    trunc(num: number, decimalPlaces: number): number;
    toFixed(num: number, decimalPlaces: number): string;
}
