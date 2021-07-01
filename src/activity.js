import React, {Component} from "react";

class Activity extends Component{
    render(){
        return(
            <div className = "activityMain">
                <div className = "header">
                    <form>
                        <input placeholder= "enter Task">
                        </input>
                        <button type = "submit">add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Activity;