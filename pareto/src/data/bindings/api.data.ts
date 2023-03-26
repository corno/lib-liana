import * as pd from 'pareto-core-data'

import { algorithm, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "compile": algorithm(procedure("main", {}, "Compile"), { "Annotation": "Annotation" }),

        "serialize_flat": algorithm(procedure("flat", {}, "Serialize"), { "Annotation": "Annotation" }),
        "generateAPI": algorithm(procedure("liana2api", {}, "Generate"), { "Annotation": "Annotation" }),
        "generateGlossary": algorithm(procedure("liana2glossary", {}, "Generate"), { "Annotation": "Annotation" }),

    }),
}