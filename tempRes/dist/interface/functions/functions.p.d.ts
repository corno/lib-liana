import * as pt from "pareto-core-types";
export declare type FJoinDictionaries = <T>($: pt.Dictionary<pt.Dictionary<T>>) => pt.Dictionary<T>;
export declare type FEscapeTypescriptIdentifier = ($: string) => string;
export declare type FConcat = <T>($: {
    array: pt.Array<T>;
    element: T;
}) => pt.Array<T>;
