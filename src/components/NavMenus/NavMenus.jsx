const unclicked = {
    opacity : 0.3,
    cursor : "pointer",
}

const clicked = {
    border : "1px solid #e9ecef",
    borderRadius : "1rem",
    padding : "0 1rem",
}


export default function NavMenus ({navFocus, setNavFocus}) {
    function handleMenuClick(e) {
        setNavFocus(e.target.className);
    }
    function Planner(){
        if(navFocus !== "planner") return <div className="planner" style={unclicked} onClick={handleMenuClick}>🗓️ Planner</div>;
        else return <div className="planner" style={clicked}>🗓️ Planner</div>;
    }
    function PlanComment(){
        if(navFocus !== "planComment") return <div className="planComment" style={unclicked} onClick={handleMenuClick}>✏️ Plan Comment</div>;
        else return <div className="planComment" style={clicked}>✏️ Plan Comment</div>
    }
    function Board(){
        if(navFocus !== "board") return <div className="board" style={unclicked} onClick={handleMenuClick}>📄 Board</div>;
        else return <div className="board" style={clicked}>📄 Board</div>;
    }
    function Contact(){
        if(navFocus !== "contact") return <div className="contact" style={unclicked} onClick={handleMenuClick}>📨 Contact</div>;
        else return <div className="contact" style={clicked}>📨 Contact</div>;
    }
    return(
        <nav className="navMenus">
            <Planner />
            <PlanComment />
            <Board />
            <Contact />
        </nav>
    )
}