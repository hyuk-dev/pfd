import "../../styles/status.css"
import { commandRun } from "./function/commandRun.js";

export function PlannerManage({plans, setPlans}) {
    const planCommand = (e) => {
        if(e.code === 'Enter'){
            const command = e.target.value.split(",");
            e.target.value = '';
            commandRun(command, plans, setPlans);
        }
    }
    return(
        <div className="plannerManage">
            <div className="contentBoxSmall">
                <h2>Planner Manage</h2>
                <div className="boxContent">
                    <input className="planInput" onKeyDown={planCommand}></input>
                    <br />
                    <div>
                        If this is your first time,<br />enter the command <b className="code">help</b>
                    </div>
                    <br />
                    
                </div>
            </div>
        </div>
    );
}