import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import CustomTooltip from './CustomTooltip/CustomTooltip';

import css from './Schedule.module.css';

const data = [
  { date: 16, value: 2400 },
  { date: 17, value: 2100 },
  { date: 18, value: 2400 },
  { date: 19, value: 1750 },
  { date: 20, value: 2000 },
  { date: 21, value: 1800 },
  { date: 22, value: 2300 },
];
const renderCustomDot = ({ cx, cy, index }) => {
  if (index === 0 || index === data.length - 1) return null;
  return (
    <g key={`custom-dot-${index}`}>
      <circle
        cx={cx}
        cy={cy}
        r={9}
        fill="white"
        stroke="#82ca9d"
        strokeWidth={2}
      />
      <circle cx={cx} cy={cy} r={3} fill="white" />
    </g>
  );
};
const formatYAxis = (value) => {
  return value === 0
    ? `${value}%`
    : value % 1 === 0
      ? `${value / 1000} L`
      : `${(value / 1000).toFixed(1)} L`;
};
const yAxisStyle = {
  color: 'rgb(50, 63, 71)',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '18px',
  textWrap: 'nowrap',
  textAnchor: 'start',
  dx: -30,
};
const Schedule = () => {
  return (
    <div className={css.wrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 23,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9BE1A0" stopOpacity={1} />
              <stop offset="80%" stopColor="#9BE1A0" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#9BE1A0" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            padding={{ left: 10 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            width={40}
            padding={{ bottom: 5 }}
            tick={yAxisStyle}
            tickFormatter={formatYAxis}
            tickCount={6}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={false}
            isAnimationActive={true}
          />
          <Area
            type="linear"
            dataKey="value"
            stroke="#82ca9d"
            fill="url(#colorUv)"
            dot={renderCustomDot}
            activeDot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Schedule;
