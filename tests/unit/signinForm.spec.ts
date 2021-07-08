import {
    findDomain,
    isDotCom,
    isEmailDomainsAllowed,
    isEmailValid,
    isNoSpace,
    isPasswordValid,
} from "../../utils/userform";

describe("valididate find email domain", () => {
    test("find email's Domain", () => {
        const email = "teddbel@gmail.com";
        const expectedDomain = "gmail.com";
        const domain = findDomain(email);
        expect(domain).toBe(expectedDomain);
    });
    test("find email's Domain", () => {
        const email = "teme@gmail.comteme@gmail.com";
        const expectedDomain = null;
        const domain = findDomain(email);
        expect(domain).toEqual(expectedDomain);
    });
    test("null email's Domain", () => {
        const email = "gmail.com";
        const expectedDomain = null;
        const domain = findDomain(email);
        expect(domain).toEqual(expectedDomain);
    });
});
describe("validate email is dotCom", () => {
    it("email includes .com", () => {
        const email = "teme@gmail.com";
        const dotCom = isDotCom(email);
        expect(dotCom).toBeTruthy;
    });
    it("email includes com", () => {
        const email = "teme@gmailcom";
        const dotCom = isDotCom(email);
        expect(dotCom).toBe(false);
    });
    it("email includes .com.", () => {
        const email = "teme@gmail.com.";
        const dotCom = isDotCom(email);
        expect(dotCom).toBe(false);
    });
    it("email includes .com", () => {
        const email = "teme@gmail.com.com";
        const dotCom = isDotCom(email);
        expect(dotCom).toBe(false);
    });
    it("email includes .com", () => {
        const email = "teme@gmail.com .com";
        const dotCom = isDotCom(email);
        expect(dotCom).toBe(false);
    });
    it("email chained .com", () => {
        const email = "teme@gmail.com.com.com";
        const dotCom = isDotCom(email);
        expect(dotCom).toBe(false);
    });
});
describe("is email valid?", () => {
    it("valid email address", () => {
        const email = "JohnDoe@gmail.com";
        const validEmail = isEmailValid(email);
        expect(validEmail).toEqual(true);
    });
    it("invalid domain email", () => {
        const email = "JohnDoe@mailer.com";
        const validEmail = isEmailValid(email);
        expect(validEmail).toEqual(false);
    });
    it("invalid domain email", () => {
        const email = "JohnDoe@yahhooo.com";
        const validEmail = isEmailValid(email);
        expect(validEmail).toEqual(false);
    });
    it("invalid domain email", () => {
        const email = "JohnDoe@yahoo.yahoo.com";
        const validEmail = isEmailValid(email);
        expect(validEmail).toEqual(false);
    });
});
describe("validate domains isEmailDomainsAllowed", () => {
    it("invalid domain", () => {
        const email: string = "jane@Jmailer.com";
        const isDomainAllowed = isEmailDomainsAllowed(email);
        expect(isDomainAllowed).toBe(false);
    });
    it("invalid domain", () => {
        const email: string = "jane@g mail.com";
        const isDomainAllowed = isEmailDomainsAllowed(email);
        expect(isDomainAllowed).toBe(false);
    });
    it("valid domain", () => {
        const email: string = "jane@google.com";
        const isDomainAllowed = isEmailDomainsAllowed(email);
        expect(isDomainAllowed).toBe(true);
    });
    it("valid domain", () => {
        const email: string = "jane@icloud.com";
        const isDomainAllowed = isEmailDomainsAllowed(email);
        expect(isDomainAllowed).toBe(true);
    });
    it("valid domain", () => {
        const email: string = "jane@yahoo.com";
        const isDomainAllowed = isEmailDomainsAllowed(email);
        expect(isDomainAllowed).toBe(true);
    });
});
describe("validate isNoSpace function", () => {
    test("valid spacing", () => {
        const email = "ajohnDoe@gmail.com";
        const noSapce = isNoSpace(email);
        expect(noSapce).toBe(true);
    });
    test("invlaid spacing", () => {
        const email = "ajohn Doe@gmail.com";
        const noSapce = isNoSpace(email);
        expect(noSapce).toBe(false);
    });
});
describe("invalid emails or valid email", () => {
    test("janeDor@gmailer.com", () => {
        const email = "janeDor@gmailer.com";
        const recieve = isEmailValid(email);
        expect(recieve).toBe(false);
    });
    test("janeDor@gmail.com", () => {
        const email = "janeDor@gmail.com";
        const recieve = isEmailValid(email);
        expect(recieve).toBe(true);
    });
});
