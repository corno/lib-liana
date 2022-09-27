#!/usr/bin/env node

import * as pl from "pareto-core-lib"


import * as pe from "pareto-core-exe"

import * as tostring from "res-pareto-tostring"
import * as fs from "res-pareto-filesystem"

import * as mpareto from "../modules/pareto"

import { pareto } from "../data/pareto.p"
import { mapToPareto } from "../implementation/public/mapToPareto.p"
import { createWriter } from "../implementation/public/createWriter.p"

import * as res from "../../../tempRes"
import { ddeps } from "../dependencies/dependencies.p"

pe.runProgram(($, $i, $a) => {

    mpareto.serialize(
        mapToPareto(
            pareto,
            {
                concat: res.concat,
                joinDictionaries: res.joinDictionaries,
                arrayIsEmpty: ($) => {
                    let found = false
                    $.forEach(($) => {
                        found = true
                    })
                    return !found
                }
            },
        ).root,
        createWriter(
            ["..", "test", "data", "src"],
            {
                onError: () => {
                    pl.logDebugMessage("$$$$$$")
                },
            },
            {
                fp: {
                    joinNestedStrings: tostring.joinNestedStrings,
                    getArrayAsString: tostring.f_getArrayAsString,
                },
                createWriteStream: fs.f_createWriteStream,
            },
            $a,
        ),
        ddeps
    )
})
