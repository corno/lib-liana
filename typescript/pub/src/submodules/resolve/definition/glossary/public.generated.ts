import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_liana from "../../../liana"
import * as g_liana_resolved from "../../../liana_resolved"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type Resolve = <GAnnotation>($: g_liana.T.Model<T.Annotation<GAnnotation>>,) => g_liana_resolved.T.Model<T.Annotation<GAnnotation>>
}