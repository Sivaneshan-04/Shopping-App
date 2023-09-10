import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

//data of products
const products = [
  {
    id: 1,
    name: "Toothbrush",
    alter: "Bamboo Toothbrush, Recycled PlasticToothbrush",
  },
  {
    id: 2,
    name: "Water Filters",
    alter: "Faucet-Mounted water filter, Gravity water filter",
  },
  {
    id: 3,
    name: "Food Storage Containers",
    alter: "Glass containers, stainless steel containers",
  },
  {
    id: 4,
    name: "Coffee Cups",
    alter: "Reusable Coffe Cups, Biodegradable/Compostable Coffee Cups",
  },
  {
    id: 5,
    name: "Gasoline  powered cars",
    alter: "Electric Cars, Hybrid Cars",
  },
  {
    id: 6,
    name: "Plastic Straws",
    alter: "Stainless steel straws, Bamboo straws",
  },
  {
    id: 7,
    name: "Disposable Diapers",
    alter: "Cloth Diapers, Biodegradable Diapers",
  },
  {
    id: 8,
    name: "Plastic Cutlery",
    alter: "Bamboo Cutlery, Stainless stell cutlery",
  },
  {
    id: 9,
    name: "Incandescent Light bulbs",
    alter: "LED bulbs, CFL bulbs",
  },
  {
    id: 10,
    name: "Plastic water bottles",
    alter: "Stainless stell water bottle, glass water bottle",
  },
  {
    id: 11,
    name: "Disposable plastic shopping bags",
    alter: "Reusable cloth shopping bags, jute bags",
  },
];


//This function renders the components
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome</Text>
      </View>
    <View>
      {products.map((prod) => {
        return <View key={prod.id} style={styles.product}>
          <Text style={styles.name}>{prod['name']}</Text>
          <View style={styles.altProd}>
            <Text style={styles.altProdName}>{prod['alter'].split(',')[0]}</Text>
            <Text style={styles.altProdName}>{prod['alter'].split(',')[1]}</Text>
          </View>
        </View>
      })}
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

//these styles are applied above
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1eff5",
    alignItems: "center",
    padding: 10,
  },
  header: {
    flex: 1,
    backgroundColor: "#22fa1e",
    padding: 12,
    margin:10,
    textAlign: "center",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  product:{
    flex:1,
    backgroundColor: '#f9fc3a',
    padding:4,
    paddingHorizontal:0,
    marginVertical:4,
    marginHorizontal:0,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    borderRadius:12,
  },
  name:{
    fontWeight:'bold',
    width: '50%',
    textAlign:'center',
    alignItems:'center'
  },
  altProd:{
    textAlign:"center",
    width:"50%",
    alignItems:'center',
    padding:3
  },
  altProdName:{
    padding:3,
  },
});
