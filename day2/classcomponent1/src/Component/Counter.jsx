import { Component } from "react";



class Counter extends Component{
    constructor(props)
    {
        super(props);
        this.state = {count : 0}
    }

    increament = ()=>{
        this.setState({count : this.state.count + 1})
        // document.getElementById('dec').style.display = "block"
        document.getElementById('dec').style.opacity = 1
    }

    decreament = ()=>{
        if(this.state.count > 0)
        {
            this.setState({count : this.state.count - 1})
        }
        else{
            // document.getElementById('dec').style.display = "none"
            document.getElementById('dec').style.opacity = 0
        }
        
    }

    reset = ()=>{
        this.setState({count : 0})
    }



    render()
    {
        return(
            <div id="main">
                <h1 id="count">Counter</h1>
                <div id="sub">
                    <h1>{this.state.count}</h1>
                    <button className="btn btn-primary" onClick={this.increament}><i class="bi bi-plus-circle-fill"></i></button>
                    <button className="btn btn-success" onClick={this.decreament} id="dec"><i class="bi bi-dash-circle"></i></button>
                    <button className="btn btn-danger" onClick={this.reset}><i class="bi bi-backspace"></i></button>
                </div>
            </div>
        )
    }
}

export default Counter