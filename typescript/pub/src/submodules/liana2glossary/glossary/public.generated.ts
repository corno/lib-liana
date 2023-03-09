import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_liana from "../../liana"
import * as g_main from "../../../main"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type Generate = <GAnnotation>($: T.GenerateData<GAnnotation>,) => void
    
    export type Map = <GAnnotation>($: T.MapData<GAnnotation>,) => g_glossary.T.Glossary<T.OutAnnotation<GAnnotation>>
}