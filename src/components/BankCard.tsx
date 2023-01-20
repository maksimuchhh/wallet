import { CURRENCY_CODES } from '../typescript/enums'
import { currencyCodeToText } from '../utils/currency'

type Props = {
  number?: string
  type?: 'Visa' | 'MasterCard'
  amount?: number
  currency?: CURRENCY_CODES
}

function BankCard({ number, currency, amount, type }: Props) {
  return (
    <div className="bank-card bank-card--mono">
      {currency && <p className="bank-card__currency">{currencyCodeToText[currency]}</p>}
      {amount !== undefined && <p className="bank-card__amount">{amount.toLocaleString('en')}</p>}
      {number && (
        <p className="bank-card__number">
          {number.match(/.{1,4}/g)?.map((el) => (
            <span className="bank-card__number-subgroup">{el}</span>
          ))}
        </p>
      )}
      {type && <p className="bank-card__type">{type}</p>}
    </div>
  )
}

export default BankCard
