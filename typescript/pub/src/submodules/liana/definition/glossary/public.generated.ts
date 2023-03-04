import * as pt from 'pareto-core-types'

import { T   } from './types.generated'


export type IVisitor<GPAnnotation> = {
    'Model': () => void
    'Reference': () => void
    'String': () => void
    'Type': () => void
    'Type Library': () => void
}