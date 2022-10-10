import React from "react";
import firebase from "../utils/firebase";
import { List } from "semantic-ui-react";
import "firebase/firestore";

function Topics() {
  const [topics, setTopics] = React.useState([]);
  React.useEffect(() => {
    firebase
      .firestore()
      .collection("facilities")
      .get()
      .then((collectionSnapshot) => {
        const data = collectionSnapshot.docs.map((doc) => {
          return doc.data();
        });
        setTopics(data);
      });
  }, []);

  return (
    <List selection>
      {topics.map((topic) => {
        return <List.Item key={topic.name}>{topic.name}</List.Item>;
      })}
    </List>
  );
}

export default Topics;
