import { config } from "../../Configs/config";
import { useContentful } from "../../contentful/setup-rest";
import "./Events.scss";
import Event from "./Event/Event";

function Events(): JSX.Element {
  const baseClass = "Events";

  const { events }: any = useContentful();

  return (
    <>
      <div className="Hidden-Wrapper">
        <>
          <h3 className={baseClass + "__Headline"}>{config.eventsHeadline}</h3>
          <div className={baseClass}>
            {events.map((item: any, index: any) => (
              <Event content={item} key={index} />
            ))}
          </div>
        </>
      </div>
    </>
  );
}

export default Events;
