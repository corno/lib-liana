import { API } from "./api.generated"
import { $$ as icompile } from "./implementations/compile.p"

export const $api: API = {
    'compile': icompile,
}