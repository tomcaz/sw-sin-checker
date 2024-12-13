'use client'
import React, { useCallback, useState } from 'react'
import SinInput from '../sin-input/SinInput'
import SinDisplay from '../sin-display/SinDisplay'
import { sinValidate } from '@/app/libs/generic-function'

export interface InputProps {
    input: string,
    validated: boolean
}

const SinValidator = () => {
    const [inputValidation, setInputValidation] = useState<InputProps>({
        input: "", validated: false
    });

    const validate = useCallback((input: string) => {
        setInputValidation({
            input, validated: sinValidate(input)
        })
    }, []);

    return (
        <>
            <SinInput onChange={validate} />
            <hr />
            <SinDisplay inputProps={inputValidation} />
        </>
    )
}

export default SinValidator