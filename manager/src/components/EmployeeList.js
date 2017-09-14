import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ListView, Text, View } from 'react-native';
import { CardSection, Button } from './common';
import { employeesFetch } from '../actions';


class EmployeeList extends Component {

	componentWillMount() {
		this.props.employeesFetch();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
	    };
	}

	render() {
		console.log(this.props.employees)
		return (
			
				<View>
					<ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
					<CardSection>
						<Button onPress={() => Actions.employeeCreate()}>
							Add Employee
						</Button>
					</CardSection>
				</View>
				
		);
	}
}

const mapStateToProps = (state) => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	});

	return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
