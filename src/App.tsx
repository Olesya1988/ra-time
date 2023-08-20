import { useState } from "react";
import { VideoList } from "./components/VideoList";
import itemsList from "./components/items.json";
import "./App.css";

interface IList {
  url: string;
  date: string;
}

export default function App() {
  const [list, setList] = useState<IList[]>(itemsList);

  return <VideoList items={list} />;
}
