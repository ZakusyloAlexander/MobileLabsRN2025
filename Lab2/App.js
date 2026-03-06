import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const images = {
  steam: require("./assets/steam.png"),
  MetroExodus: require("./assets/Metro Exodus.png"),
  UFC5: require("./assets/UFC5.png"),
  Metro: require("./assets/Metro.png"),
  PBG: require("./assets/PBG.png"),
  asas: require("./assets/asas.jpg"),
  ava1: require("./assets/ava1.jpg"),
  ava2: require("./assets/ava2.jpg"),
  ava3: require("./assets/ava3.jpg"),
  ava4: require("./assets/ava4.jpg"),
  ava5: require("./assets/ava5.jpg"),
  ava6: require("./assets/ava6.jpg"),
  STALKER2: require("./assets/S.T.A.L.K.E.R._2.png"),
  shop: require("./assets/shop.png"),
  profile: require("./assets/profile.png"),
  chat: require("./assets/chat.png"),
  safety: require("./assets/Safety.png"),
  AssassinsCreed: require("./assets/Assassins Creed 2025.jpg"),
  HollowKnightSilksong: require("./assets/Hollow Knight Silksong.jpg"),
  CallofDuty2025: require("./assets/Call of Duty 2025.jpg"),
  RedDeadRedemption3: require("./assets/Red Dead Redemption 3.jpeg"),
};

const gamesList = [
  {
    title: "UFC5",
    price: "$25",
    discount: "-50%",
    image: images.UFC5,
  },
  { title: "S.T.A.L.K.E.R._2", price: "$35", image: images.STALKER2 },
  { title: "Metro", price: "$7", image: images.Metro },
  { title: "Metro Exodus", price: "$38", image: images.MetroExodus },
  { title: "PBG", price: "$29", image: images.PBG },
];

const newsList = [
  {
    title: "Assassins Creed: Hexe стане найтемнішою грою серії",
    summary:
      "Ubisoft повідомила, що наступна частина Assassin’s Creed матиме елементи хорору та буде пов’язана з темною магією XVI століття.",
    image: images.AssassinsCreed,
    source: " GameSpot",
  },
  {
    title: "Hollow Knight: Silksong отримав новий геймплей",
    summary:
      "Team Cherry випустила 10-хвилинне відео з геймплеєм Silksong, в якому показано нові механіки бою та босів.",
    image: images.HollowKnightSilksong,
    source: "IGN",
  },
  {
    title: "Call of Duty 2025: Перші подробиці кампанії",
    summary:
      "Activision розкрила, що нова частина Call of Duty матиме сюжетну лінію, пов’язану з подіями майбутнього. Реліз очікується восени.",
    image: images.CallofDuty2025,
    source: "GameSpot",
  },
  {
    title: "Red Dead Redemption 3 уже в розробці",
    summary:
      "Rockstar Games офіційно підтвердила, що працює над продовженням серії Red Dead. Перші подробиці очікуються у 2026 році.",
    image: images.RedDeadRedemption3,
    source: "IGN",
  },
];

const chatList = [
  {
    id: 1,
    name: "LeoKnight",
    message: "Just joined the server!",
    date: "15 Jun",
    avatar: images.ava1,
  },
  {
    id: 2,
    name: "PixelFox",
    message: "Ready for battle?",
    date: "14 Jun",
    avatar: images.ava2,
  },
  {
    id: 3,
    name: "SkyBlazer",
    message: "Let's form a team",
    date: "13 Jun",
    avatar: images.ava3,
  },
  {
    id: 4,
    name: "RavenX",
    message: "Watch your back!",
    date: "13 Jun",
    avatar: images.ava4,
  },
  {
    id: 5,
    name: "EchoNova",
    message: "I'm going top lane",
    date: "12 Jun",
    avatar: images.ava2,
  },
  {
    id: 6,
    name: "CyberWolf",
    message: "Cover me!",
    date: "11 Jun",
    avatar: images.ava5,
  },
  {
    id: 7,
    name: "LunaSpark",
    message: "Nice shot!",
    date: "10 Jun",
    avatar: images.ava1,
  },
  {
    id: 8,
    name: "FlameStrike",
    message: "Be there in 5 mins",
    date: "9 Jun",
    avatar: images.ava3,
  },
];



