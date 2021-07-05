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
export const generateRandomIndex = (postList:any[]):Set<number> =>{
  const minLength = 0
  const maxLength = postList.length-1
  const randomIndexs:Set<number> = new Set()
  
  if(maxLength <= 3)return new Set([1,2,3])
  while(randomIndexs.size < 3){
    randomIndexs.add(Math.floor(Math.random() * maxLength))
  }
  return randomIndexs
}