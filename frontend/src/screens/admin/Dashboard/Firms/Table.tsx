import React from "react"
import { useStyletron } from "baseui"
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic"
import { addSpace, StyledDarkParagraphText } from "../../../../components"
import { PulseLoader } from 'react-spinners'
const Table = ({
  data,
  loading,
  onClick
}: {
  data: any[],
  onClick: (id: number) => void;
  loading: boolean
}) => {
  const [css, theme] = useStyletron()
  const [page, setPage] = React.useState(1)
  const limit = 8

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 1 || nextPage > Math.ceil(data.length / limit)) {
      return
    }
    setPage(nextPage)
  }

  const window = () => {
    const min = (page - 1) * limit
    return data.slice(min, min + limit)
  }
  const currPageCount = window().length
  const pageStartNo = ((page - 1) * limit)
  return (
    <React.Fragment>
      {addSpace('vert', '40px')}
      <div className={css({ height: "500px", border: '1px solid #0E294B' })}>
        <TableBuilder
          data={window()}
          overrides={{
            Table: {
              style: () => ({
                maxHeight: "400px",
                overflowY: "hidden"
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
                verticalAlign: "center"
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
            header="Company Name"
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
            {row => row.name}
          </TableBuilderColumn>
          <TableBuilderColumn header="Account">
            {row => row.account}
          </TableBuilderColumn>
          <TableBuilderColumn header="">
            {row => (
              <div
                onClick={() => onClick(row.id)}
                style={{
                  color: "#B4873F",
                  textTransform: "uppercase",
                  textAlign: "right",
                  cursor: "pointer"
                }}
              >
                See Details
              </div>
            )}
          </TableBuilderColumn>
        </TableBuilder>
        {loading && !data.length &&
          <div
            style={{
              height: 300,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px'
            }}>
            Loading Firms <PulseLoader />
          </div>}
        {!data.length && !loading && (
          <StyledDarkParagraphText>
            {addSpace("vert", "20px")}
            No results found
          </StyledDarkParagraphText>
        )}
      </div>

      <div
        className={css({
          marginTop: "20px",
          display: data.length ? "flex" : "none",
          justifyContent: "space-between"
        })}
      >
        <StyledDarkParagraphText size="14px" weight={400}>
          Showing {pageStartNo + Number(data.length > 0)} - {pageStartNo + currPageCount} of {data.length}{" "}

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
          {Array.from({ length: Math.ceil(data.length / limit) }, (_, i) => (
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
                handlePageChange(i + (1 % Math.ceil(data.length / limit)))
              }
            >
              {i + 1}
            </div>
          ))}
          <div
            style={{
              color:
                page === Math.ceil(data.length / limit) ? "#AEBDCF" : "#0E294B",
              marginLeft: 20,
              cursor:
                page === Math.ceil(data.length / limit)
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
                  page === Math.ceil(data.length / limit)
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
