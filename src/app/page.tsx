import { css } from "../../styled-system/css";
import { Header } from "./features/header";
import { ProgressBar } from "./features/progress";
import { TaskList } from "./features/taskList";

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={css({
          minWidth: "lg",
          maxWidth: "5xl",
          width: "4/5",
          marginX: "auto",
          padding: "3",
        })}
      >
        <ProgressBar />
        <TaskList
          tasks={[
            {
              order: 1,
              title: "実験用スクリプトの実装",
              category: "work",
              startTime: "11:00",
              endTime: "12:00",
            },
            {
              order: 2,
              title: "昼ごはん",
              category: "rest",
              startTime: "12:00",
              endTime: "13:00",
            },
          ]}
        />
      </main>
    </>
  );
}
