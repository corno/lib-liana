import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_algorithm from "lib-pareto-typescript-project/dist/submodules/algorithm"
import * as g_algorithm_temp from "../../../algorithm_temp"
import * as g_api from "lib-pareto-typescript-project/dist/submodules/api"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_liana from "../../../liana"
import * as g_main from "res-pareto-main"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type MapLiana2Serializer = <GAnnotation>($: T.MappedModel<GAnnotation>,) => g_algorithm_temp.T.AlgorithmImplementation<T.OutAnnotation<GAnnotation>>
    
    export type MapLiana2States = <GAnnotation>($: T.MappedModel<GAnnotation>,) => g_algorithm.T.States<T.OutAnnotation<GAnnotation>>
}