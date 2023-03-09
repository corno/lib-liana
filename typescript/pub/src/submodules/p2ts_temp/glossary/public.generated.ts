import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_algorithm from "../../algorithm_temp"
import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type SerializeImplementation = <GAnnotation>($: g_algorithm.T.Implementation<T.Annotation<GAnnotation>>, $b: g_fp.B.Directory,) => void
}