
import { getAmiiboApi } from "../api/amiiboApi";
import {
  setAmiiboError,
  setAmiibos,
  startLoadingAmiibos,
} from "./amiiboSlice";


export const fetchAmiibos = () => async (dispatch) => {
  dispatch(startLoadingAmiibos());

  try {
    const { data } = await getAmiiboApi.get("/amiibo");
    dispatch(setAmiibos({ amiibos: data.amiibo }));
  } catch (err) {
    const message = err?.message || "No se pudo cargar la lista de amiibos.";
    dispatch(setAmiiboError(message));
  }
};
