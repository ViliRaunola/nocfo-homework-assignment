import React, { useEffect } from 'react'
import { TimelineItem } from '../../types/DataType'
import { formatDate, formatPriority } from '../../../common/TextFormatting'
import { UnmountedStyle, MountedStyle } from '../TimelineElements/TimelineElement'
import './TimelineCard.css'

type Props = {
  item: TimelineItem
  style: UnmountedStyle | MountedStyle
}

const TimelineCard = ({ item, style }: Props) => {
  const formattedPriority = formatPriority(item.priority)
  const formattedDate = formatDate(item.date)

  return (
    <div className="outer-container-card" style={style}>
      <div className="upper-row-card">
        <p>{formattedPriority}</p>
        <p>{formattedDate}</p>
      </div>
      <div className="data-row-card">
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default TimelineCard
