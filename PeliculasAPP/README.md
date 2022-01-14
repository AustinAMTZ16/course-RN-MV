- Navegacion Install 
    - yarn add @react-navigation/native 
    - yarn add @react-navigation/stack

- Crear archivo que controle vistas
    - name.txs

    ``` .txs
        const Stack = createStackNavigator();

        export const Navigation = () => {
        return (
            <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
            </Stack.Navigator>
        );
        }
    ```