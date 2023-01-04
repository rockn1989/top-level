import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { UpIcon, CloseBigIcon, MenuIcon } from '../Icons';

export const icons = {
  UpIcon,
  CloseBigIcon,
  MenuIcon
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: IconName;
  appearance: 'primary' | 'white';
}