import "../styles/status.css"

export function Testing({plans, setPlans}) {
    return(
        <div className="testing">
            <div className="contentBox">
                <h2>Testing</h2>
                {
                    plans.map((plan, index)=>{
                        if(plan.status === "2") return <div className="plan" key={index}>{plan.name}</div>
                    })
                }
            </div>
        </div>
    );
}