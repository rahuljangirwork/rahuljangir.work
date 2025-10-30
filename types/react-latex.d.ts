declare module "react-latex" {
    import type { ReactNode } from "react";

    export interface LatexProps {
        children?: ReactNode;
    }

    export default function Latex(props: LatexProps): JSX.Element;
}
