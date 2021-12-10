import { English } from "../../src/config/English";
import { LanguageEnum } from "../../src/model/LanguageEnum";
import { getLanguageConfig } from "../../src/service/LangMapperService";

describe("Test Language Mapping", () => {
  test("gets implemented mapping ", () => {
    expect(getLanguageConfig(LanguageEnum.ENGLISH)).toEqual(English);
  });
  test("does not throw unimplemented mapping ", () => {
    expect(() => getLanguageConfig(LanguageEnum.ENGLISH)).not.toThrow(
      Error("Unimplemented Languaguage")
    );
  });
  test("throws error on unimplemented mapping ", () => {
    expect(() => getLanguageConfig(LanguageEnum.FRENCH)).toThrow(
      Error("Unimplemented Languaguage")
    );
  });
  test("throws error on unimplemented mapping ", () => {
    expect(() => getLanguageConfig(LanguageEnum.SPANISH)).toThrow(
      Error("Unimplemented Languaguage")
    );
  });
});
