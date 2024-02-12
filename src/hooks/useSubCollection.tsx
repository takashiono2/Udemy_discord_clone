import { useEffect, useState } from 'react'
import { collection, query, onSnapshot, orderBy, Timestamp } from "firebase/firestore";
import { db } from '../firebase';
import { useAppSelector } from '../app/hooks';

interface Messages {
  timestamp: Timestamp;
  message: string;
  user:{
    uid: string,
    photo: string,
    email: string,
    displayName: string,
  }
}

const useSubCollection = (collectionName: string, subCollecitonName: string) => {
  const channelId = useAppSelector(state => state.channel.channelId);

  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);

  useEffect(() => {
    let collectionRef = collection(
      db,
      collectionName,
      String(channelId),
      subCollecitonName,
    );

    const collectionRetOrederBy = query(collectionRef, orderBy("timestamp", "desc"))

    onSnapshot(collectionRetOrederBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setSubDocuments(results);
    });
  }, [channelId,collectionName,subCollecitonName]);

  return {subDocuments}
};

export default useSubCollection;
