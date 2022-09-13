import * as pt from "pareto-core-types"

export type FJoinDictionaries = <T>($: pt.Dictionary<pt.Dictionary<T>>) => pt.Dictionary<T>

export type FEscapeTypescriptIdentifier = ($: string) => string

export type FConcat = <T>($: {
    array: pt.Array<T>
    element: T,
}) => pt.Array<T>