// Екрани
class SafetyScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.sectionHeader}>Safety</Text>
        <Text style={styles.safetyCode}>R1G2F</Text>
        <Text style={styles.safetyText}>
          You'll enter your code each time you enter your password to sign in to
          your Steam account.
        </Text>
        <TouchableOpacity style={styles.safetyButton}>
          <Text>Remove Authenticator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.safetyButton}>
          <Text>My Recovery Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.safetyButton}>
          <Text>Help</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class StoreScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <TopHeader />
        <Text style={styles.sectionHeader}>Store</Text>
        <FlatList
          data={gamesList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.gameCard}>
              <Image
                source={item.image}
                style={styles.gameImage}
                resizeMode="contain"
              />
              <View style={styles.gameDetails}>
                <Text style={styles.gameTitle}>{item.title}</Text>
                <Text style={styles.gamePrice}>
                  {item.price}{" "}
                  <Text style={styles.discount}>{item.discount}</Text>
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

class CommunityScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <TopHeader />
        <Text style={styles.sectionHeader}>Community</Text>
        <FlatList
          data={newsList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.newsCard}>
              <Image
                source={item.image}
                style={styles.newsImage}
                resizeMode="cover"
              />
              <View style={styles.newsDetails}>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsSummary}>{item.summary}</Text>
                <Text style={styles.newsSource}>{item.source}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

class ChatScreen extends Component {
  renderChatItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      {item.avatar ? (
        <Image source={item.avatar} style={styles.chatAvatar} />
      ) : (
        <View style={styles.chatAvatarPlaceholder}>
          <Text style={styles.chatAvatarText}>{item.name[0]}</Text>
        </View>
      )}
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
      <Text style={styles.chatDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.sectionHeader}>Chat</Text>
        <FlatList
          data={chatList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderChatItem}
        />
      </View>
    );
  }
}

class TopHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          source={images.steam}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.appTitle}>Steam Store</Text>
      </View>
    );
  }
}

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={images.ava6} style={styles.profileImage} />
        <Text style={styles.profileName}>Zakusilo Olexandr</Text>
        <Text style={styles.profileGroup}>VTk-24-1</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text>Change Theme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ tabBarStyle: { backgroundColor: "#1b1b1b" } }}
        >
          <Tab.Screen
            name="Store"
            component={StoreScreen}
            options={{
              tabBarIcon: ({ size }) => (
                <Image
                  source={images.shop}
                  style={{ width: size, height: size }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Community"
            component={CommunityScreen}
            options={{
              tabBarIcon: ({ size }) => (
                <Image
                  source={images.profile}
                  style={{ width: size, height: size }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              tabBarIcon: ({ size }) => (
                <Image
                  source={images.chat}
                  style={{ width: size, height: size }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Safety"
            component={SafetyScreen}
            options={{
              tabBarIcon: ({ size }) => (
                <Image
                  source={images.safety}
                  style={{ width: size, height: size }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ size }) => (
                <Image
                  source={images.ava6}
                  style={{ width: size, height: size, borderRadius: size / 2 }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#1b1b1b",
    padding: 15,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#121212",
  },
  logoImage: { width: 50, height: 50 },
  appTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  sectionHeader: {
    color: "white",
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
  },

  safetySection: {
    padding: 20,
    backgroundColor: "#2b2b2b",
    borderRadius: 10,
    marginBottom: 20,
  },
  safetyCode: {
    color: "#ff9800",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  safetyText: { color: "white", fontSize: 16, marginBottom: 15 },
  safetyButton: {
    backgroundColor: "#333",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  safetyButtonText: { color: "white", fontSize: 16 },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  profileName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  profileGroup: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  profileButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: "center",
  },
  profileButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },

  gameCard: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#2b2b2b",
    borderRadius: 10,
    marginBottom: 10,
  },
  gameImage: { width: 80, height: 80, borderRadius: 10 },
  gameDetails: { marginLeft: 10, justifyContent: "center" },
  gameTitle: { color: "white", fontSize: 16, fontWeight: "bold" },
  gamePrice: { color: "white", fontSize: 14, fontWeight: "bold" },
  discount: { color: "green", fontSize: 14 },

  newsCard: {
    padding: 10,
    backgroundColor: "#2b2b2b",
    borderRadius: 10,
    marginBottom: 10,
  },
  newsImage: { width: "100%", height: 100, borderRadius: 10 },
  newsDetails: { marginTop: 10 },
  newsTitle: { color: "white", fontSize: 16, fontWeight: "bold" },
  newsSummary: { color: "gray", fontSize: 14 },
  newsSource: { color: "#007bff", fontSize: 12, marginTop: 5 },

  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#2b2b2b",
    borderRadius: 10,
    marginBottom: 10,
  },
  chatAvatar: { width: 40, height: 40, borderRadius: 20 },
  chatDetails: { marginLeft: 10, flex: 1 },
  chatName: { color: "white", fontSize: 14, fontWeight: "bold" },
  chatMessage: { color: "gray", fontSize: 12 },
  chatDate: { color: "gray", fontSize: 12, marginLeft: "auto" },
});

export default App;
