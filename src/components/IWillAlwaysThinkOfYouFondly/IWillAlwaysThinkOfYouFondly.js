import React from "react";
import "./IWillAlwaysThinkOfYouFondly.css";
import HorizontalScroll from "react-scroll-horizontal";

import { HashLink } from "react-router-hash-link";
import IWillImages from "./IWillImages";
import { GlassMagnifier } from "react-image-magnifiers";

const IWillAlwaysThinkOfYouFondly = () => {
  const overflowUnset = {
    overflow: `unset`,
    overflowX: `scroll`,
    overflowY: `hidden`,
    width: `100vw`,
  };

  return (
    <div className="IWillContent">
      <HashLink to="/#IWill">
        <div className="BackArrowIWill">
          <div className="triangleBIWill">
            <span className="leftBIWill"></span>
            <span className="rightBIWill"></span>
          </div>
          <span class="lineBIWill"></span>
        </div>
      </HashLink>
      <HorizontalScroll
        reverseScroll={true}
        style={overflowUnset}
        className="IWillHScroll"
      >
        <div className="IWillContent1">
          <img
            src={IWillImages.IWillFont}
            className="IWillFont"
            alt="I will always think of you fondly.,2019"
          />
          <img
            src={IWillImages.IWillPic1}
            className="IWillPic1"
            alt="I will always think of you fondly.,2019"
          />
          <p className="IWillText1">
            This is a series of 6 pieces. It was a research project in
            collaboration with Wasawat Somno, a programmer. Together we wanted
            to explore what forms a video file could inhabit. Through this
            project we manifested a digital matter (in this case, a video file)
            into a physical object without altering its original code. Thus,
            everyone who interacted with the piece was able to transform the
            physical object back to the original video file. This exploration of
            digital/physical alteration still continues in my practice.
          </p>
          <div className="IWillAW1">
            <p className="IWillAW11">HGST 5K1000-750</p>
            <p className="IWillAW12">, 2019</p>
          </div>
          <p className="IWillAW1Text1">
            This piece is the beginning of the project. It started when my
            laptop’s internal hard disk drive died. I lost access to everything
            that I have saved in it in from the past 5 years. When I brought it
            to a recovery lab they were able to bring all my files back.
            However, it would be on a new hard disk drive and the original one
            would be rendered a carcass.
          </p>
          <p className="IWillAW1Text2">
            They returned my files back. I held a brand-new external HDD in my
            right hand and the carcass of 5 years’ worth of memories in my left.
            I looked at it and felt mournful. At this point I started to become
            curious if other people have this feeling for their dead devices.
            So, I dissected my old hard drive and presented it as an anatomical
            study.
          </p>
          <p className="IWillAW1Text3">
            Dissected hard disk drive in a glass box
          </p>
          <img
            src={IWillImages.IWillPic2}
            className="IWillPic2"
            alt="I will always think of you fondly.,2019"
          />
          <img
            src={IWillImages.IWillPic3}
            className="IWillPic3"
            alt="I will always think of you fondly.,2019"
          />
          <div className="IWillAW2">
            <p>Untitled</p>
            <p>(Documents printed on thermal papers), 2019</p>
          </div>
          <p className="IWillAW2Text1">
            This piece is a part of my research that contains important
            information, theories, methods and similar approaches that people
            have done before in history. I printed it all on thermal papers that
            can fade away in a short amount of time to visualize loss that is
            caused by time.
          </p>
          <p className="IWillAW2Text2">
            The idea of using thermal papers was from when I bought a new SSD to
            replace my dead HDD. The retailer said the warranty period of my new
            SSD would last as long as the information on its thermal papers
            printed receipt still shows that it will fade away completely in 7
            days. I was so amazed by its perfect time constraints that it became
            a condition of its warranty. So, I decided to use this same
            condition to maintain the information of this project.
          </p>
          <img
            src={IWillImages.IWillPic4}
            className="IWillPic4"
            alt="I will always think of you fondly.,2019"
          />
          <img
            src={IWillImages.IWillPic5}
            className="IWillPic5"
            alt="I will always think of you fondly.,2019"
          />
          <p className="IWillMockupsText">
            (Due to the art center’s condition controlled space, it turned out
            all the information on any papers didn’t fade away at all. So on
            this page I demonstrated a result according to my initial
            intention.)
          </p>
          <GlassMagnifier
            imageSrc={IWillImages.PaperMockBlank}
            className="IWillPaperMockBlank"
            alt="I will always think of you fondly.,2019"
          />
          <div className="IWillPaperMock">
            <GlassMagnifier
              imageSrc={IWillImages.PaperMock}
              imageAlt="I will always think of you fondly.,2019"
              style={{
                width: "92.5vw",
                height: "67.5vh",
                left: "210.6vw",
                top: "19.2vh",
                opacity: 100,
                zIndex: 3,
              }}
              largeImageSrc={IWillImages.PaperMockL}
            />
          </div>
          <div className="IWillAW3">
            <p>Untitled</p>
            <p>(A video file transformed to base64 string), 2019</p>
          </div>
          <p className="IWillAW3Text1">
            First experiment to make a digital file become a physical object. I
            started with opening a video file into a plain text software like
            Notepad. It gains 14 million of texts for just one file. I saved it
            as a plain text file and then I changed its extension from .txt to
            .mp4 and I got the original video file back. So, I realize that as
            long as I don’t edit or touch any of those texts it can be
            transformed back to its original file. This became my main
            presumption and method for this project.
          </p>
          <p className="IWillAW3Text2">
            I printed all 14 million texts out to present one of a physical form
            that a digital file could be. The longest paper I can find to work
            with at that time is 5 meters long and that covers only 1 in 8 of
            those 14 million texts.
          </p>
          <p className="IWillAW3Text3">
            5 meters long paper attached with a thermal printer.
          </p>
          <img
            src={IWillImages.IWillPic6}
            className="IWillPic6"
            alt="I will always think of you fondly.,2019"
          />
          <img
            src={IWillImages.IWillPic7}
            className="IWillPic7"
            alt="I will always think of you fondly.,2019"
          />
          <img
            src={IWillImages.IWillPic8}
            className="IWillPic8"
            alt="I will always think of you fondly.,2019"
          />
          <div className="IWillAW4">
            <p>Untitled</p>
            <p>
              (3d printed model, engraved stainless-steel plates, laser cut PVC
              papers, engraved marble tablet), 2019
            </p>
          </div>
          <p className="IWillAW4Text1">
            After the previous attempt, Wasawat and I tried to discover the
            possible way to make it shorter without damaging its original file
            and tried different materials that can last longer than papers.
          </p>
          <img
            src={IWillImages.IWillPic9}
            className="IWillPic9"
            alt="I will always think of you fondly.,2019"
          />
          <img
            src={IWillImages.IWillPic10}
            className="IWillPic10"
            alt="I will always think of you fondly.,2019"
          />
          <img
            src={IWillImages.IWillPic11}
            className="IWillPic11"
            alt="I will always think of you fondly.,2019"
          />
          <img
            src={IWillImages.IWillPic12}
            className="IWillPic12"
            alt="I will always think of you fondly.,2019"
          />
          <div className="IWillAW5">
            <p>Untitled </p>
            <p>(132 QR codes),</p>
            <p> 2019</p>
          </div>
          <p className="IWillAW5Text1">
            Finally, we decided to transform the file into a base64 string that
            was used widely to encode and decode files and transformed it into
            QR codes so we got 132 pieces of QR codes that can transform back to
            the original video file by scanning all of it starting from the
            first one. Using the application that Wasawat made, it will help to
            collect and join each QR code together correctly and transform it
            back to its original file.
          </p>
          <p className="IWillAW5Text2">132 pieces of printed QR codes.</p>
          <img
            src={IWillImages.IWillPic13}
            className="IWillPic13"
            alt="I will always think of you fondly.,2019"
          />
          <img
            src={IWillImages.IWillPic14}
            className="IWillPic14"
            alt="I will always think of you fondly.,2019"
          />
          <iframe
            src="https://player.vimeo.com/video/504346550?h=a9c1f19255&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            className="IWill132QRVid"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Untitled (132 QR codes), 2019. Turning QR codes back to the original video."
          ></iframe>
          <p className="IWillAW6">I will always think of you fondly., 2019</p>
          <p className="IWillAW6Text1">
            This piece we attempt to make the physical form of the file last the
            longest. So, I carved one of the QR codes into a marble tablet that
            historically can last for more than 3000 years until now and to
            refer to the one of the traditional materials and methods that have
            been used to make artistic sculptures until these days.
          </p>
          <p className="IWillAW6Text2">QR code engraved on a marble tablet.</p>
          <img
            src={IWillImages.IWillPic15}
            className="IWillPic15"
            alt="I will always think of you fondly.,2019"
          />
          <img
            src={IWillImages.IWillPic16}
            className="IWillPic16"
            alt="I will always think of you fondly.,2019"
          />
          <img
            src={IWillImages.IWillPic17}
            className="IWillPic17"
            alt="I will always think of you fondly.,2019"
          />
          <p className="IWillInstallationView">(Installation view)</p>
          <img
            src={IWillImages.IWillPic18}
            className="IWillPic18"
            alt="I will always think of you fondly.,2019"
          />
          <img
            src={IWillImages.IWillPic19}
            className="IWillPic19"
            alt="I will always think of you fondly.,2019"
          />
          <img
            src={IWillImages.IWillPic20}
            className="IWillPic20"
            alt="I will always think of you fondly.,2019"
          />
          <p className="IWillAW7">“Speedy Grandma Centennial”</p>
          <p className="IWillAW71">on June 19 to July 31, 2020</p>
          <div className="IWillAW7Text1">
            <p>
              Once every hundred years, the ghost of grandma will return to ask
              this question. Happening on many platforms including but not
              limited to, physical rotating exhibition, online browser
              exhibition, virtual worlds, and publication. The Centennial is a
              manifestation of grandma’s spirit across many mediums, with many
              timelines, all at once.
            </p>
            <p>
              “Speedy Grandma Centennial” will happen at our new space, the
              building on Charoenkrung 24. This exhibition is to return and
              revisit the same ideas that Granny first opened with in 2012,
              where we want to support young and emerging artists. Bridging them
              with those of other generations, conversing across time with over
              33 artists.
            </p>
          </div>
          <p className="IWillAW7Text2">
            For Speedy Grandma Centennial, I revisits I will always think of you
            fondly. (2019), exhibited in the EARLY YEARS PROJECT #4 PRAXIS MAKES
            PERFECT at Bangkok Art and Culture Centre (BACC). This time, I
            presented the background of the piece, what’s already exhibited, and
            what couldn’t be exhibited last time. Thus, the piece consists of
            the following:
          </p>
          <p className="IWillAW7Text3">
            <span>Physical</span> - The first test piece. It is the beginning
            piece of this project.
          </p>

          <a href="https://fb.watch/8bX6oqh4Id/" className="IWillAW7Text4">
            <p>
              <span>Publication</span> - two sets of source code.
            </p>
          </a>

          <a
            href="https://centennial.speedygrandma.run/"
            className="IWillAW7Text5"
          >
            <p>
              <span>Online</span> - A virtual piece, as originally intended, but
              wasn’t actualized due to several limitations. This body of work
              aims to demonstrate the possibility and capacity of the same piece
              to shapeshift in accordance to different contexts and spaces.
            </p>
          </a>

          <img
            src={IWillImages.IWillPic21}
            className="IWillPic21"
            alt="Speedy Grandma Centennial"
          />
          <img
            src={IWillImages.IWillPic22}
            className="IWillPic22"
            alt="Speedy Grandma Centennial"
          />
          <img
            src={IWillImages.IWillPic23}
            className="IWillPic23"
            alt="Speedy Grandma Centennial"
          />
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default IWillAlwaysThinkOfYouFondly;
