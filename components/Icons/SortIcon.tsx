
interface SortIconProps {
  width?: number,
  height?: number
  className?: string,
}


const SortIcon = ({ width, height, className }: SortIconProps) => {
  return (
    <svg width={`${width}px`} height={`${height}px`} className={className} viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="3" rx="1.5" fill="CURRENTCOLOR" />
      <rect y="5" width="14" height="3" rx="1.5" fill="CURRENTCOLOR" />
      <rect y="10" width="8" height="3" rx="1.5" fill="CURRENTCOLOR" />
    </svg>
  );
};

export { SortIcon };