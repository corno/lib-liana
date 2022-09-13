import * as pt from "pareto-core-types"
import { TSchema } from "../types/types.p"

import * as pareto from "../../modules/pareto"

export type FMapToPareto = <PAnnotation>(
    $: TSchema<PAnnotation>,
    $d: {
        concat: <T>($:{
            array: pt.Array<T>
            element: T,
        }) => pt.Array<T>
        arrayIsEmpty: <T>($: pt.Array<T>) => boolean
        joinDictionaries: <T>($: pt.Dictionary<pt.Dictionary<T>>) => pt.Dictionary<T>
    }
) => pareto.Troot<null | PAnnotation>