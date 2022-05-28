import { html } from "htm/preact";
import { useState, useReducer } from "preact/hooks";
import { css } from "@emotion/css";
import cloneDeep from "lodash.clonedeep";

import { reducer } from "./lib/reducer";
import { initialState } from "./lib/state";
import { Intro } from "./components/Intro";
import { Options } from "./components/Options";
import { Maps } from "./components/Maps";
import { Acknowledgments } from "./components/Acknowledgements";
import { SiteMenu } from "./components/SiteMenu";
import { BackToTop } from "./components/BackToTop";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { inverted, leftRightPadding } from "./lib/style";
import { Comments } from "./components/Comments";

const styles = css`
  & > header,
  & > footer {
    padding-top: 3rem;
    padding-bottom: 3rem;

    ${leftRightPadding()}
  }
`;

export function App() {
  const [state, dispatch] = useReducer(reducer, cloneDeep(initialState));

  const [showOptions, setShowOptions] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const introRef = useIntersectionObserver((entries: IntersectionObserverEntry[]) => {
    setShowBackToTop(!entries[0].isIntersecting);
  });

  const detailsRef = useIntersectionObserver((entries: IntersectionObserverEntry[]) => {
    setShowOptions(!entries[0].isIntersecting);
  });

  return html`
    <div id="root" class=${styles}>
      <header ref=${introRef} id="header" class=${inverted}>
        <${SiteMenu} />
        <${Intro} />
      </header>

      <${Options} reducer=${{ state, dispatch }} visible=${showOptions} />

      <${Maps} reducer=${{ state, dispatch }} />

      <div ref=${detailsRef}>
        <${Comments} ref=${detailsRef} reducer=${{ state, dispatch }} />
        <${Acknowledgments} reducer=${{ state, dispatch }} />
      </div>

      <footer class=${inverted}>
        <${SiteMenu} />
      </footer>

      <${BackToTop} visible=${showBackToTop} />
    </div>
  `;
}
