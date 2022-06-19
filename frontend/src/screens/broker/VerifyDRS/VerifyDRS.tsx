import React, { ChangeEvent } from "react"
import { DashboardWrapper } from "../Dashboard/Dashboard.style"
import {
  StyledDarkParagraphText,
  addSpace,
  StyledButton
} from "../../../components/"
import { InputField } from "../../../components/Forms/broker/Registration/Registration.style"
import { useStyletron } from "baseui"
import { useState } from "react"
import { DRSNotFoundModal } from "../../../components/Modals/Modals"
type Props = {}

const VerifyDRS = (props: Props) => {
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
        <div className={css({ borderBottom: "1px solid #D1D0D0" })}>
          <StyledDarkParagraphText weight={600} size="20px">
            Please enter the following information to verify the DRS position:
          </StyledDarkParagraphText>
          {addSpace("vert", "40px")}
          <div className={css({ width: "50%", minWidth: "fit-content" })}>
            {addSpace("vert", "20px")}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "40px",
                fontSize: "14px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
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
                  gap: "10px",
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
                  gap: "10px",
                  cursor: "pointer"
                }}
              >
                <input
                  type="radio"
                  name="identifier_type"
                  id="issue"
                  onChange={handleChange}
                  value="Trading Symbol or Issue Code"
                  checked={
                    input.identifier_type === "Trading Symbol or Issue Code"
                  }
                />
                <label htmlFor="issue">Trading Symbol or Issue Code</label>
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
            style={{
              flex: 1,
              width: "40%",
              minWidth: "400px"
            }}
          />
          {addSpace("vert", "10px")}

          <InputField
            label={`Holder Account Number`}
            placeholder={"Please enter Holder Account Number"}
            onChange={handleChange}
            type="text"
            name="identifier_no"
            value={input.identifier_no}
            style={{
              flex: 1,
              width: "40%",
              minWidth: "400px"
            }}
          />
          {addSpace("vert", "10px")}

          <InputField
            label={"UID"}
            placeholder={"Please enter UID"}
            onChange={handleChange}
            type="text"
            name="identifier_no"
            value={input.identifier_no}
            style={{
              flex: 1,
              width: "40%",
              minWidth: "400px"
            }}
          />
          {addSpace("vert", "30px")}
          {/* </div> */}
        </div>
        {addSpace("vert", "40px")}

        <StyledDarkParagraphText
          weight={600}
          size="14px"
          style={{ float: "right" }}
        >
          Please refer to sample DRS for location of above information.
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
      <DRSNotFoundModal open={error} closeModal={() => setError(false)} />
    </>
  )
}

export default VerifyDRS
