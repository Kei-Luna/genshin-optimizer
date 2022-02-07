import { CheckBox, CheckBoxOutlineBlank, Download, Info } from '@mui/icons-material';
import { Button, CardContent, Collapse, Divider, Grid, MenuItem, styled, Tooltip, Typography } from '@mui/material';
import { useContext, useMemo, useState } from 'react';
import { CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Scatter, XAxis, YAxis, ZAxis } from 'recharts';
import CardDark from '../Components/Card/CardDark';
import CardLight from '../Components/Card/CardLight';
import DropdownButton from '../Components/DropdownMenu/DropdownButton';
import { DataContext } from '../DataContext';
import { uiInput as input } from '../Formula';
import KeyMap from '../KeyMap';
import { MainStatKey, SubstatKey } from '../Types/artifact_WR';
type ChartCardProps = {
  plotData: { plotBase: number, optimizationTarget: number }[]
  plotBase: MainStatKey | SubstatKey | "",
  setPlotBase: (key: MainStatKey | SubstatKey | "") => void
  disabled?: boolean
}
export default function ChartCard({ plotData, plotBase, setPlotBase, disabled = false }: ChartCardProps) {
  const [showDownload, setshowDownload] = useState(false)
  const [showMin, setshowMin] = useState(true)
  const { data } = useContext(DataContext)

  const statKeys = ["atk", "hp", "def", "eleMas", "critRate_", "critDMG_", "heal_", "enerRech_"]
  if (data.get(input.weaponType).value !== "catalyst") statKeys.push("physical_dmg_")
  statKeys.push(`${data.get(input.charEle).value}_dmg_`)

  const { displayData, downloadData } = useMemo(() => {
    type Point = { x: number, y: number, min?: number }

    if (!plotData?.length) return { displayData: null, downloadData: null }

    const increasingX: Point[] = plotData.map(x => ({ x: x.plotBase, y: x.optimizationTarget })).sort((a, b) => a.x - b.x)
    const minimumData: Point[] = []
    for (const point of increasingX) {
      let last: Point | undefined
      while ((last = minimumData.pop())) {
        if (last.y > point.y) {
          minimumData.push(last)
          break
        }
      }
      minimumData.push(point)
    }

    // Note:
    // We can also just use `minimumData` if the plotter supports multiple data sources.
    // It could be faster too since there're no empty entries in `minimumData`.
    if (minimumData[0].x !== increasingX[0].x)
      increasingX[0].min = minimumData[0].y
    minimumData.forEach(x => { x.min = x.y })

    const downloadData = {
      minimum: minimumData.map(({ x, y }) => [x, y]),
      allData: increasingX.map(({ x, y }) => [x, y]),
    }
    return { displayData: increasingX, downloadData }
  }, [plotData])

  return <CardLight>
    <CardContent>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Typography variant="h6" >Optimization Target vs</Typography>
        </Grid>
        <Grid item>
          <DropdownButton title={plotBase ? KeyMap.get(plotBase) : "Not Selected"}
            color={plotBase ? "success" : "primary"}
            disabled={disabled}
          >
            <MenuItem onClick={() => { setPlotBase("") }}>Unselect</MenuItem>
            <Divider />
            {statKeys.map(sKey => <MenuItem key={sKey} onClick={() => { setPlotBase(sKey as any) }}>{KeyMap.get(sKey)}</MenuItem>)}
          </DropdownButton>
        </Grid>
        <Grid item flexGrow={1}>
          <Tooltip placement="top" title="Using data from the builder, this will generate a graph to visualize Optimization Target vs. a selected stat. The graph will show the maximum Optimization Target value per 0.01 of the selected stat.">
            <Info />
          </Tooltip>
        </Grid>
        {!!downloadData && <Grid item>
          <Button startIcon={showMin ? <CheckBox /> : <CheckBoxOutlineBlank />}
            color={showMin ? "success" : "secondary"}
            onClick={() => setshowMin(!showMin)}>Show Min Stat Threshold</Button>
        </Grid>}
        {!!downloadData && <Grid item>
          <Button color="info" startIcon={<Download />} onClick={() => setshowDownload(!showDownload)}>Download Data</Button>
        </Grid>}
      </Grid>
    </CardContent>
    {!!displayData && <Divider />}
    {!!displayData && <CardContent>
      <Collapse in={!!downloadData && showDownload}>
        <CardDark sx={{ mb: 2 }}>
          <CardContent>
            <Typography>Min Data</Typography>
            <DataDisplay data={downloadData?.minimum} />
            <Typography>All Data</Typography>
            <DataDisplay data={downloadData?.allData} />
          </CardContent>
        </CardDark>
      </Collapse>
      <Chart displayData={displayData} plotBase={plotBase} showMin={showMin} />
    </CardContent>}
  </CardLight >
}
const TextArea = styled("textarea")({
  width: "100%",
  fontFamily: "monospace",
  resize: "vertical",
  minHeight: "5em"
})
function DataDisplay({ data, }: { data?: object }) {
  return <TextArea readOnly value={JSON.stringify(data)} onClick={e => {
    const target = e.target as HTMLTextAreaElement;
    target.selectionStart = 0;
    target.selectionEnd = target.value.length;
  }} />
}
function Chart({ displayData, plotBase, showMin }) {
  return <ResponsiveContainer width="100%" height={600}>
    <ComposedChart data={displayData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" scale="linear" unit={KeyMap.unit(plotBase)} domain={["auto", "auto"]} tick={{ fill: 'white' }} type="number" tickFormatter={n => n > 10000 ? n.toFixed() : n.toFixed(1)} />
      <YAxis name="DMG" domain={["auto", "auto"]} allowDecimals={false} tick={{ fill: 'white' }} type="number" />
      <ZAxis dataKey="y" range={[3, 25]} />
      <Legend />
      <Scatter name="Optimization Target" dataKey="y" fill="#8884d8" line lineType="fitting" isAnimationActive={false} />
      {showMin && <Line name="Minimum Stat Requirement Threshold" dataKey="min" stroke="#ff7300" type="stepBefore" connectNulls strokeWidth={2} isAnimationActive={false} />}
    </ComposedChart>
  </ResponsiveContainer>
}