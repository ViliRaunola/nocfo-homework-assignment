import React from 'react'
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded'
import './TimelineIcon.css'

type Props = {
  priority: string
}

const alertIconColorLookUpTable = {
  LOW: 'rgb(57, 210, 115)',
  MODERATE: 'rgb(255, 166, 0)',
  HIGH: 'rgb(255, 99, 97)'
}

const TimelineIcon = ({ priority }: Props) => {
  return (
    <div className="timeline-icon">
      <PriorityHighRoundedIcon
        fontSize="large"
        sx={{ color: alertIconColorLookUpTable[priority] }}
      ></PriorityHighRoundedIcon>
    </div>
  )
}

export default TimelineIcon
