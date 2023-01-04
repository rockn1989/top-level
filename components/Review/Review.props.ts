import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";
import { ReviewModel } from "../../interfaces/product.interface";

export interface ReviewProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: ReviewModel
}