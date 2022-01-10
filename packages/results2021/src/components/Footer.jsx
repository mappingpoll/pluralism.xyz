import { h, Fragment } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import { useLocale } from "../hooks/useLocale";
import { CollapsibleSection } from "./CollapsibleSection";
import { SiteMenu } from "./SiteMenu";

const SECTION = {
  COMMENTS: 1,
  ANALYSIS: 2,
  CONSIDERATIONS: 4,
  ABOUT: 8,
  CONTACT: 16,
};

export function Footer({ collapseFn }) {
  const { i18n } = useLocale();

  const [openSection, setOpenSection] = useState(0);

  useEffect(() => {
    collapseFn(() => setOpenSection(0));
  }, []);

  const sectionIsOpen = (section) => (openSection & section) !== 0;

  const toggleFooterSectionOpenClose = (section) =>
    setOpenSection(openSection ^ section);

  return (
    <>
      {/* COMMENTS */}
      <CollapsibleSection
        title={i18n("footer.title")}
        cb={() => toggleFooterSectionOpenClose(SECTION.COMMENTS)}
        isOpen={sectionIsOpen(SECTION.COMMENTS)}
        //collapseOverride={collapseOverride}
      >
        <p>
          A space at the end of the questionnaire allowed those who wanted to
          leave comments.
        </p>
        <p>
          About 10-15% of respondents left a comment. Here is a non-exhaustive
          list of comments received. The most repetitive comments ("very
          interesting," "congrats for the great show," etc.) have been removed,
          and some comments were condensed or shortened during transcription..
        </p>
      </CollapsibleSection>

      {/* ANALYSIS */}
      <CollapsibleSection
        title={i18n("footer.section2.title")}
        cb={() => toggleFooterSectionOpenClose(SECTION.ANALYSIS)}
        isOpen={sectionIsOpen(SECTION.ANALYSIS)}
      />
      {/* CONSIDERATIONS */}
      <CollapsibleSection
        title={i18n("footer.considerations.title")}
        cb={() => toggleFooterSectionOpenClose(SECTION.CONSIDERATIONS)}
        isOpen={sectionIsOpen(SECTION.CONSIDERATIONS)}
      />
      {/* OBJECTIVES */}
      <CollapsibleSection
        title={i18n("footer.objectives.title")}
        cb={() => toggleFooterSectionOpenClose(SECTION.ABOUT)}
        isOpen={sectionIsOpen(SECTION.ABOUT)}
      />
      {/* CONTACT */}
      <CollapsibleSection
        title={i18n("footer.contact.title")}
        cb={() => toggleFooterSectionOpenClose(SECTION.CONTACT)}
        isOpen={sectionIsOpen(SECTION.CONTACT)}
      >
        <p>{i18n("footer.contact.body")}</p>
      </CollapsibleSection>
      <section class="acknowledgements">
        <h1 lang="en">{i18n("footer.acknowledgements.title")}</h1>
      </section>
      <section style="border: none; background: white; padding-bottom: 0">
        <SiteMenu style="padding-bottom: 2.5rem; margin-bottom: 0" />
      </section>
    </>
  );
}
