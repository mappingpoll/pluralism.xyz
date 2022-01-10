import { h, Fragment } from "preact";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "preact/hooks";
import cloneDeep from "lodash.clonedeep";

import { useLocale } from "./hooks/useLocale";
import { useAsyncReducer } from "./hooks/useAsyncReducer";
import { initialState } from "./lib/state";

import { Intro } from "./components/Intro";
import { Options } from "./components/Options";
import { Notification } from "./components/Notification";
import { Maps } from "./components/Maps";
import { Footer } from "./components/Footer";

import "./App.css";

export function App({ db }) {
  const { i18n } = useLocale();

  const [state, dispatch] = useAsyncReducer(cloneDeep(initialState));

  const [notification, setNotification] = useState({});

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
    if (latestCount !== 0) {
      setNotification({ visible: false });
      setTimeout(
        () =>
          setNotification({
            visible: shouldShowKnobs,
            message: `${latestCount}&nbsp;${i18n("selected")}`,
          }),
        1
      );
    } else {
      setNotification({});
    }
  }, [i18n, state.brushMap, setNotification, shouldShowKnobs, latestCount]);

  // useEffect(() => {
  //   if (shouldShowCustomViz) {
  //     const introY = getIntroY();
  //     if (introY) window.scrollBy(0, introY);
  //   }
  // }, [shouldShowCustomViz, getIntroY]);

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
        {i18n("back-to-top")}
        <img
          style="max-height: 1em; padding-top: 0.2em"
          src={"./assets/up-arrow.svg"}
        />
      </div>

      <div ref={introRef} class="intro">
        <Intro onclick={handleToBottomClick} />
      </div>

      <Options
        reducer={{ state, dispatch }}
        selected={latestCount}
        visible={shouldShowKnobs}
        getIntroBottom={getIntroBottom}
      />

      <Notification {...notification} />

      {!isLoading ? (
        <div ref={mapsRef} class="maps">
          <Maps state={state} dispatch={dispatch} db={db} />
        </div>
      ) : (
        <div style={"height: 200vh"} />
      )}

      <footer ref={footerRef}>
        <Footer collapseFn={setCollapseFooter} />
      </footer>
    </div>
  );
}
