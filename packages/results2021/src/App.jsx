import { h, Fragment } from "preact";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "preact/hooks";
import cloneDeep from "lodash.clonedeep";

import { useAsyncReducer } from "./hooks/useAsyncReducer";
import { initialState } from "./lib/state";

import { Intro } from "./components/Intro";
import { Options } from "./components/Options";
import { Maps } from "./components/Maps";
import { Accordion } from "./components/Accordion";

import "./App.css";
import { ACTION } from "./lib/asyncReducer";
import { SiteMenu } from "./components/SiteMenu";

export function App({ db }) {

  const [state, dispatch] = useAsyncReducer(cloneDeep(initialState));

  const introRef = useRef();
  const footerRef = useRef();
  const mapsRef = useRef();

  const getIntroBottom = useCallback(
    () => introRef.current?.getBoundingClientRect().bottom ?? false,
    [introRef]
  );
  const getFooterTop = useCallback(
    () => footerRef.current?.getBoundingClientRect().top ?? false,
    [footerRef]
  );
  const getMapsBottom = useCallback(
    () => mapsRef.current?.getBoundingClientRect().bottom ?? false,
    [mapsRef]
  );

  const [shouldShowKnobs, setShouldShowKnobs] = useState(true);
  let [showBackToTop, setShowBackToTop] = useState(false);
  const [collapseFooter, setCollapseFooter] = useState(() => false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading && db != null) {
      setIsLoading(false);
    }
  }, [db, isLoading]);

  const latestCount = useMemo(
    () => (state.brushMap != null ? Object.keys(state.brushMap).length : 0),
    [state.brushMap]
  );

  useEffect(() => {
    document.onscroll = () => {
      const height = getMapsBottom();
      if (height) {
        if (height < window.innerHeight / 2) setShouldShowKnobs(false);
        else if (!shouldShowKnobs) {
          setShouldShowKnobs(true);
        }
      }
      const introY = getIntroBottom();
      if (introY) {
        const thresholdY = introY - 10;
        if (thresholdY < 0 && !showBackToTop) {
          setShowBackToTop(true);
        } else if (thresholdY > 0 && showBackToTop) {
          setShowBackToTop(false);
        }
      }
    };
  }, [getIntroBottom, getMapsBottom, shouldShowKnobs, showBackToTop]);

  const handleToBottomClick = useCallback(() => {
    const footerY = getFooterTop();
    if (footerY) window.scrollTo(0, footerY - 20);
  }, [getFooterTop]);

  function handleBackToTopClick() {
    const mapsY = getMapsBottom();
    if (!mapsY) {
      return;
    }
    if (mapsY < -1) {
      window.scrollTo(0, window.pageYOffset + mapsY - 20);
      collapseFooter();
      return;
    }
    const introY = getIntroBottom();
    if (introY && introY < -1) {
      window.scrollTo(0, window.pageYOffset + introY + 1);
      return;
    }
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (mapsRef.current != null) {
      mapsRef.current.onclick = ev => {
        if (ev.target.tagName !== "rect") dispatch({ type: ACTION.SELECT_NONE })
      }
    }
  }, [mapsRef, dispatch])

  return (
    <div>
      <div
        class="back-to-top"
        onclick={handleBackToTopClick}
        style={
          showBackToTop
            ? "opacity: 1;"
            : "opacity: 0; pointer-events: none; cursor: default;"
        }
      >
        Go up{" "}
        <img
          style="display: inline-block; max-height: 1em; padding-top: 0.2em"
          src={"/images/up-arrow.svg"}
        />
      </div>

      <header ref={introRef} class="intro">
        <Intro onclick={handleToBottomClick} />
      </header>

      <Options
        reducer={{ state, dispatch }}
        selected={latestCount}
        visible={shouldShowKnobs}
        getIntroBottom={getIntroBottom}
      />

      {!isLoading ? (
        <div ref={mapsRef} class="maps">
          <Maps db={db} reducer={{ state, dispatch }} />
        </div>
      ) : (
        <div style={"height: 200vh"} />
      )}

      <div ref={footerRef} class="accordion">
        <Accordion
          db={db}
          reducer={{ state, dispatch }}
          collapseFn={setCollapseFooter}
        />
      </div>
      <footer>
        <SiteMenu />
      </footer>
    </div>
  );
}
