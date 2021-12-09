import { CommanderError, InvalidArgumentError, InvalidOptionArgumentError } from "commander";
import { LanguageEnum } from "../model/LanguageEnum";
import { LanguageMap } from "../model/LanguageMap";


export const getLanguageConfig = (language: LanguageEnum) => {
  const languageInterface = LanguageMap.get(language);

  if (!languageInterface) {
    throw new Error("Unimplemented Languaguage");
  }
  return languageInterface;
};
