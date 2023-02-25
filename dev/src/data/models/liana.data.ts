import * as pd from 'pareto-core-data'

import * as gliana from "lib-liana/dist/submodules/liana"
import {
    d,
    array,
    boolean,
    component,
    dictionary,
    globalType,
    group,
    r,
    reference,
    //string,
    taggedUnion,
    string,
    prop,
} from "lib-liana/dist/submodules/liana/shorthands"

export const $: gliana.T.Model<pd.SourceLocation> = {
    'string types': d({
        "text": null,
    }),
    'global types': d({
        "Glossary": globalType({}, group({
        })),
    }),
    'root': r("Glossary"),
}