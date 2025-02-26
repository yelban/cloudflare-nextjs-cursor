"use client";

import { useEffect, useState } from "react";

// 定義事件數據的類型
interface EventData {
  message: string;
  time: string;
  [key: string]: unknown; // 允許其他可能的屬性
}

export default function SSE() {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    const e = new EventSource("/api/sse");

    e.onmessage = (msg) => {
      console.log(msg);
      try {
        const data = JSON.parse(msg.data) as EventData;
        if (data.message === "close") {
          e.close();
          console.log("closing");
        }
        setEvents((prev) => prev.concat(data));
      } catch (err) {
        console.log("failed to parse: ", err, msg);
      }
    };
  }, []);

  return (
    <>
      <h1>Server Sent Event</h1>
      {events.map((e, i) => (
        <div key={i}>
          Message {i}: {JSON.stringify(e)}
        </div>
      ))}
    </>
  );
}
