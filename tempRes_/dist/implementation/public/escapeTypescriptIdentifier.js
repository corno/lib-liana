"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeTypescriptIdentifier = void 0;
const escapeTypescriptIdentifier = ($) => {
    const tmp = [
        "import",
        "function",
        "null",
        "interface",
    ].indexOf($) !== -1
        ? `_${$}`
        : $;
    return tmp.replace(/ /g, "_");
};
exports.escapeTypescriptIdentifier = escapeTypescriptIdentifier;
