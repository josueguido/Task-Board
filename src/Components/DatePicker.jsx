'use client'
import { format } from 'date-fns'
import { useState } from 'react'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover } from 'keep-react'

export const DatePickerComponent = ({ onDateChange }) => {

  const [date, setDate] = useState(null)
  
const handleSelect = (date) => {
    setSelected(date);
    onDateChange(date); 
  };

  return (
    <Popover showArrow={false} placement="bottom-start">
      <Popover.Action asChild>
        <Button
          className="w-[286px] justify-start gap-2 rounded-xl border border-metal-50 px-4 text-left text-body-4 font-normal hover:bg-white active:focus:scale-100"
          variant="outline"
          color="secondary">
          <Calendar size={20} color="#AFBACA" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </Popover.Action>
      <Popover.Content className="z-50 max-w-min">
        <DatePicker mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </Popover.Content>
    </Popover>
  )
}

