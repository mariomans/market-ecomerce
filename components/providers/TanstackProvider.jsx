'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PropTypes from 'prop-types';

const queryClient = new QueryClient();

const TanstackProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {children}
    </QueryClientProvider>
  );
};

export default TanstackProvider;

TanstackProvider.propTypes = {
  children: PropTypes.any,
};
