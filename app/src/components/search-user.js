import React, {Component} from 'react'
import _ from 'lodash'

export default class SearchUser extends Component{


	constructor(props){
		super(props);


		this.handleOnClick = this.handleOnClick.bind(this);


	}


	handleOnClick(user){


		if(this.props.onSelect){
			this.props.onSelect(user);
		}
	}
	
}
