import React from "react"

function RecentPost(props){
    return(
        <div className = "row">
            <div className="column">
                <img src={props.postImg} alt=""/>
                <i className="date">{props.postDate}</i>
            </div>
            <strong>
                {props.postText}
            </strong>
        </div>
    )
}

export default RecentPost