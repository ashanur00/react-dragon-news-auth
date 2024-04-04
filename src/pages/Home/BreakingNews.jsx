import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-active mr-5 btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={150}>
              <Link to="/" className="mr-12">I can be a React component, multiple React components......</Link>
              <Link to="/" className="mr-12">I can be a React component, multiple React components......</Link>
              <Link to="/" className="mr-12">I can be a React component, multiple React components......</Link>
              <Link to="/">I can be a React component, multiple React components......</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;