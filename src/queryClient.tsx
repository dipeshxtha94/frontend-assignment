import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
    mutations: {
      onError: (error) => {
        console.error('Mutation error:', error);
      },
    },
  },
});

export { queryClient, QueryClientProvider };
