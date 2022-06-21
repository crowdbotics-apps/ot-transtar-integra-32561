import React, { ChangeEvent } from "react"
import { DashboardWrapper } from "../../Dashboard/Dashboard.style"
import {
  StyledDarkParagraphText,
  addSpace,
  StyledButton
} from "../../../../components/"
import { InputField } from "../../../../components/Forms/broker/Registration/Registration.style"
import { useStyletron } from "baseui"
import { useState } from "react"
import { CertificateNotFoundModal } from "../../../../components/Modals/Modals"
type Props = {}

const VerifyCertificate = (props: Props) => {
  const [error, setError] = useState(false)
  const [css] = useStyletron()
  const [input, setInput] = useState({
    cert_prefix: "",
    cert_no: "",
    identifier_type: "ISIN",
    identifier_no: ""
  })

  React.useEffect(() => {
    console.log(input)
  }, [input])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    setError(true)
  }
  return (
    <>
      <DashboardWrapper>
        <div style={{ borderBottom: "1px solid #D1D0D0" }}>
          <StyledDarkParagraphText weight={600} size="20px">
            Please enter the Certificate Number for verification:
          </StyledDarkParagraphText>
          {addSpace("vert", "40px")}
          <div
            className={css({
              display: "flex",
              width: "40%",
              minWidth: "350px",
              gap: "20px"
            })}
          >
            <InputField
              label="Certificate Prefix"
              placeholder="Certificate Prefix"
              onChange={handleChange}
              type="text"
              name="cert_prefix"
              value={input.cert_prefix}
              style={{ flex: 1 }}
            />
            <InputField
              label="Certificate Number"
              placeholder="Certificate Number"
              onChange={handleChange}
              type="text"
              name="cert_no"
              value={input.cert_no}
              style={{ flex: 2 }}
            />
          </div>
          {addSpace("vert", "20px")}
        </div>
        <div style={{ borderBottom: "1px solid #D1D0D0" }}>
          {addSpace("vert", "20px")}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px"
            }}
          >
            <StyledDarkParagraphText weight={600} size="20px">
              Please enter one of the following:
            </StyledDarkParagraphText>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "50px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  cursor: "pointer"
                }}
              >
                <input
                  type="radio"
                  name="identifier_type"
                  id="isin"
                  onChange={handleChange}
                  value="ISIN"
                  checked={input.identifier_type === "ISIN"}
                />
                <label htmlFor="isin">ISIN</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  cursor: "pointer"
                }}
              >
                {" "}
                <input
                  type="radio"
                  name="identifier_type"
                  id="cusip"
                  onChange={handleChange}
                  value="CUSIP"
                  checked={input.identifier_type === "CUSIP"}
                />
                <label htmlFor="cusip">CUSIP</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  cursor: "pointer"
                }}
              >
                <input
                  type="radio"
                  name="identifier_type"
                  id="issue"
                  onChange={handleChange}
                  value="Issue Ticker"
                  checked={input.identifier_type === "Issue Ticker"}
                />
                <label htmlFor="issue">Issue Ticker</label>
              </div>
            </div>
          </div>
          {addSpace("vert", "30px")}

          <InputField
            label={`Enter ${input.identifier_type}`}
            placeholder={`Enter ${input.identifier_type}`}
            onChange={handleChange}
            type="text"
            name="identifier_no"
            value={input.identifier_no}
            style={{ flex: 1, width: "40%", minWidth: "350px" }}
          />
          {addSpace("vert", "30px")}
        </div>
        {addSpace("vert", "30px")}

        <StyledDarkParagraphText
          weight={600}
          size="14px"
          style={{ float: "right" }}
        >
          Please refer to sample certificates for location of above information.
        </StyledDarkParagraphText>
        <StyledButton
          onClick={handleSubmit}
          small
          top="50px"
          style={{ float: "right", clear: "both", width: "260px" }}
        >
          verify
        </StyledButton>
      </DashboardWrapper>
      <CertificateNotFoundModal
        open={error}
        closeModal={() => setError(false)}
      />
    </>
  )
}

export default VerifyCertificate
