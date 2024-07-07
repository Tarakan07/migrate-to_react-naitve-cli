import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  KeyboardAwareScrollView,
  KeyboardAwareFlatList,
} from "react-native-keyboard-aware-scroll-view";

const MiniChat = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My header</Text>
      </View>
      <KeyboardAwareScrollView
        scrollEnabled={false}
        contentContainerStyle={{
          height: Dimensions.get("screen").height - 100,
        }}
      >
        <KeyboardAwareScrollView
          scrollEnabled={true}
          // style={{ height: 400 }}
          contentContainerStyle={{}}
          resetScrollToCoords={{ x: 0, y: 0 }}
          // scrollEnabled={true}
          enableOnAndroid={false}
          enableAutomaticScroll={true}
          extraScrollHeight={0}
          extraHeight={Platform.OS === "ios" ? 130 : 0}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            quisquam corporis excepturi dignissimos magnam velit consequuntur.
            Aut illo beatae a? Voluptatem, laborum tempora debitis modi
            accusamus adipisci error eius molestiae nostrum itaque odit quisquam
            culpa facilis excepturi incidunt commodi sit neque eum numquam?
            Neque, beatae! Ipsum quis dignissimos fugiat neque dolores incidunt
            debitis expedita! Architecto eos provident illo blanditiis ab, quis
            nihil ratione voluptatem unde placeat debitis fugiat, est similique
            maiores ducimus molestias alias dicta doloribus. Assumenda molestiae
            architecto consectetur suscipit numquam excepturi eaque ad a aliquam
            quaerat veritatis quam quia eos, provident mollitia sint temporibus
            ut iusto nam atque sunt minima rerum modi quibusdam. Minima quidem
            ratione laudantium consequuntur, reprehenderit ducimus nisi maxime
            fugiat. Cupiditate nemo laborum libero aspernatur ut aperiam
            delectus! Libero laborum molestiae commodi sequi! Excepturi quidem
            provident voluptates nesciunt cum. Reprehenderit esse itaque,
            laboriosam minus voluptatem iste totam nulla nostrum? Deserunt quae
            iste repudiandae cupiditate dolorem saepe deleniti consequuntur
            dolore aperiam rem totam sunt itaque explicabo cumque, blanditiis
            perspiciatis unde culpa porro aliquid quaerat nemo nisi tempore
            tempora. Natus pariatur eveniet ratione accusamus nostrum. Vitae
            laudantium reprehenderit cupiditate odio placeat ratione illo,
            dignissimos saepe accusantium, fugit inventore aut sint debitis
            rerum incidunt amet obcaecati sequi repellendus recusandae
            distinctio ex iusto quos voluptas esse! Doloribus accusantium,
            veritatis fuga quae itaque doloremque laudantium fugit ex quidem
            minima dolores ullam magnam, expedita non vitae sint saepe.
            Recusandae dolores voluptatibus ut repudiandae, iusto rerum,
            cupiditate aliquid in voluptas consequuntur, eveniet autem beatae.
            Non asperiores saepe praesentium nesciunt. Nihil veniam tempora nisi
            obcaecati placeat maiores sed possimus animi, debitis magni minima,
            est, at doloremque sunt error? Minus debitis voluptatum
            perspiciatis, libero culpa placeat illum amet ea laboriosam commodi
            inventore laudantium distinctio fugit facere maiores eveniet veniam
            ducimus nobis obcaecati pariatur magni dolorem sunt dolores laborum?
            Hic, fuga? Enim totam quos repellendus maxime. A accusamus non
            sapiente dolores quae nesciunt illo, possimus pariatur et mollitia
            officia quo, minus culpa necessitatibus itaque? Repellendus repellat
            ratione eos earum repudiandae ullam voluptatibus, eaque ut quibusdam
            dolore consequatur est dignissimos neque illum vero nostrum,
            obcaecati pariatur magnam sapiente facilis voluptatum quaerat! Ab
            ipsam sequi maiores pariatur adipisci velit necessitatibus eius
            ipsa, porro placeat facere sapiente rerum illum eveniet sunt odit
            doloremque quaerat repudiandae. Aut, natus labore vitae cupiditate
            facilis ad consequuntur, fuga odit eius atque hic repudiandae beatae
            ullam voluptate dignissimos sunt suscipit unde optio quas. Qui
            adipisci ipsam id ullam velit, ipsa ducimus quis! Voluptatum modi
            accusamus illo facere, fuga harum ab quae necessitatibus facilis
            deserunt unde delectus non atque magni et possimus quam ipsa
            blanditiis repudiandae officia! Vel error blanditiis voluptas,
            dolorum adipisci eius libero quasi itaque minus eum repellat magni
            corrupti laborum? Nisi quia laudantium sunt quae dolore. Qui,
            doloribus. Sequi, eos alias accusantium consequuntur aperiam
            laudantium vero sit eaque dolorum iure maiores enim porro cupiditate
            quos architecto laboriosam qui consectetur perferendis voluptas,
            velit deleniti odio culpa? Voluptate ad voluptatibus facere earum
            ipsam. Nesciunt fugiat labore dolorum voluptate veniam, modi dolore
            ratione dicta quo alias, corrupti numquam ipsam a magnam, iusto
            vitae accusamus?
          </Text>
        </KeyboardAwareScrollView>
        <View
          style={{
            height: 50,
            backgroundColor: "red",
            // position: "absolute",
            width: "100%",
            bottom: 0,
          }}
        >
          <TextInput style={styles.textInput} placeholder="lalal" />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

{
  /* <ScrollView
style={{ backgroundColor: "#000" }}
// contentContainerStyle={{ flex: 1 }}
data={new Array(40).fill("hi")}
keyExtractor={(item, index) => `${index}`}
renderItem={({ item, index }) => <Item index={index} />}
/> */
}
const Item = ({ index }) => {
  return (
    <View
      style={[
        styles.messageBubble,
        {
          alignSelf: index % 2 === 0 ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text style={styles.messageText}>
        {index % 2 === 0 ? `Hi - ${index}` : `By - ${index}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    backgroundColor: "blue",
    padding: 16,
    zIndex: 1,
  },
  header: {
    color: "#ffd",
  },
  messageBubble: {
    width: "30%",
    backgroundColor: "blue",
    borderRadius: 16,
    borderColor: "red",
    borderWidth: 1,
    marginVertical: 4,
    marginBottom: 8,
    padding: 8,
  },
  messageText: {
    fontSize: 20,
    color: "#fff",
  },
  inputContainer: {
    padding: 8,
    backgroundColor: "#000",
    flex: 1,
  },
  textInput: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 16,
    padding: 8,
  },
});

export default MiniChat;
