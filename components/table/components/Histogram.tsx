"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
  { id: "E.01", value: 186 },
  { id: "E.02", value: 305 },
  { id: "E.03", value: 237 },
  { id: "E.04", value: 73 },
  { id: "E.05", value: 209 },
  { id: "E.06", value: 214 },
  { id: "E.07", value: 12 },
  { id: "E.08", value: 180 },
  { id: "E.09", value: 214 },
  { id: "E.10", value: 400 },
  { id: "E.11", value: 643 },
  { id: "E.12", value: 576 },
  { id: "E.13", value: 234 },
  { id: "E.14", value: 892 },
  { id: "E.15", value: 214 },
  { id: "E.16", value: 634 },
  { id: "E.17", value: 214 },
  { id: "E.18", value: 613 },
  { id: "E.19", value: 765 },
  { id: "E.20", value: 214 },
  { id: "E.21", value: 234 },
  { id: "E.22", value: 214 },
  { id: "S.01", value: 153 },
  { id: "S.02", value: 305 },
  { id: "S.03", value: 237 },
  { id: "S.04", value: 73 },
  { id: "S.05", value: 209 },
  { id: "S.06", value: 214 },
  { id: "IA.01", value: 145 },
  { id: "IA.02", value: 653 },
  { id: "IA.03", value: 214 },
  { id: "IA.04", value: 325 },
  { id: "IA.05", value: 567 },
  { id: "IA.06", value: 674 },
  { id: "IA.07", value: 345 },
  { id: "IA.08", value: 678 },
  { id: "IA.09", value: 214 },
  { id: "IA.10", value: 435 },
  { id: "IA.11", value: 513 },
  { id: "IA.12", value: 900 },
  { id: "V.01", value: 234 },
  { id: "V.02", value: 433 },
  { id: "V.03", value: 322 },
  { id: "D.01", value: 370 },
  { id: "D.02", value: 700 },
  { id: "D.03", value: 770 },
  { id: "D.04", value: 120 },
  { id: "D.05", value: 190 },
  { id: "T.01", value: 340 },
  { id: "T.02", value: 800 },
  { id: "T.03", value: 120 },
  { id: "P.01", value: 780 },
  { id: "P.02", value: 654 },
  { id: "P.03", value: 537 },
  { id: "P.04", value: 234 },
  { id: "P.05", value: 467 },
  { id: "P.06", value: 380 },
  { id: "U.01", value: 250 },
  { id: "U.02", value: 214 },
  { id: "U.03", value: 100 },
]

const chartConfig = {
  value: {
    label: "€",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Histogram() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Istogramma ID Opere</CardTitle>
        <CardDescription>Visualizzazione totale per ogni categoria</CardDescription>
      </CardHeader>
      <CardContent className="overflow-auto">
      <ScrollArea className="min-w-[2300px]">
        <ChartContainer config={chartConfig}
          className="mx-auto max-h-[500px] min-w-[2300px] pb-0 [&_.recharts-pie-label-text]:fill-foreground">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="id"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideIndicator />}
            />
            <Bar dataKey="value" fill="var(--color-value)" radius={8} width={100}/>
          </BarChart>
        </ChartContainer>
      </ScrollArea>
      </CardContent>
    </Card>
  )
}
