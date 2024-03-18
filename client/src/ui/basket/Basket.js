import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import BasketItem from 'ui/basket/BasketItem';
import { postTotal } from 'api/basket';

export default function Basket() {
  const [total, setTotal] = useState(0);
  const basket = useSelector(state => state.basket);

  const { mutate: totalMutate } = useMutation(postTotal, {
    onSuccess: data => {
      setTotal(data)
    }
  });

  useEffect(() => {
    totalMutate(basket);
  }, [basket, totalMutate]);

  return (
    <div className="basket">
      <div>
        <h1>Basket</h1>
      </div>
      <Table>
        <TableBody>
          {basket.map((basketItem, index) => (
            <BasketItem item={basketItem} />
          ))}
        </TableBody>
      </Table>
      <div className="basket-total">
        <h3>Total: £{total.toFixed(2)}</h3>
      </div>
    </div>
  );
};