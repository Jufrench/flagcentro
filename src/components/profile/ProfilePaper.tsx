import { DEFAULT_THEME, Paper, PaperProps, useMantineColorScheme } from "@mantine/core";
import { ReactNode } from "react";

interface ProfilePaperProps extends PaperProps {
  children?: ReactNode;
  direction?: "horizontal" | "vertical";
  title?: string;
}

export default function ProfilePaper(props: ProfilePaperProps) {
  const { colorScheme } = useMantineColorScheme();
  const backgroundColor = colorScheme === "dark" ? "#000" : "#f6f6f6";
  const style = {
    outline: "1px solid #d6d6d6",
    backgroundColor,
    padding: DEFAULT_THEME.spacing.xs
  };

  return (
    <Paper style={style}>
      {!props.direction && <>{props.children}</>}
    </Paper>
  );
}