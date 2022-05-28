import { css } from "@emotion/css";
import { html } from "htm/preact";
import { baseColor, leftRightPadding } from "../lib/style";

const styles = css`
  ${leftRightPadding()}

  ${baseColor}

  img {
    max-height: 100px;
    margin: 2rem 0;
  }

  @media only screen and (max-device-width: 430px) {
    img {
      max-height: 75px;
    }
  }
`;

export function Acknowledgments() {
  return html`
    <section class=${styles}>
      <h1 style="margin-top: 1rem" lang="en">Acknowledge­ments</h1>
      <p>
        The questionnaire was conceived by Nicolas Grenier, with help from Yue Zhang, Luke Harnden, Antoinen Midant,
        Natalie Parades, Stacie Martinez and Marc Arranaga. Editing by Saelan Twerdy. Thanks to Jay Wingate and
        Luis De Jesus for their support.
      </p>
      <p>
        This interface for data visualisation was built by${" "}
        <a style="background: inherit; color: inherit;" href="https://nilueps.net">Nicolas Epstein</a>.
      </p>
      <h3 style="margin-top: 3rem;">This project was made possible thanks to the support of:</h3>
      <img src="/images/logo-conseil-des-arts-du-canada.png" alt="logo of the canada council for the arts" />
      <img src="/images/Calq_noir.png" alt="logo of the conseil des arts et lettres du quebec" />
    </section>
  `;
}
