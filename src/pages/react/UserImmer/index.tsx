import { useState } from "react";
import { useImmer } from "use-immer";

export default function UserImmerPage() {
  const [person1, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });
  const [person2, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  const handleChangeRegular = () => {
    setPerson((item) => ({
      ...item,
      artwork: {
        ...item.artwork,
        city: "regular change",
      },
    }));
  };

  const handleChangeImmer = () => {
    updatePerson((draft) => {
      draft.artwork.city = "immer change";
    });
  };
  return (
    <div>
      {person1.artwork.city}
      <button onClick={handleChangeRegular}>常规change</button>
      {person2.artwork.city}
      <button onClick={handleChangeImmer}>use-immer change</button>
    </div>
  );
}
