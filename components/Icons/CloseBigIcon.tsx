
interface CloseBigIconProps {
  width?: number,
  height?: number,
  className?: string,
}


const CloseBigIcon = ({ width, height, className }: CloseBigIconProps) => {
  return (
    <svg width='18px' height='18px' className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="16.5104" width="23" height="3" rx="1.5" transform="rotate(-45 0 16.5104)" fill="currentColor" />
      <rect x="2.25305" width="23" height="3" rx="1.5" transform="rotate(45 2.25305 0)" fill="currentColor" />
    </svg>

  );
};

export { CloseBigIcon };