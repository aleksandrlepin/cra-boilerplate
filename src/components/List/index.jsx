import React from 'react';
import { Collection, CollectionItem} from 'react-materialize';

const List = (props) => {
  return (
    <div>
      {/* <h5>{}</h5> */}
      <Collection>
        {props.match.params.search && props.movies.data.results.map(item =>
          <CollectionItem>
            <span>{item.title}</span>
            <span>{item.release_date}</span>
            <span>{item.vote_average}</span>
          </CollectionItem>
        )}
      </Collection>
    </div>
  )
}

export default List;