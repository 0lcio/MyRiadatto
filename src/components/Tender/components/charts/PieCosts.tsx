"use client";

import { Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

/* import { Categories } from "@/components/Dialog/Categories"; */

export const description = "A pie chart with a label";

const chartData = [
  { browser: "chrome", visitors: 300000, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200000, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 400000, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 30000, fill: "var(--color-edge)" },
  { browser: "other", visitors: 70000, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "E.01",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "E.02",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "E.03",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "E.04",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "E.05",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function PieCosts() {
  return (
    <>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-h-[300px] max-h-[300px] min-w-[350px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="visitors"
              label
              nameKey="browser"
              animationDuration={1000}
            />
            <ChartLegend
              content={
                <ChartLegendContent nameKey="browser"/>
              }
              className="gap-5 text-sm"
            />
          </PieChart>
        </ChartContainer>
    </>
  );
}
