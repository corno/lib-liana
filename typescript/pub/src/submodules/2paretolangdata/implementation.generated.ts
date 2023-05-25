import { API } from "./api.generated"
import { $$ as imap } from "./implementations/map.s.f"

export const $api: API = {
    'map': imap,
}