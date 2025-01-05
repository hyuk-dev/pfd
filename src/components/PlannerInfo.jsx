import "../styles/status.css";
import checked from "../assets/checked.png";
import notChecked from "../assets/not_checked.png";

export function PlannerInfo({per, setPer}) {
    const progressStyle = {
        width: per+'%',
        height: "2rem",
        backgroundColor: "rgb(109, 169, 209)",
        borderRadius: "1rem",
    }
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

                    {
                        per !== "NaN" ? <p>Completion rate: {per}%</p> : <p>There are no registered plans.</p>
                    }       
                    {
                        per !== "NaN" &&
                        <div className="progressBar">
                            <div className="progress" style={progressStyle}>
                            </div>
                        </div>
                    }

                    </div>
                    <br />
                </div>
            </div>
    );
}