import StatElementCreate from './Statistic';
import css from './Statistic.module.css';

export default function createStatList({ stats }) {
  return (
    <ul className={css.stateList}>
      {stats.map(stats => (
        <li key={stats.id} className={css.item}>
          <StatElementCreate
            id={stats.id}
            label={stats.label}
            percentage={stats.percentage}
          />
        </li>
      ))}
    </ul>
  );
}
