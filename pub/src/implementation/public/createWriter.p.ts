
import * as fp from "lib-fountain-pen"

import * as api from "../../interface"


export const createWriter: api.FCreateWriter = ($, $i, $d) => {
    const path = $
    return {
        createDirectory: ($, $c) => {
            $c(createWriter(
                [path, $],
                $i,
                $d,
            ))
        },
        createFile: ($, $c) => {
            $d.createWriteStream(
                {
                    path: [path, $],
                    createContainingDirectories: true,
                },
                ($i) => {
                    fp.f_createContext(
                        {
                            indentation: "    ",
                            newline: "\n",
                        },
                        ($i) => {
                            $c($i)
                        },
                        ($) => {
                            $i($)
                        },
                        $d.fp
                    )
                },
                {
                    onError: $i.onError
                },
                ($, $i) => $._execute($i)
            )
        }
    }
}

