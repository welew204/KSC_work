import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharacterGroup.css";

export default function CharacterCardGroup({ characterObj }) {
  return (
    <section className='CharacterCardGroup'>
      <CharacterCard
        thumb={characterObj.frodo.thumb}
        fname={characterObj.frodo.fname}
        bio={characterObj.frodo.bio}
        birthYear={characterObj.frodo.birthYear}
        ringOfPower={characterObj.frodo.ringOfPower}
        title={characterObj.frodo.title}
      />
      <CharacterCard
        thumb={characterObj.arwen.thumb}
        fname={characterObj.arwen.fname}
        bio={characterObj.arwen.bio}
        birthYear={characterObj.arwen.birthYear}
        title={characterObj.arwen.title}
      />
      <CharacterCard
        thumb={characterObj.gandalf.thumb}
        fname={characterObj.gandalf.fname}
        bio={characterObj.gandalf.bio}
        birthYear={characterObj.gandalf.birthYear}
        ringOfPower={characterObj.gandalf.ringOfPower}
        title={characterObj.gandalf.title}
      />
      <CharacterCard
        thumb={characterObj.legolas.thumb}
        fname={characterObj.legolas.fname}
        bio={characterObj.legolas.bio}
        birthYear={characterObj.legolas.birthYear}
        title={characterObj.legolas.title}
      />
    </section>
  );
}
