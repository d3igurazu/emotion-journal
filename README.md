# emotion-journal

感情を記録し、日々の心の変化を可視化するためのプロジェクトです。

## プロジェクトの目的
自分の感情を客観的に把握し、メンタルヘルスや自己理解を深めることを目指しています。

## 現在の状態
- [x] プロジェクト構成の作成
- [x] 基本仕様の策定
- [ ] アプリケーションの実装

## ディレクトリ構成
- `design/`: UIや可視化のアイデア
- `spec/`: 入力項目などの詳細な仕様書

# emotion_journal
日常の感情と身体状態を記録し、
感情 × 身体エネルギーを可視化するための個人用ジャーナルアプリ。

## Purpose
・その時々の心身状態を「主観ではなく構造」で把握する  
・感情の偏り、エネルギー低下を早期に視認する  
・自分の健康状態・心理状態を一目で把握できるようにする

## Success Criteria
・今の心身状態が一目で分かる  
・感情と身体エネルギーの傾向が視覚で理解できる  
・履歴として蓄積され、振り返りが可能である

## Structure
emotion_journal/
├ design/
│  └ visualization.md      # 可視化設計（確定）
├ spec/
│  └ input_items.md        # 入力項目仕様
├ app/
│  └ gas/                  # Google Apps Script
└ README.md

## Tech Stack
・Google Apps Script（完全自前制御）
・Google Sheets（データ保存）
・GitHub（設計・コード履歴管理）
・manus（設計・思考・試行錯誤の履歴）

## Development Policy
・manus：思考・設計・試行錯誤の履歴
・GitHub：仕様とコードの正史
・GAS：実行と自動化の中核
