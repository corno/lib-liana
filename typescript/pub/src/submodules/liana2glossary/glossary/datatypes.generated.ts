import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_liana from "../../liana"
import * as g_main from "../../../main"
import * as g_tendril2glossary from "../../tendril2glossary"

export namespace N {}

export namespace T {
    
    export namespace GenerateData {
        
        export type data<GAnnotation> = T.MapData<GAnnotation>
        
        export type path<GAnnotation> = g_common.T.Path
    }
    
    export type GenerateData<GAnnotation> = {
        readonly 'data': T.MapData<GAnnotation>
        readonly 'path': g_common.T.Path
    }
    
    export namespace MapData {
        
        export type mapped__library<GAnnotation> = T.Mapped__Library<GAnnotation>
        
        export type settings<GAnnotation> = g_tendril2glossary.T.Mapping__Settings<GAnnotation>
    }
    
    export type MapData<GAnnotation> = {
        readonly 'mapped library': T.Mapped__Library<GAnnotation>
        readonly 'settings': g_tendril2glossary.T.Mapping__Settings<GAnnotation>
    }
    
    export namespace Mapped__Library {
        
        export type library<GAnnotation> = g_liana.T.Type__Library<GAnnotation>
        
        export type terminal__mapping<GAnnotation> = g_tendril2glossary.T.Terminal__Mapping<GAnnotation>
    }
    
    export type Mapped__Library<GAnnotation> = {
        readonly 'library': g_liana.T.Type__Library<GAnnotation>
        readonly 'terminal mapping': g_tendril2glossary.T.Terminal__Mapping<GAnnotation>
    }
    
    export namespace OutAnnotation {
        
        export type internal<GAnnotation> = string
        
        export type source<GAnnotation> = GAnnotation
    }
    
    export type OutAnnotation<GAnnotation> = 
        | ['internal', string]
        | ['source', GAnnotation]
}