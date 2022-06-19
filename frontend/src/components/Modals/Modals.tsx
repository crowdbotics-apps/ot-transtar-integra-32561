import React, { MouseEvent } from "react"
import { ModalWrapper, Overlay } from "./Modals.style"
import { useStyletron } from "baseui"
import formLogo from "../../assets/form_logo.svg"
import { ArrowForward, ArrowBack } from "../svgs/arrows"
import {
  StyledParagraphText,
  StyledButton,
  StyledDarkParagraphText,
  addSpace,
  StyledHeaderText,
  StyledDateInput
} from "../index"
import { Data } from "../Forms/broker/Registration/Registration.form"
import { InputData } from "../Forms/client/ClientVerification.form"
type Props = {
  children: React.ReactNode,
  showCloseIcon?: boolean,
  small?: boolean,
  large?: boolean,
  closeModal?: () => void,
  open: boolean
}

const getInputDisplayName = (input: string) => {
  switch (input) {
    case "full_name":
      return "Full Name"
    case "postal":
      return "Postal / ZIP Code"
    case "holder_id":
      return "Holder ID"
    case "email":
      return "Email Address"
    case "sin_or_tin":
      return "SIN Or TIN"
  }
}

export const BaseModal = ({
  children,
  showCloseIcon,
  small,
  large,
  closeModal,
  open
}: Props) => {
  const [css] = useStyletron()
  return (
    <div
      className={css({
        width: "100vw",
        height: "100vh",
        overflowY: "scroll",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(14, 41, 75, 0.9)",
        zIndex: 20,
        ...(!open && { transform: "translateY(-100vh)" }),
        transition: "all 0.2s ease"
      })}
    >
      <ModalWrapper small={!!small} large={!!large}>
        {showCloseIcon && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={css({
              position: "absolute",
              top: "15px",
              right: "15px",
              cursor: "pointer",
              opacity: 0.8,
              ":hover": {
                opacity: 1
              }
            })}
            onClick={closeModal}
          >
            <path
              d="M11 1L1 11"
              stroke="#9B2C21"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1L11 11"
              stroke="#9B2C21"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
        <img src={formLogo} />
        {children}
      </ModalWrapper>
    </div>
  )
}

export const ReviewInfoModal: React.FC<{
  closeModal?: () => void,
  open: boolean,
  submit: (e: MouseEvent<HTMLButtonElement>) => void,
  inputData: { key: string, value: string }[]
}> = ({ inputData, closeModal, open, submit }) => {
  const [css] = useStyletron()
  console.log("input data", inputData)
  return (
    <BaseModal open={open} closeModal={closeModal}>
      <StyledParagraphText
        style={{
          color: "rgba(14, 41, 75, 1)",
          fontWeight: 600,
          fontSize: "20px",
          letterSpacing: ".5px",
          lineHeight: 1.5
        }}
      >
        Please review the information you have provided for accuracy:
      </StyledParagraphText>
      <div style={{ width: "100%" }}>
        {inputData.map((input: any) => {
          return input.value ? (
            <div
              className={css({
                textAlign: "left",
                width: "100%",
                marginTop: "10px",
                padding: "15px 0",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "18px",
                color: "#000",
                ":not(:last-child)": {
                  borderBottom: "1px solid rgba(209, 208, 208, 1)"
                }
              })}
            >
              {getInputDisplayName(input.key)}: {"  "}
              <span
                style={{
                  fontWeight: 500,
                  textTransform: "capitalize"
                }}
              >
                {input.value}
              </span>
            </div>
          ) : null
        })}
      </div>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          gap: "10px"
        })}
      >
        <StyledButton
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flex: 1,
            backgroundColor: "transparent",
            color: "rgba(14, 41, 75, 1)",
            fontWeight: 500,
            fontSize: "14px"
          }}
          onClick={e => {
            e.preventDefault()
            closeModal?.()
          }}
        >
          <ArrowBack fill="#0E294B" className={css({ margin: "0 10px" })} />
          Revise
        </StyledButton>
        <StyledButton
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 2,
            fontWeight: 500,
            fontSize: "14px"
          }}
          onClick={submit}
        >
          Verify and Register
          <ArrowForward className={css({ margin: "0 10px" })} />
        </StyledButton>
      </div>
    </BaseModal>
  )
}

export const ClientVerificationFailedModal: React.FC<{
  closeModal?: () => void,
  open: boolean,
  reasons: string[]
}> = ({ closeModal, open, reasons }) => {
  const [css] = useStyletron()
  return (
    <BaseModal showCloseIcon closeModal={closeModal} open={open}>
      <StyledDarkParagraphText
        weight={600}
        style={{
          fontSize: "18px",
          letterSpacing: ".5px",
          lineHeight: 1.5,
          marginTop: "50px"
        }}
        align="center"
      >
        We were unable to verify your information. Please click Go Back to try
        again.
      </StyledDarkParagraphText>
      <StyledDarkParagraphText weight={600}>{`Reason${
        reasons.length > 1 ? "s" : ""
      }:`}</StyledDarkParagraphText>
      {reasons.map(reason => (
        <StyledDarkParagraphText
          weight={400}
          align="left"
          style={
            {
              // margin: "10px auto",
            }
          }
        >
          - {reason}
        </StyledDarkParagraphText>
      ))}
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          gap: "10px"
        })}
      >
        <StyledButton
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 2,
            fontWeight: 500,
            fontSize: "14px"
          }}
          onClick={e => {
            e.preventDefault()
            closeModal()
          }}
        >
          <ArrowBack className={css({ margin: "0 20px" })} />
          Go Back
        </StyledButton>
      </div>
    </BaseModal>
  )
}

