import React from 'react';
import { connect } from 'react-redux';
import { getNewCat } from '../actions/cats';

class CatButton extends React.Component {
    render() {
        return (
            <button
                className="cat-button"
                onClick={()=> this.props.dispatch(getNewCat())}
                style={{ padding: '0.5em 2rem', cursor: 'pointer', marginBottom: '1rem' }}
                >Get New Cat</button>
        );
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatButton);