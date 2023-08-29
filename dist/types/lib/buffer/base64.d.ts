interface InvalidCharacterErrorInterface extends Error {
    name: string;
    message: string;
}
export declare class InvalidCharacterError implements InvalidCharacterErrorInterface {
    name: string;
    message: string;
    constructor(message: string);
}
declare let _btoa: (data: string) => string;
declare let _atob: (data: string) => string;
export { _btoa, _atob };
