import { Suspense } from 'react';
import {
  AgentsView,
  AgentsViewError,
  AgentsViewLoading,
} from '@/modules/agents/ui/components/agents-view';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

const AgentsPage = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<AgentsViewLoading />}>
        <ErrorBoundary fallback={<AgentsViewError />}>
          <AgentsView />
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  );
};

export default AgentsPage;