export const DRSNotFoundModal: React.FC<{
  closeModal?: () => void,
  open: boolean
}> = ({ open, closeModal }) => {
  const [css] = useStyletron()
  return (
    <BaseModal showCloseIcon open={open} closeModal={closeModal}>
      <StyledDarkParagraphText
        weight={500}
        style={{
          fontSize: "18px",
          letterSpacing: "0.4px",
          lineHeight: 1.5,
          marginTop: "50px"
        }}
        align="center"
      >
        We’re sorry. The information you entered does not match our records.
        Please review and re-enter the information to try again.
      </StyledDarkParagraphText>
      {addSpace()}
      <StyledButton
        small
        style={{
          padding: "0 50px"
        }}
        onClick={e => {
          e.preventDefault()
          closeModal()
        }}
      >
        re-enter details
      </StyledButton>
    </BaseModal>
  )
}

export const CertificateNotFoundModal: React.FC<{
  closeModal?: () => void,
  open: boolean
}> = ({ open, closeModal }) => (
  <DRSNotFoundModal open={open} closeModal={closeModal} />
)
export const MaxAttemptModal: React.FC<{
  closeModal?: () => void,
  open: boolean
}> = ({ closeModal, open }) => {
  const [css] = useStyletron()
  return (
    <BaseModal showCloseIcon open={open} closeModal={closeModal}>
      <StyledDarkParagraphText
        weight={600}
        style={{
          fontSize: "18px",
          letterSpacing: ".5px",
          lineHeight: 1.5,
          marginTop: "50px"
        }}
        align="center"
      >
        You have reached the maximum number attempts to verify your account
        information.
      </StyledDarkParagraphText>
      <StyledDarkParagraphText weight={600}>
        Please <span className={css({ color: "#B4873F" })}>contact us</span> for
        support.
      </StyledDarkParagraphText>
    </BaseModal>
  )
}

export const BrokerVerificationFailedModal: React.FC<{
  closeModal?: () => void,
  open: boolean
}> = ({ closeModal, open }) => {
  const [css] = useStyletron()
  return (
    <BaseModal showCloseIcon open={open} closeModal={closeModal}>
      <StyledDarkParagraphText
        weight={500}
        style={{
          fontSize: "18px",
          letterSpacing: "0.4px",
          lineHeight: 1.5,
          marginTop: "50px"
        }}
        align="center"
      >
        Please go back to the previous screen to confirm that you entered the
        information correctly as provided by us or{" "}
        <span style={{ color: "rgba(180, 135, 63, 1)" }}>contact us</span> for
        assistance.
      </StyledDarkParagraphText>
      {addSpace()}
      <StyledButton
        small
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "0 50px"
        }}
        onClick={e => {
          e.preventDefault()
          closeModal()
        }}
      >
        <ArrowBack />
        take me Back
      </StyledButton>
    </BaseModal>
  )
}

export const LogoutModal: React.FC<{
  closeModal?: () => void,
  open: boolean,
  onConfirm: () => void
}> = ({ closeModal, open, onConfirm }) => {
  const [css] = useStyletron()
  return (
    <BaseModal showCloseIcon small open={open} closeModal={closeModal}>
      <StyledDarkParagraphText
        weight={500}
        style={{
          fontSize: "18px",
          letterSpacing: "0.4px",
          lineHeight: 1.5,
          marginTop: "20px"
        }}
        align="center"
      >
        Are you sure you want to log out?
      </StyledDarkParagraphText>
      <div
        className={css({
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          gap: "10px",
          marginTop: "10px"
        })}
      >
        <StyledButton
          onClick={e => {
            e.preventDefault()
            onConfirm()
          }}
        >
          yes
        </StyledButton>
        <StyledButton
          style={{
            backgroundColor: "transparent",
            color: "rgba(180, 135, 63, 1)"
          }}
          onClick={e => {
            e.preventDefault()
            closeModal()
          }}
        >
          cancel
        </StyledButton>
      </div>
    </BaseModal>
  )
}

