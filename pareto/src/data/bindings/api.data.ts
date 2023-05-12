import * as pd from 'pareto-core-data'

import { algorithm, dependent, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "compile": algorithm(procedure("main", {}, "Compile"), { "Annotation": "Annotation" }, dependent(null, {
            "serializeAnnotation": procedure("glossary", { "A": "GAnnotation" }, "SerializeAnnotation"),
            //"serializeAnnotationType": procedure("glossary", { "A": "GAnnotation" }, "SerializeAnnotationType"),
        }, {})),
        // "compileModel": algorithm(procedure("main", {}, "CompileModel"), { "Annotation": "Annotation" }, dependent(null, {
        //     "getSourceLocation": sfunction("glossary", { "A": "GAnnotation" }, "GetSourceLocation")
        // }, {})),

        "serialize_flat": algorithm(procedure("flat", {}, "Serialize"), { "Annotation": "Annotation" }),
        "generateAPI": algorithm(procedure("liana2api", {}, "Generate"), { "Annotation": "Annotation" }),
        "generateGlossaryFromLiana": algorithm(procedure("liana2glossary", {}, "Generate"), { "Annotation": "Annotation" }, dependent(null, {
            "serializeAnnotation": procedure("glossary", { "A": "GAnnotation" }, "SerializeAnnotation"),
            //"serializeAnnotationType": procedure("glossary", { "A": "GAnnotation" }, "SerializeAnnotationType"),
        }, {})),
        "generateGlossaryFromTendril": algorithm(procedure("tendril2glossary", {}, "Generate"), { "Annotation": "Annotation" }, dependent(null, {
            "serializeAnnotation": procedure("glossary", { "A": "GAnnotation" }, "SerializeAnnotation"),
            //"serializeAnnotationType": procedure("glossary", { "A": "GAnnotation" }, "SerializeAnnotationType"),
        }, {})),
        "generateResolver": algorithm(procedure("main", {}, "GenerateResolver"), { "Annotation": "Annotation" })
    }),
}