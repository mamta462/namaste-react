import { useEffect, useState } from "react";
import { MENU_URL } from "./constans";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId.id);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurentMenu;
