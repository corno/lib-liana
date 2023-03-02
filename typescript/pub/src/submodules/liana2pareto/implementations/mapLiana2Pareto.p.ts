

import * as gforeach from "res-pareto-foreach"
import * as gbuild from "res-pareto-build"

import { $$ as createMapper } from "./createLiana2ParetoMapper.p"

import { CmapLiana2Pareto } from "../definition/api.generated"

export const $$:CmapLiana2Pareto = ($) => {
    return createMapper({
        'decorateDictionaryEntriesWithKey': gforeach.$a.decorateDictionaryEntriesWithKey,
        'buildDictionary': gbuild.$a.unsafeBuildDictionary,
    })($)
}
