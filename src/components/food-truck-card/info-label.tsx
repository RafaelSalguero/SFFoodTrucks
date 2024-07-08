interface Props {
  icon?: React.ReactNode;
  info?: React.ReactNode;
  title: string;
}

export function InfoLabel({ icon, info, title }: Props) {
  if (!info) return null;
  return (
    <span title={title}>
      {icon} {info}
    </span>
  );
}
