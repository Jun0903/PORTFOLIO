const WarningIcon = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="none"
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12,3 L22,21 L2,21 L12,3 Z M12,9 L12,15 M12,16 L12,18"
    />
  </svg>
);
export default WarningIcon;
