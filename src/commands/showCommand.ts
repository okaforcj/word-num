import { LanguageEnum } from "../model/LanguageEnum";
import { rootCommand } from "../program/rootCommand";

export const showCommand = () => rootCommand
  .command("show langs")
  .description("Show Available languages")
  .action(() => {
      console.log(`Available languages : ${Object.values(LanguageEnum)}`)
  });