import { BeforeProceeding } from "./BeforeProceeding";
import { InProgress } from "./InProgress";
import { Testing } from "./Testing";
import { Accomplished } from "./Accomplished";
import { PlannerManage } from "./PlannerManage/PlannerManage";
import { PlannerInfo } from "./PlannerInfo";

function PlannerPage ({plans, setPlans, per, setPer}) {
    return(
        <>
            <PlannerManage plans={plans} setPlans={setPlans}/>
            <PlannerInfo per={per} setPer={setPer}/>
            <BeforeProceeding plans={plans} setPlans={setPlans} />
            <InProgress plans={plans} setPlans={setPlans}/>
            <Testing plans={plans} setPlans={setPlans}/>
            <Accomplished plans={plans} setPlans={setPlans}/>
        </>
    );
}

export default PlannerPage;