import axios from "axios";
import { gameDetailsURL } from "../api";

export const loadDetails = (id) => async (disptach) => {
  const detailData = await axios.get(gameDetailsURL(id));
  disptach({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
    },
  });
};
