import { API } from "./api.generated"
import { $$ as iserialize } from "./implementations/serialize.p"

export const $api: API = {
    'serialize': iserialize,
}