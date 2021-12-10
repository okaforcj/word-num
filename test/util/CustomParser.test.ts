import { InvalidArgumentError } from "commander";
import { LanguageEnum } from "../../src/model/LanguageEnum";
import { allowedIntParser, languageParser } from "../../src/util/CustomParser";

describe("Test Custom Integer Parser", () => {
  test("parses integer correctly", () => {
    expect(allowedIntParser("9")).toEqual(9);
  });

  test("parses integer correctly", () => {
    expect(allowedIntParser("25")).toEqual(25);
  });

  test("throws error when parsing invalid integer", () => {
    expect(() => allowedIntParser("jfhfsds")).toThrow(
      "Not a valid integer number."
    );
  });

  ["100001", "-3243", "8439434", "-1"].forEach((value) => {
    test("throws error when integer is out of range", () => {
      expect(() => allowedIntParser(value)).toThrow(
        "Number must be within the 0 and 100000 range"
      );
    });
  });
});

describe("Test Language Parser", () => {
  test("gets implemented mapping ", () => {
    expect(languageParser("en")).toEqual(LanguageEnum.ENGLISH);
  });

  test("gets implemented mapping ", () => {
    expect(languageParser("fr")).toEqual(LanguageEnum.FRENCH);
  });

  test("throws error on unimplemented mapping ", () => {
    expect(() => languageParser("gh")).toThrow(InvalidArgumentError);
  });
});
