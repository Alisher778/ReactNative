import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
	return (
		<Router sceneStyle={{ padding: 10, backgroundColor: '#fff' }}>
			<Stack key="root" sceneStyle={{ matgin: 0, padding: 0, backgroundColor: '#fff' }}>
				<Stack key="main" >
					<Scene key="login" component={LoginForm} title="Please Login" initial />
				</Stack>
					<Scene key="employeeList" component={EmployeeList} title="Employee List" />
					<Scene key='employeeCreate' component={EmployeeCreate} title="Employee Form" />
			</Stack>
		</Router>
	);
};

export default RouterComponent;
