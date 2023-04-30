import { config } from "../../Configs/config";
import { useContentful } from "../../contentful/setup-rest";
import "./News.scss";
import Event from "./NewsEntry/NewsEntry";

function News(): JSX.Element {
  const baseClass = "News";

  const { events }: any = useContentful();

  return (
    <>
      <div className="Hidden-Wrapper">
        <>
          <h3 className={baseClass + "__Headline"}>{config.newsHeadline}</h3>
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

export default News;
