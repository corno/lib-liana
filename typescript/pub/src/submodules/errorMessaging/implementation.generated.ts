import { API } from "./api.generated"
import { $$ as icreateErrorMessage } from "./implementations/createErrorMessage.s.f"

export const $api: API = {
    'createErrorMessage': icreateErrorMessage,
}