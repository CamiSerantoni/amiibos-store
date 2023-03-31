
import { amiiboApi } from "../api/amiiboApi";
import { startLoadingAmiibos, setAmiibos } from "./amiiboSlice";

export const getAmiibos = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingAmiibos());

    const { data } = await amiiboApi.get(`amiibo/`);

    dispatch(setAmiibos({ amiibos: data.amiibo }));
  };
};
