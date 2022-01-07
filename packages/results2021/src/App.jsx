import { h, Fragment } from "preact";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import cloneDeep from "lodash.clonedeep";

import { reducer } from "./lib/asyncReducer";
import { useAsyncReducer } from "./hooks/useAsyncReducer";
import { initialState } from "./lib/state";
import { useLocale } from "./lib/i18n";
import { canShowCustomViz } from "./lib/misc";
import { Viz } from "./components/viz/viz";
import Knobs from "./components/knobs";
import Notify from "./components/notify";
import CollapsibleSection from "./components/collapsible-section";
import SiteMenu from "./components/site-menu";
import "./App.css";

export default function App({ db }) {
  const { swapLang, i18n } = useLocale();
  const [state, dispatch] = useAsyncReducer(reducer, cloneDeep(initialState));

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading && db != null) {
      setIsLoading(false);
    }
  }, [db, isLoading]);

  const [shouldShowKnobs, setShouldShowKnobs] = useState(true);

  const shouldShowCustomViz =
    state.customViz && canShowCustomViz(state.userAxes);

  let [notification, setNotification] = useState(null);

  const getLatestCount = useCallback(
    () => (state.brushMap != null ? Object.keys(state.brushMap).length : 0),
    [state.brushMap]
  );

  useEffect(() => {
    const latestCount = getLatestCount();
    if (latestCount !== 0) {
      setNotification(null);
      setTimeout(
        () =>
          setNotification(
            <Notify visible={shouldShowKnobs}>
              <span>
                {latestCount}&nbsp;
                {i18n("selected")}
              </span>
            </Notify>
          ),
        1
      );
    } else {
      setNotification(null);
    }
  }, [i18n, state.brushMap, shouldShowKnobs, getLatestCount]);

  useEffect(() => {
    if (shouldShowCustomViz && introRef.current != null) {
      const y = introRef.current.getBoundingClientRect().bottom;
      window.scrollBy(0, y);
    }
  }, [shouldShowCustomViz, state.userAxes]);

  const introRef = useRef();
  const mapsRef = useRef();
  const footerRef = useRef();

  let [showBackToTop, setShowBackToTop] = useState(false);

  let [footerSectionsState, setFooterSectionsState] = useState(0);
  const footerSection = {
    COMMENTS: 1,
    ANALYSIS: 2,
    CONSIDERATIONS: 4,
    ABOUT: 8,
    CONTACT: 16,
  };
  function footerSectionIsOpen(section) {
    return (footerSectionsState & section) !== 0;
  }
  function toggleFooterSectionOpenClose(section) {
    setFooterSectionsState((footerSectionsState ^= section));
  }

  function collapseFooterSections() {
    setFooterSectionsState(0);
  }

  function handleToBottomClick() {
    const footerY = footerRef.current.getBoundingClientRect().top - 20;
    window.scrollTo(0, footerY);
  }

  function handleBackToTopClick() {
    const mapsY = mapsRef.current.getBoundingClientRect().bottom;
    if (mapsY < -1) {
      window.scrollTo(0, window.pageYOffset + mapsY - 20);
      collapseFooterSections();
      return;
    }
    const introY = introRef.current.getBoundingClientRect().bottom;
    if (introY < -1) {
      window.scrollTo(0, window.pageYOffset + introY + 1);
      return;
    }
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    document.onscroll = () => {
      if (mapsRef.current != null) {
        const height = mapsRef.current.getBoundingClientRect().bottom;
        if (height < window.innerHeight / 2) setShouldShowKnobs(false);
        else {
          setShouldShowKnobs(true);
        }
      }
      if (introRef.current != null) {
        const thresholdY = introRef.current.getBoundingClientRect().bottom - 10;
        if (thresholdY < 0) {
          setShowBackToTop(true);
        } else if (thresholdY > 0) {
          setShowBackToTop(false);
        }
      }
    };
  }, []);

  return (
    <div class="results">
      <div
        class="back-to-top"
        onclick={handleBackToTopClick}
        style={
          showBackToTop
            ? "opacity: 1;"
            : "opacity: 0; pointer-events: none; cursor: default;"
        }
      >
        {i18n("back-to-top")}
        <img
          style="max-height: 1em; padding-top: 0.2em"
          src={`..${APP_BASE_URL}/assets/up-arrow.svg`}
        />
      </div>
      <div ref={introRef} class="intro">
        <SiteMenu style="margin-top: 0;" />
        <div class="en-fr">
          <span onclick={() => swapLang("en")}>English</span>&nbsp;/&nbsp;
          <span onclick={() => swapLang("fr")}>Français</span>
        </div>
        <h1>{i18n("intro.title")}</h1>
        <p>
          {i18n("intro.link.1")}
          <a href="#null" onclick={handleToBottomClick}>
            {i18n("intro.link.2")}
          </a>
          .
        </p>
      </div>
      <Knobs
        reducer={{ state, dispatch }}
        selected={getLatestCount()}
        visible={shouldShowKnobs}
      />

      {notification}

      {!isLoading && (
        <div ref={mapsRef} class="maps">
          {/* shouldShowCustomViz && (
            <div class="map">
              <div class="maptitle">{i18n("graphs.customgraph")}</div>
              <div class="mapviz">
                <Viz
                  db={db}
                  state={state}
                  columns={state.vizColumns}
                  dispatch={dispatch}
                />
              </div>
            </div>
          )*/}
          {state.standardColumnSet.map((pair, i) => (
            <div key={i} class="map">
              <div class="maptitle">
                <div>{i18n("part.left")}</div>
                <div>{i18n("part.right")}</div>
              </div>
              <div class="mapviz">
                <Viz db={db} state={state} pair={pair} dispatch={dispatch} />
              </div>
            </div>
          ))}
        </div>
      )}
      <footer id="footer" ref={footerRef}>
        {/* COMMENTS */}
        <CollapsibleSection
          title={i18n("footer.title")}
          cb={() => toggleFooterSectionOpenClose(footerSection.COMMENTS)}
          isOpen={footerSectionIsOpen(footerSection.COMMENTS)}
          //collapseOverride={collapseOverride}
        >
          <p>
            A space at the end of the questionnaire allowed those who wanted to
            leave comments.
          </p>
          <p>
            About 10-15% of respondents left a comment. Here is a non-exhaustive
            list of comments received. The most repetitive comments ("very
            interesting," "congrats for the great show," etc.) have been
            removed, and some comments were condensed or shortened during
            transcription..
          </p>
        </CollapsibleSection>

        {/* ANALYSIS */}
        <CollapsibleSection
          title={i18n("footer.section2.title")}
          cb={() => toggleFooterSectionOpenClose(footerSection.ANALYSIS)}
          isOpen={footerSectionIsOpen(footerSection.ANALYSIS)}
        />
        {/* CONSIDERATIONS */}
        <CollapsibleSection
          title={i18n("footer.considerations.title")}
          cb={() => toggleFooterSectionOpenClose(footerSection.CONSIDERATIONS)}
          isOpen={footerSectionIsOpen(footerSection.CONSIDERATIONS)}
        />
        {/* OBJECTIVES */}
        <CollapsibleSection
          title={i18n("footer.objectives.title")}
          cb={() => toggleFooterSectionOpenClose(footerSection.ABOUT)}
          isOpen={footerSectionIsOpen(footerSection.ABOUT)}
        />
        {/* CONTACT */}
        <CollapsibleSection
          title={i18n("footer.contact.title")}
          cb={() => toggleFooterSectionOpenClose(footerSection.CONTACT)}
          isOpen={footerSectionIsOpen(footerSection.CONTACT)}
        >
          <p>{i18n("footer.contact.body")}</p>
        </CollapsibleSection>
        <section class="acknowledgements">
          <h1 lang="en">{i18n("footer.acknowledgements.title")}</h1>
        </section>
        <section style="border: none; background: white; padding-bottom: 0">
          <SiteMenu style="padding-bottom: 2.5rem; margin-bottom: 0" />
        </section>
      </footer>
    </div>
  );
}
