import * as pl from 'pareto-core-lib'


import { A } from "../api.generated"

export const $$: A.createErrorMessage = () => {
    return ($) => {

        const reset = "\x1b[0m"
        const red = "\x1b[31m"
        const green = "\x1b[32m"
        const yellow = "\x1b[33m"
        const magenta = "\x1b[35m"

        return `${magenta}${$.annotation.file}${reset}:${yellow}${$.annotation.line}:${$.annotation.column}${reset} - ${red}error${reset} ${$.message}`
    }
}