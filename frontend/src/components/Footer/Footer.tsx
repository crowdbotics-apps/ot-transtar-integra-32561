import { useStyletron } from "baseui";
import { StyledDarkParagraphText } from "../";
type Props = {};

const footerItems = [
  "Contact us",
  "Terms of use",
  "Privacy Policy",
  "Cookie Policy",
];

const Footer = (props: Props) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        width: "100vw",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        background: "rgba(234, 234, 236, 1)",
        padding: "0 70px",
        zIndex: 0,
      })}
    >
      <StyledDarkParagraphText size="12px" weight={600}>
        © 2022 Odyssey Trust Company – odysseytrust.com. All Rights Reserved.
      </StyledDarkParagraphText>

      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        {footerItems.map((item) => (
          <StyledDarkParagraphText
            size="12px"
            weight={600}
            className={css({
              padding: "0 20px",
              textDecoration: "underline rgba(14, 41, 75, 1) solid 1px",
              ":not(:last-child)": {
                borderRight: "1px solid rgba(14, 41, 75, 1)",
              },
            })}
          >
            {item}
          </StyledDarkParagraphText>
        ))}
      </div>
    </div>
  );
};

export default Footer;
