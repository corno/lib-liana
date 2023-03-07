import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_fp from "lib-fountain-pen"
import * as g_liana from "../../../liana"
import * as g_main from "../../../../main"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type Serialize = <GAnnotation>($: g_main.T.MappedModel<T.Annotation<GAnnotation>>, $b: g_fp.B.Directory,) => void
}