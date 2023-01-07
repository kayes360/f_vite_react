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

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      //database related works
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const snapshots = await get(quizQuery);
        setLoading(false);

        if (snapshots.exists()) {
          console.log(snapshots);
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshots.val())];
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
      fetchQuestions();
    }, 2000);
  }, [videoID]);
  return { loading, error, questions };
}
