import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as gliana from "../../../liana"
import * as gmain from "res-pareto-main"

export type FGenerate = <GPAnnotation>($: T.GenerateData<GPAnnotation>,) => void

export type FMap = <GPAnnotation>($: T.MapData<GPAnnotation>,) => gglossary.T.Glossary<T.OutAnnotation<GPAnnotation>>