import { useEffect, useState } from "react";
import {
  get,
  query,
  getDatabase,
  orderByKey,
  ref,
  startAt,
  limitToFirst,
} from "firebase/database";

export default function useAnswers(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      //database related works
      const db = getDatabase();
      const answersRef = ref(db, "answers/" + videoID + "/questions");
      const answersQuery = query(answersRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const snapshots = await get(answersQuery);
        setLoading(false);

        if (snapshots.exists()) {
          // console.log(snapshots);
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshots.val())];
          });
        } else {
          hasMore(false);
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    setTimeout(() => {
      fetchAnswers();
    }, 2000);
  }, [videoID]);
  return { loading, error, answers };
}
