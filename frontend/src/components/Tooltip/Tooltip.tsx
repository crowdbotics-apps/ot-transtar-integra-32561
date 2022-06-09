import { useStyletron } from "baseui";
type Props = {};

const Tooltip = (props: Props) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        position: "absolute",
        top: "calc(100% - 20px)",
        right: "20px",
        width: "calc(100% - 10px)",
        height: "150px",
        padding: "20px",
        background: "#F8F8F8",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
        fontSize: "11px",
        lineHeight: "16px",
        letterSpacing: ".5px",
        fontWeight: 400,
        opacity: 0,
        zIndex: -1,
        transition: "opacity 0.5s ease-in-out",
      })}
    >
      Odyssey makes it simple, fast and easy for registered security holders to
      sign up for online access to confirm holdings, download a current DRS
      statement or make updates to account information
    </div>
  );
};

export default Tooltip;
