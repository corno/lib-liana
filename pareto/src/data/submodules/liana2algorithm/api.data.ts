import * as pd from 'pareto-core-data'

import { algorithm, dependent, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "mapLiana2States": algorithm(sfunction("this", {}, "MapLiana2States"), { "Annotation": "Annotation" }, dependent(null, {
            "decorateDictionaryEntriesWithKey": sfunction("foreach", {}, "DecorateDictionaryEntriesWithKey"),
        }, {})),
        "mapLiana2Serializer": algorithm(sfunction("this", {}, "MapLiana2Serializer"), { "Annotation": "Annotation" }, dependent(null, {
            //"decorateDictionaryEntriesWithKey": functionReference("this", {}, "foreach", {}, "DecorateDictionaryEntriesWithKey"),
        }, {})),
        "create121Mapper": algorithm(procedure("this", {}, "Create121Mapper"), { "Annotation": "Annotation" }, dependent(null, {
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier")
        }, {})),
        "createResolverSkeleton": algorithm(procedure("this", {}, "CreateResolverSkeleton"), { "Annotation": "Annotation" }, dependent(null, {
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier")
        }, {}))
    }),
}