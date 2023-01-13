import CreateTransTabel from "./Transitions";
import css from './Transitions.module.css';

export default function Transactions({items}) {
  return(
    <table className={css.tabel}>
  <thead>
    <tr>
      <th className={css.head}>Type</th>
      <th className={css.head}>Amount</th>
      <th className={css.head}>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(({id, type, amount, currency}) => (
    <tr key={id} className={css.body}>
      <CreateTransTabel
      id={id}
      type={type}
      amount={amount}
      currency={currency}
      />
    </tr>
    ))}
  </tbody>
</table>
  )
};
