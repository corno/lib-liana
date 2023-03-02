import { API } from "./definition/api.generated"
import { $$ as icreateSerializer } from "./implementations/createSerializer.p"
import { $$ as iserialize } from "./implementations/serialize.p"

export const $a: API = {
    'createSerializer': icreateSerializer,
    'serialize': iserialize,
}