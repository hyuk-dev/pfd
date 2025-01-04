import "../styles/status.css"

export function InProgress({plans, setPlans}) {
    return(
        <div className="inProgress">
            <div className="contentBox">
                <h2>In Progress</h2>
                {
                    plans.map((plan, index)=>{
                        if(plan.status === "1") return <div className="plan" key={index}>{plan.name}</div>
                    })
                }
            </div>
        </div>
    );
}