import { API } from "./api.generated"
import { $$ as imap } from "./implementations/map.s.p"

export const $api: API = {
    'map': imap,
}