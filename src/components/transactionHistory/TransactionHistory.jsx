import { Tr } from './Tr';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead style={{ backgroundColor: '#00BCD5', color: '#fff' }}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <Tr
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
