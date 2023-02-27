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

        // "GlobalType": type(group({
        //     "parameters": member(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("Parameter") })),
        //     "type": member(reference("LocalType")),
        // })),
        // "LocalType": type(taggedUnion({
        //     "string": reference("String"),
        //     "boolean": group({}),
        //     "dictionary": group({
        //         "key": member(reference("String")),
        //         "type": member(reference("LocalType")),
        //     }),
        //     "array": group({
        //         "type": member(reference("LocalType")),
        //     }),
        //     "optional": group({
        //         "type": member(reference("LocalType")),
        //     }),
        //     "tagged union": group({
        //         "options": member(parametrizedReference("common", {}, "AnnotatedDictionary", {
        //             "Annotation": typeReference("Annotation"),
        //             "Type": typeReference("LocalType"),
        //         })),
        //         "default": member(parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey")),
        //     }),
        //     "group": group({
        //         "properties": member(reference("Properties")),
        //     }),
        //     "component": group({
        //         "type": member(parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey")),
        //         "arguments": member(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("common", "Null") })),
        //     }),
        // })),
        // "Model": type(group({
        //     "string types": member(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("common", "Null") })),
        //     "global types": member(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("GlobalType") })),
        //     "root": member(parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey")),
        // })),
        // "Parameter": type(parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey")),
        // "Property": type(group({
        //     "sibling dependencies": member(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("common", "Null") })),
        //     "type": member(reference("LocalType")),
        // })),
        // "Properties": type(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("Property") })),
        // "Reference": type(group({
        //     "type": member(taggedUnion({
        //         "parameter": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
        //         "sibling": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
        //         "other": group({}),
        //     })),
        //     "steps": member(array(taggedUnion({
        //         "group": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
        //         "tagged union": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
        //         "reference": group({}),
        //         "array": group({}),
        //     }))),
        // })),
        // "String": type(group({
        //     "constrained": member(taggedUnion({
        //         "no": group({
        //             "type": member(parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey")),
        //         }),
        //         "yes": reference("Reference"),
        //     })),
        // })),
    }),
    'root': r("Glossary"),
}