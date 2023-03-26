import { API } from "./api.generated"
import { $$ as icreateGenerator } from "./implementations/createGenerator.p"
import { $$ as icreateMapper } from "./implementations/createMapper.p"

export const $api: API = {
    'createGenerator': icreateGenerator,
    'createMapper': icreateMapper,
}