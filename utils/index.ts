export const readMinutes = (postContent: string) => {
  const avgWordsperMin = 250;
  const noOfwords = postContent.split(" ").length;
  return Math.ceil(noOfwords / avgWordsperMin);
};
export const articleSlug = (articleTitle: string) => {
  return articleTitle.toLowerCase().split(" ").join("-");
};
