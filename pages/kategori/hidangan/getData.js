import hidangan from "~/data/hidangan.json";
import { item } from "./[id].vue";

export const getData = () => {
    item.value = hidangan.filter((data) => data.id == useRoute().params.id);
};
