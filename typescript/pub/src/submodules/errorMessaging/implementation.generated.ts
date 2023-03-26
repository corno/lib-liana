import { API } from "./api.generated"
import { $$ as icreateErrorMessageCreator } from "./implementations/createErrorMessageCreator.p"

export const $api: API = {
    'createErrorMessageCreator': icreateErrorMessageCreator,
}