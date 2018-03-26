import React, { Component } from 'react';
import List from '../List';
import { connect } from 'react-redux';
import { loadMovies } from '../../actions/moviesActions';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { Row, Col } from 'react-materialize';

class Gallery extends Component{

  componentDidMount() {
  }

  render() {
    console.log('this.props.movies: ', this.props.movies);
    const {match} = this.props;
    return (
      <div>
        <Row className="valign">
          <Col s={2}>
            <h4>Gallery</h4>
          </Col>
          <Col s={10}>
            <NavLink to={`${match.url}/now_playing`} activeStyle={{textDecoration: 'underline'}} >Now Playing</NavLink>
            <NavLink to={`${match.url}/upcoming`} activeStyle={{textDecoration: 'underline'}} >Upcoming</NavLink>
            <NavLink to={`${match.url}/top_rated`} activeStyle={{textDecoration: 'underline'}} >Top Rated</NavLink>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Route path={`${match.url}/:option`} render={(props) => (<List {...props} load={this.props.load} movies={this.props.movies} />)} />
            {/* <Redirect to={`${match.path}/now_playing`} /> */}
          </Col>
        </Row>
      </div>
    );
  }
}

// export default Gallery;

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  load(querry, param){
    dispatch(loadMovies(querry, param))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

{/* <Route path={'/:upcoming'} />
      <Route path={'/:rated'}/>
      <Route path={'/:search'}/> */}