import React, { ChangeEvent } from 'react'
import { StyledButton } from '@components'
import { SectionBody, InputField } from '../broker/Registration/Registration.style'

type Props = {
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    data: Data,
    isEdit?: boolean
    onSubmit: () => void
}
type Data = {
    full_name: string,
    phone: string;
    title: string;
    email: string;
    sector: string;
}
const User = ({ handleInputChange, data, isEdit, onSubmit }: Props) => {

    return (
        <div><div>
            {isEdit ? 'EDIT USER' : 'ADD USER'}
            <hr style={{ margin: '30px 0 50px', backgroundColor: '#D1D0D0' }} />

        </div>
            <SectionBody>
                <InputField onChange={handleInputChange} label="Full Name" placeholder="Please enter full name" type="text" name="full_name" value={data.full_name} />
                <InputField onChange={handleInputChange} label="Phone Number" placeholder="Please enter phone number" type={"tel" as any} name="phone" value={data.phone} />
                <InputField onChange={handleInputChange} label="Title" placeholder="Please enter title" type="text" name="title" value={data.title} />
                <InputField onChange={handleInputChange} label="Email Address" placeholder="Please enter email address" type="email" name="email" value={data.email} />
                <InputField onChange={handleInputChange} label="Sector" placeholder="Please enter sector" type="text" name="sector" value={data.sector} />
            </SectionBody>
            <StyledButton onClick={onSubmit} small top="50px" style={{ float: 'right', width: '260px', }}>{isEdit ? 'Save' : 'Add User'}</StyledButton></div>
    )
}

export default User