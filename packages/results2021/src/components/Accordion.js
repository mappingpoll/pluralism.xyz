import { html, useEffect, useState } from "../lib/utils";

import { CollapsibleSection } from "./CollapsibleSection";
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

  return html`<${CollapsibleSection}
      title="Comments"
      cb=${() => toggleFooterSectionOpenClose(SECTION.COMMENTS)}
      isOpen=${sectionIsOpen(SECTION.COMMENTS)}
    >
      <p>A space at the end of the questionnaire allowed those who wanted to leave comments.</p>
      <table>
        <tbody>
          ${comments != null &&
          comments.map(
            (c, i) => html`<tr key=${i}>
              <td
                style=${state.user.includes(c.user) && "background-color: palevioletred; color: white"}
                onClick=${ev =>
                  ev.shiftKey
                    ? dispatch({ type: ACTION.SELECT_ADD, payload: c.user })
                    : dispatch({ type: ACTION.SELECT_ONE, payload: c.user })}
              >
                "${c.value}"
              </td>
            </tr>`
          )}
        </tbody>
      </table>
    <//>

    <section className="acknowledgements">
      <h1 style="margin-top: 1rem" lang="en">Acknowledge­ments</h1>
      <p>
        The questionnaire was conceived by Nicolas Grenier, with help from Melania Yue, Luke Harnden, Antoinen Midant,
        Natalie Parades, Stacie Martinez and Marc Arranaga. Editing by Saelan Twerdy. Thanks to Jay Wingate and
        Luis De Jesus for their support.
      </p>
      <p>
        This interface for data visualisation was built by
        <a style="background: inherit; color: inherit;" href="https://nilueps.net">Nicolas Epstein</a>.
      </p>
      <h3 style="margin-top: 3rem;">This project was made possible thanks to the support of:</h3>
      <img src="/images/logo-conseil-des-arts-du-canada.png" alt="logo of the canada council for the arts" />
      <img src="/images/Calq_noir.png" alt="logo of the conseil des arts et lettres du quebec" />
    </section>`;
}
