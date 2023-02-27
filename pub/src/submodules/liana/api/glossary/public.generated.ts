import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FResolve = <GPAnnotation>($: T.Model<GPAnnotation>,) => T.PossibleModel<GPAnnotation>