import { Database } from "../lib/database";
import { initWorker } from "../lib/dbWorker";
import { useState, useEffect } from "../lib/utils";

export function useDb() {
  const [db, setDb] = useState(null);
  const [dbWorker, setDbWorker] = useState(null);

  useEffect(() => {
    if (dbWorker == null) {
      (async () => {
        const dbWorker = await initWorker();
        setDbWorker(dbWorker);
      })();
    }
  }, []);

  useEffect(() => {
    if (dbWorker != null) {
      const db = new Database(dbWorker);
      setDb(db);
    }
  }, [dbWorker]);

  return { db };
}
