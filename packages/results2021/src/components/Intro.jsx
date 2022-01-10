import { h, Fragment } from "preact";

import { SiteMenu } from "./SiteMenu";
import { useLocale } from "../hooks/useLocale";

export function Intro({ onclick }) {
  const { swapLang, i18n } = useLocale();

  return (
    <>
      <SiteMenu style="margin-top: 0;" />
      <div class="en-fr">
        <span onclick={() => swapLang("en")}>English</span>&nbsp;/&nbsp;
        <span onclick={() => swapLang("fr")}>Français</span>
      </div>
      <h1>{i18n("intro.title")}</h1>
      <p>
        {i18n("intro.link.1")}
        <a href="#null" onclick={onclick}>
          {i18n("intro.link.2")}
        </a>
        .
      </p>
    </>
  );
}
