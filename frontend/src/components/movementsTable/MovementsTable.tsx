import { useEffect } from "react";
import * as S from "./MovementsTable.styles";
import TableOperations from "./TableOperations/TableOperations";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getListTransactions } from "../../app/slices/converterSlice";
type Props = {
  limit: number;
};

function MovementsTable({ limit }: Props) {
  const dispatch = useAppDispatch();

  const transactions = useAppSelector((store) => store.converter.transactions);

  useEffect(() => {
    dispatch(getListTransactions({ limit }));
  }, [dispatch]);

  return (
    <S.MovementsTableStyles>
      <S.Tbody>
        <tr>
          <th>Fecha</th>
          <th>Tipo Operación</th>
          <th>Método</th>
          <th>Estado</th>
          <th>Comisión</th>
          <th>Monto</th>
        </tr>
        {transactions.map((transaction, index) => {
          return (
            <TableOperations
              key={`${index}+${index}${transaction.symbol}+${transaction.amount}`}
              date={transaction.date}
              operation={transaction.operation}
              method={transaction.method}
              state={transaction.state}
              comision={transaction.comision}
              amount={transaction.amount}
              symbol={transaction.symbol}
            />
          );
        })}
      </S.Tbody>
    </S.MovementsTableStyles>
  );
}

export default MovementsTable;
