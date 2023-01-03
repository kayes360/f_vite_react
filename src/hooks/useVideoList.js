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

export default function useVideoList(page) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      //database related works
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const snapshots = await get(videoQuery);
        setLoading(false);

        if (snapshots.exists()) {
          console.log(snapshots);
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshots.val())];
          });
        } else {
          hasMore(false)
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchVideos();
  }, [page]);
  return { loading, error, videos, hasMore };
}
