import "@testing-library/jest-dom";
import { readMinutes, articleSlug, generateRandomIndex } from "../utils";
const threeHundredWords =
  "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the mirror of my soul, as my soul is the mirror of the infinite God! O my friend";
const threeHundredWordstags =
  "<p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p><p>A wonderful serenity has taken possession of my entire soul, like these </p><h3> sweet mornings of spring which I enjoy with my whole heart.</h3><p> I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p> I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the mirror of my soul, as my soul is the mirror of the infinite God! O my friend";

describe("article slug funtions test", () => {
  test("should return a slug", () => {
    const articleTitle = "welcome to minimal syntax";
    const slug = articleSlug(articleTitle);
    expect(slug).toBe("welcome-to-minimal-syntax");
  });
  test("should return a slug for one word title", () => {
    const articleTitle = "welcome";
    const slug = articleSlug(articleTitle);
    expect(slug).toBe("welcome");
  });
  test("should return a slug with uppercase title", () => {
    const articleTitle = "welcome to MINIMAL syntax";
    const slug = articleSlug(articleTitle);
    expect(slug).toBe("welcome-to-minimal-syntax");
  });
  test("should return a slug with lowercase title", () => {
    const articleTitle = "welcome to minimal syntax";
    const slug = articleSlug(articleTitle);
    expect(slug).toBe("welcome-to-minimal-syntax");
  });
});

describe("test the functionality of mins read", () => {
  test("return the correct mins to read article", () => {
    const minutes = readMinutes(threeHundredWords);
    expect(minutes).toBe(2);
  });
  test("return the correct mins to read article rounded", () => {
    const minutes = readMinutes(threeHundredWords);
    expect(minutes).toBe(2);
  });
  test("return the correct mins to read article not including syntax tags", () => {
    const minutes = readMinutes(threeHundredWordstags);
    expect(minutes).toBe(2);
  });
  test("return the correct mins to read no content", () => {
    const text = "";
    const minutes = readMinutes(text);
    expect(minutes).toBe(1);
  });
  test("return the correct mins to read for less than average word per min", () => {
    const text = "abc";
    const minutes = readMinutes(text);
    expect(minutes).toBe(1);
  });
});

describe("post bucketting", () => {
  test("generate 3 random indexs within aarray", () => {
    const listOfPost = new Array(5);
    const randomIndexs = [...generateRandomIndex(listOfPost)];
    expect(randomIndexs).toHaveLength(3);
  });
  test("generate 3 random indexs within aarray not to be null", () => {
    const listOfPost = new Array(2);
    const randomIndexs = [...generateRandomIndex(listOfPost)];
    expect(randomIndexs).toEqual([1, 2, 3]);
  });
});
