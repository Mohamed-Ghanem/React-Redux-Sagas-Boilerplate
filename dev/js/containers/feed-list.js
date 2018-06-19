import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getFeed} from '../actions';
import './feed-list.scss'

// import defaultImg from '../../assets/images/social-hub-profile-default.jpg';

class FeedList extends Component {

    componentDidMount() {
        this.props.getFeed();
    }

    renderList() {
        return this.props.feedList.map((post) => {
            return (
                <div className="body">
                    <div key={post.id} className="post">
                        <div className="header">
                            {/*<img alt={defaultImg}/>*/}
                            <img
                                src={'https://www.afsafi.com/wp-content/uploads/2013/04/social-hub-profile-default.jpg'}/>
                            <div>
                                <span>Kariem Wahby commented on session</span>
                                <span>Mobile Money Expert at Orange</span>
                                <span>20 hours ago</span>
                            </div>
                            <icon></icon>
                        </div>
                        <div className="content">
                            {post.body}
                        </div>
                        <div className="footer">

                        </div>
                    </div>
                    <div className="actions">
                        <button>Reply</button>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="feed-container">
                {this.props.feedList.length > 0 && this.renderList()}
            </div>
        );
    }

}

// Get apps state and pass it as props to FeedList
//      > whenever state changes, the FeedList will automatically re-render
function mapStateToProps(state) {
    return {
        feed: state.feed,
        feedList: state.feed.feed
    };
}

// Get actions and pass them as props to to FeedList
//      > now FeedList has this.props.getFeed
function matchDispatchToProps(dispatch) {
    return bindActionCreators({getFeed: getFeed}, dispatch);
}

// We don't want to return the plain FeedList (component) anymore, we want to return the smart Container
//      > FeedList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(FeedList);
