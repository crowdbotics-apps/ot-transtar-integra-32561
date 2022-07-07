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
    options?: { name: string, value: string }[],
    name: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({
  label,
  placeholder,
  type,
  options,
  name,
  value,
  onChange,
  ...others
}) => {
    const [css] = useStyletron()
    return (
      <div
        className={css({
          fontSize: "14px",
          fontWeight: 400,
          textTransform: "capitalize"
        })}
        {...others}
      >
        {type === "select" ? (
          <>
            <label htmlFor={name}>{label}</label>
            <StyledCustomSelect
              placeholder={placeholder}
              options={options!}
              onSelect={onChange}
              name={name}
              value={value}
              {...others}
            />
          </>
        ) : (
          <div className={css({ display: 'flex', flexFlow: 'column', alignItems: 'start' })}>
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
              {...others}
            />
          </div>
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
