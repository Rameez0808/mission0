import React from "react";
import CardItem from "./CardItem";

const Skills = [
  { name: "html5", type: "Frontend" },
  { name: "css3", type: "Frontend" },
  { name: "javascript", type: "Frontend" },
  { name: "jquery", type: "Library" },
  { name: "bootstrap", type: "Library" },
  { name: "es6", type: "Frontend" },
  { name: "github", type: "Platform" },
  { name: "react", type: "Library" },
  { name: "nodejs", type: "Backend" },
  { name: "material-ui", type: "Library" },
];

const Card = ({ searchSkill }) => {
  return (
    <div className="card-group flex flex-wrap gap-y-8 justify-between lg:px-32 px-16 w-full mt-20">
      {searchSkill
        ? Skills.map((skill, index) => {
            let lowerCaseSearchSkill = searchSkill.toLowerCase();
            let lowerCaseSkillType = skill.type.toLowerCase();
            let lowerCaseSkill = skill.name.toLowerCase();
            return (
              (lowerCaseSkill.includes(lowerCaseSearchSkill) ||
                lowerCaseSkillType.includes(lowerCaseSearchSkill)) && (
                <CardItem key={index} name={skill.name} type={skill.type} />
              )
            );
          })
        : Skills.map((skill, index) => {
            return <CardItem key={index} name={skill.name} type={skill.type} />;
          })}
    </div>
  );
};

export default Card;
