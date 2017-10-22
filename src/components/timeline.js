import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import * as lang from '../structures/languages';
//import { Link } from 'react-router';

class Timeline extends Component {
    componentDidMount(){
        // url (required), options (optional)
        fetch(this.props.defaults.timelineJsonPath, {
        	method: 'get'
        }).then(function(response) {
        	return response.json();
        }).then(function(data){
            store.dispatch({
                type:'ADD_ITEMS',
                value:data
            });
        }).catch(function(err) {});
    }
    renderTimeline(items){
        let output =[];
        items.map((item)=>{
            output.push(<div>{item.title}</div>);
        });
        return output;
    }
    render(){
        console.log('woot');
        return(<div className="timeline">{this.renderTimeline(this.props.timeline.items)}</div>);
    }
}

const mapStateToProps = function(store) {
    return {
        defaults:store.defaults,
        timeline:store.timeline
    };
};
const SmartTimeline = connect(mapStateToProps)(Timeline);

export default SmartTimeline;
