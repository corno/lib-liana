import * as api from "../../interface"

export const escapeTypescriptIdentifier: api.FEscapeTypescriptIdentifier = ($) => {
    const tmp = [
        "import",
        "function",
        "null",
        "interface",
    ].indexOf($) !== -1
        ? `_${$}`
        : $
    return tmp.replace(/ /g, "_")
}