import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"

import * as fp from "lib-fountain-pen"
import * as fs from "api-pareto-filesystem"

import * as mpareto from "../../modules/pareto"

export function createWriter(
    $: fs.TPath,
    $d: {
        fp: fp.DDependencies
        fs: {
            writeFile: fs.AWriteFile
        }
    },
    $a: pt.ProcessAsyncValue
): mpareto.IWriter {
    const path = $
    return {
        createDirectory: ($, $c) => {
            $c(createWriter(
                [path, $],
                $d,
                $a,
            ))
        },
        createFile: ($, $c) => {
            let data = ""
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
                            data += $
                        },
                        onEnd: () => {

                            $d.fs.writeFile(
                                {
                                    path: [path, $],
                                    data: data,
                                    createContainingDirectories: true,
                                }
                            ).execute(($) => {
                                switch ($[0]) {
                                    case "error":
                                        pl.cc($[1], ($) => {
                                            pl.panic("WRITE ISSUE")
                                        })
                                        break
                                    case "success":
                                        pl.cc($[1], ($) => {

                                        })
                                        break
                                    default: pl.au($[0])
                                }
                            })
                        }
                    }
                },
                $d.fp
            )
        }
    }
}

