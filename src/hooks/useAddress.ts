import { API_URL } from "@/types/common";
import { useDebouncedValue } from "@mantine/hooks";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useAddress = (address: string | undefined) => {
  const [addressSearch, setAddressSearch] = useState([]);
  const [isChooseAddress, setIsChooseAddress] = useState(false);

  const [debounce] = useDebouncedValue(address, 500);

  const fetchAddress = useCallback(async () => {
    try {
      try {
        const response = await axios.get(
          `${API_URL}/api/v1/metadata/${debounce}`
        );
        if (response) {
          if (!response?.data?.predictions) {
            setAddressSearch([]);
            setIsChooseAddress(false);
            return;
          }

          setAddressSearch(response?.data?.predictions);
          if (response?.data?.predictions?.length > 2) {
            setIsChooseAddress(false);
          }
        }
      } catch (error) {
        return null;
      }
    } catch (error) {}
  }, [debounce]);

  useEffect(() => {
    fetchAddress();
  }, [fetchAddress]);
  return {
    addressSearch,
    setIsChooseAddress,
    isChooseAddress,
  };
};
