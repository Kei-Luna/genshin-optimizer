import { input } from '../../../Formula'
import { Data } from '../../../Formula/type'
import { equal, greaterEq, percent } from '../../../Formula/utils'
import { ArtifactSetKey } from '@genshin-optimizer/consts'
import { cond, trans } from '../../SheetUtil'
import { ArtifactSheet, setHeaderTemplate } from '../ArtifactSheet'
import { IArtifactSheet } from '../IArtifactSheet'
import { dataObjForArtifactSheet } from '../dataUtil'

const key: ArtifactSetKey = "Lavawalker"
const setHeader = setHeaderTemplate(key)
const [, trm] = trans("artifact", key)

const [condStatePath, condState] = cond(key, "state")
const set2 = greaterEq(input.artSet.Lavawalker, 2, percent(0.40))
const set4 = greaterEq(input.artSet.Lavawalker, 4, equal("on", condState, percent(0.35)))

export const data: Data = dataObjForArtifactSheet(key, {
  premod: {
    pyro_res_: set2,
    all_dmg_: set4
  },
})

const sheet: IArtifactSheet = {
  name: "Lavawalker", rarity: [4, 5],
  setEffects: {
    2: { document: [{ header: setHeader(2), fields: [{ node: set2 }] }] },
    4: {
      document: [{
        header: setHeader(4),
        value: condState,
        path: condStatePath,
        name: trm("condName"),
        states: {
          on: {
            fields: [{
              node: set4,
            }]
          },
        }
      }]
    }
  }
}
export default new ArtifactSheet(key, sheet, data)
