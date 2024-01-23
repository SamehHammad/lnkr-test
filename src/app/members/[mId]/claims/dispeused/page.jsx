import SimpleTable from '@/components/reusable/SimpleTable'
import { TABLE_HEAD_DISP, TABLE_ROWS_DISP } from '@/lib/data'
import React from 'react'

const Dispuesed = () => {
  return (
    <div className="w-full">
    <SimpleTable
      TABLE_HEAD={TABLE_HEAD_DISP}
      TABLE_ROWS={TABLE_ROWS_DISP}
    />
  </div>  )
}

export default Dispuesed