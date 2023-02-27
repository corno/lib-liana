import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcollation from "res-pareto-collation"
import * as gforeach from "res-pareto-foreach"
import * as gts from "res-typescript"

export type CcreateImplementationSerializer = ($d: {
    readonly 'arrayForEach': gforeach.FArrayForEach
    readonly 'createApostrophedString': gts.FCreateApostrophedString
    readonly 'createBacktickedString': gts.FCreateBacktickedString
    readonly 'createIdentifier': gts.FCreateIdentifier
    readonly 'createQuotedString': gts.FCreateQuotedString
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': gforeach.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': gforeach.FEnrichedDictionaryForEach
}) => gglo.FSerializeImplementation

export type API = {
    createImplementationSerializer: CcreateImplementationSerializer
}