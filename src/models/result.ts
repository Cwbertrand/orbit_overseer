export interface Result {
    buttons: ButtonResult;
    switchs: number[];
    links:  number[][];
}

interface ButtonResult {
    order: string;
    ids: number[];
}