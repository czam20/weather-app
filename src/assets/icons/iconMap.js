import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSmog } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";

export const ICON_MAP = new Map();

const addIconMap = (values, icon) =>
  values.forEach((value) => {
    ICON_MAP.set(value, icon);
  });

addIconMap([0, 1], faSun);
addIconMap([2], faCloudSun);
addIconMap([3], faCloud);
addIconMap([45, 48], faSmog);
addIconMap(
  [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
  faCloudShowersHeavy
);
addIconMap([71, 73, 75, 77, 85, 86], faSnowflake);
addIconMap([95, 96, 99], faCloudBolt);
