'use client';

import CustomTable from '../../../common/table/index';
import React, { useEffect, useMemo } from 'react';
import { Card } from 'react-bootstrap';
import {
  useBorderDeleteMutation,
  useBorderListQuery,
} from '../../../redux/service/border/border';

import DateFormatter from '../../../utils/DateFormatter';

const Border = () => {
  const { data: borderList, isLoading, isError } = useBorderListQuery();

  const [borderDelete] = useBorderDeleteMutation();

  const ActionColumn = ({ row }) => {
    console.log(row);
    return (
      <>
        <span role="button" className="action-icon text-warning">
          <i className="mdi mdi-square-edit-outline"></i>
        </span>

        <span role="button" className="action-icon text-danger ms-2">
          <i
            className="mdi mdi-delete"
            onClick={() => borderDelete({ id: row?.original?._id })}
          ></i>
        </span>
      </>
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Action',
        accessor: 'action',
        classes: 'table-action',
        Cell: ActionColumn,
      },
      {
        Header: '#',
        accessor: 'sl',
        Cell: ({ row }) => row.index + 1,
        classes: 'table-user',
      },
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ value }) => value || 'n/a',
        classes: 'table-user',
      },
      {
        Header: 'Mobile',
        accessor: 'mobile',
        Cell: ({ value }) => value || 'n/a',
        classes: 'table-user',
      },
      {
        Header: 'Email',
        accessor: 'email',
        Cell: ({ value }) => value || 'n/a',
        classes: 'table-user',
      },
      {
        Header: 'Room Number',
        accessor: 'roomNumber',
        Cell: ({ value }) => value || 'n/a',
        classes: 'table-user',
      },
      {
        Header: 'Create Date',
        accessor: 'createdAt',
        Cell: ({ value }) => <DateFormatter date={value} /> || 'n/a',
        classes: 'table-user',
      },
    ],
    [],
  );
  const sizePerPageList = [
    {
      text: '5',
      value: 5,
    },
    {
      text: '10',
      value: 10,
    },
    {
      text: '50',
      value: 50,
    },
  ];

  return (
    <Card>
      <Card.Body style={{ minHeight: '100vh' }}>
        <CustomTable
          columns={columns}
          data={borderList}
          tableInfo={{
            addTitle: 'Border',
          }}
        />
      </Card.Body>
    </Card>
  );
};

export default Border;
