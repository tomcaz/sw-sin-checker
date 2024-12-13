'use client'
import React from 'react'

const SinInput = ({ onChange }: { onChange: (input: string) => void }) => {

    return (
        <div>
            Social Insurance Number:
            <br />
            <input onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}

export default SinInput