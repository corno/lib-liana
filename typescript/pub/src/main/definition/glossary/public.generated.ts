import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_liana from "../../../submodules/liana"

export namespace I {}

export namespace B {
    
    export type OnError<GAnnotation> = ($: T.Error<GAnnotation>, ) => void
}

export namespace F {
    
    export type Compile = <GAnnotation>($: T.CompileParameters<GAnnotation>, $b: B.OnError<GAnnotation>,) => void
}