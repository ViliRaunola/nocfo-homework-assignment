import React, { useEffect, useState } from 'react'
import { TimelineItem } from '../types/DataType'
import TimelineElement from './TimelineElements/TimelineElement'
import Switch from './Switch/Switch'
import './Timeline.css'
import { bool } from 'prop-types'

type Props = {
  items: Array<TimelineItem>
}

export const Timeline = ({ items }: Props) => {
  const [allOpen, setAllOpen] = useState(false)

  // Sorting so that the most recent date is first on the list
  items.sort((a, b) => {
    let da = new Date(a.date),
      db = new Date(b.date)
    return db.valueOf() - da.valueOf()
  })

  const toggleSwitch = () => {
    setAllOpen(!allOpen)
  }

  return (
    <div>
      <div className="outer-container">
        <h2>Timeline of alerts</h2>
        <div className="controls-container">
          <p>Toggle to show/ hide all</p>
          <Switch toggleValue={toggleSwitch} isChecked={allOpen} />
        </div>

        <div className="inner-container">
          <div className="vertical-timeline"></div>
          {items.length != 0 &&
            items.map((item, index) => {
              return <TimelineElement key={index} item={item} toggleAll={allOpen} />
            })}
        </div>
      </div>
    </div>
  )
}
