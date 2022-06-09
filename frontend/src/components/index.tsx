import { styled, useStyletron } from "baseui";
import { useRef, useState } from "react";
import { DatePicker } from "baseui/datepicker";
import moment from "moment";
interface TextProps {
  isMobile?: boolean;
  color?: string;
  weight?: number;
  align?: "left" | "center" | "right";
  size?: string;
}
interface ButtonProps {
  top: string;
  bottom: string;
  left: string;
  right: string;
  small: boolean;
}

export const addSpace = (
  direction: "vert" | "hor" = "vert",
  size: string = "0px"
) => {
  const isVertical = direction === "vert";
  return (
    <span
      style={{
        display: isVertical ? "block" : "inline",
        maxHeight: 0,
        margin: 0,
        padding: 0,
        width: 0,
        ...(isVertical && { marginTop: size }),
        ...(!isVertical && { marginRight: size }),
        background: "transparent",
      }}
    />
  );
};

export const StyledHeaderText = styled<TextProps, any>("h1", ({ size }) => ({
  color: "white",
  fontSize: size || "38px",
  letterSpacing: "1px",
  fontWeight: 700,
}));
export const StyledParagraphText = styled<TextProps, any>(
  "p",
  ({ size, color, weight, align }) => ({
    color: color || "white",
    fontSize: size || "18px",
    letterSpacing: ".5px",
    fontWeight: weight || 300,
    lineHeight: 1.5,
    textAlign: align,
    alignSelf: align === "left" ? "start" : align === "right" ? "end" : align,
  })
);
export const StyledDarkParagraphText = styled<TextProps, any>(
  "p",
  ({ size, color, weight, align }) => ({
    color: "rgba(14, 41, 75, 1) !important",
    fontSize: size || "18px",
    letterSpacing: ".5px",
    fontWeight: weight || 300,
    lineHeight: 1.5,
    textAlign: align,
    alignSelf: align === "left" ? "start" : align === "right" ? "end" : align,
  })
);

export const StyledInput = styled("input", () => ({
  width: "100%",
  height: "40px",
  background: "rgba(248, 248, 248, 1)",
  "::placeholder": {
    color: "rgba(176, 176, 176, .6)",
    fontSize: "13px",
    fontWeight: "300",
  },
  border: "1px solid rgba(139, 139, 139, 1)",
  padding: "15px",
  margin: "10px auto",
}));

export const StyledCustomSelect: React.FC<{
  placeholder: string;
  options: string[];
}> = ({ placeholder, options }) => {
  const [css] = useStyletron();
  const [value, setValue] = useState("");
  const [optionsOpen, setOptionsOpen] = useState(false);
  const inputStyle = css({
    background: "#fff",
    "::placeholder": {
      color: "rgba(176, 176, 176, 1)",
    },
    ":hover": {
      cursor: "pointer",
    },
  });
  return (
    <div
      className={css({
        width: "100%",
        height: "40px",
        position: "relative",
      })}
    >
      <div
        className={css({
          position: "relative",
          width: "100%",
          height: "fit-content",
        })}
        onClick={(e) => {
          setOptionsOpen(!setOptionsOpen);
          console.log("clicked");
        }}
      >
        <StyledInput
          className={inputStyle}
          readOnly
          value={value}
          placeholder={placeholder}
        />
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "50%",
            right: "10%",
            transform: "translateY(-50%)",
          }}
        >
          <path
            d="M0.605575 0H8.39442C8.93326 0 9.20267 0.764898 8.82125 1.21316L4.92834 5.79188C4.69222 6.06937 4.30778 6.06937 4.07166 5.79188L0.178747 1.21316C-0.202673 0.764898 0.0667427 0 0.605575 0Z"
            fill="#0E294B"
          />
        </svg>
      </div>
      {/* {optionsOpen && ( */}
      <div
        className={css({
          position: "absolute",
          bottom: "0",
          // transform: "translateY(50%)",
          left: 0,
          height: "fit-content",
          width: "100%",
          display: !optionsOpen ? "flex" : "none",
          flexFlow: "column",
        })}
      >
        {options.map((opt) => (
          <StyledInput
            onClick={() => {
              setValue(opt);
              setOptionsOpen(false);
            }}
            readOnly
            value={opt}
            className={inputStyle}
            style={{ margin: 0 }}
          />
        ))}
      </div>
      {/* )} */}
    </div>
  );
};

