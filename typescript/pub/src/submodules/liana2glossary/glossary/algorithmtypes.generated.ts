import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_liana from "../../liana"
import * as g_main from "../../../main"
import * as g_tendril2glossary from "../../tendril2glossary"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type OnWriteFileError<GAnnotation> = ($: g_fs.T.AnnotatedWriteFileError, ) => void
    }
    
    export namespace A {
        
        
        export namespace P {
            export type Generate<GAnnotation> = ($: T.GenerateData<GAnnotation>, $i: g_common.SYNC.I.String) => void
        }
    }
}