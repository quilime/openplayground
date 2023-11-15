import React from "react"

import CreatableSelect from "react-select/creatable"
import { useBreakpoint } from "../hooks/use-breakpoint"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

interface MultiSelectProps {
  maxOptions?: number
  tooltipContent: React.ReactElement
  defaultOptions: any
  disabled?: boolean
  onValueChange: (value: any) => void
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  maxOptions,
  tooltipContent,
  defaultOptions,
  disabled = false,
  onValueChange,
}) => {
  const { isLg } = useBreakpoint("lg")

  const formattedOptions = defaultOptions.map((option: any) => {
    return { label: option, value: option }
  })

  return (
    <div>
      <Tooltip delayDuration={300} skipDelayDuration={150}>
        <TooltipTrigger asChild>
          <div>
            <p className="text-sm">Stop Sequences (Tab separated)</p>
            <CreatableSelect
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  background: '#f0f',
                }),
              }}
              isDisabled={disabled}
              isMulti
              placeholder=""
              noOptionsMessage={({ inputValue }) => "Enter a sequence"}
              formatCreateLabel={(userInput) => `Add ${userInput}`}
              value={formattedOptions}
              options={formattedOptions}
              defaultValue={formattedOptions}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              isValidNewOption={(inputValue, options) => {
                if (inputValue.length < 1) return false
                if (maxOptions == null) return true
                if (options.length >= maxOptions) return false
                return true
              }}
              onChange={(e) => {
                console.log(e)
                const values = e.map((i: any) => i.value)
                if (onValueChange) onValueChange(values)
              }}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent side={isLg ? "left" : "bottom"}>
          {tooltipContent}
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default MultiSelect
