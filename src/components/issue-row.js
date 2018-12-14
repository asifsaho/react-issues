import React from 'react';

const issueRow = (props) => {
    return(
        <div className="table-row vert-middle margin-bottom-15">
            <div className="flex">
                <div className="margin-right-15 flex vert-middle">
                    <span className="issue-status open" title="Issue is Open"/>
                </div>
                <div className="issue-details">
                    <div className="issue-title">{props.issue.title}</div>
                    <div className="flex">
                        <small><span>ID:</span> #14443</small>
                        <small><span>Created at:</span> Dec 14 2018 19:28</small>
                    </div>
                </div>

                <div className="user">
                    <img src={props.issue.user.avatar_url}/>
                </div>
            </div>
        </div>
    );
};

export default issueRow;