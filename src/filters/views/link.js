import React from 'react';
import { setFilter } from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
    if (active) {
        return (
            <div className="filter selected">
                {children}
            </div>
        )
    } else {
        return (
            <div
                // href="#"
                className="filter not-selected"
                onClick={
                    (ev) => {
                        ev.preventDefault();        // 阻止默认页面跳转
                        onClick();
                    }
                }
            >
                {children}
            </div>
        );
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}


const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setFilter(ownProps.filter))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);