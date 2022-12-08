import * as pt from "pareto-core-types"

import * as fs from "res-pareto-filesystem"

import { TSchema } from "../types/types.p"
import * as pareto from "../../modules/pareto"

import { DCreateWriter, DMapToPareto } from "../dependencies/dependencies.p"

export type FMapToPareto = <PAnnotation>(
    $: TSchema<PAnnotation>,
    $d: DMapToPareto
) => pareto.Troot<null | PAnnotation>


export type FCreateWriter = (
    $: fs.TPath,
    $i: {
        onError: fs.IOnWriteFileError
    },
    $d: DCreateWriter
) => pareto.IWriter