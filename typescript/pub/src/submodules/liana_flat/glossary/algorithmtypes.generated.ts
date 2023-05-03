import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_fp from "lib-fountain-pen"
import * as g_liana from "../../liana"
import * as g_main from "../../../main"
import * as g_tendril2glossary from "../../tendril2glossary"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace P {
            export type Serialize<GAnnotation> = ($: g_tendril2glossary.T.Mapped__Library<GAnnotation>, $i: g_fp.SYNC.I.Directory) => void
        }
    }
}