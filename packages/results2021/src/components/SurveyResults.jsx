import { h, Fragment } from "preact";

import { pairs } from "../lib/questions";
import { Viz } from "./viz/Viz";

export function SurveyResults({ db, reducer }) {
  let i = 0;
  return (
    <>
      <div class="map">
        <div class="maptitle">
          <div>Introduction</div>
        </div>
        <div class="mapviz">
          <Viz db={db} reducer={reducer} pair={pairs[i++]} />
        </div>
      </div>
      <div class="mapsection">
        Part I:
        <br />
        You
      </div>
      <div class="map">
        <div class="maptitle">
          <div>Age</div>
          <div>gender</div>
        </div>
        <div class="mapviz">
          <Viz db={db} reducer={reducer} pair={pairs[i++]} />
        </div>
        <div class="maptext">
          <p>
            <strong>X: AGE</strong>
            <br />
            <strong>How old are you?</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+10</td>
                <td>100+</td>
              </tr>
              <tr>
                <td>0</td>
                <td>50</td>
              </tr>
              <tr>
                <td>-10</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <p />
          <p>
            <strong>Y: GENGER</strong>
            <br />
            <strong>
              Consider your anatomical sex at birth and present, how you think
              about your gender, how you express your gender, and any other
              considerations that are relevant to you. Overall, to which degree
              do you feel aligned with traditional notions of “being a man” and
              “being a woman”?
            </strong>
          </p>
          <table>
            <tr>
              <td>+10</td>
              <td>
                I feel 100% aligned with all the traditional aspects of "being a
                woman"
              </td>
            </tr>
            <tr>
              <td>0</td>
              <td>
                I do not feel aligned with any traditional aspects of "being a
                woman" or "man"
              </td>
            </tr>
            <tr>
              <td>-10</td>
              <td>
                I feel 100% aligned with all the traditional aspects of "being a
                man"
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="map">
        <div class="maptitle">
          <div>Money</div>
          <div>Privilege</div>
        </div>
        <div class="mapviz">
          <Viz db={db} reducer={reducer} pair={pairs[i++]} />
        </div>
        <div class="maptext">
          <p>
            <strong>X: MONEY</strong>
            <br />
            <strong>
              In 2021, in Los Angeles County, the median income for a family of
              4 was $80,000 per year (or $56,000 for a one-person household).
              How would you situate yourself in comparison?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+10</td>
                <td>
                  I make a large, abstract income and struggle to evade tax
                </td>
              </tr>
              <tr>
                <td>+5</td>
                <td>
                  I make 2 or 3 times the median income and struggle to pay my
                  mortgage
                </td>
              </tr>
              <tr>
                <td>0</td>
                <td>
                  I make the median income and struggle to pay my mortgage
                </td>
              </tr>
              <tr>
                <td>-5</td>
                <td>
                  I make half the median income and struggle to keep my room
                </td>
              </tr>
              <tr>
                <td>-10</td>
                <td>I make nothing and life is a cactus I'm holding on to</td>
              </tr>
            </tbody>
          </table>
          <p />
          <p>
            <strong>Y: PRIVILEGE</strong>
            <br />
            <strong>
              Think about the factors in your life over which you have no or
              little agency: where and to whom you were born; your gender, skin
              color and sexual orientation; your health and genetics, etc.
              Considering such factors, how has life treated you, overall?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>
                  I've never felt any limits to what I could imagine, do, or
                  become
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  I've always felt imprisoned in a life that I can't change
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="map">
        <div class="maptitle">
          <div>Background</div>
          <div>Taking care</div>
        </div>
        <div class="mapviz">
          <Viz db={db} reducer={reducer} pair={pairs[i++]} />
        </div>
        <div class="maptext">
          <p>
            <strong>X: BACKGROUND</strong>
            <br />
            <strong>
              What is your cultural background in relation to America?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>
                  I was born and raised in the U.S. by American parents in
                  American culture
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  I was born and raised in a completely different place and
                  culture; I couldn't feel less American
                </td>
              </tr>
            </tbody>
          </table>
          <p />
          <p>
            <strong>Y: TAKING CARE</strong>
            <br />
            <strong>
              Outside of professional responsibilities, is taking care of other
              people a large part of your life?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>
                  Everything I do in my life is for other persons who depend on
                  me for their survival
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  I don't have to take care of anyone, I just do whatever I want
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mapsection">
        PART II:
        <br />
        Transformation
      </div>
      <div class="map">
        <div class="maptitle">
          <div>Direction</div>
          <div>Responsibility</div>
        </div>
        <div class="mapviz">
          <Viz db={db} reducer={reducer} pair={pairs[i++]} />
        </div>
        <div class="maptext">
          <p>
            <strong>X: DIRECTION</strong>
            <br />
            <strong>
              Try to picture the totality of human activities taking place on
              the planet today. Towards what kind of future do you think
              humanity is heading in the next century?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>
                  We’ll make constant progress and achieve civilizational
                  maturity and wisdom{" "}
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  It’ll be harder to live on earth, the social order will
                  collapse, we’ll enter a new dark age
                </td>
              </tr>
            </tbody>
          </table>
          <p />
          <p>
            <strong>Y: RESPONSIBILITY</strong>
            <br />
            <strong>
              Outside of professional responsibilities, is taking care of other
              people a large part of your life?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>
                  How we govern ourselves in the next 20 years will directly
                  impact life on earth for millennia to come
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  We have no agency to change larger historical processes that
                  are already in motion
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="map">
        <div class="maptitle">
          <div>Technology</div>
          <div>Impact</div>
        </div>
        <div class="mapviz">
          <Viz db={db} reducer={reducer} pair={pairs[i++]} />
        </div>
        <div class="maptext">
          <p>
            <strong>X: TECHNOLOGY</strong>
            <br />
            <strong>
              To what degree do you think technology will advance in the next
              few hundred years?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+10</td>
                <td>
                  Technological progress will give us control over life, death,
                  time, and space
                </td>
              </tr>
              <tr>
                <td>0</td>
                <td>
                  Nothing will happen, we’ll just have more stupid apps on our
                  phones
                </td>
              </tr>
              <tr>
                <td>-10</td>
                <td>
                  Something will happen, and we’ll enter a phase of
                  technological regression
                </td>
              </tr>
            </tbody>
          </table>
          <p />
          <p>
            <strong>Y: IMPACT</strong>
            <br />
            <strong>
              If technological advances continue at the present pace, where do
              you think this will lead us?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>
                  Technology will bring divine bliss to all people and deliver
                  us from the human condition
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  Technology will bring new, unimaginable forms of inequity and
                  oppression
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="map">
        <div class="maptitle">
          <div>Justice</div>
          <div>Accountability</div>
        </div>
        <div class="mapviz">
          <Viz db={db} reducer={reducer} pair={pairs[i++]} />
        </div>
        <div class="maptext">
          <p>
            <strong>X: JUSTICE</strong>
            <br />
            <strong>Do you believe in intergenerational justice?</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>
                  If the state destroyed my life and that of my family, then we
                  (or our descendants) should have reparation
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  If the state destroyed my life and that of my family, we (and
                  our descendants) should let go and move on
                </td>
              </tr>
            </tbody>
          </table>
          <p />
          <p>
            <strong>Y: ACCOUNTABILITY</strong>
            <br />
            <strong>
              If you benefited directly or indirectly from past crimes, known or
              unknown to you, would you be willing to make amends?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>
                  I would be ready to make amends for the crimes of previous
                  generations from which I benefited
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  I shouldn't be held responsible for crimes I didn't commit
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mapsection">
        Part III:
        <br />
        Transformation
      </div>
      <div class="map">
        <div class="maptitle">
          <div>All Good</div>
          <div>Hell</div>
        </div>
        <div class="mapviz">
          <Viz db={db} reducer={reducer} pair={pairs[i++]} />
        </div>
        <div class="maptext">
          <p>
            <strong>X: ALL GOOD</strong>
            <br />
            <strong>
              Imagine that, in 2041, climate change is under control, extreme
              poverty has been eradicated, and governments cooperate efficiently
              to solve global issues while prioritizing the interests of all
              humanity. How will we have done it?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>
                  If all goes well, it’ll be because capitalism helped us
                  innovate, creating economic growth and prosperity for all
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  If all goes well, it’ll be because radical change took place
                  and a beautiful post-capitalist world emerged
                </td>
              </tr>
            </tbody>
          </table>
          <p />
          <p>
            <strong>Y: HELL</strong>
            <br />
            <strong>
              Imagine that, in 20 years, the earth is hotter than we thought it
              could be by then, there are millions of climate change refugees
              moving from place to place, and governments are falling apart.
              What will be your situation?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>
                  If all goes wrong, it’ll be among those privileged enough to
                  enjoy a secure, climatized dome
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  If all goes wrong, I’ll be roasting in the heat with no
                  resources
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="map">
        <div class="maptitle">
          <div>Redistribution</div>
          <div>New Order</div>
        </div>
        <div class="mapviz">
          <Viz db={db} reducer={reducer} pair={pairs[3]} />
        </div>
        <div class="maptext">
          <p>
            <strong>X: REDISTRIBUTION</strong>
            <br />
            <strong>
              Imagine that, in 20 years, all private and corporate property and
              capital are seized, repurposed, and redistributed fairly across
              all citizens.
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>I think this would benefit the collectivity</td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  I think this would be a catastrophe for the collectivity
                </td>
              </tr>
            </tbody>
          </table>
          <p />
          <p>
            <strong>Y: NEW ORDER</strong>
            <br />
            <strong>
              How would you feel about the massive societal levelling?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>I think I'd be happy in this new order</td>
              </tr>
              <tr>
                <td>-</td>
                <td>I think I'd be miserable in this new order</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="map">
        <div class="maptitle">
          <div>Role</div>
          <div>Values</div>
        </div>
        <div class="mapviz">
          <Viz db={db} reducer={reducer} pair={pairs[i++]} />
        </div>
        <div class="maptext">
          <p>
            <strong>X: ROLE</strong>
            <br />
            <strong>
              What will have been your role in creating the world of 2041
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+10</td>
                <td>
                  I'll be among those who envisioned and realized that world
                </td>
              </tr>
              <tr>
                <td>0</td>
                <td>I'll be among those who just went with the flow</td>
              </tr>
              <tr>
                <td>0</td>
                <td>
                  I'll be among those who couldn't catch up and fell behind
                </td>
              </tr>
            </tbody>
          </table>
          <p />
          <p>
            <strong>Y: VALUES</strong>
            <br />
            <strong>
              In 20 years, to what degree do you think your core values will
              have changed?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>
                  I expect that my core values will remain the same and have
                  guided me all along
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  I expect that my core values will be challenged and changed on
                  a fundamental level
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mapsection">
        Part IV:
        <br />
        Conclusion
      </div>
      <div class="map">
        <div class="maptitle">
          <div>Answers</div>
          <div>Concerns</div>
        </div>
        <div class="mapviz">
          <Viz db={db} reducer={reducer} pair={pairs[i++]} />
        </div>
        <div class="maptext">
          <p>
            <strong>X: ANSWERS</strong>
            <br />
            <strong>How do you feel about your answers in this survey?</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>
                  My answers truly represent how I feel about these issues
                </td>
              </tr>
              <tr>
                <td>+</td>
                <td>I answered randomly, it means nothing</td>
              </tr>
            </tbody>
          </table>
          <p />
          <p>
            <strong>Y: CONCERNS</strong>
            <br />
            <strong>
              And to conclude, how do you feel about this survey, overall?
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>+</td>
                <td>The questions really reflect my own concerns</td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  The questions are totally off and don't reflect my concerns at
                  all
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
