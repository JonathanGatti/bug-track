import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import IssueDetail from '../../components/Issue';
import { fetchIssue } from '../../actions/issuesActions';
import { connect } from 'react-redux';
import Spinner from '../../common/spinner';
import { Issue } from '../../interfaces';
import { History, LocationState } from 'history';

interface MatchParams {
  params: string;
  id: string;
}
interface IssuePageProps extends RouteComponentProps<MatchParams> {
  history: History<LocationState>;
  fetchIssue: (id: string) => void;
  match: any;
  issue: Issue;
  currentUser: any;
}

const IssuePage = ({
  history,
  match,
  fetchIssue,
  issue,
  currentUser,
}: IssuePageProps) => {
  useEffect(() => {
    fetchIssue(match.params.id);
  }, []);

  const render = () => {
    if (!issue) {
      return <Spinner />;
    } else {
      return (
        <div>
          <IssueDetail
            history={history}
            issue={issue}
            currentUser={currentUser}
          />
        </div>
      );
    }
  };
  return <>{render()}</>;
};

interface State {
  issues: Issue[];
  currentUser: any;
}
interface OwnProps {
  match: any;
}

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  return {
    issue: state.issues![ownProps.match.params.id],
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, { fetchIssue })(IssuePage);
