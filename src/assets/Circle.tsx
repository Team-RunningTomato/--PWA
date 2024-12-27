import { useLVStore } from '@/stores';
import { getGradient } from '@/utils';

interface CircleProps {
  percent: number;
}

const Circle = ({ percent }: CircleProps) => {
  const { LV } = useLVStore();

  const radius = 85;
  const strokeWidth = 30;
  const circumference = 2 * Math.PI * radius;
  const clampedPercent = Math.max(0, Math.min(100, percent));

  const adjustment = (strokeWidth / circumference) * 50;
  const adjustedPercent = Math.max(
    0,
    Math.min(100, clampedPercent - adjustment)
  );

  const strokeDashoffset =
    circumference - (adjustedPercent / 100) * circumference;

  const adjustedStrokeDashoffset =
    clampedPercent === 100 ? 0 : strokeDashoffset;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12.5rem'
      height='12.5rem'
      viewBox='0 0 200 200'
      fill='none'
    >
      <circle
        cx='100'
        cy='100'
        r={radius}
        stroke='#373737'
        strokeWidth={strokeWidth}
        fill='none'
      />
      <circle
        cx='100'
        cy='100'
        r={radius}
        stroke={`url(#gradient-${LV})`}
        strokeWidth={strokeWidth}
        fill='none'
        strokeDasharray={circumference}
        strokeDashoffset={adjustedStrokeDashoffset}
        strokeLinecap='round'
        transform='rotate(5 100 100)'
      />
      <defs>
        <linearGradient
          id={`gradient-${LV}`}
          x1='100'
          y1='15'
          x2='100'
          y2='185'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={getGradient(LV).split(' ')[1]} />
          <stop offset='0.555' stopColor={getGradient(LV).split(' ')[3]} />
          <stop offset='1' stopColor={getGradient(LV).split(' ')[5]} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Circle;
