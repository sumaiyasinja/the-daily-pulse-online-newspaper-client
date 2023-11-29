import Marquee from "react-fast-marquee";

const BreakingNewsSingle = ({news}) => {
    return (
        <div className="flex flex-col md:flex-row">

        <Marquee speed={80} pauseOnHover>
            <h3 className="text-slate-800 font-medium pr-1">{news.source}: </h3> 
            <h1 className="text-slate-800 font-medium">{news.headline}.</h1>
         </Marquee>
         </div>
    );
}; 
export default BreakingNewsSingle;