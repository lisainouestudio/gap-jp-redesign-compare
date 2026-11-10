export const sizeGuideAudiences = [
  "ウィメンズ",
  "メンズ",
  "マタニティ",
  "幼児・ベビー",
  "ボーイズ",
  "ガールズ",
  "Love by Gap インナー",
] as const;

export const sizeGuideCategories = [
  "トップス・アウター・ワンピース",
  "デニム・パンツ・スカート",
  "靴・小物",
] as const;

/** Women’s tops / outer / dresses chart (cm) — from live Gap JP size guide */
export const womenTopsSizeChart = {
  title: "【ウィメンズ】トップス・アウター・ワンピース",
  headers: ["XXS", "XS", "S", "M", "L", "XL"] as const,
  /** each letter size maps to one or two Gap numeric columns */
  gapSizes: ["000", "00", "0", "2", "4", "6", "8", "10", "12", "14", "16", "18"],
  japanSizes: ["5", "5", "7", "9", "11", "11", "13", "13", "15", "15", "17", "17"],
  bust: ["77", "80", "83", "86", "89", "93", "97", "101", "105", "109", "111", "111"],
  hip: ["84.5", "87.5", "90.5", "93.5", "96.5", "100.5", "104.5", "108.5", "112.5", "116.5", "119", "119"],
  sleeve: ["77.5", "78", "78.5", "79.5", "80.5", "81", "81.5", "82", "82.5", "83", "83.5", "84"],
  /** header spans: XXS=2, XS=1, S=1, M=2, L=2, XL=4 */
  headerSpans: [2, 1, 1, 2, 2, 4] as const,
};

export const sizeGuideHowTo = {
  intro: "テープ状のメジャーを使って測ってください。",
  bust: "バスト：胸の一番高い位置を水平に測ります。",
  sleeve:
    "裄丈（ゆきたけ）：うなじの中心から肩・ひじを通り、腕を直角に曲げた状態で手首まで測ります。",
};
