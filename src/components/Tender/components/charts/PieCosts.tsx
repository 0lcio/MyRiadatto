"use client"
import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { costs: "rent", revenue: 196748.57, fill: "var(--color-rent)" },
  { costs: "utilities", revenue: 3300, fill: "var(--color-utilities)" },
  { costs: "salaries", revenue: 1000, fill: "var(--color-salaries)" },
  { costs: "maintenance", revenue: 1500, fill: "var(--color-maintenance)" },
  { costs: "other", revenue: 9100, fill: "var(--color-other)" },
  { costs: "arch", revenue: 1500, fill: "var(--color-arch)" },
  { costs: "cons", revenue: 4000, fill: "var(--color-cons)" },
  { costs: "ing", revenue: 8000, fill: "var(--color-ing)" },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
  },
  rent: {
    label: "Importo Netto",
    color: "hsl(var(--chart-revenue-1))",
  },
  utilities: {
    label: "Polizza RC",
    color: "hsl(var(--chart-cost-1))",
  },
  salaries: {
    label: "Notaio RTP",
    color: "hsl(var(--chart-cost-2))",
  },
  maintenance: {
    label: "Archeologo",
    color: "hsl(var(--chart-cost-3))",
  },
  other: {
    label: "Geologo",
    color: "hsl(var(--chart-cost-4))",
  },
  arch: {
    label: "Acustico",
    color: "hsl(var(--chart-cost-5))",
  },
  cons: {
    label: "Agronomo",
    color: "hsl(var(--chart-cost-2))",
  },
  ing: {
    label: "Consulente LEED",
    color: "hsl(var(--chart-cost-3))",
  },
} satisfies ChartConfig

export function PieCosts() {
  const totalRevenue = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.revenue, 0)
  }, [])

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square min-h-[300px] max-h-[300px] min-w-[350px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="revenue"
          nameKey="costs"
          innerRadius={90}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {totalRevenue.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Importo in contratto
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}
