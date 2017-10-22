import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
//import * as lang from '../structures/languages';
//import { Link } from 'react-router';

import './timeline.css';

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
    niceDate(dateString,format){
        const theDate = new Date(dateString);
        return theDate.getMonth()+1 + '/' + theDate.getDate() + '/' + (theDate.getFullYear()-2000);
    }
    renderTimeline(items){
        let output =[];
        items.map((item,i)=>{
            return output.push(
                <li key={i} className={'item-card item-card'+item.source}>
                    <p><i className={'fa fa-'+item.source} aria-hidden="true"></i><span className="sr">{item.source}</span></p>
                    <h3><a href={item.url} target="_blank">{item.title}</a></h3>
                    <p className="item-date">{this.niceDate(item.date)}</p>
                    <p>{item.description}</p>
                </li>
            );
        });
        return output;
    }
    render(){
        return(
            <ul className="timeline">
                {this.renderTimeline(this.props.timeline.items)}
            </ul>
        );
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
