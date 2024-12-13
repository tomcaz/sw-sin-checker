import React from 'react'
import { InputProps } from '../SinValidator/SinValidator'

const SinDisplay = ({ inputProps }: { inputProps: InputProps }) => {
  return (
    <div>
      <span style={{ color: inputProps.validated ? 'green' : 'crimson', fontWeight: 'bold' }}>
        {inputProps.input}
      </span>

      {inputProps.input !== '' &&
        <>
          : {inputProps.validated ? 'Pass' : 'Failed'}
        </>
      }
    </div>
  )
}

export default SinDisplay