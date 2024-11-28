import React from 'react'
import { PieTotal } from './charts/PieTotal'
import { PieCosts } from './charts/PieCosts'
import { PieContracts } from './charts/PieContracts'

export function TenderCharts() {
  return (
    <>
        {/* <PieTotal /> */}
        <PieCosts />
        <PieContracts />
    </>
  )
}
