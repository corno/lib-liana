import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_liana from "../../../liana"
import * as g_liana_resolved from "../../../liana_resolved"

export namespace I {}

export namespace B {
    
    export type OnError<GAnnotation> = ($: T.Error<GAnnotation>, ) => void
}

export namespace F {
    
    export type Resolve = <GAnnotation>($: g_liana.T.Model<T.Annotation<GAnnotation>>, $b: B.OnError<GAnnotation>,) => g_liana_resolved.T.Model<T.Annotation<GAnnotation>>
}