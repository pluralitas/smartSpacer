import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function startButton({ theme, label, linkref, value }) {
    if (theme ="loginMenu"){
        return (
            <View style={[styles.startButtonContainer,{borderWidth:4,borderColor:"#0000ff",borderRadius:18,backgroundColor:"#ffffff"}]}>
              <Link style ={styles.startButtonLabel} href={linkref}> {label} 
              <Entypo name="login" size={25} color="#0000ff" style={styles.buttonIcon}/>
              </Link>
            </View>
        );
    }

else if (theme ="Log Out"){
  return (
      <View style={[styles.startButtonContainer,{borderWidth:4,borderColor:"#000000",borderRadius:18,backgroundColor:"#8b0000"}]}>
        <Link style ={styles.startButtonLabel} href={linkref}> {label} 
        <SimpleLineIcons name = "logout" size={25} color="#0000ff" style={styles.buttonIcon}/>
        </Link>
      </View>
  );
}
}

const styles = StyleSheet.create({
  startButtonContainer: {
    width: 300,
    height: 70,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,

  },
  startButton: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  startButtonLabel: {
    color: '#0000ff',
    fontWeight: "bold",
    fontSize: 20,
  },
});