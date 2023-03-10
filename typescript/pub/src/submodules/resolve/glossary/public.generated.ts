import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_liana from "../../liana"
import * as g_liana_resolved from "../../liana_resolved"
import * as g_main from "../../../main"

export namespace B {}

export namespace F {
    
    export type Resolve = <GAnnotation>($: g_liana.T.Model<T.Annotation<GAnnotation>>, $b: g_main.B.OnError<T.Annotation<GAnnotation>>,) => g_liana_resolved.T.Model<T.Annotation<GAnnotation>>
}