export const StyledDateInput: React.FC<{ placeholder: string }> = ({
  placeholder,
}) => {
  const [style] = useStyletron();
  const dateRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<any>();
  return (
    <div
      className={style({
        position: "relative",
        width: "100%",
        height: "40px",
      })}
      onClick={() => {
        dateRef.current?.focus();
      }}
    >
      <DatePicker
        placeholder={placeholder}
        value={value}
        onChange={({ date }) => {
          const d = Array.isArray(date) ? date[0] : date;
          if (!moment(d, "YYYY/MM/DD", true).isValid()) return;
          setValue(Array.isArray(date) ? date : [date]);
        }}
      />
      {!value && (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style({
            position: "absolute",
            width: "15px",
            height: "15px",
            right: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          })}
        >
          <path
            d="M0 15.4062C0 16.2861 0.767857 17 1.71429 17H14.2857C15.2321 17 16 16.2861 16 15.4062V6.375H0V15.4062ZM11.4286 8.89844C11.4286 8.6793 11.6214 8.5 11.8571 8.5H13.2857C13.5214 8.5 13.7143 8.6793 13.7143 8.89844V10.2266C13.7143 10.4457 13.5214 10.625 13.2857 10.625H11.8571C11.6214 10.625 11.4286 10.4457 11.4286 10.2266V8.89844ZM11.4286 13.1484C11.4286 12.9293 11.6214 12.75 11.8571 12.75H13.2857C13.5214 12.75 13.7143 12.9293 13.7143 13.1484V14.4766C13.7143 14.6957 13.5214 14.875 13.2857 14.875H11.8571C11.6214 14.875 11.4286 14.6957 11.4286 14.4766V13.1484ZM6.85714 8.89844C6.85714 8.6793 7.05 8.5 7.28571 8.5H8.71429C8.95 8.5 9.14286 8.6793 9.14286 8.89844V10.2266C9.14286 10.4457 8.95 10.625 8.71429 10.625H7.28571C7.05 10.625 6.85714 10.4457 6.85714 10.2266V8.89844ZM6.85714 13.1484C6.85714 12.9293 7.05 12.75 7.28571 12.75H8.71429C8.95 12.75 9.14286 12.9293 9.14286 13.1484V14.4766C9.14286 14.6957 8.95 14.875 8.71429 14.875H7.28571C7.05 14.875 6.85714 14.6957 6.85714 14.4766V13.1484ZM2.28571 8.89844C2.28571 8.6793 2.47857 8.5 2.71429 8.5H4.14286C4.37857 8.5 4.57143 8.6793 4.57143 8.89844V10.2266C4.57143 10.4457 4.37857 10.625 4.14286 10.625H2.71429C2.47857 10.625 2.28571 10.4457 2.28571 10.2266V8.89844ZM2.28571 13.1484C2.28571 12.9293 2.47857 12.75 2.71429 12.75H4.14286C4.37857 12.75 4.57143 12.9293 4.57143 13.1484V14.4766C4.57143 14.6957 4.37857 14.875 4.14286 14.875H2.71429C2.47857 14.875 2.28571 14.6957 2.28571 14.4766V13.1484ZM14.2857 2.125H12.5714V0.53125C12.5714 0.239062 12.3143 0 12 0H10.8571C10.5429 0 10.2857 0.239062 10.2857 0.53125V2.125H5.71429V0.53125C5.71429 0.239062 5.45714 0 5.14286 0H4C3.68571 0 3.42857 0.239062 3.42857 0.53125V2.125H1.71429C0.767857 2.125 0 2.83887 0 3.71875V5.3125H16V3.71875C16 2.83887 15.2321 2.125 14.2857 2.125Z"
            fill="#8B8B8B"
          />
        </svg>
      )}
    </div>
  );
};
export const StyledPasswordInput: React.FC<{ placeholder: string }> = ({
  placeholder,
}) => {
  const [style] = useStyletron();
  return (
    <div
      className={style({
        position: "relative",
        width: "100%",
        height: "fit-content",
      })}
    >
      <StyledInput
        type="password"
        placeholder={placeholder}
        style={{ paddingRight: 35 }}
      />
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={style({
          position: "absolute",
          width: "15px",
          height: "15px",
          right: "15px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        })}
      >
        <path
          d="M9.9999 12.5C7.6296 12.5 5.71085 10.6654 5.53429 8.34037L2.25618 5.80694C1.82524 6.34756 1.42868 6.91912 1.10868 7.54412C1.03719 7.68553 0.999946 7.84176 0.999946 8.00021C0.999946 8.15867 1.03719 8.3149 1.10868 8.45631C2.80336 11.7629 6.15835 14 9.9999 14C10.8408 14 11.6521 13.875 12.434 13.6732L10.8124 12.4185C10.5446 12.4702 10.2726 12.4975 9.9999 12.5ZM19.8067 14.3157L16.3521 11.6457C17.4015 10.7613 18.2646 9.67702 18.8911 8.45599C18.9626 8.31459 18.9999 8.15835 18.9999 7.9999C18.9999 7.84145 18.9626 7.68522 18.8911 7.54381C17.1964 4.23726 13.8415 2.00008 9.9999 2.00008C8.391 2.00203 6.80823 2.40707 5.39617 3.1782L1.42055 0.105394C1.36871 0.0650529 1.30943 0.0353227 1.24609 0.0179023C1.18275 0.000481962 1.1166 -0.00428703 1.05142 0.00386787C0.98624 0.0120228 0.923305 0.0329417 0.866212 0.0654293C0.809118 0.0979169 0.758986 0.141336 0.71868 0.193206L0.105245 0.982892C0.0238694 1.08757 -0.0125943 1.22029 0.00387315 1.35186C0.0203406 1.48342 0.0883907 1.60306 0.193057 1.68445L18.5793 15.8947C18.6311 15.9351 18.6904 15.9648 18.7537 15.9822C18.8171 15.9996 18.8832 16.0044 18.9484 15.9962C19.0136 15.9881 19.0765 15.9672 19.1336 15.9347C19.1907 15.9022 19.2408 15.8588 19.2811 15.8069L19.8949 15.0172C19.9762 14.9125 20.0126 14.7798 19.9961 14.6482C19.9796 14.5166 19.9115 14.397 19.8067 14.3157ZM14.0655 9.87818L12.8374 8.92881C12.9408 8.62989 12.9957 8.31633 12.9999 8.00006C13.006 7.53702 12.9034 7.079 12.7004 6.66279C12.4974 6.24659 12.1996 5.8838 11.8309 5.60357C11.4622 5.32334 11.033 5.13348 10.5776 5.04923C10.1223 4.96499 9.65349 4.98872 9.20897 5.1185C9.39741 5.37385 9.49934 5.68272 9.4999 6.00006C9.49524 6.10567 9.4791 6.21045 9.45178 6.31256L7.15147 4.53476C7.95053 3.86701 8.95857 3.50084 9.9999 3.50007C10.5909 3.49974 11.1762 3.61591 11.7224 3.84194C12.2685 4.06797 12.7647 4.39943 13.1826 4.81735C13.6005 5.23528 13.932 5.73149 14.158 6.2776C14.384 6.82371 14.5002 7.40902 14.4999 8.00006C14.4999 8.67599 14.3346 9.30599 14.0655 9.87849V9.87818Z"
          fill="#999999"
        />
      </svg>
    </div>
  );
};

export const StyledButton = styled<Partial<ButtonProps>, "button">(
  "button",
  ({ top, bottom, left, right, small }: Partial<ButtonProps>) => ({
    color: "#fff",
    ...(!small && { width: "100%" }),

    height: "40px",
    background: "#B4873F",
    outline: "none",
    border: "none",
    textTransform: "uppercase",
    margin: `${top || 0} ${right || 0} ${bottom || 0} ${left || 0}`,
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
  })
);
