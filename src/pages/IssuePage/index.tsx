import React, { useEffect } from 'react';
import { StaticContext, RouteComponentProps } from 'react-router';
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
}

const IssuePage = ({ history, match, fetchIssue, issue }: IssuePageProps) => {
  useEffect(() => {
    fetchIssue(match.params.id);
  }, []);

  const render = () => {
    if (!issue) {
      return <Spinner />;
    } else {
      return (
        <div>
          <IssueDetail history={history} issue={issue} />
        </div>
      );
    }
  };
  return <>{render()}</>;
};

interface mapState {
  state: Issue[] | any;
  ownProps: RouteComponentProps<any, StaticContext, unknown>;
}

const mapStateToProps = ({ state, ownProps }: mapState) => {
  return { issue: state.issues![ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchIssue })(IssuePage);
