import { Database } from "../lib/database";
import { initWorker } from "../lib/dbWorker";
import { useState, useEffect } from "preact/hooks";

export function useDb() {
  const [db, setDb] = useState(null);
  const [dbWorker, setDbWorker] = useState(null);

  if (dbWorker == null) {
    (async () => {
      const dbWorker = await initWorker();
      setDbWorker(dbWorker);
    })();
  }

  useEffect(() => {
    if (dbWorker) {
      const db = new Database(dbWorker);
      setDb(db);
    }
  }, [dbWorker]);
  return { db };
}
