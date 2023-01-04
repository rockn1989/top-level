import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface ReviewFormProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productId: string;
  isOpened?: boolean;
}

export interface IReviewSentResponse {
  message: string
}