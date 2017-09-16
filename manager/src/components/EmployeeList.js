import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { FlatList, Text, View } from 'react-native';
import { CardSection, Button } from './common';
import { employeesFetch } from '../actions';


class EmployeeList extends Component {

	componentWillMount() {
		this.props.employeesFetch();
	}

	render() {
		return (
			
				<View>
					<FlatList
					  data={[{key: 'a'}, {key: 'b'}]}
					  renderItem={({item}) => <Text>{item.key}</Text>}
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
