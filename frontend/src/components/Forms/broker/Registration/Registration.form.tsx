import React, { ChangeEvent, useEffect, useState, MouseEvent } from "react"
import {
  Wrapper,
  InputField,
  SectionHeader,
  SectionBody,
} from "./Registration.style"
import { addSpace, StyledButton, StyledCheckbox, StyledDarkParagraphText,  StyledHeaderText } from "../../../"
import { useStyletron } from "baseui";
import { RegInfoReview, BrokerVerificationFailedModal } from '../../../Modals/Modals'

type Props = {}
type BillingInfo = {
  country: string,
  street_1: string,
  street_2: string,
  province_or_state: string,
  city: string;
  zip_code: string;
}
type AccessCoordInfo = {
  name: string,
  email: string,
  send_verification: boolean
}
type AuthorizedUserInfo = AccessCoordInfo
type InputFieldObject<Type> = {
  header: string,
  fields: {
    label: string,
    placeholder: string,
    type: "select" | "email" | "text" | "checkbox" ,
    options?: string[],
    name: keyof Omit<Type, 'send_verification'>
  }[]
}
const billingInputFields: InputFieldObject<BillingInfo>[] = [
  {
    header: "Billing Address",
    fields: [
      {
        label: "country",
        placeholder: "Please Select Country",
        type: "select",
        options: ["USA", "Canada"],
        name: 'country'
      },
      {
        label: "Street Address Line 2 (optional)",
        placeholder: "Please enter Street Address Line 2",
        type: "text",
        name: 'street_2'
      },
      {
        label: "Province/State",
        placeholder: "Please select Province/State",
        type: "select",
        options: ["NY", "Florida", "New Jersey"],
        name: 'province_or_state'
      },
      {
        label: "City",
        placeholder: "Please enter City",
        type: "text",
        name: 'city'
      },
      {
        label: "Street Address",
        placeholder: "Please enter Street Address",
        type: "text",
        name: 'street_1'
      },
      {
        label: "Postal/ZIP Code",
        placeholder: "Please enter Postal/ZIP Code",
        type: "text",
        name: 'zip_code'
      }
    ]
  }
]

const accessCoordinatorInputField: InputFieldObject<AccessCoordInfo> = {
  header: "Add Access Coordinator",
  fields: [
    {
      label: "First & Last Name of Access Coordinator",
      placeholder: "Please enter First & Last Name of Authorized User",
      type: "text",
      name: 'name'
    },
    {
      label: "Email Address",
      placeholder: "Please enter email address",
      type: "email",
      name: 'email'
    },
  ]
}
const authorizedUserInputField: InputFieldObject<AuthorizedUserInfo> = {
  header: "Add Authorized User",
  fields: [
    {
      label: "First & Last Name of Authorized User",
      placeholder: "Please enter First & Last Name of Authorized User",
      type: "text",
      name: 'name'
    },
    {
      label: "Email Address",
      placeholder: "Please enter email address",
      type: "email",
      name: 'email'
    },
    // {
    //   type: 'checkbox',
    //   label: 'send verification email',
    //   placeholder: "",
    //   name: 'send_verification'
    // }
  ]
}

