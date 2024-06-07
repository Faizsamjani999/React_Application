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
                <div id="write">
                <div>
                    <h1>Class Component</h1>
                    <p>A class component requires you to extend from React. Component and create a render function that returns a React element.</p>
                    <p>It must have the render() method returning JSX which is syntactically similar to HTML</p>
                    <p>The class component is instantiated and different life cycle method is kept alive and is run and invoked depending on the phase of the class component.</p>
                </div>
                <div>
                    <h1>Functional Component</h1>
                    <p>A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).</p>
                    <p>There is no render method used in functional components.</p>
                    <p>Functional components run from top to bottom and once the function is returned it can’t be kept alive.</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Counter