// 使用 import 風格替代三斜線引用
import type * as SSTTypes from "../example_sst/.sst/types/index";

// 確保類型可用於全局命名空間
declare global {
  // 重新導出所有從 SSTTypes 導入的類型
  export type { SSTTypes };
} 