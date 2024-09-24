// AppNavigation.js
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AddTripScreen from '../screens/AddTripScreen';
import AddExpensesScreen from '../screens/AddExpensesScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'; // Ensure this is the correct import
import { setUser } from '../redux/Slice/User';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const user = useSelector(state => state.User.user);
  const dispatch = useDispatch();

  // Listen for auth state changes
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      console.log('auth user', u);
      dispatch(setUser(u));
    }, (error) => {
      console.error("Auth error: ", error); // Catch and log error
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Welcome'}>
        {user ? (
          <>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="AddTrip" component={AddTripScreen} />
            <Stack.Screen options={{ headerShown: false }} name="AddExpense" component={AddExpensesScreen} />
            <Stack.Screen options={{ headerShown: false }} name="TripExpenses" component={TripExpensesScreen} />
          </>
        ) : (
          <>
            <Stack.Screen options={{ headerShown: false, presentation: 'modal' }} name="SignIn" component={SignInScreen} />
            <Stack.Screen options={{ headerShown: false, presentation: 'modal' }} name="SignUp" component={SignUpScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
