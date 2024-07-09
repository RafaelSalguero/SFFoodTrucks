import { SearchSpan } from "../search-span";

interface Props {
  icon?: React.ReactNode;
  info?: React.ReactNode;
  title: string;
  search?: string;
}

export function InfoLabel({ icon, info, title, search }: Props) {
  if (!info) return null;
  return <SearchSpan title={title} search={search} text={`${icon} ${info}`} />;
}
