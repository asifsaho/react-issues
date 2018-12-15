import React from 'react';
import ReactDOM from 'react-dom';
import IssueRow from './components/Issue-row';

describe('Test for IssueRow component', () => {
    it('Renders App Component without crashing', () => {

        let issue = {
            "title": "Removed enableSchedulerTracing flag and turned tracing on for all builds",
            "user": {
                "login": "bvaughn",
                "id": 29597,
                "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4"
            }
        };

        const div = document.createElement('div');
        ReactDOM.render(<IssueRow issue={issue}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});