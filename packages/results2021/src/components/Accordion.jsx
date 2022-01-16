import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";

import { CollapsibleSection } from "./CollapsibleSection";
import { SiteMenu } from "./SiteMenu";
import { ACTION } from "../lib/asyncReducer";

const SECTION = {
  COMMENTS: 1,
};

export function Accordion({ collapseFn, db, reducer }) {
  const { state, dispatch } = reducer;

  const [openSection, setOpenSection] = useState(0);

  const [comments, setComments] = useState(null);

  useEffect(() => {
    if (db == null) return;
    (async () => {
      setComments(await db.getComments());
    })();
  }, [db, setComments]);

  useEffect(() => {
    collapseFn(() => setOpenSection(0));
  }, []);

  const sectionIsOpen = section => (openSection & section) !== 0;

  const toggleFooterSectionOpenClose = section => setOpenSection(openSection ^ section);

  return (
    <>
      {/* COMMENTS */}
      <CollapsibleSection
        title={"Comments"}
        cb={() => toggleFooterSectionOpenClose(SECTION.COMMENTS)}
        isOpen={sectionIsOpen(SECTION.COMMENTS)}
      >
        <p>A space at the end of the questionnaire allowed those who wanted to leave comments.</p>
        <table>
          <tbody>
            {comments != null &&
              comments.map((c, i) => (
                <tr key={i}>
                  <td
                    style={state.user.includes(c.user) && "color: red"}
                    onClick={ev =>
                      ev.shiftKey
                        ? dispatch({ type: ACTION.SELECT_ADD, payload: c.user })
                        : dispatch({ type: ACTION.SELECT_ONE, payload: c.user })
                    }
                  >
                    "{c.value}"
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </CollapsibleSection>

      <section className="acknowledgements">
        <h1 style="margin-top: 1rem" lang="en">
          Acknowledge&shy;ments
        </h1>
        <p>
          The questionnaire was conceived by Nicolas&nbsp;Grenier, with help from Melania&nbsp;Yue, Luke&nbsp;Harnden,
          Antoinen&nbsp;Midant, Natalie&nbsp;Parades, Stacie&nbsp; Martinez and Marc&nbsp;Arranaga. Editing by Saelan
          Twerdy. Thanks to Jay&nbsp;Wingate and Luis&nbsp;De&nbsp;Jesus for their support.
        </p>
        <p>
          This interface for data visualisation was built by{" "}
          <a style="background: inherit; color: inherit;" href="https://nilueps.net">
            Nicolas&nbsp;Epstein
          </a>
          .
        </p>
        <h3 style="margin-top: 3rem;">The project was made possible thanks to the support of:</h3>
        <img src={"/images/logo-conseil-des-arts-du-canada.png"} alt="logo of the canada council for the arts" />
        <img src={"/images/Calq_noir.png"} alt="logo of the conseil des arts et lettres du quebec" />
      </section>
    </>
  );
}
