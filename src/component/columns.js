import { format } from "date-fns"

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableFilters: true,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "DOB",
    Footer: "DOB",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/mm/yyyy")
    },
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
]

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "DOB",
        Footer: "DOB",
        accessor: "date_of_birth",
      },
      {
        Header: "Age",
        Footer: "Age",
        accessor: "age",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
]
