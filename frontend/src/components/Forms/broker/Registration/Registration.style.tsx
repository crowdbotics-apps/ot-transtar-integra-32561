import { FC, ChangeEvent } from "react"
import { styled, useStyletron } from "baseui"
import { StyledInput, StyledCustomSelect, StyledCheckbox } from "../../../index"
export const Wrapper = styled("div", () => ({
  width: "100%"
}))

export const SectionHeader = styled("h2", () => ({
  color: "rgba(14, 41, 75, 1)",
  fontSize: "24px",
  textTransform: "capitalize",
  marginBottom: "30px"
}))

export const InputField: FC<
  {
    label: string,
    placeholder: string,
    type: "text" | "email" | "select" | "checkbox",
    options?: string[],
    name: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  } & React.DetailedHTMLProps<
    React.SVGAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({
  label,
  placeholder,
  type,
  options,
  name,
  onSelect,
  value,
  onChange
}) => {
  const [css] = useStyletron()
  return (
    <div
      className={css({
        fontSize: "14px",
        fontWeight: 400,
        textTransform: "capitalize"
      })}
    >
      {type === "select" ? (
        <>
          <label htmlFor={name}>{label}</label>
          <StyledCustomSelect
            placeholder={placeholder}
            options={options}
            onSelect={onChange}
            name={name}
          />
        </>
      ) : (
        <>
          <label htmlFor={name}>{label}</label>
          <StyledInput
            className={css({
              background: "#fff !important",
              "::placeholder": {
                color: "rgba(176, 176, 176, 1) !important"
              }
            })}
            id={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
          />
        </>
      )}
    </div>
  )
}

export const SectionBody = styled("div", () => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px 100px",
  width: "100%"
}))
export const UserSectionBody = styled("div", () => ({
  display: "flex",
  width: "100%",
  gap: "100px",
  "> div": {
    flex: 1
  }
}))
