import React from "react";
import style from "./index.module.scss";

const index = () => {
  return (
    <section className={style.about} id="about">
      <div className={style.div}>
        <div className={style.first__div}>
          <h3 className={style.h3}>
            Sanrachna Constructionn is a India based construction services
            company & With nearly 25+ years in this business, we’re grounded in
            our experience— but always with an eye toward the future. The
            company has earned recognition for undertaking complex projects,
            fostering innovation, embracing emerging technologies, and making a
            difference for their clients, employees and community. The company
            completes construction on 1,000+ projects till today. Sanrachna
            Construction offers clients the accessibility and support of a local
            firm with the stability and resources of a multi-national
            organization.
          </h3>
          <hr className={style.hr} />
          <p className={style.p}>
            Our vision is to be the highest value provider of global
            construction services and technical expertise. We plan and deliver
            building projects of all types and sizes—schools and hospitals,
            stadiums and museums, Residential, commercial offices and more. Our
            reputation for integrity, working safely, delivering complex and
            challenging projects, and driving innovation to bring our whole
            industry forward has been earned over many years.
          </p>
        </div>
        <div className={style.second__div}>
          <div className={style.text__first}>
            <h1>25+</h1>
            <p>Years Of Experience</p>
          </div>
          <div className={style.text__second}>
            <p>1000+</p>
            <p>Completetd Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
