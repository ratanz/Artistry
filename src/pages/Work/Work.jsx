
import "./work.css";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import WorkItem from "./WorkItem";
import WorkImage1 from "../../assets/work/work-1.jpg";
// import WorkImage2 from "../../assets/work/work-2.jpg";
// import WorkImage3 from "../../assets/work/work-3.jpg";
import WorkImage4 from "../../assets/work/work-4.jpg";
// import WorkImage5 from "../../assets/work/work-5.jpg";
// import WorkImage6 from "../../assets/work/work-6.jpg";
import WorkImage7 from "../../assets/work/work-7.jpg";
import WorkImage8 from "../../assets/work/work-8.jpg";
// import WorkImage9 from "../../assets/work/work-9.jpg";
import WorkImage10 from "../../assets/work/work-10.jpg";
import WorkImage11 from "../../assets/work/work-11.jpg";
import WorkImage12 from "../../assets/work/work-12.jpg";
import WorkImage13 from "../../assets/work/work-13.jpg";
import WorkImage14 from "../../assets/work/work-14.jpg";
import WorkImage15 from "../../assets/work/work-15.jpg";
import WorkImage16 from "../../assets/work/work-16.jpg";
import WorkImage17 from "../../assets/work/work-17.jpg";
import WorkImage18 from "../../assets/work/work-18.jpg";
import WorkImage19 from "../../assets/work/work-19.jpg";
import WorkImage20 from "../../assets/work/work-20.jpg";
import WorkImage21 from "../../assets/work/work-21.jpg";
import WorkImage22 from "../../assets/work/work-22.jpg";
import Jet from "../../assets/work/jett.jpg";
import Silver from "../../assets/work/Silver.jpeg";




gsap.registerPlugin(useGSAP);

const Work = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".col .work-item", { y: 300, stagger: 0.025, opacity: 0 });
    },
    { scope: container }
  );

  return (
    <div className="container page-work" ref={container}>
      <div className="col">
        <WorkItem
          imgUrl={WorkImage18}
          containerHeight="300"
          workName="Darkly"
          workDate="April 2024"
          type="blog"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage20}
          containerHeight="200"
          workName="Sidewalks"
          workDate="April 2024"
          type="img"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage8}
          containerHeight="500"
          workName="Atlantic"
          workDate="April 2024"
          type="article"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage4}
          containerHeight="350"
          workName="Green Smoke"
          workDate="April 2024"
          type="blog"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage21}
          containerHeight="250"
          workName="Presense"
          workDate="April 2024"
          type="img"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage19}
          containerHeight="450"
          workName="Dark Waves"
          workDate="April 2024"
          type="article"
          url="/post"
        />
      </div>

      <div className="col">
        <WorkItem
          imgUrl={WorkImage10}
          containerHeight="200"
          workName="Lavender"
          workDate="April 2024"
          type="img"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage1}
          containerHeight="350"
          workName="Nothing"
          workDate="April 2024"
          type="article"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage14}
          containerHeight="300"
          workName="Cross Walk"
          workDate="April 2024"
          type="img"
          url="/post"
        />
        <WorkItem
          imgUrl={Jet}
          containerHeight="450"
          workName="Dark Fly"
          workDate="April 2024"
          type="article"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage11}
          containerHeight="200"
          workName="PurplePlus"
          workDate="April 2024"
          type="blog"
          url="/post"
        />
        <WorkItem
          imgUrl={Silver}
          containerHeight="450"
          workName="Sliver Surfer"
          workDate="April 2024"
          type="article"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage13}
          containerHeight="200"
          workName="On White"
          workDate="April 2024"
          type="img"
          url="/post"
        />
      </div>

      <div className="col">
        <WorkItem
          imgUrl={WorkImage7}
          containerHeight="250"
          workName="Hollow"
          workDate="April 2024"
          type="article"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage22}
          containerHeight="350"
          workName="Natural"
          workDate="April 2024"
          type="img"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage16}
          containerHeight="400"
          workName="SquareCube"
          workDate="April 2024"
          type="blog"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage17}
          containerHeight="200"
          workName="Yellow"
          workDate="April 2024"
          type="img"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage18}
          containerHeight="500"
          workName="Dna"
          workDate="April 2024"
          type="blog"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage15}
          containerHeight="450"
          workName="Wired"
          workDate="April 2024"
          type="img"
          url="/post"
        />
      </div>
    </div>
  );
};

export default Work;
