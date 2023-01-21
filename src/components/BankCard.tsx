import { CURRENCY_CODES } from '../typescript/enums'
import { currencyCodeToText } from '../utils/currency'

type Props = {
  number?: string
  type?: 'Visa' | 'MasterCard'
  amount?: number
  currency?: CURRENCY_CODES
}

function BankCard({ number, currency, amount, type }: Props) {
  if (number?.charAt(0) === '4') {
    type = 'Visa'
  } else if (number?.charAt(0) === '5') {
    type = 'MasterCard'
  }
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

      {/* Another way */}
      {/* {(number?.charAt(0) === '4' && <p className="bank-card__type">Visa</p>)} */}
      {/* {(number?.charAt(0) === '5' && <p className="bank-card__type">MasterCard</p>)} */}
    </div>
  )
}

export default BankCard
