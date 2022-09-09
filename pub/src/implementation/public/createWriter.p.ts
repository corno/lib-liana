import * as pl from "pareto-core-lib"

import * as fp from "lib-fountain-pen"

import * as mpareto from "../../modules/pareto"

export function createWriter(
    $d: {
        fp: fp.DDependencies
    }
): mpareto.IWriter {
    return {
        createDirectory: ($, $c) => {
            pl.logDebugMessage(`DIR: ${$}`)
            $c(createWriter(
                $d,
            ))
        },
        createFile: ($, $c) => {
            pl.logDebugMessage(`FILE: ${$}`)

            fp.createContext(
                {
                    indentation: "    ",
                    newline: "\n",
                },
                ($i) => {
                    $c($i)
                },
                {
                    consumer: {
                        onData: ($) => {
                            pl.logDebugMessage($)
                        },
                        onEnd: () => {

                        }
                    }
                },
                $d.fp
            )
        }
    }
}