export const RunCSVModal: React.FC<{
  closeModal?: () => void,
  open: boolean
}> = ({ closeModal, open }) => {
  const [css, theme] = useStyletron()
  return (
    <BaseModal showCloseIcon small open={open} closeModal={closeModal}>
      <StyledHeaderText
        size="30px"
        align="left"
        weight={700}
        className={css({
          margin: "30px 0 10px",
          letterSpacing: 0,
          color: theme.colors.primary,
          alignSelf: "start"
        })}
      >
        Select dates
      </StyledHeaderText>
      <div
        className={css({
          display: "flex",
          width: "100%",
          gap: "20px"
        })}
      >
        <StyledDateInput placeholder="from" />
        <StyledDateInput placeholder="to" />
      </div>
      <StyledButton
        style={{
          padding: "0 50px"
        }}
      >
        run .csv
      </StyledButton>
      {addSpace()}
    </BaseModal>
  )
}

const getReviewInfoLabel = (key: string) => {
  switch (key) {
    case "country":
      return "Country"
    case "province_or_state":
      return "Province/State"
    case "street_1":
      return "Company Street Address 1"
    case "street_2":
      return "Company Street Address 2"
    case "city":
      return "City"
    case "zip_code":
      return "Postal/ZIP Code"
  }
}
export const RegInfoReview: React.FC<{
  closeModal?: () => void,
  open: boolean,
  data: Data,
  onSubmit: () => void
}> = ({ closeModal, open, data, onSubmit }) => {
  const [css] = useStyletron()
  return (
    <BaseModal large open={open} closeModal={closeModal}>
      <StyledDarkParagraphText size="22px" weight={600}>
        Please review your information
      </StyledDarkParagraphText>
      <div
        className={css({
          display: "flex",
          gap: "105px"
        })}
      >
        <div className={css({ flex: 1 })}>
          <div style={{ marginTop: 30 }}>
            <StyledDarkParagraphText weight={700} size="20px">
              Firm/Institution Information
            </StyledDarkParagraphText>
            {addSpace("vert", "20px")}
            <StyledDarkParagraphText weight={400} size="14 px">
              Company Name: {data.firmDetails.name}
            </StyledDarkParagraphText>
          </div>
          <div style={{ marginTop: 30 }}>
            <StyledDarkParagraphText weight={700} size="20px">
              Billing Address
            </StyledDarkParagraphText>
            {[
              "Country",
              "Province/State",
              "Company Street Address 1",
              "Company Street Address 2",
              "City",
              "Postal/ZIP Code"
            ].map(item => {
              const matchingItem = Object.keys(data.billingInfo)
                .map(key => ({ key, value: data.billingInfo[key] }))
                .find(objItem => getReviewInfoLabel(objItem.key) === item)
              return (
                <div
                  className={css({
                    minWidth: "300px",
                    width: "100%",
                    marginTop: "5px",
                    padding: "10px 0",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    color: "#000",
                    ":not(:last-child)": {
                      borderBottom: "1px solid rgba(209, 208, 208, 1)"
                    }
                  })}
                >
                  {item}: {matchingItem?.value || "Not Specified"}
                </div>
              )
            })}
          </div>
        </div>
        {/**to continue with access coordinatot mapping */}
        <div className={css({ flex: 1 })}>
          <div style={{ marginTop: 30 }}>
            <StyledDarkParagraphText weight={700} size="20px">
              Access Coordinator(s)
            </StyledDarkParagraphText>
            {data.accessCoordinatorInfo.map((info, index) => (
              <>
                <div
                  className={css({
                    minWidth: "320px",
                    width: "100%",
                    marginTop: "5px",
                    padding: "10px 0",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    color: "#000",
                    borderBottom: "1px solid rgba(209, 208, 208, .5)",
                    textTransform: "capitalize"
                  })}
                >
                  Name: {info.name}
                </div>
                <div
                  className={css({
                    minWidth: "320px",
                    width: "100%",
                    marginTop: "5px",
                    padding: "10px 0",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    color: "#000",
                    borderBottom: "1px solid rgba(209, 208, 208, 1)",
                    textTransform: "capitalize"
                  })}
                >
                  Email Address : {info.email}
                </div>
              </>
            ))}
          </div>
          <div style={{ marginTop: 30 }}>
            <StyledDarkParagraphText weight={700} size="20px">
              Authorized User(s)
            </StyledDarkParagraphText>
            {data.authorizedUserInfo.map((info, index) => (
              <>
                <div
                  className={css({
                    minWidth: "320px",
                    width: "100%",
                    marginTop: "5px",
                    padding: "10px 0",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    color: "#000",
                    borderBottom: "1px solid rgba(209, 208, 208, .5)",
                    textTransform: "capitalize"
                  })}
                >
                  Name : {info.name}
                </div>
                <div
                  className={css({
                    minWidth: "320px",
                    width: "100%",
                    marginTop: "5px",
                    padding: "10px 0",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    color: "#000",
                    borderBottom: "1px solid rgba(209, 208, 208, 1)",
                    textTransform: "capitalize"
                  })}
                >
                  Email Address: {info.email}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <StyledButton
        onClick={e => {
          e.preventDefault()
          onSubmit()
        }}
        small
        style={{ alignSelf: "end", width: "200px", minHeight: "40px" }}
      >
        verify
      </StyledButton>
    </BaseModal>
  )
}
