import React from 'react'
import './index.css'
import Calendar from './Components/Calendar/Calendar'
// eslint-disable-next-line no-unused-vars
import { Availabilities } from './Interfaces'
// eslint-disable-next-line no-unused-vars
import moment, { Moment } from 'moment'

interface Props {
  availabilityType: 'rolling' | 'range' | 'infinity' | string
  availabilityEndDate?: Moment
  availabilityStartDate?: Moment
  availabilityRolling?: number
  duration: number
  availabilities: Availabilities[]
  onIntervalChange: (value: any) => void
  className?: string
  initialRenderOfRows?: number
  totalNumOfRows?: number
  tableContainerStyle?: string
  dayTextStyle?: string
  dayConstainerStyle?: string
  intervalsWrapStyle?: string
  topHeaderContainerStyle?: string
  topHeaderTitleStyle?: string
  is24hour?: boolean
  isBusinessDays?: boolean
  isPastAvailabilityLocked?: boolean
}

export default function SchedulerCalendar(props: Props) {
  const {
    availabilityType = 'rolling',
    availabilityStartDate,
    availabilityEndDate,
    availabilityRolling = 60,
    isBusinessDays = false,
    duration,
    onIntervalChange,
    className,
    initialRenderOfRows,
    totalNumOfRows,
    tableContainerStyle,
    dayConstainerStyle,
    dayTextStyle,
    intervalsWrapStyle,
    is24hour = false,
    topHeaderContainerStyle,
    topHeaderTitleStyle,
    isPastAvailabilityLocked = false
  } = props

  const [availabilitiesData, setAvailabilitiesData] = React.useState(
    props.availabilities
  )

  React.useEffect(() => {
    setAvailabilitiesData(JSON.parse(JSON.stringify(props.availabilities)))
  }, [props.availabilities])

  return (
    <Calendar
      availabilities={availabilitiesData}
      availabilityType={availabilityType}
      availabilityEndDate={moment(availabilityEndDate).format('YYYY-MM-DD')}
      availabilityStartDate={moment(availabilityStartDate).format('YYYY-MM-DD')}
      availabilityRolling={availabilityRolling}
      duration={duration}
      onIntervalChange={onIntervalChange}
      className={className}
      initialRenderOfRows={initialRenderOfRows}
      totalNumOfRows={totalNumOfRows}
      tableContainerStyle={tableContainerStyle}
      dayConstainerStyle={dayConstainerStyle}
      dayTextStyle={dayTextStyle}
      intervalsWrapStyle={intervalsWrapStyle}
      topHeaderContainerStyle={topHeaderContainerStyle}
      topHeaderTitleStyle={topHeaderTitleStyle}
      is24hour={is24hour}
      isBusinessDays={isBusinessDays}
      isPastAvailabilityLocked={isPastAvailabilityLocked}
    />
  )
}
