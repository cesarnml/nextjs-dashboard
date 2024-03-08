import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default async function DashboardPage({ children }: Props) {
  return <div>DashboardPage</div>;
}
