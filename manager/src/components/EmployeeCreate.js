import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
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

				<CardSection style={{ flexDirection: 'column' }}>
					<Text style={{ alignSelf: 'flex-start', fontSize: 18 }}>Shift</Text>
					<Picker 
						selectedValue={this.props.shift}
						onValueChange={text => this.props.employeeUpdate({ prop: 'shift', value: text })}
						style={{ flex: 1 }}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
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
