import { API } from "./definition/api.generated"
import { $$ as icreateResolver } from "./implementations/createResolver.p"

export const $a: API = {
    'createResolver': icreateResolver,
}