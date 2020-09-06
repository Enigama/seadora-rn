import flags from "../assets/icons/flags";
import bg from "./bg.jpg";

export const getFreshCatches = () => {
  return [
    {
      id: new Date().getTime(),
      location: {
        icon: flags.ru,
        name: "Россия",
        coordiantes: [
          {
            latitude: 50.5128729,
            longitude: 30.4755532,
          },
        ],
      },
      name: "Свежий улов голландских устриц",
      catchPlaceName: "Атлантический океан",
      finishDate: null,
      finishDate: "1600999453 ",
      deliveryDate: "12 сентября",
      freshCatchePicture: bg,
    },
    {
      id: new Date().getTime(),
      location: {
        icon: flags.ua,
        name: "Украина",
        coordiantes: [
          {
            latitude: 50.5128729,
            longitude: 30.4755532,
          },
        ],
      },
      name: "Свежий улов голландских устриц 2ee",
      catchPlaceName: "Атлантический океан",
      finishDate: null,
      finishDate: "1600999453 ",
      deliveryDate: "12 сентября",
      freshCatchePicture: bg,
    },
  ];
};
