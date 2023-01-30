import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState, useRef  } from "react";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const effectRan = useRef(false);

  useEffect(() => { 
    if (effectRan.current === false) {
      async function fetchVideos() {
        // database related works
        const db = getDatabase();
        const videosRef = ref(db, "videos");
        const videosQuery = query(
          videosRef,
          orderByKey()
          // startAt("" + page),
          // limitToFirst(8)
        );
          
        try {
          setError(false);
          setLoading(true);
          // request firebase database
          const snapshot = await get(videosQuery);
          setLoading(false);

          if (snapshot.exists()) {
            setVideos((previousValue) => {
              return [...previousValue, ...Object.values(snapshot.val())];
            });
          } else {
          }
        } catch (err) {
          setLoading(false);
          setError(true);
          console.log(err);
        }
      }
      fetchVideos();

      return () => {
        effectRan.current = true;
      };
    }
  }, [page]); 

  return {
    loading,
    error,
    videos,
    hasMore,
  };
}