import {
    findDomain,
    isDotCom,
    isEmailDomainsAllowed,
    isEmailValid,
    isNoSpace,
    hasSpecialChar,
    hasNumber,
    hasUpperCase,
    hasLowerCase,
    getPasswordLength,
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
// password validations
describe("validate hasSpecialChar", () => {
    it("invalid specialChar", () => {
        const password = "ajohnDoe";
        const hasSpecialCharacter = hasSpecialChar(password);
        expect(hasSpecialCharacter).toBe(false);
    });
    it("valid specialChar", () => {
        const password = "$#@";
        const hasSpecialCharacter = hasSpecialChar(password);
        expect(hasSpecialCharacter).toBe(true);
    });
});
describe("validate hasNumber", () => {
    it("invalid hasNumber", () => {
        const password = "ajohnDoe";
        const recievedVal = hasNumber(password);
        expect(recievedVal).toBe(false);
    });
    it("valid hasNumber", () => {
        const password = "12345";
        const recievedVal = hasNumber(password);
        expect(recievedVal).toBe(true);
    });
    it("valid hasNumber", () => {
        const password = "jorn12345";
        const recievedVal = hasNumber(password);
        expect(recievedVal).toBe(true);
    });
    it("valid hasNumber", () => {
        const password = "SAFASfsafnasa@13==";
        const recievedVal = hasNumber(password);
        expect(recievedVal).toBe(true);
    });
});
describe("validate hasUpperCase", () => {
    it("valid hasUpperCase", () => {
        const password = "ajohnDoe";
        const recievedVal = hasUpperCase(password);
        expect(recievedVal).toBe(true);
    });
    it("valid hasUpperCase", () => {
        const password = "JOHNDOE";
        const recievedVal = hasUpperCase(password);
        expect(recievedVal).toBe(true);
    });
    it("valid hasUpperCase", () => {
        const password = "JOHNDOE1";
        const recievedVal = hasUpperCase(password);
        expect(recievedVal).toBe(true);
    });
    it("valid hasUpperCase", () => {
        const password = "JOHNDOE1@";
        const recievedVal = hasUpperCase(password);
        expect(recievedVal).toBe(true);
    });
    it("invalid hasUpperCase", () => {
        const password = "johndoe";
        const recievedVal = hasUpperCase(password);
        expect(recievedVal).toBe(false);
    });
});
describe("validate getPasswordLength", () => {
    it("valid getPasswordLength", () => {
        const password = "ajohoe";
        const recievedVal = getPasswordLength(password);
        expect(recievedVal).toBe(6);
    });
    it("valid getPasswordLength", () => {
        const password = "JOHNasdDOE";
        const recievedVal = getPasswordLength(password);
        expect(recievedVal).toBe(10);
    });
    it("valid getPasswordLength", () => {
        const password = "JOHND32OE21#!1";
        const recievedVal = getPasswordLength(password);
        expect(recievedVal).toBe(14);
    });
    it("valid getPasswordLength", () => {
        const password = "JO2312!!vsHNDOE1@";
        const recievedVal = getPasswordLength(password);
        expect(recievedVal).toBe(17);
    });
    it("invalid getPasswordLength", () => {
        const password = "joh2123SDnk!@n12==12oe";
        const recievedVal = getPasswordLength(password);
        expect(recievedVal).toBe(22);
    });
});
describe("validate hasLowerCase", () => {
    it("valid hasLowerCase", () => {
        const password = "ajLAD@#ohnDoe";
        const recievedVal = hasLowerCase(password);
        expect(recievedVal).toBe(true);
    });
    it("valid hasLowerCase", () => {
        const password = "joh!@@#!nDoe";
        const recievedVal = hasLowerCase(password);
        expect(recievedVal).toBe(true);
    });
    it("valid hasLowerCase", () => {
        const password = "johSADASfsanDoe1";
        const recievedVal = hasLowerCase(password);
        expect(recievedVal).toBe(true);
    });
    it("valid hasLowerCase", () => {
        const password = "johnDoe1@";
        const recievedVal = hasLowerCase(password);
        expect(recievedVal).toBe(true);
    });
    it("invalid hasLowerCase", () => {
        const password = "JOHNDOE";
        const recievedVal = hasLowerCase(password);
        expect(recievedVal).toBe(false);
    });
});
describe("validate isPasswordValid", () => {
    it("valid isPasswordValid", () => {
        const password = "ajohdSDF42!@sfoe";
        const recievedVal = isPasswordValid(password);
        expect(recievedVal).toBe(true);
    });
    it("valid isPasswordValid", () => {
        const password = "JOHNDLMDFaOE3!43%";
        const recievedVal = isPasswordValid(password);
        expect(recievedVal).toBe(true);
    });
    it("valid isPasswordValid", () => {
        const password = "JO9n20!=HNsafDOE1";
        const recievedVal = isPasswordValid(password);
        expect(recievedVal).toBe(true);
    });
    it("valid isPasswordValid", () => {
        const password = "Jpl43$OHNaskmasDOE1@";
        const recievedVal = isPasswordValid(password);
        expect(recievedVal).toBe(true);
    });
    it("invalid isPasswordValid", () => {
        const password = "johndoe";
        const recievedVal = isPasswordValid(password);
        expect(recievedVal).toBe(false);
    });
    it("invalid isPasswordValid", () => {
        const password = "JSDONSOMEPKF";
        const recievedVal = isPasswordValid(password);
        expect(recievedVal).toBe(false);
    });
    it("invalid isPasswordValid", () => {
        const password = "34531242r";
        const recievedVal = isPasswordValid(password);
        expect(recievedVal).toBe(false);
    });
});
