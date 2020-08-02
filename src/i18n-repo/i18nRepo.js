import {initialLanguage} from "../config/appConfig";

import CommonHelper from "../libs/CommonHelper";

import {wordRepoEN} from "./word/en";
import {wordRepoTR} from "./word/tr";
import {sentenceRepoEN} from "./sentence/en";
import {sentenceRepoTR} from "./sentence/tr";
import {errorRepoEN} from "./error/en";
import {errorRepoTR} from "./error/tr";

class i18nRepo
{
  /*
   * Keep in mind all when a language is added,
   * - a file for the added language should be placed under each `/i18n-repo/word`, `/i18n-repo/sentence`, and `/i18n-repo/error` folders.
   * - the files should be imported above.
   * - an entry for the added language should be made to each `word`, `sentence`, and `error` static variables which are below.
   */
  static languages = {
    en: "en",
    tr: "tr"
  };

  static word = {
    en: wordRepoEN,
    tr: wordRepoTR
  };

  static sentence = {
    en: sentenceRepoEN,
    tr: sentenceRepoTR
  };

  static error = {
    en: errorRepoEN,
    tr: errorRepoTR
  };

  static wordRepo = i18nRepo.word[initialLanguage];
  static sentenceRepo = i18nRepo.sentence[initialLanguage];
  static errorRepo = i18nRepo.error[initialLanguage];

  /**
   * Sets `language` to other repos.
   *
   * @param {string} language
   */
  static setLanguage (language)
  {
    if (!CommonHelper.isExist(i18nRepo.languages[language]))
    {
      throw new Error("Invalid arguments.");
    }

    i18nRepo.errorRepo = i18nRepo.error[language];
    i18nRepo.wordRepo = i18nRepo.word[language];
    i18nRepo.sentenceRepo = i18nRepo.sentence[language];
  }

  static getWord (key)
  {
    return i18nRepo.wordRepo[key];
  }

  static getSentence (key)
  {
    return i18nRepo.sentenceRepo[key];
  }

  static getError (key)
  {
    return i18nRepo.errorRepo[key];
  }
}

export default i18nRepo;
