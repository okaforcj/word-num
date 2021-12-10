import { InvalidArgumentError } from "commander";
import { shortLanguageCodeMapper } from "../model/LanguageMap";

export const allowedIntParser = (value: string) => {
  const parsedValue = parseInt(value);

  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError("Not a valid integer number.");
  } else if (parsedValue < 0 || parsedValue > 100000) {
    throw new InvalidArgumentError("Number must be within the 0 and 100000 range");
  }
  return parsedValue;
};

export const languageParser = (shortcode: string) => {
  const languageEnum = shortLanguageCodeMapper.get(shortcode);
  if (languageEnum) {
    return languageEnum;
  }

  throw new InvalidArgumentError(
    "Invalid Language; \n\n Use `show langs` or `help` command for more info\n"
  );
};
