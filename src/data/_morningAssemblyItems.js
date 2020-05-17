import { v4 } from "uuid";


// this is for database initialization only. 

let morningAssemblyItems = [{
  title: "エチケットの確認 👔",
  subTitle: "名札を付けているか、服装に乱れはないか？",
  id: v4(),
  createdBy: "管理者",
  url: null
}, {
  title: "Googleカレンダーの確認 🗓",
  subTitle: "体験授業、もしくは初回の生徒がいるか？",
  id: v4(),
  createdBy: "管理者",
  url: "https://calendar.google.com/calendar/r"
}, {
  title: "Todoの確認 ✅",
  subTitle: "各自のタスクを確認してください。",
  id: v4(),
  createdBy: "管理者",
  url: "https://docs.google.com/spreadsheets/d/1Q7OEpLYHnIV8Q11_PIL5GI_Ca084rUiq2I8L5lMkUiI/"
}, {
  title: "当日業務（不通キャンセル）の確認 🗂",
  subTitle: "各自空き時間で担当する業務を報告してください。",
  id: v4(),
  createdBy: "管理者",
  url: "https://docs.google.com/spreadsheets/d/1UEOt3BQ-Uy96RD2P7bNfFcq3XC6DiukRhnbwyYpJSQg/"
}, {
  title: "CDPチェック予定",
  subTitle: "CDPチェック可能な講師：水野先生、向井先生",
  id: v4(),
  createdBy: "管理者",
  url: null
}, {
  title: "緊急電話番長の設置 ☎️",
  subTitle: "全の講師が授業に入って電話対応ができないとき、伝言の確認を行える人を予め決めておく。",
  id: v4(),
  createdBy: "管理者",
  url: null
}, {
  title: "連絡、共有事項の確認 📢",
  subTitle: "生徒や業務に関する内容を通告すること。",
  id: v4(),
  createdBy: "管理者",
  url: null
}, {
  title: "経営理念の唱和 🙌",
  subTitle: "最後に全員で掛け声をすること。",
  id: v4(),
  createdBy: "管理者",
  url: null
},]