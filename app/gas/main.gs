/**
 * Manus: 感情記録システム
 * 仕様に基づき、感情スコア(-5〜+5)と身体エネルギー(0〜10)を記録します
 */

function recordToSheet(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('data');
  
  // 仕様に基づいた列順: 記録日時, 感情スコア, 身体エネルギー, 感情ラベル, メモ
  const row = [
    [cite_start]new Date(),        // A: 記録日時（自動取得） [cite: 1]
    [cite_start]data.emotion,      // B: 感情スコア (-5 〜 +5) [cite: 1]
    [cite_start]data.energy,       // C: 身体エネルギースコア (0 〜 10) [cite: 1]
    data.label || [cite_start]"",  // D: 感情ラベル (任意) [cite: 1]
    data.memo || [cite_start]""    // E: メモ (任意) [cite: 1]
  ];
  
  sheet.appendRow(row);
}

// テスト実行用関数
function testRecord() {
  recordToSheet({
    emotion: 3,
    energy: 8,
    label: "穏やか",
    memo: "GitHubからの初コミット成功！"
  });
}
