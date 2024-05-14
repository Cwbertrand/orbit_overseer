import { Result } from "./result";
import { Element } from "./element";

export interface Operation {
    id: string;
    duration: number;
    turn: number;
    description: string;
    elements: Element[];
    result: Result;
}
