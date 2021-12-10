import { LanguageEnum } from "../../src/model/LanguageEnum";
import { numToWords } from "../../src/service/TransformerService";

const ValidNumWordsMappingFixtures = new Map<number, string>([
  [0, "zero"],
  [5, "five"],
  [11, "eleven"],
  [17, "seventeen"],
  [26, "twenty-six"],
  [75, "seventy-five"],
  [91, "ninety-one"],
  [100, "one hundred"],
  [101, "one hundred and one"],
  [347, "three hundred and forty-seven"],
  [407, "four hundred and seven"],
  [752, "seven hundred and fifty-two"],
  [1000, "one thousand"],
  [3000, "three thousand"],
  [7209, "seven thousand two hundred and nine"],
  [10006, "ten thousand and six"],
  [20571, "twenty thousand five hundred and seventy-one"],
  [40011, "forty thousand and eleven"],
  [45000, "forty-five thousand"],
  [67629, "sixty-seven thousand six hundred and twenty-nine"],
  [99999, "ninety-nine thousand nine hundred and ninety-nine"],
]);

const InvalidNumWordsMappingFixtures = new Map<number, string>([
  [71, "zero"],
  [110, "five"],
  [432, "eleven"],
  [62, "seventeen"],
  [5802, "twenty-six"],
  [78312, "seventy-five"],
  [7436, "ninety-one"],
  [8123, "one hundred"],
]);
describe("Test Num to Words validity (English)", () => {
  ValidNumWordsMappingFixtures.forEach((value, key) => {
    test(`produces word string of ${key}`, () => {
      expect(numToWords(key, LanguageEnum.ENGLISH).toLowerCase()).toEqual(
        value
      );
    });
  });

  InvalidNumWordsMappingFixtures.forEach((value, key) => {
    test(`produces wrong word string of ${key}`, () => {
      expect(numToWords(key, LanguageEnum.ENGLISH).toLowerCase()).not.toEqual(
        value
      );
    });
  });
});
