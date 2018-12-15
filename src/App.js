import React, {Component} from 'react';
import IssueRow from './components/issue-row';
import Preloader from './components/preloader/preloader';
import dataService from './dataService';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            issues: [],
            loader: true
        }
    }

    componentWillMount(){
        dataService.getIssues().then((res) => {
            this.setState({
                issues: res.data,
                loader: false
            })
        })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1>Github issues for React JS</h1>
                    <div className="issue-table">
                        <Preloader show={this.state.loader}/>
                        {this.state.issues.map((item, i) => <IssueRow key={i} issue={item}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;