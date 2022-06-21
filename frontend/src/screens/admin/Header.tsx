import { StyledDarkParagraphText } from "../../components"
import { useStyletron } from "baseui"
import { useNavigate } from "react-router-dom"

export default ({
  showBack,
  children
}: {
  showBack?: boolean,
  children: React.ReactNode
}) => {
  const [css] = useStyletron()
  const navigate = useNavigate()
  return (
    <div
      className={css({
        width: "calc(100vw - 300px)",
        borderBottom: "1px solid #0E294B",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100px",
        position: "fixed",
        top: 0,
        left: "300px",
        padding: "0 50px",
        backgroundColor: "#fff"
      })}
    >
      {children}
      {showBack && (
        <StyledDarkParagraphText
          size="14px"
          weight={500}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: 10 }}
          >
            <path
              d="M6.89789 11.1962L6.30331 11.8063C6.05156 12.0646 5.64446 12.0646 5.39538 11.8063L0.188818 6.46714C-0.0629394 6.20884 -0.0629394 5.79116 0.188818 5.53561L5.39538 0.193726C5.64714 -0.0645752 6.05423 -0.0645752 6.30331 0.193726L6.89789 0.803755C7.15233 1.0648 7.14697 1.49073 6.88718 1.74628L3.65986 4.90085H11.3572C11.7134 4.90085 12 5.19487 12 5.56034V6.43966C12 6.80513 11.7134 7.09915 11.3572 7.09915H3.65986L6.88718 10.2537C7.14965 10.5093 7.155 10.9352 6.89789 11.1962Z"
              fill="#0E294B"
            />
          </svg>
          BACK
        </StyledDarkParagraphText>
      )}
    </div>
  )
}
