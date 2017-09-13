import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ padding: 10, backgroundColor: '#fff' }}>
			<Stack key="root" sceneStyle={{ matgin: 0, padding: 0, backgroundColor: '#fff'  }}>
				
				   <Scene key="login" component={LoginForm} title="Please Login" initial />
				
				<Scene key="main">
					<Scene key="employeeList" component={EmployeeList} title="Employee List" />
				</Scene>
			</Stack>
		</Router>
	);
};

export default RouterComponent;
