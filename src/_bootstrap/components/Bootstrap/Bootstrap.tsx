import { FC, PropsWithChildren } from "react";

export type BootstrapProps = PropsWithChildren<{}>;

export const Bootstrap: FC<BootstrapProps> = ({ children }) => {
  return <>{children}</>;
};
