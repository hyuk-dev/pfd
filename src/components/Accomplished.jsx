import "../styles/status.css"

export function Accomplished({plans, setPlans}) {
    return(
        <div className="accomplished">
            <div className="contentBox">
                <h2>Accomplished</h2>
                {
                    plans.map((plan, index)=>{
                        if(plan.status === "3") return <div className="plan" key={index}>{plan.name}</div>
                    })
                }
            </div>
        </div>

    );
}