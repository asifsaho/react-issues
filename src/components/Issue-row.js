import React from 'react';
import PropTypes from 'prop-types';
import helpers from '../helpers';

const IssueRow = (props) => {
    return(
        <div className="table-row vert-middle margin-bottom-15">
            <div className="flex">
                <div className="margin-right-15 flex vert-middle">
                    <span className="issue-status open" title="Issue is Open"/>
                </div>
                <div className="issue-details">
                    <div className="issue-title">{props.issue.title}</div>
                    <div className="issue-meta-info">
                        <small><span>ID:</span> #{props.issue.id}</small>
                        <small><span>Created at:</span> {helpers.formatDate(props.issue.created_at)}</small>
                    </div>
                </div>

                <div className="user">
                    <img src={props.issue.user.avatar_url} alt={props.issue.user.name}/>
                </div>
            </div>
        </div>
    );
};

IssueRow.propTypes = {
    issue: PropTypes.object
};

export default IssueRow;