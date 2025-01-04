export function commandRun (command, plans, setPlans) {
    switch(command[0]){
        case 'add':
            if(plans.find((element)=>element.name === command[1])){
                alert("Plan must not overlap.")
                break;
            }
            if(!command[1] || !command[2]){
                alert("Invalid command format.")
                break;
            }
            setPlans([...plans, {name: command[1], status: command[2]}]);
            break;
        case 'del':
            setPlans(plans.filter((element) => element.name!==command[1]))
            break;
        case 'fix':
            if(!plans.find((element)=>element.name === command[1])){
                alert("Plan not founded.")
                break;
            }
            else{
                let newPlans = plans.filter((element) => element.name!==command[1]);
                newPlans = [...newPlans, {name: command[1], status: command[2]}];
                setPlans(newPlans);
            }
            break;
        case 'help':
            alert("[STATUS]\n0: Before Proceeding\n1: In Progress\n2: Testing\n3: Accomplished\n\n[Commands]\nadd,PLAN_NAME,STATUS\ndel,PLAN_NAME\nfix,PLAN_NAME,STATUS");
            break;

            
    }
    
}