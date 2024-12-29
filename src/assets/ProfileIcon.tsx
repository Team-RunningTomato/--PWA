interface ProfileIconProps {
  isFill: boolean;
}

const ProfileIcon = ({ isFill }: ProfileIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1.5rem'
    height='1.5rem'
    viewBox='0 0 24 25'
    fill='none'
  >
    {isFill ? (
      <path
        d='M15 8C15 8.79565 14.6839 9.55871 14.1213 10.1213C13.5587 10.6839 12.7956 11 12 11C11.2044 11 10.4413 10.6839 9.87868 10.1213C9.31607 9.55871 9 8.79565 9 8C9 7.20435 9.31607 6.44129 9.87868 5.87868C10.4413 5.31607 11.2044 5 12 5C12.7956 5 13.5587 5.31607 14.1213 5.87868C14.6839 6.44129 15 7.20435 15 8ZM19.5 21C19.025 11.667 4.975 11.667 4.5 21Z'
        stroke='#717171'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    ) : (
      <path
        d='M15 8C15 8.79565 14.6839 9.55871 14.1213 10.1213C13.5587 10.6839 12.7956 11 12 11C11.2044 11 10.4413 10.6839 9.87868 10.1213C9.31607 9.55871 9 8.79565 9 8C9 7.20435 9.31607 6.44129 9.87868 5.87868C10.4413 5.31607 11.2044 5 12 5C12.7956 5 13.5587 5.31607 14.1213 5.87868C14.6839 6.44129 15 7.20435 15 8ZM19.5 21C19.025 11.667 4.975 11.667 4.5 21Z'
        stroke='#717171'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    )}
  </svg>
);

export default ProfileIcon;
