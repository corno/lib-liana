import * as pt from "pareto-core-types"

export type FJoinDictionaries = <T>($: pt.Dictionary<pt.Dictionary<T>>) => pt.Dictionary<T>

export type FEscapeTypescriptIdentifier = ($: string) => string