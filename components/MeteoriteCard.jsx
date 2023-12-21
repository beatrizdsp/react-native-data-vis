import { StyleSheet, Text, View, Image, ScrollView,TextInput } from 'react-native';
const MeteoriteCard = (props) => {
  const { meteorite } = props;
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>
      Name: {meteorite.name}
      {"\n"}ID: {meteorite.id}
      {"\n"}Mass: {meteorite.mass ? `${meteorite.mass} g` : "N/A"}
      
      {"\n"}Geolocation: {meteorite.reclat}, {meteorite.reclong}
      {"\n"}Year: {new Date(meteorite.year).getFullYear()}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  card:{
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  textAlign: 'left',
  width: 380,
  padding:20,
  },
  cardText:{
    color:'white',
    fontFamily:'monospace',
    letterSpacing:1,
    lineHeight:25,
  }
}
);

export default MeteoriteCard;
