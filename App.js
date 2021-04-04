import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//     };
//   }

//   getData = () => {
//     const url = "https://reactnative.dev/movies.json";
//     fetch(url, { method: "GET" })
//       .then((ress) => {
//         return ress.json();
//       })
//       .then((res) => {
//         console.warn(res);
//         if (res) {
//           this.setState({
//             data: res.movies,
//           });
//         }
//       });
//   };

//   componentDidMount() {
//     this.getData();
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           style={{ width: "100%", backgroundColor: "white" }}
//           data={this.state.data}
//           horizontal={false}
//           keyExtractor={(item, index) => index.toString()}
//           listKey={(item, index) => "D" + index.toString()}
//           onitem
//           renderItem={({ item }) => (
//             <View
//               style={{
//                 justifyContent: "center",
//                 alignContent: "flex-start",
//                 flexDirection: "row",
//                 alignItems: "flex-start",
//                 padding: 10,
//                 top: 20,
//               }}
//             >
//               <Text style={{ fontSize: 10, textAlign: "auto", padding: 5 }}>
//                 {item.id}
//               </Text>
//               <Text style={{ fontSize: 10, textAlign: "auto", padding: 5 }}>
//                 {item.title}
//               </Text>
//               <Text style={{ fontSize: 10, textAlign: "auto", padding: 5 }}>
//                 {item.releaseYear}
//               </Text>
//             </View>
//           )}
//         />
//       </View>
//     );
//   }
// }
// //code run karo
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default App;
// //now run again

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carsData: [],
    };
  }

  getCarsData = () => {
    const Url =
      "https://private-anon-8ff3d07a03-carsapi1.apiary-mock.com/manufacturers";
    fetch(Url, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // console.warn(response);
        console.warn(response);

        if (response) {
          this.setState({
            carsData: response,
          });
        }
      });
  };

  componentDidMount() {
    this.getCarsData();
  }

  render() {
    console.error(this.state.carsData, "State Data");
    return (
      <View style={styling.container}>
        <FlatList
          style={{ width: "100%", backgroundColor: "white" }}
          numColumns={1}
          data={this.state.carsData}
          horizontal={false}
          keyExtractor={(item, index) => index.toString()}
          listKey={(item, index) => "D" + index.toString()}
          onitem
          renderItem={({ item }) => (
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                //alignContent: "flex-start",
                flexDirection: "row",
                padding: 10,
                top: 25,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "auto",
                  padding: 5,
                }}
              >
                ID = {item.id}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "auto",
                  padding: 5,
                }}
              >
                Name = {item.name.toUpperCase()}
              </Text>

              <Image
                style={{ padding: 5, height: "150%", width: "40%" }}
                source={{ uri: item.img_url }}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
