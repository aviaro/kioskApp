import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as storeActions from '../../../store/actions';
import Colors from '../../Utilis/AppColors';

const StoresScreen = () => {
    
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const getAllStore = useCallback(async() => {
        
        let action = storeActions.get_store_action();
        setIsLoading(true);
        try{
            await dispatch(action);
            setIsLoading(false);
        } catch (err) {   
            setIsLoading(false);
        }        
    },[setIsLoading, dispatch, storeActions.get_store_action]);

    useEffect(() => {
        getAllStore();
    }, [getAllStore]);

    const allStores = useSelector(state => state.allStores);
    const stores = allStores.Stores
    console.log("Stores:" + JSON.stringify(stores));

    return(
        <View>
            {
                isLoading?
                (
                    <ActivityIndicator
                        size="large"
                        color={Colors.happy_green}
                    />
                )
                :
                (
                    <View>
                        <FlatList
                            data = {allStores.Stores}
                            keyExtractor = {item => item._Id}
                            renderItem={x => <Text>{x}</Text>}
                                
                            
                        
                        />
                    </View>
                )
            }
        </View>
    )
}


export default StoresScreen;