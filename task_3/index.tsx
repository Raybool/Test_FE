/**
 * You are implementing the "Chart Info" feature, which displays a small info popover with chart information.
 * The component receives a `sliceId` as a prop and should use it to retrieve the custom user's chart name.
 *
 * Requirements:
 * - Access the Redux store to retrieve the custom chart name (`sliceNameOverride`), located in the `dashboardLayout` state.
 * - Match the chart’s `sliceId` prop with the `meta.chartId` in each layout item to find the correct chart.
 * - If `sliceNameOverride` is undefined, fall back to the `sliceName` field.
 *
 * Task:
 * - Unravel the complex types in the Redux store and retrieve the `sliceNameOverride` field or `sliceName` as a fallback.
 * - Return a component that displays the retrieved name in an `<h1>` element.
 */

import React from "react";

type LayoutItem = {
  children: string[];
  parents: string[];
  type: ComponentType;
  id: string;
  meta: {
    chartId: number;
    defaultText?: string;
    height: number;
    placeholder?: string;
    sliceName: string;
    sliceNameOverride?: string;
    text?: string;
    uuid: string;
    width: number;
  };
};

type DashboardLayoutState = { present: DashboardLayout };

type DashboardLayout = { [key: string]: LayoutItem };

export type RootState = {
  datasources: DatasourcesState;
  sliceEntities: JsonObject;
  charts: ChartsState;
  dashboardLayout: DashboardLayoutState;
  dashboardFilters: {};
  dashboardState: DashboardState;
  dashboardInfo: DashboardInfo;
  dataMask: DataMaskStateWithId;
  impressionId: string;
  nativeFilters: NativeFiltersState;
  user: UserWithPermissionsAndRoles;
};

const SliceInfo = ({ sliceId }) => {
  const { dashboardData } = useSelector(
    ({ dashboardLayout }: RootState) => ({
      dashboardData: dashboardLayout.present,
    }),
    (left, right) => JSON.stringify(left) === JSON.stringify(right)
  );

  const currentChat = Object.values(dashboardData).find(
    (item) => item.meta.chartId === sliceId
  )?.meta;

  const customChartName =
    currentChat.sliceNameOverride || currentChat.sliceName;
  // your code

  return (
    <div>
      <h1>{customChartName}</h1>
    </div>
  );
};
