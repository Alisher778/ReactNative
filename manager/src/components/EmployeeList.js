import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View } from 'react-native';
import { CardSection, Button } from './common';


class EmployeeList extends Component {
	render() {
		return (
			
				<View>
					<Text>Employee Name</Text>
					<Text>Employee Name</Text>
					<Text>Employee Name</Text>
					<Text>Employee Name</Text>
					<Text>Employee Name</Text>

					<CardSection>
						<Button onPress={() => Actions.employeeCreate()}>
							Add Employee
						</Button>
					</CardSection>
				</View>
				
		);
	}
}

export default EmployeeList;
