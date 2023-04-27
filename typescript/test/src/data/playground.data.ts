import * as pd from 'pareto-core-data'
import * as g_liana from "../../.../../../pub/dist/submodules/liana"
import {
    aResolvedValue,
    component, constrainedDictionary,
    constrainedOption, dictConstraint,
    dictionary, externalGlobalTypeSelection,
    globalType, globalTypeResult, globalTypeSelection,
    group,
    nothing, nothingResult,
    option, optionConstraint, optional, optionalResult,
    pExternalResolvedValue, pResolvedValue,
    prop,
    resolvedValueReference,
    resultTaggedUnion,
    t_dict, t_grp, t_tu,
    taggedUnion,
    tempExternalTypeSelection,
    tempTypeSelection,
    terminal,
    valSel,
} from "../../.../../../pub/dist/submodules/liana/shorthands"
const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({
        "typesystem": null,
    }),
    'labels': {
        'atom types': d({
            "numeric literal": null,
            "string literal": null,
            "identifier": null,
        }),
    },
    'global types': d({
    }),
}