import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"

export type createErrorMessageCreator = ($d: {}) => g_this.F.CreateErrorMessage

export type API = {
    createErrorMessageCreator: createErrorMessageCreator
}