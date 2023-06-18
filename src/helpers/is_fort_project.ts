import { getProjectPackageInfo } from "./get_project_package_info";

export const isFortProject = () => {
    const packageInfo = getProjectPackageInfo();
    return packageInfo && packageInfo.project && packageInfo.project.framework === "fortjs";
}