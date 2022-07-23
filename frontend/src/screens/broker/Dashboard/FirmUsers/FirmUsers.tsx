import React, { useState } from "react"
import { DashboardWrapper } from "../Dashboard.style"
import { StyledDarkParagraphText, StyledButton } from "components"
import RegistrationForm, {
  Data
} from "components/Forms/broker/Registration/Registration.form"
type Props = {}

const data: Data = {
  firmDetails: { name: "Lisa Scotland", account_number: "0987654342" },
  billingInfo: {
    country: "USA",
    street_address: "",
    street_address_two: "",
    state: "Florida",
    city: "Miami",
    postal: "30106"
  },
  accessCoordinatorInfo: [
    { name: "Emmanuel", email: "emmanuel@gmail.com", send_verification: true },
    { name: "Emmanuel", email: "emmanuel@gmail.com", send_verification: true },
    { name: "Emmanuel", email: "emmanuel@gmail.com", send_verification: true }
  ],
  authorizedUserInfo: [
    {
      name: "Emmanuel",
      email: "emmanuel@gmail.com", send_verification: true
    }
  ]
}
const FirmUsers = (props: Props) => {
  const [isEditable, setIsEditable] = useState(false)

  return (
    <DashboardWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <StyledDarkParagraphText size="22px" weight={600}>
          COMPANY INFORMATION
        </StyledDarkParagraphText>
        <StyledButton
          small
          style={{
            width: 160,
            background: isEditable ? "#B4873F" : "#fff",
            color: isEditable ? "#fff" : "#B4873F",
            border: "1px solid #B4873F"
          }}
          onClick={_ => setIsEditable(!isEditable)}
        >
          {isEditable ? 'SAVE' : 'EDIT'}
        </StyledButton>
      </div>
      <RegistrationForm
        header=""
        isEditable={isEditable}
        onSave={() => setIsEditable(false)}
        data={data}
      />
    </DashboardWrapper>
  )
}

export default FirmUsers
