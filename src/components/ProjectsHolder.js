import React from "react";
import Project from "./Project";

const projects_obj = [
  {
    title: "Victorstone",
    url: "https://victorstone.co.uk",
    fileName: "victorstone",
  },
  {
    title: "OI Design Studio",
    url: "https://oidesignstudio.com/",
    fileName: "oi",
  },
  {
    title: "Pfida",
    url: "https://pfida.com",
    fileName: "pfida",
  },
  {
    title: "Influxcrowd",
    url: "https://influxcrowd.com/",
    fileName: "influx",
  },
  {
    title: "Picturthat",
    url: "https://picturthat.com/",
    fileName: "picturthat",
  },
  {
    title: "Elvet Steakhouse",
    url: "https://elvetsteakhouse.co.uk/",
    fileName: "elvet",
  },
  {
    title: "Behgjet Pacolli",
    url: "https://www.behgjetpacolli.com/",
    fileName: "pacolli",
  },
  {
    title: "E14 Office",
    url: "https://e14office.co.uk/",
    fileName: "e14",
  },
  {
    title: "Numarketing",
    url: "https://numktg.com/",
    fileName: "numarketing",
  },
  {
    title: "Granite Consulting",
    url: "https://graniteconsulting.com/",
    fileName: "granite",
  },
  {
    title: "Venue 121",
    url: "https://venue121.com/",
    fileName: "venue",
  },
  {
    title: "Boss Consulting",
    url: "https://boss-consulting.co.uk/",
    fileName: "boss",
  },
  {
    title: "Webshark",
    url: "https://webshark.se/",
    fileName: "webshark",
  },
  {
    title: "Safetrafikskola",
    url: "https://safetrafikskola.se/",
    fileName: "safetraffic",
  },
  {
    title: "Shikho",
    url: "https://shikho.com/",
    fileName: "shikho",
  },
  {
    title: "Kerko",
    url: "https://kerko.com/",
    fileName: "kerko",
  },
  {
    title: "Grensekatalogen",
    url: "https://grensekatalogen.no/",
    fileName: "grensekatalogen",
  },
  {
    title: "Animoox",
    url: "https://animoox.com/",
    fileName: "animoox",
  },
  {
    title: "Unda",
    url: "https://unda.se/",
    fileName: "unda",
  },
];

const ProjectsHolder = () => {
  return (
    <div className="flex_container">
      {projects_obj.map((item) => (
        <Project key={item.title} title={item.title} url={item.url} fileName={item.fileName} />
      ))}
    </div>
  );
};

export default ProjectsHolder;
