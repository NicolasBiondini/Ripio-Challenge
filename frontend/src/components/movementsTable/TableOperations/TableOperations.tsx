import { formatCurrency } from "@coingecko/cryptoformat";
import { transaction } from "../../../types/transactions";
import { TableOperationsStyles, FinalTd } from "./TableOperations.styles";

function TableOperations({
  date,
  operation,
  method,
  state,
  comision,
  amount,
  symbol,
}: transaction) {
  return (
    <TableOperationsStyles>
      <td>{date}</td>
      <td>{operation}</td>
      <td>{method}</td>
      <td>{state}</td>
      <td>{comision}</td>
      <FinalTd>+ {formatCurrency(Number(amount), symbol)}</FinalTd>
    </TableOperationsStyles>
  );
}

export default TableOperations;
