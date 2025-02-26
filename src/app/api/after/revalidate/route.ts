import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export function POST() {
  // 不阻塞響應，但在後台執行重新驗證
  Promise.resolve().then(() => 
    setTimeout(() => {
      revalidateTag("date");
    }, 5000)
  );

  return NextResponse.json({ success: true });
}
