import "../styles/status.css";
import checked from "../assets/checked.png";
import notChecked from "../assets/not_checked.png";

export function PlannerInfo({per, setPer}) {
    function CheckProgress () {
        if(per >= 100) return <img src={checked}></img>;
        return <img src={notChecked}></img>;
    }
    return(
        <div className="plannerInfo">
            <div className="contentBoxSmall">
                <h2>Planner Info</h2>
                <div className="boxContent">
                    <CheckProgress />
                    <br />
                    Completion rate: {per}%
                    <progress
                        className="progress"
                        value={per}
                        min="0"
                        max="100">
                    </progress>
                    <br />
                </div>
            </div>
        </div>
    );
}