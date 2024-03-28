import Html from "../../SVG/Html";
import Css from "../../SVG/Css";
import Sass from "../../SVG/Sass";
import NodeJs from "../../SVG/NodeJs";
import Angular from "../../SVG/Angular";
import Python from "../../SVG/Python";

import style from "./Technology.module.css";

const Technology = () => {
  const HTML = <Html />;
  const CSS = <Css />;
  const SASS = <Sass />;
  const NODE = <NodeJs />;
  const ANGULAR = <Angular />;
  const PYTHON = <Python />;

  const items = {
    html: HTML,
    css: CSS,
    sass: SASS,
    node: NODE,
    angular: ANGULAR,
    python: PYTHON,
  };

  return (
    <div className={style.container}>
      <section>
        <span>
          <h2>We use cutting edge technology</h2>
          <p>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean
            lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae
            elit libero, a pharetra augue. Vestibulum id ligula porta felis
            euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum
            faucibus dolor auctor.
          </p>
        </span>
        <div className={style.technologies}>
          {Object.entries(items).map(([key, value]) => (
            <figure key={key}>{value}</figure>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Technology;
