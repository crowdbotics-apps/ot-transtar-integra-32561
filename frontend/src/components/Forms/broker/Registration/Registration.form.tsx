import React, { ChangeEvent, useEffect, useState, MouseEvent, useRef } from "react"
import {
  Wrapper,
  InputField,
  SectionHeader,
  SectionBody,
} from "./Registration.style"
import { addSpace, StyledButton, StyledCheckbox, StyledDarkParagraphText, StyledHeaderText } from "../../../"
import { useStyletron } from "baseui";
import { RegInfoReview, BrokerVerificationFailedModal } from '../../../Modals/Modals'
import { CANADA_PROVINCES, US_STATES } from '../../../../utils'
type Props = {
  header?: string,
  data?: Data,
  isEditable?: boolean;
  onSave?: () => void
  onSubmitData?: (data: Data) => void
}
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
    type: "select" | "email" | "text" | "checkbox",
    options?: { name: string, value: string }[],
    name: keyof Omit<Type, 'send_verification'>
  }[]
}
const getBillingInputFields = (state_options: { name: string, value: string }[]): InputFieldObject<BillingInfo>[] => [
  {
    header: "Billing Address",
    fields: [
      {
        label: "country",
        placeholder: "Please Select Country",
        type: "select",
        options: [{ name: "USA", value: "USA" }, { name: "Canada", value: "Canada" }],
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
        options: state_options,
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
const repeatArrayValues = (value: any, count: number) => {
  let result: any[] = [];
  for (let i = 0; i < count; i++) {
    result.push(value)
  }
  return result;
}
const Registration = ({ header, data, isEditable, onSave, onSubmitData }: Props) => {
  const [firmDetails, setFirmDetails] = useState({} as { name: string, account_no: string })
  const [billingInfo, setBillingInfo] = useState({} as BillingInfo)
  const [accessCoordinatorInputState, setAccessCoordinatorInputState] = useState([] as typeof accessCoordinatorInputField['fields'][])
  const [authorizedUserInputState, setAuthorizedUserInputState] = useState([] as typeof authorizedUserInputField['fields'][])
  const [accessCoordinatorInfo, setAccessCoordinatorInfo] = useState([initUserInfo] as AccessCoordInfo[])
  const [authorizedUserInfo, setAuthorizedUserInfo] = useState([initUserInfo] as AuthorizedUserInfo[]);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [verificationFailed, setVerificationFailed] = useState(false);
  const [stateOptions, setStateOptions] = useState([] as { value: string, name: string }[]);
  const readOnly = isEditable === false
  useEffect(() => {
    switch (billingInfo.country?.toLowerCase()) {
      case 'usa':
        setStateOptions(US_STATES);
        break;
      case 'canada':
        setStateOptions(CANADA_PROVINCES);
        break;
      default:
        setStateOptions([])
    }
  }, [billingInfo.country])
  const [css] = useStyletron();

  useEffect(() => {
    setAccessCoordinatorInputState(repeatArrayValues(accessCoordinatorInputField.fields, data?.accessCoordinatorInfo?.length || 1));
    setAuthorizedUserInputState(repeatArrayValues(authorizedUserInputField.fields, data?.authorizedUserInfo?.length || 1));
    if (data) {
      const { accessCoordinatorInfo, authorizedUserInfo, billingInfo, firmDetails } = data;
      setAccessCoordinatorInfo(accessCoordinatorInfo || [])
      setAuthorizedUserInfo(authorizedUserInfo || [])
      setBillingInfo(billingInfo || {})

      setFirmDetails(firmDetails || {})
    }
  }, [])

  const addMoreAccessCoordinator = () => {
    if (readOnly) return
    setAccessCoordinatorInputState(a => [...a, accessCoordinatorInputField.fields]);
    setAccessCoordinatorInfo(info => [...info, initUserInfo])
  }
  const addMoreAuthorizedUser = () => {
    if (readOnly) return

    setAuthorizedUserInputState(a => [...a, authorizedUserInputField.fields]);
    setAuthorizedUserInfo(info => [...info, initUserInfo])
  }


  const handleFirmDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFirmDetails(f => ({ ...f, [name]: value }));

  }
  const handleBillingInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void => {
    // set province_or_state to empty if country changes
    setBillingInfo(b => ({ ...b, [name]: value, ...(name === 'country' && value !== billingInfo[name] && { province_or_state: '' }) }))
  }

  const handleAccessCoordinatorChange = (e: ChangeEvent<HTMLInputElement>, index: number): void => {
    const { name, value } = e.target;
    const oldCopy = [...accessCoordinatorInfo]
    oldCopy[index] = { ...oldCopy[index], [name]: value }
    setAccessCoordinatorInfo(oldCopy);
  }

  const handleAuthorizedUserChange = (e: ChangeEvent<HTMLInputElement>, index: number): void => {
    const { name, value } = e.target;
    const oldCopy = [...authorizedUserInfo]
    oldCopy[index] = { ...oldCopy[index], [name]: value }
    setAuthorizedUserInfo(oldCopy);
  }

  const submitForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onSave) return onSave();
    setOpenReviewModal(true)
  }

  const verifyInfo = () => {
    setOpenReviewModal(false);
    const data = {
      firmDetails,
      billingInfo,
      accessCoordinatorInfo,
      authorizedUserInfo
    }
    onSubmitData?.(data)
    setTimeout(() => setVerificationFailed(true), 1000);
  }
  return (
    <Wrapper>
      <StyledHeaderText weight={500} color="rgba(14, 41, 75, 1)" size="22px">{header ?? 'REGISTRATION'}</StyledHeaderText>
      <hr style={{ margin: '30px 0 50px', backgroundColor: '#D1D0D0' }} />

      <SectionBody>
        <InputField
          type="text"
          name="name"
          placeholder="Please enter Firm/Institution Name"
          label="Firm/Institution Name"
          value={firmDetails.name}
          onChange={handleFirmDetailsChange}
          readOnly={readOnly}
        />
        <InputField
          type="text"
          name="account_no"
          placeholder="Enter Account Number Provided by Odyssey"
          label="Account Number"
          onChange={handleFirmDetailsChange}
          value={firmDetails.account_no}
          readOnly={isEditable !== undefined}
        />
      </SectionBody>
      <div>
        {getBillingInputFields(stateOptions).map(({ header, fields }) => (
          <>
            {addSpace("vert", "50px")}
            <SectionHeader>{header}</SectionHeader>
            <SectionBody>
              {fields.map(field => (
                <InputField {...field} value={billingInfo[field.name]} onChange={handleBillingInputChange}
                  readOnly={readOnly}
                />
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
                  return <InputField
                    readOnly={readOnly}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleAccessCoordinatorChange(e, idx)} {...field} value={accessCoordinatorInfo[idx][field.name]} />
                })}
              </SectionBody>
              <div className={css({
                display: 'flex', gap: '30px',
                alignItems: 'center',
                justifyContent: 'center',
                height: "fit-content",
              })}>
                <StyledCheckbox onChange={() => {
                  if (readOnly) return
                  const accessCoordInfoCopy = [...accessCoordinatorInfo]
                  accessCoordInfoCopy[idx] = { ...accessCoordinatorInfo[idx], send_verification: !accessCoordinatorInfo[idx].send_verification }
                  setAccessCoordinatorInfo(accessCoordInfoCopy)
                }} checked={accessCoordinatorInfo[idx]['send_verification']} /><StyledDarkParagraphText size={'14px'}> Send Verification Email</StyledDarkParagraphText>
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
                  return <InputField
                    readOnly={readOnly}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleAuthorizedUserChange(e, idx)} {...field} value={authorizedUserInfo[idx][field.name]} />
                })}
              </SectionBody>
              <div className={css({
                display: 'flex', gap: '30px',
                alignItems: 'center',
                justifyContent: 'center',
                height: "fit-content",
              })}>
                <StyledCheckbox onChange={() => {
                  if (readOnly) return
                  const authorizedUserInfoCopy = [...authorizedUserInfo]
                  authorizedUserInfoCopy[idx] = { ...authorizedUserInfo[idx], send_verification: !authorizedUserInfo[idx].send_verification }
                  setAuthorizedUserInfo(authorizedUserInfoCopy)
                }} checked={authorizedUserInfo[idx]['send_verification']} /><StyledDarkParagraphText size={'14px'}> Send Verification Email</StyledDarkParagraphText>
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
      <hr style={{ margin: '50px 0', backgroundColor: '#D1D0D0' }} />
      {!readOnly && <StyledButton onClick={submitForm} small style={{ float: 'right', width: '260px', }}>{isEditable !== undefined ? 'save' : 'submit'}</StyledButton>}
      <RegInfoReview data={{
        firmDetails,
        billingInfo,
        accessCoordinatorInfo,
        authorizedUserInfo
      }} open={openReviewModal} closeModal={() => setOpenReviewModal(false)} onSubmit={verifyInfo} showButton showCloseIcon={false} />
      <BrokerVerificationFailedModal open={verificationFailed} closeModal={() => setVerificationFailed(false)} />
    </Wrapper>
  )
}

export default Registration
