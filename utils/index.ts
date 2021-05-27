export const readMinutes = (postContent: string) => {
  const avgWordsperMin = 250;
  postContent.replace(/(<([^>]+)>)/gi, "");
  const noOfwords = postContent.split(" ").length;
  return Math.ceil(noOfwords / avgWordsperMin);
};
export const articleSlug = (articleTitle: string): string => {
  return articleTitle.toLowerCase().split(" ").join("-");
};
export const articleUnSlug = (articleTitle: string): string => {
  return articleTitle.split("-").join(" ");
};
