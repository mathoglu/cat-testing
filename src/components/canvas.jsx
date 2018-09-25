import React from 'react';
import { connect } from 'react-redux';

class Canvas extends React.Component {
    render() {
        const { url } = this.props.cat;
        if (!url) return null;
        return (
            <img className="cat-canvas" src={url} alt="cat" style={{ objectFit: 'contain' }}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        cat: state.cats.cat,
    };
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);