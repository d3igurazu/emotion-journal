# Input Items Specification

本ドキュメントは、emotion_journal における  
「1レコード＝1時点の心身状態」を定義する。

---

## 基本情報（自動／半自動）

| 項目名 | 型 | 必須 | 説明 |
|------|----|----|----|
| record_id | string | ○ | UUID。GASで自動生成 |
| recorded_at | datetime | ○ | 記録日時（自動） |
| date | date | ○ | 記録日（YYYY-MM-DD） |
| time | time | ○ | 記録時刻（HH:mm） |

---

## 感情（Emotion）

感情は「今この瞬間に最も近いもの」を1つ選択する。

| 項目名 | 型 | 必須 | 説明 |
|------|----|----|----|
| emotion_category | string | ○ | 感情グループ（安定／活性／沈静／不調 など） |
| emotion_label | string | ○ | 感情名（安心、喜び、不安、怒り、疲労感 等） |
| emotion_level | number | ○ | 強度（1〜5） |

---

## 身体エネルギー（Body Energy）

身体状態を主観評価で数値化する。

| 項目名 | 型 | 必須 | 説明 |
|------|----|----|----|
| body_energy_level | number | ○ | エネルギー量（1〜5） |
| physical_condition | string | △ | 身体感覚（軽い／重い／だるい 等） |

---

## メンタル補足（Optional）

| 項目名 | 型 | 必須 | 説明 |
|------|----|----|----|
| mental_clarity | number | △ | 思考の明瞭度（1〜5） |
| stress_level | number | △ | ストレス感（1〜5） |

---

## メモ（自由入力）

| 項目名 | 型 | 必須 | 説明 |
|------|----|----|----|
| note | text | × | 気づき・出来事・補足 |

---

## 可視化用キー（内部利用）

| 項目名 | 型 | 必須 | 説明 |
|------|----|----|----|
| emotion_axis | number | ○ | 感情軸（-2〜+2） |
| energy_axis | number | ○ | エネルギー軸（-2〜+2） |
| group_label | string | ○ | 所属グループ（安定／過覚醒／低活性 等） |

---

## 備考

- すべての数値スケールは **後から変更可能**
- group_label は GAS 側で自動判定
- 可視化は「感情軸 × エネルギー軸」の2次元平面
