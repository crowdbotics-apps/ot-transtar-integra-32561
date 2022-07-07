import * as React from "react"
import { useNavigate } from 'react-router-dom'
import { useStyletron } from "baseui"
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic"
import { StyledDarkParagraphText } from "../../../../components"
import { useContext } from "react"
import { AdminContext } from "../../../../context/AdminContext"

const Table = () => {
  const [css, theme] = useStyletron()
  const [page, setPage] = React.useState(1)
  const navigate = useNavigate();
  const { deleteUser, filteredUsers } = useContext(AdminContext)

  const limit = 8

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 1) {
      return
    }
    if (nextPage > Math.ceil(filteredUsers.length / limit)) {
      return
    }
    setPage(nextPage)
  }

  const window = () => {
    const min = (page - 1) * limit
    return filteredUsers.slice(min, min + limit)
  }
  const currPageCount = window().length
  const pageStartNo = ((page - 1) * limit)

  return (
    <React.Fragment>
      <div className={css({ height: "fit-content" })}>
        <TableBuilder
          data={window()}
          overrides={{
            Table: {
              style: () => ({
                maxHeight: "600px",
                overflowY: "hidden",
                color: "#0E294B",
                border: "1px solid #0E294B"
              })
            },
            TableHeadRow: {
              style: ({ $theme }) => ({
                backgroundColor: $theme.colors.warning,
                height: "67px",
                color: "red"
              })
            },
            TableHeadCell: {
              style: ({ $theme }) => ({
                background: "#0E294B",
                height: "67px",
                color: "#fff",
                fontWeight: 500,
                textTransform: "uppercase",
                fontSize: "14px",
                verticalAlign: "center"
              })
            },
            TableBody: {
              style: {
                border: "1px solid black"
              }
            },
            TableBodyCell: {
              style: () => ({
                paddingRight: "40px",
                verticalAlign: "center",
                color: "#0E294B"
              })
            },
            TableBodyRow: {
              style: ({ $theme, $rowIndex }: any) => ({
                backgroundColor:
                  $rowIndex % 2
                    ? $theme.colors.backgroundSecondary
                    : $theme.colors.backgroundPrimary,
                ":hover": {
                  backgroundColor: $theme.colors.backgroundTertiary
                }
              })
            }
          }}
        >
          <TableBuilderColumn
            header="Full Name"
            overrides={{
              TableBodyCell: {
                style: () => ({
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#0E294B"
                })
              }
            }}
          >
            {row => row.full_name}
          </TableBuilderColumn>
          <TableBuilderColumn header="Title">
            {row => row.title}
          </TableBuilderColumn>
          <TableBuilderColumn header="Sector">
            {row => row.sector}
          </TableBuilderColumn>
          <TableBuilderColumn header="Phone Number">
            {row => row.phone}
          </TableBuilderColumn>
          <TableBuilderColumn header="Email Address">
            {row => row.email}
          </TableBuilderColumn>
          <TableBuilderColumn header="">
            {row => (
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  float: "right",
                }}
              >
                <button
                  onClick={() => {
                    navigate(String(row.id));
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #0E294B",
                    height: 30,
                    width: 110,
                    gap: 10,
                    backgroundColor: "transparent",
                    color: "#0E294B",
                    fontWeight: 500,
                    fontSize: "12px",
                    cursor: "pointer"
                  }}
                >
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4844 2.11037L12.8333 4.40105C12.9323 4.49756 12.9323 4.65501 12.8333 4.75151L7.14583 10.2979L4.72917 10.5595C4.40625 10.595 4.13281 10.3284 4.16927 10.0135L4.4375 7.65677L10.125 2.11037C10.224 2.01387 10.3854 2.01387 10.4844 2.11037ZM14.7031 1.52881L13.4323 0.28951C13.0365 -0.0965032 12.3932 -0.0965032 11.9948 0.28951L11.0729 1.18851C10.974 1.28502 10.974 1.44247 11.0729 1.53897L13.4219 3.82965C13.5208 3.92616 13.6823 3.92616 13.7812 3.82965L14.7031 2.93065C15.099 2.5421 15.099 1.91483 14.7031 1.52881ZM10 8.78941V11.3747H1.66667V3.2481H7.65104C7.73437 3.2481 7.8125 3.21508 7.8724 3.15921L8.91406 2.14339C9.11198 1.95038 8.97135 1.62278 8.69271 1.62278H1.25C0.559896 1.62278 0 2.16878 0 2.84177V11.781C0 12.454 0.559896 13 1.25 13H10.4167C11.1068 13 11.6667 12.454 11.6667 11.781V7.77359C11.6667 7.50186 11.3307 7.36726 11.1328 7.55773L10.0911 8.57355C10.0339 8.63196 10 8.70815 10 8.78941Z"
                      fill="#0E294B"
                    />
                  </svg>
                  EDIT{" "}
                </button>
                <button
                  style={{
                    display: "flex",
                    gap: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #0E294B",
                    height: 30,
                    width: 110,
                    backgroundColor: "transparent",
                    color: "#0E294B",
                    fontWeight: 500,
                    fontSize: "12px",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    deleteUser(row.id)
                    console.log('deleting');

                  }}
                >
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.857143 11.7812C0.857143 12.1045 0.992602 12.4145 1.23372 12.643C1.47484 12.8716 1.80186 13 2.14286 13H9.85714C10.1981 13 10.5252 12.8716 10.7663 12.643C11.0074 12.4145 11.1429 12.1045 11.1429 11.7812V3.25H0.857143V11.7812ZM8.14286 5.28125C8.14286 5.17351 8.18801 5.07018 8.26838 4.99399C8.34875 4.9178 8.45776 4.875 8.57143 4.875C8.68509 4.875 8.7941 4.9178 8.87447 4.99399C8.95485 5.07018 9 5.17351 9 5.28125V10.9688C9 11.0765 8.95485 11.1798 8.87447 11.256C8.7941 11.3322 8.68509 11.375 8.57143 11.375C8.45776 11.375 8.34875 11.3322 8.26838 11.256C8.18801 11.1798 8.14286 11.0765 8.14286 10.9688V5.28125ZM5.57143 5.28125C5.57143 5.17351 5.61658 5.07018 5.69695 4.99399C5.77733 4.9178 5.88634 4.875 6 4.875C6.11366 4.875 6.22267 4.9178 6.30305 4.99399C6.38342 5.07018 6.42857 5.17351 6.42857 5.28125V10.9688C6.42857 11.0765 6.38342 11.1798 6.30305 11.256C6.22267 11.3322 6.11366 11.375 6 11.375C5.88634 11.375 5.77733 11.3322 5.69695 11.256C5.61658 11.1798 5.57143 11.0765 5.57143 10.9688V5.28125ZM3 5.28125C3 5.17351 3.04515 5.07018 3.12553 4.99399C3.2059 4.9178 3.31491 4.875 3.42857 4.875C3.54224 4.875 3.65124 4.9178 3.73162 4.99399C3.81199 5.07018 3.85714 5.17351 3.85714 5.28125V10.9688C3.85714 11.0765 3.81199 11.1798 3.73162 11.256C3.65124 11.3322 3.54224 11.375 3.42857 11.375C3.31491 11.375 3.2059 11.3322 3.12553 11.256C3.04515 11.1798 3 11.0765 3 10.9688V5.28125ZM11.5714 0.812504H8.35714L8.10536 0.3377C8.05202 0.236192 7.96986 0.150805 7.86812 0.0911462C7.76638 0.0314874 7.6491 -7.68819e-05 7.52946 4.45167e-06H4.46786C4.34849 -0.000430503 4.23142 0.031016 4.13004 0.0907413C4.02866 0.150466 3.94708 0.236055 3.89464 0.3377L3.64286 0.812504H0.428571C0.314907 0.812504 0.205898 0.855305 0.125526 0.931492C0.0451529 1.00768 0 1.11101 0 1.21875L0 2.03125C0 2.139 0.0451529 2.24233 0.125526 2.31852C0.205898 2.3947 0.314907 2.4375 0.428571 2.4375H11.5714C11.6851 2.4375 11.7941 2.3947 11.8745 2.31852C11.9548 2.24233 12 2.139 12 2.03125V1.21875C12 1.11101 11.9548 1.00768 11.8745 0.931492C11.7941 0.855305 11.6851 0.812504 11.5714 0.812504Z"
                      fill="#0E294B"
                    />
                  </svg>
                  DELETE{" "}
                </button>
              </div>
            )}
          </TableBuilderColumn>
        </TableBuilder>
      </div>
      <div
        className={css({
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between"
        })}
      >
        <StyledDarkParagraphText size="14px" weight={400}>
          Showing {pageStartNo + Number(filteredUsers.length > 0)} - {pageStartNo + currPageCount} of {filteredUsers.length}{" "}
          Companies
        </StyledDarkParagraphText>
        <div
          style={{
            color: "#0E294B",
            display: "flex",
            alignItems: "center",
            gap: 10
          }}
        >
          <div
            style={{
              color: page > 1 ? "#0E294B" : "#AEBDCF",
              cursor: page > 1 ? "pointer" : "not-allowed",
              marginRight: 20
            }}
            onClick={() => handlePageChange(page - 1)}
          >
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 10 }}
            >
              <path
                d="M7 0.807433L7 11.1926C7 11.911 6.10762 12.2702 5.58464 11.7617L0.242811 6.57112C-0.0809367 6.2563 -0.0809367 5.7437 0.242811 5.42888L5.58464 0.23833C6.10762 -0.270231 7 0.0889903 7 0.807433Z"
                fill={page > 1 ? "#0E294B" : "#AEBDCF"}
              />
            </svg>
            PREVIOUS
          </div>
          {Array.from({ length: Math.ceil(filteredUsers.length / limit) }, (_, i) => (
            <div
              style={{
                ...(i + 1 === page && {
                  backgroundColor: "#0E294B",
                  color: "#fff"
                }),
                width: 25,
                height: 25,
                display: "grid",
                placeItems: "center",
                cursor: "pointer"
              }}
              onClick={() =>
                handlePageChange(i + (1 % Math.ceil(filteredUsers.length / limit)))
              }
            >
              {i + 1}
            </div>
          ))}
          <div
            style={{
              color:
                page === Math.ceil(filteredUsers.length / limit) ? "#AEBDCF" : "#0E294B",
              marginLeft: 20,
              cursor:
                page === Math.ceil(filteredUsers.length / limit)
                  ? "not-allowed"
                  : "pointer"
            }}
            onClick={() => handlePageChange(page + 1)}
          >
            NEXT
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: 10 }}
            >
              <path
                d="M1.05882e-07 11.1926L1.46773e-06 0.807433C1.56194e-06 0.0889902 0.892382 -0.270231 1.41536 0.23833L6.75719 5.42888C7.08094 5.7437 7.08094 6.2563 6.75719 6.57112L1.41536 11.7617C0.892381 12.2702 1.16697e-08 11.911 1.05882e-07 11.1926Z"
                fill={
                  page === Math.ceil(filteredUsers.length / limit)
                    ? "#AEBDCF"
                    : "#0E294B"
                }
              />
            </svg>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Table
