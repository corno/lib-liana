import * as pd from 'pareto-core-data'
import * as g_tendril2algorithm from "../../.../../../pub/dist/submodules/tendril2algorithm"
import {
    aResolvedValue,
    constrainedDictionary,
    constrainedOption, dictConstraint,
    dictionary, externalGlobalTypeSelection,
    globalTypeSelection,
    group,
    nothing, nothingResult,
    option, optionConstraint, optional,
    optionalResult,
    pExternalResolvedValue,
    pResolvedValue,
    prop,
    resolvedValueReference,
    resultTaggedUnion,
    s_component,
    s_reference,
    s_group,
    s_nothing,
    s_optional, s_taggedunion,
    t_dict,
    t_grp,
    t_tu,
    taggedUnion,
    tempExternalTypeSelection,
    tempTypeSelection,
    terminal,
    valSel,
    tailSel,
    varSel,
    lookupReference,
    thisNonCyclic,
    aLookup,
    lparameter,
    array,
    pCyclicLookup,
    pNonCyclicLookup
} from "../../.../../../pub/dist/submodules/liana/shorthands"
const d = pd.d

export const $: g_tendril2algorithm.T.CreateResolverParameters<pd.SourceLocation> = {
    'in': "../../lowlevel_implementation",
    'out': {
        'root': "../../lowlevel_implementation_possiblyresolved",
        'subs': pd.d({
            "typesystem": "../../lowlevel_typesystem_possiblyresolved"
        }),
    },
    'model': {
        'type library': {
            'imports': pd.d({}),
            'labels': {
                'atom types': pd.d({
                    "text": null,
                }),
            },
            'global types':pd.d({
            })
        },
        'root': {
            'annotation': pd.getLocationInfo(0),
            'key': "Model"
        },
    }
}