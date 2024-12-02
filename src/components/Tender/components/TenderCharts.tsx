
/* import { PieTotal } from './charts/PieTotal' */
import { PieCosts } from './charts/PieCosts'
import { PieContracts } from './charts/PieContracts'

export function TenderCharts() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <PieCosts />
        <PieContracts />
    </div>
  )
}
