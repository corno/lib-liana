import { API } from "./definition/api.generated"
import { $$ as icompile } from "./implementations/compile.p"

export const $a: API = {
    'compile': icompile,
}