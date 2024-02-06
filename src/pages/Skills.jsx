import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

function Skills() {
  return (
    <div className="pb-10">
      <h1 className="text-5xl text-white text-center pt-10 pb-10">Skills</h1>
      <VerticalTimeline lineColor="#FFFFFF">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#FFFFFF", colo: "#FFFFFF" }}
          icon={<FaReact className="text-black" />}
        >
          <h2 className="text-2xl font-extralight ">Front-End</h2>
          <p className="pt-6">
            HTML, CSS, ReactJS, Redux, React Native, NPM, Ionic, Taildwind CSS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          iconStyle={{ background: "#FFFFFF", colo: "#FFFFFF" }}
          icon={<FaNode className="text-black" />}
        >
          <h2 className="pt-10 text-2xl font-extralight">Back-End</h2>
          <p className="pt-6">
            NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, AWS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          iconStyle={{ background: "#FFFFFF", colo: "#FFFFFF" }}
          icon={<SiTypescript className="text-black" />}
        >
          <h2 className="pt-10 text-2xl font-extralight">Languages</h2>
          <p className="pt-6">JavaSript, TypeScript, Python</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Skills;
