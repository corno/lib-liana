import * as pt from 'pareto-core-types'

import * as gforeach from "res-pareto-foreach"
import * as gliana2pareto from "../../liana2pareto"
import * as gpareto2typescript from "lib-pareto-typescript-project/dist/submodules/pareto2typescript"
import * as gthis from "./glossary"
import * as gtostring from "res-pareto-tostring"
import * as gts from "res-typescript"

export type CcreateSerializer = ($d: {
    readonly 'createIdentifier': gts.FCreateIdentifier
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'joinNestedStrings': gtostring.FJoinNestedStrings
    readonly 'mapLiana2States': gliana2pareto.FMapLiana2States
    readonly 'serializeStates': gpareto2typescript.FSerializeStates
}) => gthis.FSerialize

export type Cserialize = gthis.FSerialize

export type API = {
    createSerializer: CcreateSerializer
    serialize: Cserialize
}