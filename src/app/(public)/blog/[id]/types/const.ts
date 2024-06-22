import * as yup from 'yup';

export const commentSchema = yup
  .object()
  .shape({
    comment: yup.string().required(),
  })
  .required();

export interface dataCommentProps {
  comment: string;
}
export interface formUpdateProps extends dataCommentProps {}
