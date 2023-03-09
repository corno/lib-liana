import { API } from "./api.generated"
import { $$ as icreateResolver } from "./implementations/createResolver.p"

export const $api: API = {
    'createResolver': icreateResolver,
}