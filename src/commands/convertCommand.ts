import { LanguageEnum } from "../model/LanguageEnum";
import { rootCommand } from "../program/rootCommand";
import { numToWords } from "../service/TransformerService";
import { allowedIntParser, languageParser } from "../util/CustomParser";

export const convertCommand = () =>
  rootCommand
    .command("convert")
    .option(
      "-l, --lang <lang>",
      "Language to convert number to",
      languageParser
    )
    .argument("<number>", "Number to Convert", allowedIntParser)
    .description("Convert Numbers to Words")
    .action((num: number, lang: any) => {
      if (JSON.stringify(lang) === "{}") {
        console.log(numToWords(num, LanguageEnum.ENGLISH));
        return
      }
      console.log(numToWords(num, lang.lang));
    });

