import * as S from "./TotalMoneyAccount.styles";
import { FaAngleDown } from "react-icons/fa";
import { toThousands } from "../../util/toPesos";

type Props = {
  amount: string;
  coin: string;
  symbol: string;
};

function TotalMoneyAccount({ amount, coin, symbol }: Props) {
  return (
    <S.TotalMoneyAccountStyled>
      <S.Price>
        <span>{symbol}</span>
        {toThousands(amount)}
      </S.Price>
      <S.Button>
        {coin}
        <span>
          <FaAngleDown />
        </span>
      </S.Button>
    </S.TotalMoneyAccountStyled>
  );
}

export default TotalMoneyAccount;
