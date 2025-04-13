import { Dispatch, SetStateAction } from "react";
import styles from "./HeaderSelectBar.module.scss";
import { Select } from "@/components/ui/select/Select";
type Props = {
    availableSortingTypes: { label: string; value: string }[];
    handleChangeFilter: (value: { value: string; label: string }) => void;
};
export const HeaderSelectBar = ({
    availableSortingTypes,
    handleChangeFilter,
}: Props) => {
    return (
        <div>
            <Select
                className={styles.select}
                placeholder="Услуги"
                onSelect={handleChangeFilter}
                items={availableSortingTypes}
            />
        </div>
    );
};
