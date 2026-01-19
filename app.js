/**
 * 感情分析 AI本体プログラム
 * 役割: 届いたメッセージを分析し、recordsシートへ書き込む
 */
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('records');
  const now = new Date();
  
  // 仮のデータ構造（LINE等からの入力を想定）
  const userMessage = "今日の気分は最高です！"; 
  const emotion = "ポジティブ"; // 本来はGeminiで分析
  
  // recordsシートの最終行に追記
  sheet.appendRow([
    Utilities.formatDate(now, "JST", "yyyy/MM/dd HH:mm:ss"),
    emotion,
    userMessage,
    "分析完了",
    "良好"
  ]);
  
  return ContentService.createTextOutput("記録完了");
}

function getGeminiApiKey() {
  return PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
}