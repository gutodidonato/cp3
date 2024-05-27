import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { AuthContext } from "../contexts/auth";


import Lanches from "../Produtos/Lanches";

export default function Principal({ navigation }) {
  const [servico, setServico] = useState([])
  const { user, logar, deslogar} = useContext(AuthContext);



  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/fundo.png")}
        resizeMode="cover"
        style={styles.fundoPreto}
      >
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <View style={styles.caixa}>
          <Text style={styles.titulo}>Bem vindo {user.status}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  fundoPreto: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "50%",
    display: "flex",
    alignContent: "flex-end",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    marginTop: 120,
  },
  caixa: {
    backgroundColor: "white",
    borderRadius: 50,
    width: "100%",
    height: 500,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 120,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20
  }

});

const estilo = StyleSheet.create({
  caixa: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginVertical: 10
  },
  texto: {
    color: "white"
  }
})
