import React from 'react';
import { TablePagination, TablePaginationProps } from '@mui/material';

const TablePaginationUi: React.FC<TablePaginationProps> = (props) => {
  return (
    <table>
      <tbody>
      <tr>
        <TablePagination sx={{
          borderBottom: 'none'
        }} {...props} />
      </tr>
      </tbody>
    </table>);
};

export default TablePaginationUi;
