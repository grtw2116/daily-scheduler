import { IoPencilOutline } from "react-icons/io5";
import { css } from "../../../../styled-system/css";

type Props = {
  order: number;
  title: string;
  category: string;
  startTime: string;
  endTime: string;
};

function TaskItem({ order, title, category, startTime, endTime }: Props) {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "3",
        padding: "4",
        borderBottom: "1px solid",
        borderColor: "gray.200",
      })}
    >
      <span className={css({ color: "gray.500" })}>{order + "."}</span>
      <span className={css({ fontWeight: "bold", fontSize: "lg" })}>
        {title}
      </span>
      <span
        className={css({
          border: "1.5px solid",
          borderColor: "blue.300",
          borderRadius: "sm",
          bgColor: "blue.100",
          paddingX: "1",
          color: "blue.500",
          fontWeight: "bold",
          fontSize: "xs",
        })}
      >
        {category.toUpperCase()}
      </span>
      <div className={css({ flexGrow: "1" })} />
      <span className={css({ color: "gray.500" })}>{startTime}</span> -{" "}
      <span className={css({ color: "gray.500" })}>{endTime}</span>
    </div>
  );
}

function TaskList({ tasks }: { tasks: Props[] }) {
  return (
    <>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <h2 className={css({ fontSize: "xl", fontWeight: "bold" })}>Tasks</h2>
        <button>
          <IoPencilOutline />
        </button>
      </div>
      {tasks.map((task) => (
        <TaskItem key={task.order} {...task} />
      ))}
    </>
  );
}

export { TaskList };
