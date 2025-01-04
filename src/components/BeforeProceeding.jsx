import "../styles/status.css"

export function BeforeProceeding({plans, setPlans}) {
    return(
        <div className="beforeProceeding">
            <div className="contentBox">
                <h2>Before Proceeding</h2>
                {
                    plans.map((plan, index)=>{
                        if(plan.status === "0") return <div className="plan" key={index}>{plan.name}</div>
                    })
                }
            </div>
        </div>
    );
}
