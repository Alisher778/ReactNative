import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

import { Button, Card, CardSection, Input } from './common';

class EmployeeCreate extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label="Name" 
						value={this.props.value}
						onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
					/>
				</CardSection>

				<CardSection>
					<Input 
						label="Phone" 
						placeholder="917-293-4098" 
						value={this.props.phone}
						onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
					/>
				</CardSection>

				<CardSection>
					<Input />
				</CardSection>

				<CardSection>
					<Button onPress={() => Actions.employeeList()}> Create </Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
