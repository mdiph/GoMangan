import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'

export default function ViewCart() {

    const [modalVisible, setModalVisible] = useState(false)

    const items = useSelector((state) => state.cartReducer.selectedItems.items)

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0 );

    const totalUSD = total.toLocaleString("en", {
        style: 'currency',
        currency: 'USD',
    })

    const checkoutModalContent = () => {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: 'black',
                    padding: 10,
                    borderRadius: 30,
                    width: 150,
                    alignItems: 'center'

                }}>
                    <TouchableOpacity onPress={()=> setModalVisible(false)}>
                        <Text style={{color: 'white'}}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

  return (
    <>
    <Modal 
        animationType='slide' 
        visible={modalVisible}
        transparent={true}
        onRequestClose={()=>setModalVisible(false)}
    >
        {checkoutModalContent()}
    </Modal>
    {total ? (
        <View style = {{
            flex: 1,
            alignItems:"center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 200,
            zIndex: 999,
            
        }}>
            <View style = {{
                flexDirection:  "row",
                justifyContent: "center",
                width: "100%",
            }}>
                <TouchableOpacity style ={{
                    marginTop: 20,
                    backgroundColor: "black",
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    padding: 15,
                    borderRadius: 30,
                    width: 300,
                    position: "relative",
                }}
                onPress ={() => setModalVisible(true)}
                >
                    <Text style={{color: "white", fontSize: 20,  marginRight: 70}}>View Cart</Text>
                    <Text style={{color: "white", fontSize:20, marginRight: 10}}>{totalUSD}</Text>
                </TouchableOpacity>
            </View>
        </View>
    ) : (
        <></>
    )}
    </>
  );
}