const initUserInfo = {
  name: '', email: '', send_verification: true
}
export type Data = {
  firmDetails: { name: string, account_no: string },
  billingInfo: BillingInfo,
  accessCoordinatorInfo: AccessCoordInfo[];
  authorizedUserInfo: AuthorizedUserInfo[]
}
const Registration = (props: Props) => {
  const [firmDetails, setFirmDetails] = useState({} as {name: string, account_no: string})
  const [billingInfo, setBillingInfo] = useState({} as BillingInfo) 
  const [accessCoordinatorInputState, setAccessCoordinatorInputState] = useState([] as typeof accessCoordinatorInputField['fields'][])
  const [authorizedUserInputState, setAuthorizedUserInputState] = useState([] as typeof authorizedUserInputField['fields'][])
  const [accessCoordinatorInfo, setAccessCoordinatorInfo] = useState([initUserInfo] as AccessCoordInfo[])
  const [authorizedUserInfo, setAuthorizedUserInfo] = useState([initUserInfo] as AuthorizedUserInfo[]);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [ verificationFailed, setVerificationFailed] = useState(false)
  const [css] = useStyletron();

  useEffect(() => {
  setAccessCoordinatorInputState([accessCoordinatorInputField.fields])
    setAuthorizedUserInputState([authorizedUserInputField.fields]);
  }, [])

  const addMoreAccessCoordinator = () => {
    setAccessCoordinatorInputState(a => [...a, accessCoordinatorInputField.fields]);
    setAccessCoordinatorInfo(info => [...info, initUserInfo])
  }
  const addMoreAuthorizedUser = () => {
    setAuthorizedUserInputState(a => [...a, authorizedUserInputField.fields]);
    setAuthorizedUserInfo(info => [...info, initUserInfo])
  }


  const handleFirmDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFirmDetails(f => ({ ...f, [name]: value }));
  
  }
  const handleBillingInputChange = ({ target: {name, value} }: ChangeEvent<HTMLInputElement>): void => {
    setBillingInfo(b => ({...b, [name]: value}))
  }

  const handleAccessCoordinatorChange = (e: ChangeEvent<HTMLInputElement>, index: number): void => {
    const { name, value } = e.target;
    const oldCopy = [...accessCoordinatorInfo]
    oldCopy[index] = {...oldCopy[index], [name]: value}
    setAccessCoordinatorInfo(oldCopy);
  }

  const handleAuthorizedUserChange = (e: ChangeEvent<HTMLInputElement>, index: number): void => {
    const { name, value } = e.target;
    const oldCopy = [...authorizedUserInfo]
    oldCopy[index] = {...oldCopy[index], [name]: value}
    setAuthorizedUserInfo(oldCopy);
  }

  const submitForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = {
      firmDetails,
      billingInfo,
      accessCoordinatorInfo,
      authorizedUserInfo
    }
    setOpenReviewModal(true)
    console.log(data)
  }

  const verifyInfo = () => {
    setOpenReviewModal(false);
    setTimeout(() => setVerificationFailed(true), 1000);
  }
  return (
    <Wrapper>
      <StyledHeaderText color="rgba(14, 41, 75, 1)" size="22px">REGISTRATION</StyledHeaderText>
      <hr style={{margin: '30px 0 50px', backgroundColor: '#D1D0D0'}} />

      <SectionBody>
        <InputField
          type="text"
          name="name"
          placeholder="Please enter Firm/Institution Name"
          label="Firm/Institution Name"
          value={firmDetails.name}
          onChange={handleFirmDetailsChange}
          
        />
        <InputField
          type="text"
          name="account_no"
          placeholder="Enter Account Number Provided by Odyssey"
          label="Account Number"
          onChange={handleFirmDetailsChange}
          value={firmDetails.account_no}
        />
      </SectionBody>
      <div>
        {billingInputFields.map(({ header, fields }) => (
          <>
            {addSpace("vert", "50px")}
            <SectionHeader>{header}</SectionHeader>
            <SectionBody>
              {fields.map(field => (
                <InputField {...field} value={billingInfo[field.label]} onChange={handleBillingInputChange}/>
              ))}
            </SectionBody>
          </>
        ))}
        <>
          {addSpace("vert", "50px")}
          <SectionHeader>{accessCoordinatorInputField.header}</SectionHeader>
          {accessCoordinatorInputState.map((fields, idx) => {
            return <div className={css({
              display: "flex",
              flexFlow: "column",
              alignItems: "end",
              gap: '30px',
              marginBottom: '30px',
            })}>
              <SectionBody>
                {fields.map((field) => {
                  return <InputField onChange={(e: ChangeEvent<HTMLInputElement>) => handleAccessCoordinatorChange(e, idx)} {...field} value={accessCoordinatorInfo[idx][field.name]} />
                })}
              </SectionBody>
              <div className={css({
                display: 'flex', gap: '30px',
                alignItems: 'center',
                justifyContent: 'center',
                height: "fit-content",
              })}>
                <StyledCheckbox onChange={() => {
                  const accessCoordInfoCopy = [...accessCoordinatorInfo]
                   accessCoordInfoCopy[idx] = { ...accessCoordinatorInfo[idx], send_verification: !accessCoordinatorInfo[idx].send_verification }
                  setAccessCoordinatorInfo(accessCoordInfoCopy)
                }} checked={accessCoordinatorInfo[idx]['send_verification'] }/><StyledDarkParagraphText size={'14px'}> Send Verification Email</StyledDarkParagraphText>
              </div>
            </div>
          })}
            {addSpace('vert', '30px')}
          <div className={css({
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'flex-end'
          })}>
            <StyledButton onClick={addMoreAccessCoordinator} small style={{ background: 'transparent', color: 'rgba(180, 135, 63, 1)', border: '1px solid rgba(180, 135, 63, 1)', display: 'flex', gap: '20px', alignItems: 'center', width: '260px', justifyContent: 'center' }}>

              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path d="M8 1V15" stroke="#B4873F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

                <path d="M1 8H15" stroke="#B4873F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

              </svg>

              Add more</StyledButton>
          </div>
        </>
        <>
          {addSpace("vert", "50px")}
          <SectionHeader>{authorizedUserInputField.header}</SectionHeader>
          {authorizedUserInputState.map((fields, idx) => {
            return <div className={css({
              display: "flex",
              flexFlow: "column",
              alignItems: "end",
              gap: '30px',
              marginBottom: '30px',
            })}>
              <SectionBody>
                {fields.map((field) => {
                  return <InputField onChange={(e: ChangeEvent<HTMLInputElement>) => handleAuthorizedUserChange(e, idx)} {...field} value={authorizedUserInfo[idx][field.name]} />
                })}
              </SectionBody>
              <div className={css({
                display: 'flex', gap: '30px',
                alignItems: 'center',
                justifyContent: 'center',
                height: "fit-content",
              })}>
                <StyledCheckbox onChange={() => {
                  const authorizedUserInfoCopy = [...authorizedUserInfo]
                   authorizedUserInfoCopy[idx] = { ...authorizedUserInfo[idx], send_verification: !authorizedUserInfo[idx].send_verification }
                  setAuthorizedUserInfo(authorizedUserInfoCopy)
                }} checked={authorizedUserInfo[idx]['send_verification'] }/><StyledDarkParagraphText size={'14px'}> Send Verification Email</StyledDarkParagraphText>
              </div>
            </div>
          })}
            {addSpace('vert', '30px')}
          <div className={css({
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'flex-end'
          })}>
            <StyledButton onClick={addMoreAuthorizedUser} small style={{ background: 'transparent', color: 'rgba(180, 135, 63, 1)', border: '1px solid rgba(180, 135, 63, 1)', display: 'flex', gap: '20px', alignItems: 'center', width: '260px', justifyContent: 'center' }}>

              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path d="M8 1V15" stroke="#B4873F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

                <path d="M1 8H15" stroke="#B4873F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

              </svg>

              Add more</StyledButton>
          </div>
        </>
      </div>
      <hr style={{margin: '50px 0', backgroundColor: '#D1D0D0'}} />
      <StyledButton onClick={submitForm} small style={{ float: 'right', width: '260px', }}>submit</StyledButton>
      <RegInfoReview data={{
      firmDetails,
      billingInfo,
      accessCoordinatorInfo,
      authorizedUserInfo
      }} open={openReviewModal} closeModal={() => setOpenReviewModal(false)} onSubmit={verifyInfo} />
      <BrokerVerificationFailedModal open={verificationFailed} closeModal={ () => setVerificationFailed(false)}/>
    </Wrapper>
  )
}

export default Registration
