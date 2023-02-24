import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as galgorithm from "lib-pareto-typescript-project/dist/submodules/algorithm"
import * as gcommon from "glo-pareto-common"
import * as gliana from "../../../liana"
import * as gmain from "res-pareto-main"
import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

export type FGenerateModule = <GPAnnotation>($: T.GenerateModuleData<GPAnnotation>,) => void

export type FMapLiana2Pareto = <GPAnnotation>($: T.MapLiana2ParetoData<GPAnnotation>,) => T.Module<GPAnnotation>

export type FMapLiana2States = <GPAnnotation>($: T.MappedModel<GPAnnotation>,) => galgorithm.T.States<T.Annotation<GPAnnotation>>