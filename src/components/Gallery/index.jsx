import React, { Component } from 'react';
import List from '../List';
import { connect } from 'react-redux';
import { loadMovies } from '../../actions/moviesActions';
import { Route, Link} from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import './index.css';

class Gallery extends Component{
  componentDidMount() {
    this.props.dispatch(loadMovies());
  }
  render() {
    const {match} = this.props;
    return (
      <div>
        <Row className="valign">
          <Col s={2}>
            <h4>Gallery</h4>
          </Col>
          <Col s={10}>
            <Link to={`${match.url}/upcoming`}>upcoming</Link>
            <Link to={`${match.url}/rated`}>rated</Link>
            <Link to={`${match.url}/search`}>search</Link>
          </Col>
        </Row>
        <Row >
          <Col s={12}>
            <Route path={`${match.path}/:option`} render={() => <List {...this.props} />} />
          </Col>
        </Row >
      </div>
    );
  }
}

// export default Gallery;

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps, null)(Gallery);

{/* <Route path={'/:upcoming'} />
      <Route path={'/:rated'}/>
      <Route path={'/:search'}/> */}