
interface MenuIconProps {
  width?: number,
  height?: number,
  className?: string,
}


const MenuIcon = ({ width, height, className }: MenuIconProps) => {
  return (
    <svg width={`${width}px`} height={`${height}px`} className={className} viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="3" rx="1.5" fill="CURRENTCOLOR" />
      <rect y="7" width="20" height="3" rx="1.5" fill="CURRENTCOLOR" />
      <rect y="14" width="20" height="3" rx="1.5" fill="CURRENTCOLOR" />
    </svg>
  );
};

export { MenuIcon };