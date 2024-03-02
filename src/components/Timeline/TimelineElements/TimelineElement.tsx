import React, { useEffect, useState } from 'react'
import { TimelineItem } from '../../types/DataType'
import { formatDate } from '../../../common/TextFormatting'
import TimelineIcon from '../TimelineIcon/TimelineIcon'
import TimelineCard from '../TimelineCard/TimelineCard'

import './TimelineElement.css'

export type MountedStyle = {
  animation: string
}

export type UnmountedStyle = {
  animation: string
  animationFillMode: string
}

type Props = {
  item: TimelineItem
  toggleAll: boolean
}

const TimelineElement = ({ item, toggleAll }: Props) => {
  const [isMounted, setIsMounted] = useState(false)
  const showDiv = useDelayUnmount(isMounted, 250)
  const displayDate = formatDate(item.date)

  useEffect(() => {
    setIsMounted(toggleAll)
  }, [toggleAll])

  const toggleCard = () => {
    setIsMounted(!isMounted)
  }

  return (
    <div className="container-outer-timeline-item">
      <button onClick={toggleCard}>
        <div className="container-inner-timeline-item">
          <TimelineIcon priority={item.priority}></TimelineIcon>

          {showDiv ? (
            <TimelineCard item={item} style={isMounted ? mountedStyle : unmountedStyle} />
          ) : (
            <p>{displayDate}</p>
          )}
        </div>
      </button>
    </div>
  )
}

function useDelayUnmount(isMounted, delayTime) {
  const [showDiv, setShowDiv] = useState(false)
  useEffect(() => {
    let timeoutId
    if (isMounted && !showDiv) {
      setShowDiv(true)
    } else if (!isMounted && showDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime) //delay our unmount
    }
    return () => clearTimeout(timeoutId) // cleanup mechanism for effects , the use of setTimeout generate a sideEffect
  }, [isMounted, delayTime, showDiv])
  return showDiv
}

const mountedStyle = { animation: 'inAnimation 300ms ease-out' }
const unmountedStyle = {
  animation: 'outAnimation 400ms ease-out',
  animationFillMode: 'forwards'
}

export default TimelineElement
