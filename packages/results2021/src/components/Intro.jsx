import { h, Fragment } from "preact";

import { SiteMenu } from "./SiteMenu";
// import { useLocale } from "../hooks/useLocale";

export function Intro() {
  // const { swapLang, i18n } = useLocale();

  return (
    <>
      <SiteMenu />
      {/*<div class="en-fr">
        <span onclick={() => swapLang("en")}>English</span>&nbsp;/&nbsp;
        <span onclick={() => swapLang("fr")}>Français</span>
      </div>*/}
      <h1 style="font-weight: bold">IN 20 YEARS</h1>
      <p>
        In 20 Years is an artwork/survey that took place in the context of
        Nicolas Grenier’s exhibition Eyes Adjusting Slowly at gallery Luis De
        Jesus Los Angeles (November 13 to December 22, 2021).
      </p>
      <p>
        Each rectangular shape represents the answers of one participant to two
        different questions.
      </p>
      <p>
        For each question, participants could choose to answer with either a
        precise point or select a range of values.
      </p>
    </>
  );
}
