import { css } from "../../../../styled-system/css";
import {
  IoHelpCircleOutline,
  IoLogoGithub,
  IoSunnyOutline,
} from "react-icons/io5";

function Header() {
  return (
    <header
      className={css({
        shadow: "xs",
        display: "flex",
        justifyContent: "center",
      })}
    >
      <div
        className={css({
          width: "4/5",
          minWidth: "lg",
          maxWidth: "5xl",
          padding: "3",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "5",
        })}
      >
        <h1
          className={css({
            fontSize: "2xl",
            fontWeight: "bold",
            flexGrow: "1",
          })}
        >
          Daily Scheduler
        </h1>
        <button>
          <IoHelpCircleOutline size={24} />
        </button>
        <button>
          <IoSunnyOutline size={24} />
        </button>
        <button>
          <a href="https://github.com/grtw2116/daily-scheduler" target="_blank">
            <IoLogoGithub size={24} />
          </a>
        </button>
      </div>
    </header>
  );
}

export { Header };
