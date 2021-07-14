export default interface BlogPost {
  id: string;
  title: string;
  description: string;
  keywords: string;
  imgUrl: string;
  content: string;
  author: string;
  readTime: string;
}

export interface FormError {
  active: boolean;
  message: string;
}