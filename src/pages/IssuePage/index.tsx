import React, { useEffect, useState } from 'react';
import IssueDetail from '../../components/Issue';
import { fetchIssue } from '../../actions/issuesActions';
import { connect } from 'react-redux';
import Spinner from '../../common/spinner';

const IssuePage = ({ match, fetchIssue, issue }: any) => {
  useEffect(() => {
    fetchIssue(match.params.id);
  }, []);

  const render = () => {
    if (!issue) {
      return <Spinner />;
    } else {
      return (
        <div>
          <IssueDetail issue={issue} />
        </div>
      );
    }
  };
  return <>{render()}</>;
};

const mapStateToProps = (state: any, ownProps: any) => {
  return { issue: state.issues![ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchIssue })(IssuePage);
