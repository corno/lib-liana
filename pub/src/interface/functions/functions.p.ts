import { TSchema } from "../types/types.p"

import * as pareto from "../../modules/pareto"

export type FMapToPareto = <PAnnotation>(
    $: TSchema<PAnnotation>,
) => pareto.Troot<null | PAnnotation>