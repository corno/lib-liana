import { API } from "./definition/api.generated"
import { $$ as icreateGenerator } from "./implementations/createGenerator.p"
import { $$ as icreateMapper } from "./implementations/createMapper.p"
import { $$ as igenerate } from "./implementations/generate.p"

export const $a: API = {
    'createGenerator': icreateGenerator,
    'createMapper': icreateMapper,
    'generate': igenerate,
}