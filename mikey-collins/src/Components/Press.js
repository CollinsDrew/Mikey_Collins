import React from "react";
import "../Styles/Press.css";

import clash from "../Images/clashMusic.jpeg";
import scottish from "../Images/ScottishExpress.png";
import beehive from "../Images/beehiveCandy.png";

function Press() {
  return (
    <div className="press-container">
      <div className="parallax"></div>

      <h1 className="page-title">Press and Reviews</h1>
      {/* <br></br>
      <br></br> */}
      <hr></hr>
      <div className="review-card">
        <img src={clash} alt="Clash Music" className="scotImage" />
        <p className="review-content">
          Mikey Collins spent almost 10 years of his life as a member of Allo
          Darlin', a much-loved – and dearly-missed – indie pop ensemble.
          Crafting some solo material, his incoming debut LP 'Hoick' charts a
          number of changes in his life, including a switch to the coast.
          Gentle, chiming indie pop packed with depth and nuance, Mikey applied
          a real perfectionist streak to the recording. He explains: “This has
          been the first musical project that I feel proud of the moment I
          finished it. Normally it takes a bit of time and perspective. It feels
          as happy, conflicted and dense as the inside of my brain feels most of
          the time, which is the danger / joy of the solo record…” With the solo
          record due to be released later this year, Mikey has decided to share
          new song 'Sound In Here', and the glorious melody shrouds a highly
          personal tale. The former drummer was diagnosed with tinnitus after a
          heavy period of touring, and this has cause a real shift in how he
          approaches both performance and music as a whole. He explains: "This
          was a song that I wrote whilst thinking about the tinnitus that
          affected (Allo Darlin' guitarist) Paul Rains and I after years of
          touring. Paul, particularly, had a very hard time adjusting to having
          damaged hearing and a constant tone in his ears. It got me thinking
          about whether it was all worth it etc – of course it all was, but
          there were costs to all that travelling and not sleeping and loud gigs
          and shit. This song thinks about that. I wanted it to sound like the
          Cure. When I listen to it, I sometimes think it sounds a bit like an
          Allo Darlin song." Summer-fresh indie pop with a personal streak, it's
          a contagious little jewel of a song. Tune in below.
        </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div className="review-card">
        <img src={scottish} alt="Scottish Express" className="scotImage" />
        <p className="review-content">
          Allo' Darlin were an indie-pop mob, who were around for about a decade
          before calling it a day. Collins was the drummer, but proves he has
          many more strings to his bow with a summery solo album that he mostly
          played himself. 'Hoick' brings to mind the poppy leanings of Lloyd
          Cole, Matthew E White and Todd Rundgren, and it's driven by his move
          to the coast and the simple pleasures of love and fatherhood.
          'Falling' is about proposing to his wife, while 'Piniata' offers his
          partner the bat to 'open' the relationship up. But there are still
          references to band life. 'West Coast' is about touring, while 'Sound
          In Here' is about the tinnitus that afflicted Collins after constant
          gigging.
        </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div className="review-card">
        <img src={beehive} alt="Beehive Candy" className="scotImage" />
        <p className="review-content">
          With Hoick, Mikey Collins combines his love of solid grooves and
          joyous harmonies to create a fun and sonically varied record. Mikey
          played most of the instruments and mixed the record himself, with some
          assistance from Laura Kovic (Tigercats) on vocals and fellow Allo
          Darlin' member Paul Rains on lead guitar. The flicker of his previous
          band provided the building blocks of an upbeat, positive record, but
          Mikey wanted to add his own quirky, disco spin & sonic expansiveness,
          aided by co-producer John Winfield (who has worked with Jimmy
          Somerville), with the aim of making a record that people stood a
          chance of being able to dance to. To create this eclectic sound, Mikey
          draws on influences are as far flung as Dexy's Midnight Runners, Bruce
          Springsteen & Todd Rundgren as well as more current artists such as
          Night Works, Matthew E White and Father John Misty.
          <br></br>
          Allo Darlin' were a fantastic band and so it's a real pleasure to
          present 'Sound in Here' by Mikey Collins who of course was the bands
          former drummer. The song is really impressive as Mikey gets to show
          off his talent both in song writing and playing. It's bright and
          breezy with no end of hooks and as a fully fledged tinnitus sufferer
          myself, the sentiments of the song resonate in a big way.
        </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
}

export { Press };
