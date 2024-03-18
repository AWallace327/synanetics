import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';

import store from 'store/store'
import {
  productAdded,
  productReduced,
  productDeleted
} from 'store/basketSlice';

const style = {
  color: "#F6F7F9",
  fontWeight: 700,
  textAlign: "center",
  padding: "4px"
};

const iconStyle = {
  ...style,
  color: "#2D8CAC",
  marginRight: "4px",
  marginLeft: "4px"
};

export default function BasketItem({item}) {
  const handleAdd = () => {
    store.dispatch(productAdded(item));
  };

  const handleReduce = () => {
    store.dispatch(productReduced(item));
  };

  const handleDelete = () => {
    store.dispatch(productDeleted(item));
  };

  return (
    <TableRow className="table-row">
      <TableCell sx={iconStyle}>
        <FontAwesomeIcon icon={item.icon} size="lg" />
      </TableCell>
      <TableCell sx={style}>
        {item.name}
      </TableCell>
      <TableCell sx={style}>
        <IconButton size="small" onClick={handleReduce} sx={iconStyle}>
          <FontAwesomeIcon icon="minus" size="md" />
        </IconButton>
        {item.quantity}
        <IconButton size="small" onClick={handleAdd} sx={iconStyle}>
          <FontAwesomeIcon icon="plus" size="md" />
        </IconButton>
        <IconButton size="small" onClick={handleDelete} sx={iconStyle}>
          <FontAwesomeIcon icon="trash" size="md" />
        </IconButton>
      </TableCell>
      <TableCell sx={style}>
        £{(item.quantity * item.price).toFixed(2)}
      </TableCell>
    </TableRow>
  );
};