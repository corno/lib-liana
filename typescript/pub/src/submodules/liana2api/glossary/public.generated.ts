import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_api from "lib-pareto-typescript-project/dist/submodules/api"
import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"
import * as g_liana from "../../liana"
import * as g_main from "../../../main"

export namespace B {
    
    export type OnWriteFileError<GAnnotation> = ($: g_fs.T.AnnotatedWriteFileError, ) => void
}

export namespace F {
    
    export type Generate = <GAnnotation>($: T.GenerateData<GAnnotation>, $b: g_common.B.StringBuilder,) => void
    
    export type GenerateAndReport = <GAnnotation>($: T.GenerateData<GAnnotation>, $b: B.OnWriteFileError<GAnnotation>,) => void
    
    export type Map = <GAnnotation>($: T.MapData<GAnnotation>,) => g_api.T.API<T.OutAnnotation<GAnnotation>>
}