import React, {Component} from 'react';
import IssueRow from './components/issue-row';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            issues: []
        }
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1>Github issues for React JS</h1>
                    <div className="issue-table">
                        {this.state.issues.map((item, i) =>
                            <IssueRow key={i} issue={{
                                url: "https://api.github.com/repos/facebook/react/issues/14443",
                                repository_url: "https://api.github.com/repos/facebook/react",
                                labels_url: "https://api.github.com/repos/facebook/react/issues/14443/labels{/name}",
                                comments_url: "https://api.github.com/repos/facebook/react/issues/14443/comments",
                                events_url: "https://api.github.com/repos/facebook/react/issues/14443/events",
                                html_url: "https://github.com/facebook/react/issues/14443",
                                id: 391218542,
                                node_id: "MDU6SXNzdWUzOTEyMTg1NDI=",
                                number: 14443,
                                title: "Warning should appear when versions of react and react-dom do not match",
                                user: {
                                    login: "mjhoffm2",
                                    id: 29382626,
                                    node_id: "MDQ6VXNlcjI5MzgyNjI2",
                                    avatar_url: "https://avatars1.githubusercontent.com/u/29382626?v=4",
                                    gravatar_id: "",
                                    url: "https://api.github.com/users/mjhoffm2",
                                    html_url: "https://github.com/mjhoffm2",
                                    followers_url: "https://api.github.com/users/mjhoffm2/followers",
                                    following_url: "https://api.github.com/users/mjhoffm2/following{/other_user}",
                                    gists_url: "https://api.github.com/users/mjhoffm2/gists{/gist_id}",
                                    starred_url: "https://api.github.com/users/mjhoffm2/starred{/owner}{/repo}",
                                    subscriptions_url: "https://api.github.com/users/mjhoffm2/subscriptions",
                                    organizations_url: "https://api.github.com/users/mjhoffm2/orgs",
                                    repos_url: "https://api.github.com/users/mjhoffm2/repos",
                                    events_url: "https://api.github.com/users/mjhoffm2/events{/privacy}",
                                    received_events_url: "https://api.github.com/users/mjhoffm2/received_events",
                                    type: "User",
                                    site_admin: false
                                },
                                labels: [],
                                state: "open",
                                locked: false,
                                assignee: null,
                                assignees: [],
                                milestone: null,
                                comments: 0,
                                created_at: "2018-12-14T18:28:45Z",
                                updated_at: "2018-12-14T18:28:45Z",
                                closed_at: null,
                                author_association: "NONE",
                                body: "**Do you want to request a *feature* or report a *bug*?**\r\n\r\nRequest a feature\r\n\r\n**What is the current behavior?**\r\n\r\nIf the version of react and react-dom do not match, some features fail silently.  See this issue for example: https://github.com/reduxjs/react-redux/issues/1125\r\n\r\nIn this issue, the new Context API wasn't working as intended, but no errors or warnings were visible.  Components simply did not update.  It turns out that this issue was because I updated react to version 16.6.3, but still had react-dom at version 16.5.\r\n\r\n**What is the expected behavior?**\r\n\r\nI would like to see some sort of warning message in the console in development mode when the versions of react and react-dom do not match.\r\n"
                            }}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
