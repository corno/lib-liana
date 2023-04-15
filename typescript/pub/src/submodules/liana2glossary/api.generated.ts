import * as pt from 'pareto-core-types'

import * as g_array from "res-pareto-array"
import * as g_build from "res-pareto-build"
import * as g_dictionary from "res-pareto-dictionary"
import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"

export namespace D {
    
    export type map<GAnnotation> = {
        readonly 'buildDictionary': g_build.SYNC.A.F.BuildUnsafeDictionary
        readonly 'decorateDictionaryEntriesWithKey': g_foreach.SYNC.A.F.DecorateDictionaryEntriesWithKey
        readonly 'filter': g_dictionary.SYNC.A.F.Filter
        readonly 'merge': g_array.SYNC.A.F.Merge
    }
}

export namespace A {
    
    export type map = <GAnnotation>($d: D.map<GAnnotation>, ) => g_this.SYNC.A.F.Map<GAnnotation>
}

export type API = {
    readonly 'map': A.map
}