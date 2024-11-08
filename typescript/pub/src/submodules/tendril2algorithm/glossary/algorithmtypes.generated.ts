import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_algorithm from "lib-pareto-typescript-project/dist/submodules/algorithm"
import * as g_algorithm_temp from "../../algorithm_temp"
import * as g_api from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_fp from "lib-fountain-pen"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
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
            export type Create121Mapper<GAnnotation> = ($: g_liana.T.Type__Library<GAnnotation>, $i: g_fp.SYNC.I.Block) => void
        }
        
        
        export namespace F {
            export type MapTendril2Serializer<GAnnotation> = ($: g_tendril2glossary.T.Mapped__Library<GAnnotation>) => g_algorithm_temp.T.AlgorithmImplementation<T.OutAnnotation<GAnnotation>>
        }
        
        
        export namespace F {
            export type MapTendril2States<GAnnotation> = ($: g_tendril2glossary.T.Mapped__Library<GAnnotation>) => g_algorithm.T.States<T.OutAnnotation<GAnnotation>>
        }
    }
}